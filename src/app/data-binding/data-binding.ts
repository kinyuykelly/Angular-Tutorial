import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-data-binding',
  styleUrl: './data-binding.scss',
  templateUrl: './data-binding.html',
})
export class DataBinding {
  name: string = 'Kelly';
  stack: string = 'Angular Developer';
  image: string = 'images/profile.jfif';
  random = " ";

  onSubmit() {
    alert('data submitted successfully!!!');
  }
  onChange() {
    alert('Country has changed');
  }
}
