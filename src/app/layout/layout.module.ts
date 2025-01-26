import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './component/topbar/topbar.component';
import { MainComponent } from './component/main/main.component';
import {RouterLink, RouterOutlet} from '@angular/router';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [
    TopbarComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    SharedModule,
    RouterLink
  ]
})
export class LayoutModule {
  static forRoot(): ModuleWithProviders<LayoutModule> {
    return {
      ngModule: LayoutModule
    };
  }
}
