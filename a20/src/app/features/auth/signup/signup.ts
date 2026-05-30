import { Component, inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    RouterLink
  ],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
})
export class Signup implements OnInit{
  private formBuilder = inject(FormBuilder);
  signup!: FormGroup;
  hobbies = ['Tennis', 'Cricket', 'Football']
  countries = ['India', 'USA', 'UK'];
  ngOnInit(): void {
    this.signup = this.formBuilder.group({
      fname:[''],
      email:[''],
      password:[''],
      gender: [''],
      countries: [''],
      hobbies: this.formBuilder.array(this.hobbies.map(() => false))
    })
  }

  get hobbiesSignupArray() {
    return this.signup.get('hobbies') as FormArray
  }

  onSubmit() {
    console.log(this.signup.value);
  }

}
