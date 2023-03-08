import axios from 'axios';
import { ITask } from './types';

export const fetchTasks = () => axios.get('/api/get');

export async function createTask(task: ITask) {
  const response = await axios.post('/api/post', task);
}

export async function deleteTaskFromDb(id: number) {
  try {
    const response = await axios.delete(`/api/delete/${id}`);
  } catch (error) {
    console.error('Error deleted task:', error);
  }
}

export async function updateTaskOnDb(task: ITask) {
  try {
    const response = axios.put(`/api/put/${task.id}`, {
      name: task.name,
      isCompleted: task.isCompleted,
    });
  } catch (error) {
    console.error('Error updated task:', error);
  }
}
