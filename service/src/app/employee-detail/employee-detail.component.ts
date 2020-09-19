import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

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

  /*public employees =[
    {"id": 1, "name": "Bruce", "age" : 30},
    {"id": 2, "name": "Andriw", "age" : 46},
    {"id": 3, "name": "Nicole", "age" : 35},
    {"id": 4, "name": "Ketty", "age" : 26},
  ];*/

  public employees =[];

  constructor(private _employeeService : EmployeeService) { }
 // Now we have a local variable that gives us instance of EmployeeService
 // Need to make use of EmployeeService instance and fetch the data. as bellow
// ngOnInit() gets called when component has been initialized
  ngOnInit(): void {
    this.employees = this._employeeService.getEmployees();
  }

}
