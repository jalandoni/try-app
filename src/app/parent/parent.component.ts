import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  public pdata: string;
  public cdata: string;
  public newData: string;

  constructor() { }

  ngOnInit() {
  }
  onClick(value:string){
    console.log(value);
    this.newData = value;
  }

}
