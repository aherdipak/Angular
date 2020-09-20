import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string = "/assets/data/employees.json";
  
  constructor(private http: HttpClient) { }

  getEmployees() : Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url);
    /*[
      {"id": 1, "name": "Bruce", "age" : 30},
      {"id": 2, "name": "Andriw", "age" : 46},
      {"id": 3, "name": "Nicole", "age" : 35},
      {"id": 4, "name": "Ketty", "age" : 26}
    ];*/
  }
}
