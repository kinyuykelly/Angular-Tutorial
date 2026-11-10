import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { of } from 'rxjs';
import { CustomPipe } from '../custom-pipe';
import { CustomDatePipe } from '../custom-date-pipe';
import { PurePipe } from '../pure-pipe';
import { ImpurePipe } from '../impure-pipe';

@Component({
  imports: [CommonModule, CustomPipe, CustomDatePipe, PurePipe, ImpurePipe],
  selector: 'app-built-in-pipes',
  styleUrl: './built-in-pipes.scss',
  templateUrl: './built-in-pipes.html',
})
export class BuiltInPipes {
  angularPipes: string = 'Use pipes to format data in angular templates';
  personData = {
    name: 'kelly',
    age: 2,
    phone: 927862562,
  };
  currentDate: Date = new Date();

  items = of(["apple", "banana", "mango"]);

mobileNo: any = 9080840782;
}
