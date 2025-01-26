import {TaskGroupModel} from "../model/task-group.model";
import {Injectable} from "@angular/core";
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {TaskGroupService} from "../service/task-group.service";
import {TaskGroupActions} from "./action/task-group.actions";
import {tap} from "rxjs";

export interface TaskGroupStateModel {
  taskGroups: TaskGroupModel[];
}

@Injectable()
@State<TaskGroupStateModel>({
  name: 'TaskGroupState',
  defaults: {
    taskGroups: []
  },
})

export class TaskGroupState {

  @Selector()
  public static getState(state: TaskGroupStateModel): TaskGroupStateModel {
    return state;
  }

  @Selector()
  public static taskGroups({taskGroups}: TaskGroupStateModel): TaskGroupModel[] {
    return taskGroups;
  }

  constructor(private service: TaskGroupService) {
  }

  @Action(TaskGroupActions.GetTaskGroups)
  getTaskGroups({patchState}: StateContext<TaskGroupStateModel>) {
    return this.service.getGroups().pipe(
      tap(taskGroups => {
        patchState({taskGroups});
      })
    )
  }

  @Action(TaskGroupActions.UpdateTaskGroup)
  updateTaskGroups({patchState}: StateContext<TaskGroupStateModel>, {taskGroup}: TaskGroupActions.UpdateTaskGroup) {
    return this.service.updateGroup(taskGroup).pipe(
      tap(taskGroups => {

      })
    )
  }

}
