import React from 'react';
import { useTodosContext } from '../context/todoContext';

const UpdateForm: React.FC<{}> = () => {
  const { updateData, changeTask, updateTask, cancelUpdate } =
    useTodosContext();
  return (
    <>
      <div className='row'>
        <div className='col'>
          <input
            value={updateData! && updateData.name}
            onChange={(e) => changeTask(e)}
            className='form-control from-control-lg'
          />
        </div>
        <div className='col-auto'>
          <button
            onClick={() => updateTask(updateData!)}
            className='btn btn-lg btn-success mr-20 '
          >
            Update
          </button>
          <button
            onClick={(e) => cancelUpdate(updateData! && updateData.name)}
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
