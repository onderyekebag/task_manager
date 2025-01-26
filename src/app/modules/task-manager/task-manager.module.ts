import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import {TaskManagerRoutingModule} from './task-manager-routing.module';
import {SharedModule} from '../../shared/shared.module';



@NgModule({
  declarations: [
    TaskManagerComponent
  ],
  imports: [
    CommonModule,
    TaskManagerRoutingModule,
    SharedModule
  ]
})
export class TaskManagerModule { }
