import {Component, OnInit} from '@angular/core';
import {TaskGroupState} from '../../../core/state/task-group.state';
import {GroupByTask, TaskGroupModel, TaskModel} from '../../../core/model/task-group.model';
import {StaticStore} from '../../../core/core.module';
import {TaskState} from '../../../core/state/task.state';
import {CdkDragDrop} from '@angular/cdk/drag-drop';
import {TaskGroupActions} from '../../../core/state/action/task-group.actions';
import {Select} from '@ngxs/store';

@Component({
  selector: 'app-task-manager',
  standalone: false,
  templateUrl: './task-manager.component.html',
  styleUrl: './task-manager.component.scss'
})
export class TaskManagerComponent implements OnInit {

  groupByTask: GroupByTask[] = [];
  taskGroups: TaskGroupModel[] = [];
  tasks: TaskModel[] = [];

  ngOnInit() {
    this.groupTasksByGroup();
  }

  groupTasksByGroup() {
    this.taskGroups = StaticStore.selectSnapshot(TaskGroupState.taskGroups);
    this.tasks = StaticStore.selectSnapshot(TaskState.tasks);

    this.groupByTask = this.taskGroups.map(group => ({
      ...group,
      tasks: this.tasks.filter(task => task.taskGroupId === group.id)
    }));

    this.groupByTask.sort((a, b) => Number(a.assignTaskNumber) - Number(b.assignTaskNumber));
  }

  onDrop(event: CdkDragDrop<GroupByTask[]>) {
    const previousIndex = this.groupByTask.findIndex(
      (group) => group === event.item.data
    );

    const currentIndex = event.container.data.findIndex(
      (group) => group === event.item.data
    );

    if (previousIndex === -1 || currentIndex === -1) {
      console.error('Invalid index values', {
        previousIndex,
        currentIndex,
        item: event.item.data,
      });
      return;
    }

    const movedItem = this.groupByTask[previousIndex];

    const updatedGroupByTask = [...this.groupByTask];

    updatedGroupByTask.splice(previousIndex, 1);
    updatedGroupByTask.splice(currentIndex, 0, movedItem);

    updatedGroupByTask.forEach((group, index) => {
      group.assignTaskNumber = index + 1;
    });

    this.groupByTask = updatedGroupByTask;

    // updatedGroupByTask.forEach(group => {
    //   StaticStore.dispatch(new TaskGroupActions.UpdateTaskGroup(group));
    // });

    console.log(event);

  }
}
