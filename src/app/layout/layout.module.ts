import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './component/topbar/topbar.component';
import { MainComponent } from './component/main/main.component';



@NgModule({
  declarations: [
    TopbarComponent,
    MainComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
