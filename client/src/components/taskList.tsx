import { TodoContextProvider } from '../context/todoContext';
import { ITask, TodoContextType } from '../types';
import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck,
  faPen,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import { TodoContext } from '../context/todoContext';

type Props = {
  toDo: ITask[];
  markDone: (task: ITask) => void;
  deleteTask: (id: number) => void;
  setUpdateData: (t: ITask) => void;
};

const TaskList: React.FC<Props> = ({
  toDo,
  markDone,
  deleteTask,
  setUpdateData,
}) => {
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
                      onClick={() => markDone(task)}
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

export default TaskList;
