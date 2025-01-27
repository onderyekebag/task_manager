export interface TaskGroupModel {
  id?: string;
  groupName?: string;
  assignTaskNumber?: number;
  icon?: string;
}

export interface TaskModel {
  id?: string;
  title: string;
  description: string;
  createDate: string;
  taskGroupId: string;
  status: boolean;
}

export interface GroupByTask extends TaskGroupModel{
  tasks: TaskModel[];
}
