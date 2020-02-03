import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { dataJsonTemp } from '../temp';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  id = 1;
  signupFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,private router:Router) { }
  dataJson = [];

  ngOnInit() {
    this.signupFormGroup = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      pwd: ['', Validators.required]
    })


  }

  onSubmit() {
    this.id = dataJsonTemp.length + 1;
      dataJsonTemp.push({
      id: this.id,
      'fname': this.signupFormGroup.controls.firstName.value,
      'lname': this.signupFormGroup.controls.lastName.value,
      'email': this.signupFormGroup.controls.email.value,
      'pwd': this.signupFormGroup.controls.pwd.value
    });
    this.router.navigateByUrl('/student');
  }





}

