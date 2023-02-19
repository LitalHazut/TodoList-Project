import React from 'react';
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck,
  faPen,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import { ITask } from '../types';
import { TodoContext } from '../context/todoContext';

const ToDo: React.FC<{
  toDo: ITask[];
  markDone: (id: number) => void;
  setUpdateData: (t: ITask) => void;
  deleteTask: (id: number) => void;
}> = ({ toDo, markDone, setUpdateData, deleteTask }) => {
  // const { activeTasks } = useContext(TodoContext);
  return (
    <>
      {toDo &&
        toDo
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((task, index) => {
            <h4 key={index}></h4>;
            return (
              <React.Fragment key={task.id}>
                <div className='col taskBg'>
                  <div className={task.isCompleted ? 'done' : ''}>
                    <span className='taskNumber'>{index + 1}</span>
                    <span className='taskText'>{task.name}</span>
                  </div>
                  <div className='iconWrap'>
                    <span
                      title='Completed / Not Completed'
                      onClick={(e) => markDone(task.id)}
                    >
                      <FontAwesomeIcon icon={faCircleCheck} />
                    </span>
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
                    <span title='Delete' onClick={() => deleteTask(task.id)}>
                      <FontAwesomeIcon icon={faTrashCan} />
                    </span>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
    </>
  );
};
export default ToDo;
