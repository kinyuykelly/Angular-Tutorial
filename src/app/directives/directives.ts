import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-directives',
  styleUrl: './directives.scss',
  templateUrl: './directives.html',
})
export class Directives {
  isChecked: boolean = false;
  isInputBox: boolean = true;
  input1:string = " ";
  input2:string = " ";

  onClick(){
  this.isChecked = !this.isChecked;
  }
  showField(){
this.isInputBox = true;
  }
  hideField(){
    this.isInputBox = false;
  }
}
