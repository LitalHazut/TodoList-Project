import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck,
  faPen,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import { useTodosContext } from '../context/todoContext';
import { ITask } from '../types';


const TaskList: React.FC<{}> = () => {
  const { tasks } =
  useTodosContext();
  return (
    <>
      {tasks &&
        tasks
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((task, index) => {
            <h4 key={index}></h4>;
            return (
              <React.Fragment key={task.id}>
                <div className='col taskBg'>
                  <TaskView task={task} index={index}/>
                  <div className='iconWrap'>
                   <MarkTask task={task} />
                   <EditTask task={task}/>
                   <DeleteTask task={task} />
                  </div>
                </div>
              </React.Fragment>
            );
          })}
    </>
  );
};


const TaskView: React.FC<{
  task: ITask;
  index:number;
  }>=({task,index}) =>{
    return(
    <div className={task.isCompleted ? 'done' : ''}>
    <span className='taskNumber'>{index + 1}</span>
    <span className='taskText'>{task.name}</span>
  </div>
);
};

const MarkTask: React.FC<{
task: ITask
}>=({task}) =>{
  const { markDone } = useTodosContext();
  return(
<span title='Completed / Not Completed'
onClick={() => markDone(task)}>
  <FontAwesomeIcon icon={faCircleCheck} 
  />
 </span> 
);
};

const EditTask: React.FC<{
  task: ITask;
}>=({task})=>{
const { setUpdateData } = useTodosContext();
return(
  <>
  {task.isCompleted ? null : (
    <span
      title='Edit'
      onClick={() =>
        setUpdateData({
          id: task.id,
          name: task.name,
          isCompleted: task.isCompleted ? true : false,
        })
      }
    >
      <FontAwesomeIcon icon={faPen} />
    </span>
  )}
  </>
);
};

const DeleteTask: React.FC<{
  task: ITask
  }>=({task}) =>{
    const { deleteTask } = useTodosContext();
    return(
      <span title='Delete' onClick={() => deleteTask(task.id)}>
      <FontAwesomeIcon icon={faTrashCan} />
      </span>  
  );
  };


export default TaskList;
