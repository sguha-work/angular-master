import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurepipeComponent } from './components/purepipe/purepipe.component';
import { ImpurepipeComponent } from './components/impurepipe/impurepipe.component';
import { PipeshomeComponent } from './components/pipeshome/pipeshome.component';
import { PipesRoutingModule } from './pipes-routing.module';



@NgModule({
  declarations: [
    PurepipeComponent,
    ImpurepipeComponent,
    PipeshomeComponent
  ],
  imports: [
    CommonModule,
    PipesRoutingModule
  ]
})
export class PipesModule { }
