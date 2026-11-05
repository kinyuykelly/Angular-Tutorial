import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-directive-ngswitch-vs-switch',
  styleUrl: './directive-ngswitch-vs-switch.scss',
  templateUrl: './directive-ngswitch-vs-switch.html',
})
export class DirectiveNgswitchVsSwitch {
  grade: number = 0;

  set(x:number){
this.grade = x;
  }
}
