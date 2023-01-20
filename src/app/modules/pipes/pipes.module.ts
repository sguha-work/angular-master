import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurepipeComponent } from './components/purepipe/purepipe.component';
import { ImpurepipeComponent } from './components/impurepipe/impurepipe.component';



@NgModule({
  declarations: [
    PurepipeComponent,
    ImpurepipeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
