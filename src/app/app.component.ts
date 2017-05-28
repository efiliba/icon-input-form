import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { IUserForm } from "./app.interface";
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';
import { confirmValues } from "./app.customValidators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<tabs></tabs>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userForm: FormGroup;
  formData: IUserForm;
  nameControl: AbstractControl;
  emailControl: AbstractControl;
  confirmControl: AbstractControl;

  constructor(private fb: FormBuilder) {}
  
  ngOnInit() {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      contact: this.fb.group({
        email: ['', Validators.required],
        confirm: ['', Validators.required]
      }, {
        validator: confirmValues('email', 'confirm', 'emailsMatch')
      })
    });

    this.nameControl = this.userForm.controls.name;
    this.emailControl = this.userForm.get('contact').get('email');;
    this.confirmControl = this.userForm.get('contact').get('confirm');

    this.userForm.valueChanges
      .do(x => this.formData = x)
      .filter(() => this.userForm.valid)    // Only when form is valid
      .do(console.log)
      .subscribe();
  }

  get nameHasRequiredError(): boolean {
    return this.nameControl.touched && this.nameControl.hasError('required');
  }

  get nameHasMinLengthError(): boolean {
    return this.nameControl.touched && this.nameControl.hasError('minlength');
  }

  get emailHasRequiredError(): boolean {
    return this.emailControl.touched && this.emailControl.hasError('required');
  }

  get confirmEmailHasRequiredError(): boolean {
    return this.confirmControl.touched && this.confirmControl.hasError('required');
  }

  get emailsHaveUnmatchedError(): boolean {
    return this.emailControl.touched && this.confirmControl.touched && this.userForm.get('contact').hasError('emailsMatch');
  }

  onSubmit({value, valid}: {value: IUserForm, valid: boolean}) {
    console.log(value, valid);
  }

  onPopulate() {
    this.userForm.patchValue({
      name: 'Test Name',
      contact: {
        email: 'test@e.mail'
      }
    });
  }

  onReset() {
    this.userForm.reset();
  }
}