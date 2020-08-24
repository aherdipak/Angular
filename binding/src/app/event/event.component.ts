import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  template:`
    <h2> Welcome {{name}} </h2>
    <button (click)="onClick()"> click here</button>
    {{message}}

    <button (click)="onClickEvent($event)"> event</button>

    <button (click)="message= 'Welcome Deepak'"> code in HTML with event</button>
    <br/><br/><br/>
    <input #myID type="text">
    <button (click)="logMessage(myID.value)"> log</button>

  `,
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  public name = "in event binding";
  public message = "";
  onClick(){
    console.log('Welcome to angular');
    this.message = 'Welcome to angular';
  }

  onClickEvent(event){
    console.log(event);
  }

  logMessage(value){
    console.log(value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
