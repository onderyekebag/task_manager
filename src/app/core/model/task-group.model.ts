export interface TaskGroupModel {
  id: number;
  groupName: string;
  assignTaskNumber: number;
  taskCount?: number;
}

export interface TaskModel {
  id: number;
  title: string;
  description: string;
  createDate: string;
  taskGroup: number;
  status: boolean;
}
