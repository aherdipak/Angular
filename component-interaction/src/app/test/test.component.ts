import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
      <h3>Test Component</h3>
      <!--<h3>{{"Hello "+parentData}}</h3>-->
      <h3>{{"Hello "+name}}</h3>
  `,
  styles: [`
      h2, h3 {text-align: center;}
  `]
})
export class TestComponent implements OnInit {

  //@Input() public parentData;
  @Input('parentData') public name;

  constructor() { }

  ngOnInit(): void {
  }

}
