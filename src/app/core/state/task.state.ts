import {TaskGroupModel, TaskModel} from '../model/task-group.model';
import {Injectable} from '@angular/core';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {TasksService} from '../service/tasks.service';
import {TaskGroupStateModel} from './task-group.state';
import {TaskActions} from './action/task.actions';
import {tap} from 'rxjs';


export interface TaskStateModel {
  tasks: TaskModel[];
}

@Injectable()
@State<TaskStateModel>({
  name: 'TaskState',
  defaults: {
    tasks: []
  },
})

export class TaskState {

  @Selector()
  public static getState(state: TaskStateModel): TaskStateModel {
    return state;
  }

  @Selector()
  public static tasks({tasks}: TaskStateModel): TaskModel[] {
    return tasks;
  }

  constructor(private service: TasksService) {
  }


  @Action(TaskActions.GetTasks)
  getTasks({patchState}: StateContext<TaskStateModel>) {
    return this.service.getTasks().pipe(
      tap(tasks => {
        patchState({tasks});
      })
    )
  }


  @Action(TaskActions.NewTask)
  newTask({patchState, getState, dispatch}: StateContext<TaskStateModel>, {task}: TaskActions.NewTask) {
    return this.service.createNewTask(task).pipe(
      tap((createdTask) => {
        let {tasks} = getState();
        tasks = [...tasks, createdTask]

        patchState({tasks});
        dispatch(new TaskActions.GetTasks());
      })
    )
  }

  @Action(TaskActions.DeleteTask)
  deleteTask({patchState}: StateContext<TaskStateModel>, {taskId}: TaskActions.DeleteTask) {
    return this.service.deleteTask(taskId).pipe(
      tap(() => {
        console.log('deleted');
      })
    )
  }

  @Action(TaskActions.UpdateTaskGroup)
  updateTask({patchState, getState}: StateContext<TaskStateModel>, {task}: TaskActions.UpdateTaskGroup) {
    return this.service.updateTask(task).pipe(
      tap((updatedTask) => {
        const state = getState();
        const updatedTasks = state.tasks.map(t =>
          t.id === updatedTask.id ? updatedTask : t
        );

        patchState({
          tasks: updatedTasks
        });
      })
    )
  }



}
