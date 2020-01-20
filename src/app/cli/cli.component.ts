import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cli',
  templateUrl: './cli.component.html',
  styleUrls: ['./cli.component.css']
})
export class CliComponent implements OnInit {
  // isActive1=false;
  // isActive = false;
  // name="Jess";

  // text="Hello World!";
  // isDisabled=false;

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

  onClick(){
    alert("Click!")

  }


}
