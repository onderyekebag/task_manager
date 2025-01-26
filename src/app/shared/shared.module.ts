import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskGroupCardComponent } from './task-group-card/task-group-card.component';
import { TaskCardComponent } from './task-card/task-card.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ReactiveFormsModule} from '@angular/forms';

const COMPONENTS = [
  TaskGroupCardComponent,
  TaskCardComponent,
  TaskDialogComponent
];

const NG_MATERIAL_MODULES = [
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule
];

@NgModule({
  declarations: [
    COMPONENTS,
  ],
  imports: [
    CommonModule,
    DragDropModule,
    NG_MATERIAL_MODULES,
    ReactiveFormsModule
  ],
  exports: [
    COMPONENTS,
    DragDropModule,
    NG_MATERIAL_MODULES
  ]
})
export class SharedModule { }
