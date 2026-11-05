import { Component, computed, linkedSignal, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-linked-signals',
  styleUrl: './linked-signals.scss',
  templateUrl: './linked-signals.html',
})
export class LinkedSignals {
  quantitySignal = signal(1);
  price = 10;
  // total = computed(()=>{
  //   return this.quantitySignal() * this.price
  // })
  //shorthand syntax
  //  total = linkedSignal(()=>{
  //   return this.quantitySignal() * this.price
  // })
  //Source and computation
  total = linkedSignal({
    source: this.quantitySignal,
    computation: () => this.quantitySignal() * this.price,
  });

  calculate() {
    this.quantitySignal.set(9);
  }
}
