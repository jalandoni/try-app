import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {
  isActive=true;
  public name: string;
  public gender:string;
  public name1: string;
  public gender1: string;
  public enrolled1:string;
  public enrolled2:string;
  public status:boolean=true;

  public peopleDeclined:any[] =[]
  
  constructor() { }


  ngOnInit() {
  }


  
  addPeople1() {
    this.peopleDeclined.push({"name":this.name,"gender":this.gender,"status":this.enrolled2});
  }


  onClick(value,value1:string){
    console.log(value,value1);
    this.name1 = value;
    this.gender1 = value1;
    this.enrolled2=this.enrolled1;
  }

  getCheckboxStatus(){
    console.log(this.status)
    if (this.status) {
      this.status = false;
       this.enrolled1="Yes"
    } else {
      this.status = true;
      this.enrolled1="No"
    }
 }



}
