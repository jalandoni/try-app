import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template:`
  <h1>Child Template</h1>
  From child:<input type ="text" [(ngModel)]="cdata"/>
  <button (click)="onChange(cdata)">send</button>
  <p>From parents: {{parentData}}</p>
  
  `,
  styles: ['.primary {color:red} .button1 {background:green}']
})
export class ChildComponent implements OnInit {
  @Input() parentData:string;
  @Output() childEvent = new EventEmitter();
  public cdata:string;
  public pdata: string;

  constructor() { }

  ngOnInit() {
  }

  onChange(value: string){
      
    this.childEvent.emit(value)
  }

}