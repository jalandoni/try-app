import { Component, OnInit } from '@angular/core';
import {  FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent implements OnInit {
  submitted = false;
  isValid=false
  reactiveForm =this.fb.group({
    firstName:['',Validators.required],
    lastName:['',Validators.required],
   contact: ['',Validators.compose([
    Validators.required,
    Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
   street:['',Validators.required],
    city:['',Validators.required],
    state:['',Validators.required ],
    zip:['',Validators.required]
  })


  onSubmit(){
    this.submitted = true;
    if (this.submitted){
      this.isValid=true;
    }else{
      this.isValid=false
    }
  }

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  }

}
