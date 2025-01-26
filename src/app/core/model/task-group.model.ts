export interface TaskGroupModel {
  id?: string;
  groupName?: string;
  assignTaskNumber?: number;
}

export interface TaskModel {
  id?: number;
  title: string;
  description: string;
  createDate: string;
  taskGroupId: string;
  status: boolean;
}

export interface GroupByTask extends TaskGroupModel{
  tasks: TaskModel[];
}
