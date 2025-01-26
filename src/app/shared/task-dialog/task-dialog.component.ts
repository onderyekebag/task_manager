import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StaticStore} from '../../core/core.module';
import {TaskActions} from '../../core/state/action/task.actions';
import {take} from 'rxjs';

@Component({
  selector: 'app-task-dialog',
  standalone: false,

  templateUrl: './task-dialog.component.html',
  styleUrl: './task-dialog.component.scss'
})
export class TaskDialogComponent implements OnInit {

  newTaskForm!: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private fb: FormBuilder,
              private dialogRef: MatDialogRef<TaskDialogComponent>) {}

  ngOnInit() {
    this.newTaskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      createDate: [new Date().toLocaleString()],
      taskGroupId: [this.data.id],
      status: [false]
    });
  }

  onCreateNewTask() {
    const form = this.newTaskForm.value;
    StaticStore.dispatch(new TaskActions.NewTask(form)).pipe(
      take(1)
    ).subscribe(()=> {
      this.newTaskForm.reset();
      this.dialogRef.close();
      location.reload();
    });
  }

}
