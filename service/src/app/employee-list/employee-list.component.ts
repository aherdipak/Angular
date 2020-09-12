import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'employee-list',
  template: `
    <h2>Employee List</h2>
    <ul *ngFor="let emp of employees">
      <li>{{emp.name}}</li>
    </ul>
  `,
  styles: [`
  
  `]
})
export class EmployeeListComponent implements OnInit {

  public employees =[
    {"id": 1, "name": "Bruce", "age" : 30},
    {"id": 2, "name": "Andriw", "age" : 46},
    {"id": 3, "name": "Nicole", "age" : 35},
    {"id": 4, "name": "Ketty", "age" : 26},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
