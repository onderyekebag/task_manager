import {TaskModel} from '../../model/task-group.model';

export namespace TaskActions {
  export class GetTasks {
    static readonly type = '[TASK] GET TASKS'
  }

  export class NewTask {
    static readonly type = '[TASK] NEW TASK';

    constructor(public task: TaskModel) {
    }
  }

  export class DeleteTask {
    static readonly type = '[TASK] DELETE TASK';

    constructor(public taskId: string) {
    }
  }

  export class UpdateTaskGroups {
    static readonly type = '[TASK] UPDATE TASK';

    constructor(public taskGroupId: number, public task: TaskModel) {
    }
  }
}
