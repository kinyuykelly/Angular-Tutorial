import { Component, effect, signal, WritableSignal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-signals',
  styleUrl: './signals.scss',
  templateUrl: './signals.html',
})
export class Signals {

counter  = signal(0);
// counter: WritableSignal<number> = signal(0);
constructor(){
  this.counter.set(3);
  effect(()=>{
    console.log("The counter value is :"+  this.counter);
  })
}

updateCounter(){
  this.counter.update(num => num + 1);
}
}
