import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { phoneValidator } from '../validators/phone-field.validator';
import { nameValidator } from '../validators/name-field.validator copy';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  myForm: FormGroup;

  // is not recomended to add an instance for each formControl entry here,
  // instead you can add it in the template
  nameControl: AbstractControl; // kept a an example only

  constructor(formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      'name': ['', Validators.compose([Validators.required, nameValidator])],
      'age': ['', Validators.required],
      'phone': ['', Validators.compose([Validators.required, phoneValidator])],
    });
    this.nameControl = this.myForm.controls['name'];

    // how to watch changes in one form Control??
    this.nameControl.valueChanges.subscribe(
      (value: string) => {
        console.log('name is chaning ... to:', value);
      }
    );

    this.myForm.controls['phone'].valueChanges.subscribe(
      (value: string) => {
        console.log('phone is chaning ... to:', value);
      }
    );
    // for the inetire form...
    this.myForm.valueChanges.subscribe(
      (value: string) => {
        console.log('form changes ... to:', value);
      }
    );
  }

  ngOnInit() {
  }

  onSubmit(myForm){
    console.log(myForm);
  }
}
