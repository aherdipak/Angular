# Http, Observables and RxJs in Angular

## 1) Http Mechanism:

![image](https://user-images.githubusercontent.com/35020560/93670311-2af75480-fab8-11ea-9e12-e573c1c541cf.png)

- In services we have seen services provides data and share with employeeList and employeeDetail components.
- But now we want data should be fetch from the server for that we make an Http request.
- The Http Get request will help a web api or a webservice which will fetch the data from a DB and send it back as an Http response.
- Respose we get back from the Http call is an `Observable`.
- Now employeeService needs to cast this observable into an array of emplyees and return same to the employeelist and employeeDetail components.
- So Http mechanism is just two steps:
1) Send Http request.
2) Receive and process the Http response.

#### Q) What is observable and How to work with them?

- To undestand this we consider bellow example of newspaper company.
![image](https://user-images.githubusercontent.com/35020560/93669983-4a40b280-fab5-11ea-85df-38acb8b9c36b.png)

- We have a news paper company and this company has source of information.
- The makes request to the source to sends an every day news.
- As a respose to the companies request source sends a sequence of infomation throughout the day. Once the information received the first thing news paper company has to do.
- Convert the info into to the newspaper format and ready to destribute to the subscribed houses.
- After destribution, Itis in hands of houses to modify data or not.

- In our employeeservice application, The newspaper company is like employeeService as shown in below image.

![image](https://user-images.githubusercontent.com/35020560/93670185-08b10700-fab7-11ea-9ddd-39dc10f9984f.png)

- The source of is nothing but the DB or webApi or webservice.
- The employeeServie makes request of DB with the http `GET` call as a response we get back an observable.
- But this time data not in the format which we use in our application. So once we receive observable we need to convert it into the eployees array.
- After conversion the data ready to br provide to the component in our application.
- We provide employee data to the component who have subscribe to that employeeService.
- After getting data in component it is complitly depends on them, how to use of that data.

#### Observable:
- Observable is nothing but sequense of items that arrive asynchronusly over time.
- But http call is a single item instead of sequense of items and that single item is nothing but http response.

#### Http, Observables:
1) Http get request from emplyeeService.
2) Receive the observable and cast it into an employee array.
3) Subscribe observable to emplist and empdetail.
4) Assign to employee array to a local variable.

#### RxJs:
- RxJs is a library that enables us to work with observable in angular application.
- It is reactive extesion for javascript and it is no where related to react library from facebook.
- It is just external library to work with observable.

# Get data from a server

#### 1) Enable HTTP services
- Make HttpClient available everywhere in the app in two steps. First, add it to the root AppModule by importing it.

##### / app.module.ts
```
import { HttpClientModule } from '@angular/common/http';

```
- Next, still in the AppModule, add HttpClient to the imports array.

##### / app.module.ts
```
@NgModule({
  imports: [
    HttpClientModule
  ]
})

```

##### / employee.service.ts
```
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string = "/assets/data/employees.json";
  
  constructor(private http: HttpClient) { }

  getEmployees(){
    return this.http.get(this._url);
  }
}

```
##### / employees.json
```
[
    {"id": 1, "name": "Bruce", "age" : 30},
    {"id": 2, "name": "Andriw", "age" : 46},
    {"id": 3, "name": "Nicole", "age" : 35},
    {"id": 4, "name": "Ketty", "age" : 26}
  ]
```

#### 2) Receive the observable and cast it into an employee array.

- If you mouse hover on get method you can see that it returns observables.
![image](https://user-images.githubusercontent.com/35020560/93709718-2ab19480-fb5e-11ea-8515-99b07abc01a6.png)

- But for our application this observable needs to be cast into the format that represents an array of employees.
- for that lets create employee interface first under the app folder.

##### / employees.ts
```
export interface IEmployee{
    id : number,
    name : string,
    age: number
}
```
- Now add type to get request and getEmployee() method will return an observable of type employee array.
##### / employees.service.ts
```
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
  }
}

```

#### 3) Subscribe observable to emplist and empdetail and Assign to employee array to a local variable

- Go to the employee-list.component and `ngOnInit()` method we are going to call getEmployee() method and subscribe to the observable.
- The first aregument to the subscribe method is going to be a fat arrow function that assigns data received from the observable to local employees property. data arrive asynchronously from observable and we are assigning this data to local variable using fat arrow function.

##### / employees-list.component.ts
```
ngOnInit(): void {
    this._employeeService.getEmployees()
        .subscribe(data => this.employees = data);
  }
```

![image](https://user-images.githubusercontent.com/35020560/93710096-96e1c780-fb61-11ea-8460-fb69c5be89ad.png)



