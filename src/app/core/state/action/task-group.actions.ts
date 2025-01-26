import {TaskGroupModel} from '../../model/task-group.model';

export namespace TaskGroupActions {
  export class GetTaskGroups {
    static readonly type = '[TASK-GROUP] GET TASK GROUPS'
  }

  export class NewTaskGroups {
    static readonly type = '[TASK-GROUP] NEW TASK GROUP';

    constructor(public taskGroupName: string) {
    }
  }

  export class DeleteTaskGroups {
    static readonly type = '[TASK-GROUP] DELETE TASK GROUP';

    constructor(public taskGroupId: number) {
    }
  }

  export class UpdateTaskGroup {
    static readonly type = '[TASK-GROUP] UPDATE TASK GROUP';

    constructor(public taskGroup: TaskGroupModel) {
    }
  }
}
