import { Component, OnInit, Input } from '@angular/core';

import { dataJsonTemp } from '../temp';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  
 
  constructor() { }

  ngOnInit() {
    console.log(this.dataJson);
    console.log(dataJsonTemp[0].email);
    this.dataJson=dataJsonTemp;
  }

  dataJson=[
    {
      id:1,
      'fname':'Jaymin',
      'lname':'Trivedi',
      'email':'abc@gmail.com',
      'pwd':'123'
    },
  ]
  getMsg(message) {
    this.dataJson = message;
    console.log(this.dataJson);
  }

  

}
