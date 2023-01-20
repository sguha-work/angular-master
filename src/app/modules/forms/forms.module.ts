import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatedrivenformComponent } from './components/templatedrivenform/templatedrivenform.component';
import { ReactiveformComponent } from './components/reactiveform/reactiveform.component';



@NgModule({
  declarations: [
    TemplatedrivenformComponent,
    ReactiveformComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FormsModule { }
