import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-purepipe',
  templateUrl: './purepipe.component.html',
  styleUrls: ['./purepipe.component.scss']
})
export class PurepipeComponent implements OnInit {
  public sizeInBytes: number;
  public testTimerValue: number;
  constructor() {
    this.sizeInBytes = 1;
    this.testTimerValue = 0;
  }
  ngOnInit(): void {
    window.setInterval(()=>{
      this.testTimerValue += 1;
    },1000);
  }
}
