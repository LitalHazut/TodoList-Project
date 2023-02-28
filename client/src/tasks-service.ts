import axios from 'axios';
import { ITask } from './types';

export const fetchTasks = () => axios.get('/api/get');

export const createTask = (task: ITask) => axios.post('/api/post', task);

export const deleteTaskFromDb = (id: number) =>
  axios
    .delete(`/api/delete/${id}`)
    .then((response) => {
      console.log('Task deleted:', response.data);
    })
    .catch((error) => {
      console.error('Error deleted task:', error);
    });

export const updateTaskOnDb = (task: ITask) =>
  axios
    .put(`/api/put/${task.id}`, {
      name: task.name,
      isCompleted: task.isCompleted,
    })
    .then((response) => {
      console.log('Task updated:', response.data.tasks);
    })
    .catch((error) => {
      console.error('Error updated task:', error);
    });
