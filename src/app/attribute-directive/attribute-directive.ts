import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-structural-directive',
  styleUrl: './attribute-directive.scss',
  templateUrl: './attribute-directive.html',
})
export class AttributeDirective {
  textColor: string = '';
  isTextGreen:boolean = false;
  ngStyleColor: string = "orange";
  isTextOrange: boolean = false;

  customClass : any = {
    'color': 'pink',
    'height': '150px',
    'border': '1px solid'
  }

  changeColor(color: string){
    this.textColor = color
  }
 
  userClass: string = " ";

  updateColor(style: string){
this.ngStyleColor = style;
  }
}
