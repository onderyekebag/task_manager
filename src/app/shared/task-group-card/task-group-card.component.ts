import {Component, Input} from '@angular/core';
import {GroupByTask, TaskModel} from '../../core/model/task-group.model';
import {MatDialog} from '@angular/material/dialog';
import {TaskDialogComponent} from '../task-dialog/task-dialog.component';

@Component({
  selector: 'app-task-group-card',
  standalone: false,

  templateUrl: './task-group-card.component.html',
  styleUrl: './task-group-card.component.scss'
})
export class TaskGroupCardComponent {

  @Input()
  taskGroup!: GroupByTask;

  constructor(public dialog: MatDialog) {}

  showTaskDialog(id?: string) {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '1000px',
      height: '500px',
      data: { id, isDetail: false, isNewTask: true },
    });

  }
}
