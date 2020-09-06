import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
      <h3>Test Component</h3>
      <!--<h3>{{"Hello "+parentData}}</h3>-->
      <h3>{{"Hello "+name}}</h3>

      <button (click) = "fireEvent()">Send Event</button>
  `,
  styles: [`
      h2, h3, button {text-align: center;}
  `]
})
export class TestComponent implements OnInit {

  //@Input() public parentData;
  @Input('parentData') public name;

  @Output() public childEvent = new EventEmitter();

  fireEvent(){
    this.childEvent.emit("Hey Angular");
  }
  constructor() { }

  ngOnInit(): void {
  }

}
