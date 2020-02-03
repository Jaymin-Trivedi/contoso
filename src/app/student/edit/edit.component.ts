import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { RouterModule, Router, ActivatedRoute} from '@angular/router';
import { dataJsonTemp } from '../../temp';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
   id=1;
   actRout=0;
   flagArray=[];
  
   tempFname="";
   tempLname="";
   tempEmail="";
   tempPwd="";

  @Output() messageToEmit = new EventEmitter<Array<any>>();

  signupFormGroup:FormGroup;
  dataJson=[
    {
      id:1,
      'fname':'Jaymin',
      'lname':'Trivedi',
      'email':'abc@gmail.com',
      'pwd':'123'
    },
    
  ]
 

  constructor(private formBuilder:FormBuilder, private router:Router , private routeId:ActivatedRoute) { }

  ngOnInit() {
    this.actRout=parseInt(this.routeId.snapshot.paramMap.get('id'))-1;
  this.tempFname=dataJsonTemp[this.actRout].fname;
  this.tempLname=dataJsonTemp[this.actRout].lname;
  this.tempEmail=dataJsonTemp[this.actRout].email;
  this.tempPwd=dataJsonTemp[this.actRout].pwd;
  
  this.signupFormGroup=this.formBuilder.group({
    firstName:[this.tempFname,Validators.required],
    lastName:[this.tempLname,Validators.required],
    email:[this.tempEmail,Validators.required],
    pwd:[this.tempPwd,Validators.required]
    

  })
  

  }
  onUpdate()
  {
  
   
    
    
    
    dataJsonTemp[this.actRout].fname=this.signupFormGroup.controls.firstName.value;
    console.log(dataJsonTemp);
    dataJsonTemp[this.actRout].lname=this.signupFormGroup.controls.lastName.value;
    dataJsonTemp[this.actRout].email=this.signupFormGroup.controls.email.value;
    dataJsonTemp[this.actRout].pwd=this.signupFormGroup.controls.pwd.value;


     this.router.navigateByUrl('/student');
    
  }

}
