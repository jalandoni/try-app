import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() parentData:string;
  @Output() childEvent = new EventEmitter();
  public cdata:string;

  constructor() {}

  ngOnInit() {
  }

  onChange(value: string){
    this.childEvent.emit(value)
  }

}
