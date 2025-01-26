import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxsModule, Store} from '@ngxs/store';
import {TaskGroupState} from './state/task-group.state';
import {TaskState} from './state/task.state';

export let StaticStore: Store;

const GLOBAL_STATES = [
  TaskGroupState,
  TaskState
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxsModule.forRoot(GLOBAL_STATES)
  ]
})
export class CoreModule {
  constructor(private store: Store) {
    StaticStore = this.store;
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: []
    };
  }

}
