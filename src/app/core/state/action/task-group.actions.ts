export namespace TaskGroupActions {
  export class GetTaskGroups {
    static readonly type = '[TASK-GROUP] GET TASK GROUPS'
  }

  export class NewTaskGroups {
    static readonly type = '[TASK-GROUP] NEW TASK GROUPS';

    constructor(public taskGroupName: string) {
    }
  }

  export class DeleteTaskGroups {
    static readonly type = '[TASK-GROUP] DELETE TASK GROUPS';

    constructor(public taskGroupId: number) {
    }
  }

  export class UpdateTaskGroups {
    static readonly type = '[TASK-GROUP] NEW TASK GROUPS';

    constructor(public taskGroupId: number, newTaskGroupName: string) {
    }
  }
}
