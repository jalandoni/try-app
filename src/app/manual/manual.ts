import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-manual',
  template:`<h1>Parent Template</h1>
  <p>From Parent Data</p><input type="text" [(ngModel)]="pdata" >
  <button (click)="onClick(pdata)" [(ngModel)]="pdata">reply</button>
  <p (childEvent)="pdata=$event">From Child: {{cdata}}</p>
  <hr>
  <app-child (childEvent)="cdata=$event" [parentData]="pdata" ></app-child>
  `,
  styles: ['.primary {color:red} .button1 {background:green}']
})
export class ManualComponent implements OnInit {
  public pdata: string;
  public cdata: string;
  public newData: string;

  constructor() { }

  ngOnInit() {
  }
  onClick(value:string){
    this.newData=value
  }


}