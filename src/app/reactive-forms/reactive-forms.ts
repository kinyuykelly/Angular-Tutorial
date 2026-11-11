import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule, CommonModule,],
  selector: 'app-reactive-forms',
  styleUrl: './reactive-forms.scss',
  templateUrl: './reactive-forms.html',
})
export class ReactiveForms {
  reactiveForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.reactiveForm = this.fb.group({
      name: ['',[Validators.required,Validators.minLength(5)]],
      email: ['', Validators.email],
      password: ['',],
      isChecked: [''],
      address:this.fb.group({
        city: [''],
        street: [''],
        pincode: [''],
      }),
      skills: this.fb.array([])
    });
  }
get skills(): FormArray{
  return this.reactiveForm.get('skills') as FormArray;
}

newSkill(): FormGroup{
  return this.fb.group({
    skill: ''
  })
}
 addSkill(){
this.skills.push(this.newSkill());
 }
 deleteSkill(i: number){
this.skills.removeAt(i);
 }
  onSubmit(reactiveForm: FormGroup) {
    console.log(this.reactiveForm.value);
  }

  setValue(reactive: FormGroup) {
    this.reactiveForm.setValue({
      name: 'Ray',
      email: 'ry@gmail.com',
      password: 890090,
      isChecked: true,
      address: {
        city: 'Bda',
        street: 'mile 2',
        pincode: 23837,
      },
    });
  }

  patchValue(reactive: FormGroup) {
    //  this.reactiveForm.patchValue({
    //   address: {
    //     city: 'Bda',
    //     street: 'mile 2',
    //     pincode: 23837,
    //   },
    // });
  this.reactiveForm.controls['name'].patchValue('Kyle');
  }
  resetValue(reactive: FormGroup) {
    this.reactiveForm.reset();
  }
}
