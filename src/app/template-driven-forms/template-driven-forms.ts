import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../user';
import { CommonModule } from '@angular/common';
import { email } from '@angular/forms/signals';

@Component({
  imports: [FormsModule, CommonModule],
  selector: 'app-template-driven-forms',
  styleUrl: './template-driven-forms.scss',
  templateUrl: './template-driven-forms.html',
})
export class TemplateDrivenForms implements OnInit {
  
  userObject: User = {};

  onSubmit(userForm: NgForm) {
    console.log(userForm.value);
  }
  ngOnInit(): void {
    //  this.userObject = {
    //     name: "kelly",
    //     email:"kelly@gmail.com",
    //     password:890090,
    //     isChecked: true,
  }

  setValue(userForm: NgForm) {
    let ob = {
      name: 'kelly',
      email: 'kelly@gmail.com',
      password: 890090,
      isChecked: true,
    }
    userForm.setValue(ob);
  }

  patchValue(userForm: NgForm){
     let ob = {
      name: 'kelly',
      email: 'kelly@gmail.com',
    }
    userForm.control.patchValue(ob);
  }

  resetValue(userForm: NgForm){
    // userForm.reset();
userForm.resetForm();
  }

}
