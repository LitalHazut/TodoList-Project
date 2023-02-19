import React from 'react';
import { ITask } from '../types';

type Props = {
  updateData: ITask;
  changeTask: (e: React.ChangeEvent<HTMLInputElement>) => void;
  updateTask: (id: number) => void;
  cancelUpdate: (s: string) => void;
};

const UpdateForm: React.FC<Props> = ({
  updateData,
  changeTask,
  updateTask,
  cancelUpdate,
}) => {
  return (
    <>
      <div className='row'>
        <div className='col'>
          <input
            value={updateData && updateData.name}
            onChange={(e) => changeTask(e)}
            className='form-control from-control-lg'
          />
        </div>
        <div className='col-auto'>
          <button
            onClick={() => updateTask(updateData.id)}
            className='btn btn-lg btn-success mr-20 '
          >
            Update
          </button>
          <button
            onClick={(e) => cancelUpdate(updateData && updateData.name)}
            className='btn btn-lg btn-warning'
          >
            Cancel
          </button>
        </div>
      </div>
      <br />
    </>
  );
};
export default UpdateForm;
