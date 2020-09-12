import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'employee-detail',
  template: `
      <h2>Employee Detail</h2>
      <ul *ngFor="let emp of employees">
        <li>{{emp.id}}. {{emp.name}} - {{emp.age}}</li>
      </ul>
  `,
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

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
