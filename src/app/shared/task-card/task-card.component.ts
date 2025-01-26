import {Component, Input, OnInit} from '@angular/core';
import {TaskGroupModel, TaskModel} from '../../core/model/task-group.model';
import {StaticStore} from '../../core/core.module';
import {TaskActions} from '../../core/state/action/task.actions';
import {take} from 'rxjs';
import {TaskGroupState} from '../../core/state/task-group.state';

@Component({
  selector: 'app-task-card',
  standalone: false,

  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss'
})
export class TaskCardComponent implements OnInit {

  @Input()
  task!: TaskModel;

  taskGroups: TaskGroupModel[] = [];

  ngOnInit() {
    this.currentGroup();
  }

  onDeleteTask(id: any) {
    StaticStore.dispatch(new TaskActions.DeleteTask(id)).pipe(
      take(1)
    ).subscribe(()=> {
      location.reload();
    })
  }

  onMoveGroup(id?: string) {
    console.log('Moved : ', id)
  }

  currentGroup() {
    const taskGroupAll = StaticStore.selectSnapshot(TaskGroupState.taskGroups);
    this.taskGroups = taskGroupAll.filter(taskGroup => taskGroup.id !== this.task.taskGroupId)
  }

}
