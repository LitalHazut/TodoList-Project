import React from 'react';
import { useTodosContext } from '../context/todoContext';

const UpdateForm: React.FC<{}> = () => {
  return (
    <>
      <div className='row'>
        <ChangeTask />
        <div className='col-auto'>
          <UpdateTask />
          <CancelUpdate />
        </div>
      </div>
      <br />
    </>
  );
};

const ChangeTask: React.FC<{}> = ({}) => {
  const { changeTask, updateData } = useTodosContext();
  return (
    <div className='col'>
      <input
        value={updateData! && updateData.name}
        onChange={(e) => changeTask(e)}
        className='form-control from-control-lg'
      />
    </div>
  );
};

const UpdateTask: React.FC<{}> = ({}) => {
  const { updateTask, updateData } = useTodosContext();
  return (
    <button
      onClick={() => updateTask(updateData!)}
      className='btn btn-lg btn-success mr-20 '
    >
      Update
    </button>
  );
};

const CancelUpdate: React.FC<{}> = ({}) => {
  const { updateTask, updateData } = useTodosContext();
  return (
    <button
      onClick={() => updateTask(updateData!)}
      className='btn btn-lg btn-success mr-20 '
    >
      Update
    </button>
  );
};

export default UpdateForm;
