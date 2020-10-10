import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-list',
  template: `
    <h2>Employee List</h2>
    <h2>{{errorMsg}}</h2>
    
    <ul *ngFor="let emp of employees">
      <li>{{emp.name}}</li>
    </ul>
  `,
  styles: [`
  
  `]
})
export class EmployeeListComponent implements OnInit {

  /*public employees =[
    {"id": 1, "name": "Bruce", "age" : 30},
    {"id": 2, "name": "Andriw", "age" : 46},
    {"id": 3, "name": "Nicole", "age" : 35},
    {"id": 4, "name": "Ketty", "age" : 26},
  ];*/

  public employees =[];
  public errorMsg;

  constructor(private _employeeService : EmployeeService) { }
 // Now we have a local variable that gives us instance of EmployeeService
 // Need to make use of EmployeeService instance and fetch the data. as bellow
// ngOnInit() gets called when component has been initialized
ngOnInit(): void {
  this._employeeService.getEmployees()
      .subscribe(data => this.employees = data,
                 error => this.errorMsg = error);
}

}
