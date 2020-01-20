import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  fullname :string;
  contactEmail:string;
  genderOptions:string;
  
genders=["Female","Male"]

  constructor() { }
  isValid=true;
  ngOnInit() {
  }

  onSubmit(){
    this.submitted = true;
  }
  submitted = false;



}
