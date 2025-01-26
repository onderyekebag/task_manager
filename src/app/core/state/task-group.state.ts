import {TaskGroupModel} from "../model/task-group.model";
import {Injectable} from "@angular/core";
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {TaskGroupService} from "../service/task-group.service";
import {TaskGroupActions} from "./action/task-group.actions";
import {tap} from "rxjs";

export interface TaskManagerStateModel {
  taskGroups: TaskGroupModel[];
}

@Injectable()
@State<TaskManagerStateModel>({
  name: 'TaskGroupState',
  defaults: {
    taskGroups: []
  },
})

export class TaskGroupState {

  @Selector()
  public static getState(state: TaskManagerStateModel): TaskManagerStateModel {
    return state;
  }

  @Selector()
  public static taskGroups({taskGroups}: TaskManagerStateModel) {
    return taskGroups;
  }

  constructor(private service: TaskGroupService) {
  }


  @Action(TaskGroupActions.GetTaskGroups)
  getTaskGroups({patchState}: StateContext<TaskManagerStateModel>) {
    return this.service.getGroups().pipe(
      tap(taskGroups => {
        patchState({taskGroups});
      })
    )
  }

}
