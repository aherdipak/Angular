import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return[
      {"id": 1, "name": "Bruce", "age" : 30},
      {"id": 2, "name": "Andriw", "age" : 46},
      {"id": 3, "name": "Nicole", "age" : 35},
      {"id": 4, "name": "Ketty", "age" : 26}
    ];
  }
}
