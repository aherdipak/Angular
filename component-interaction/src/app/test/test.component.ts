import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
      <h3>Test Component</h3>
  `,
  styles: [`
      h3 {text-align: center;}
  `]
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
