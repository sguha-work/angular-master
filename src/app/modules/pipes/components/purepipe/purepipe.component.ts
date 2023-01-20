import { Component } from '@angular/core';
@Component({
  selector: 'app-purepipe',
  templateUrl: './purepipe.component.html',
  styleUrls: ['./purepipe.component.scss']
})
export class PurepipeComponent {
  public sizeInBytes: number;
  constructor() {
    this.sizeInBytes = 1;
  }
}
