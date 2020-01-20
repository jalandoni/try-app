import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  isActive=true;
  @Input() name :string;
  @Input() gender:string;
  @Input() enrolled:string;
  @Output() notificationEvent = new EventEmitter();
  @Output() declinePeople = new EventEmitter();
  public approved : string;
  public decline : string;
  peopleApproved: any[] =[]
 

  constructor() {}

  ngOnInit() {
  }


  addPeople() {
    this.peopleApproved.push({"name":this.name,"gender":this.gender,"status":this.enrolled});
    console.log(this.peopleApproved);
  }

  
  onApproved(){
    this.approved="Approved"
    this.notificationEvent.emit(this.approved)
  }

  onDecline(){
    this.decline="Decline"
    this.notificationEvent.emit(this.decline);
    this.declinePeople.emit();

  }


}
