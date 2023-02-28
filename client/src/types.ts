export interface ITask {
  id: number;
  name: string;
  isCompleted: boolean;
}
export type TodoContextType = {
  tasks: ITask[];
  //TaskList
  markDone: (task: ITask) => void;
  deleteTask: (id: number) => void;
  setUpdateData: (t: ITask) => void;

  //AddTaskForm
  addTask: (taskName: string) => void;

  // UpdateForm
  updateData: ITask | null;
  changeTask: (e: React.ChangeEvent<HTMLInputElement>) => void;
  updateTask: (task: ITask) => void;
  cancelUpdate: (s: string) => void;
};
