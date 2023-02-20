export interface ITask {
  id: number;
  name: string;
  isCompleted: boolean;
}
export type TodoContextType = {
  toDo: ITask[];
  //TaskList
  markDone: (id: number) => void;
  deleteTask: (id: number) => void;
  setUpdateData: (t: ITask) => void;

  //AddTaskForm
  addTask: (t: Omit<ITask, 'id'>) => void;
  newTask: string;
  setNewTask: (s: string) => void;

  // UpdateForm
  updateData: ITask | null;
  changeTask: (e: React.ChangeEvent<HTMLInputElement>) => void;
  updateTask: (id: number) => void;
  cancelUpdate: (s: string) => void;
};
