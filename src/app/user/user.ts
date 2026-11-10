import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { After } from 'node:v8';

@Component({
  imports: [],
  selector: 'app-user',
  styleUrl: './user.scss',
  templateUrl: './user.html',
})
export class User
  implements
    OnChanges,
    OnInit,
    AfterViewInit,
    AfterContentChecked,
    AfterContentInit,
    DoCheck,
    OnDestroy,
    AfterViewChecked
{
  constructor(private router: Router) {
    console.log('contructor called.');
  }
  //used for component input property
  ngOnChanges(changes: SimpleChanges): void {
    console.log('1: ngOnchanges hook.');
  }

  //use this hook for API call
  ngOnInit(): void {
    console.log('2: ngOnInit called.');
  }
   
  //udse for everychange detection
  ngDoCheck(): void {
    console.log('3: ngCheck called.');
  }

  //use for content
  ngAfterContentInit(): void {
   console.log('3: ngOnInit called.');
  }

  ngAfterContentChecked(): void {
    console.log('5: ngAfterContentChecked called.');
  }
//use for view

ngAfterViewInit(): void {
   console.log('6: ngAfterViewInit called.');
}
ngAfterViewChecked(): void {
  
      console.log('7: ngAfterViewChecked called.');
  
}
ngOnDestroy(): void {
  console.log("8: ngOnDestry called.")
}
  goToNextPage() {
    // //user verification logic
    // this.router.navigateByUrl('attribute-directive');
    this.router.navigate(['attribute-directive']);
  }
}
