import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router:Router,private formbuilder:FormBuilder) { }

  loginFormGroup:FormGroup;

  ngOnInit() {
    this.loginFormGroup=this.formbuilder.group({
      email:[''],
      pwd:['']
    })
  }
  onLogin()
  {
    console.log(this.loginFormGroup.value);
    if(this.loginFormGroup.controls.email.value=="Jaymin" && this.loginFormGroup.controls.pwd.value=="123")
    {
      this.router.navigateByUrl('student');
    }
    else
    {
      alert('enter valid email or pwd');
    }
    
  }

}
