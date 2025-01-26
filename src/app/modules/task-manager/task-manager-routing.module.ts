import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {TaskManagerComponent} from './task-manager/task-manager.component';
import {StaticStore} from '../../core/core.module';
import {TaskGroupActions} from '../../core/state/action/task-group.actions';
import {TaskActions} from '../../core/state/action/task.actions';


const routes: Routes = [
  {
    path: '',
    component: TaskManagerComponent,
    resolve: [
      ()=> StaticStore.dispatch([new TaskGroupActions.GetTaskGroups(), new TaskActions.GetTasks()])
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class TaskManagerRoutingModule {}
