# Services in Angular

- To understand services and why it requires i have setup some code.
- Using below code we are showing employee list

#### /employee-list.component.ts
```
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

```

![image](https://user-images.githubusercontent.com/35020560/92997163-cf185300-f52e-11ea-98e2-8c527c4342b7.png)

- So everything working perfectly fine but then we get new requirment and the new requirment is that "In seperate view we need to dispaly all the employee information"?
- so for that we create new component.

#### /employee-detail.component.ts
```
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
  constructor() { }
  ngOnInit(): void {
  }

}

```
- But the problem here is if you look at the class we dont have employee array here, We have it in employee list component.
But it it localized only for `employee-list.component.ts` class.
- The `employee-detail.component.ts` has no employee data to bind to the view.
- solution: 1) We can simply add new employee array here and then our aaplication will work as expected.

#### /employee-detail.component.ts
```
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

```

![image](https://user-images.githubusercontent.com/35020560/92997365-5c0fdc00-f530-11ea-855f-f814e26943a8.png)


- Solution works but it's not currect solution.

### Priciples
1) Do not repeat yourself (DRY) : Do not make copy of same code.
2) Single responsibility principle : each class should have only one resposibility
   - In our project `/employee-list.component.ts` should have only reponsibility of view but in our case it is responsible to create employee array as well.
   - solution for this is service
   
### Service
- service is a class with specific purpose.
- Why?
  - Share data : accross mupltiple components
  - Implement application logic : 
  - External interaction : connecting to DB
  
- In angular service file naming convension is `.service.ts`. eg. `employee.service.ts`
- How to use services in angular :  `Dependency Injection`.

# Dependency Injection in Angular
- In this topic we will learn below three points.
  1) Code without DI - there drowbacks.
  2) DI as a design pattern : How to overcome drowbacks.
  3) DI as a framework

### 1) Code without DI
- let's assume below three classes.

#### /Car
```
class Car{
engine;
tires;
contructor(){
  this.engine = new Engine();
  this.tires = new Tires();
  }
}

```
#### /Engine
```
class Engine{
contructor(){}
}

```
#### /Tires
```
class Tires{
contructor(){}
}

```
- For simplicity let's assume we need only an engine & tires to build a car.
- A car has two dpendencies : engine & tires.
- In the car class contructor itself creates copies of egine and tires. So when we instantiats new car the contructor initiats new engine & new tires.
- But there is a problem with this code.
- let's assume engine contructor consumes para. ie.(fuel: petrol/diesel).

#### /Engine
```
class Engine{
contructor(fuel){}
}

```
- When we change the engine our car is broken. To reaper car class we need to pass para. to the engine contructor.

#### /Car
```
class Car{
engine;
tires;
contructor(){
  this.engine = new Engine(fuel);
  this.tires = new Tires();
  }
}

```
- similarly tier class contructor accepts para. again car class needs to be fixed.

#### /Tires
```
class Tires{
contructor(para){}
}

```

#### /Car
```
class Car{
engine;
tires;
contructor(){
  this.engine = new Engine(fuel);
  this.tires = new Tires(para);
  }
}

```
##### So our first drowback is our code is not flexible.
- any time dependency change the class needs to change as well.
#### This code is not sutable for testing, any time we initiate new car you get same engine & same tires. What if i want to test our code wiht petrol engine with different tires.

### 2) DI as a design pattern

- DI is a coding patter in which a class receives it's dependencies from external sources rather than creating them itself.

#### without DI 
```
class Car{
engine;
tires;
contructor(){
  this.engine = new Engine();
  this.tires = new Tires();
  }
}
```

#### With DI 
```
class Car{
engine;
tires;
contructor(engine, tires){
  this.engine = engine;
  this.tires = tires;
  }
}
```

- You can see car class does't create dependencies anymore. It just consumes them.

```
var engine = new Engine();
var tires = new Tires();
var car = new Car(engine,tires);
```
- The creation of those dependencies is external to this class.

```
var engine = new Engine(para);
var tires = new Tires(para);
var car = new Car(engine,tires);

```
- Now engine can accept para. but still car accept that without a problem.
- Our code is much more flexible now even if we made changes in dependencies the car class we made intact.

- Now the anathor problem is, We create car by passing dependencies as para. But we as the developer we have to crete dependencies first.
- Let's say we have 20 dependecies So before creating car we have to create all 20 dependecies before passing them as parameter.
- What if those dependecies internally have dependecies then we first need to create those dependecies. So as the no. of dependeciesgrow it's become realy deficult to manage the code.
- Look at below example.
```
var a = new Dependency();
var b = new Dependency();
var c = new Dependency();
...
...
var z = new Dependency();

var car = new Car(a,b,c,....z);
```
- If dependency `c` is depends on dependency `b`. We will have to create dependency `b` before creating dependency `c` and car.

```
var a = new Dependency();
var b = new Dependency();
var c = new Dependency(b); // dependent
...
...
var z = new Dependency();

var car = new Car(a,b,c,....z);
```
- This becomes extrimely deficult for our developer. and this is where angular `dependency injection` framework comes into the picture.

### 2) DI Framework

- The DI framework has something called an `injector` where you registor all your dependencies.
- Injector basically like containar for all the dependecies lie engine, car, a,b, c, .....
- If you want a car, you ask for a car and injector provides car for you.
- The framework manage all the dependencies so that you don't have to keep track on it.

# How to use service in angular?

1) Create a service eg. EmployeeList, EmployeeDetail
2) Register service with injector
3) Declare service as a dependency.

![image](https://user-images.githubusercontent.com/35020560/93022170-45878480-f605-11ea-965a-dbda147894cf.png)

#### 1) Create a service
- To generate basic service template we use angular CLI.
- In the integrated terminal within the project folder run the below command.
  > `$ ng g s employee`
  
  ![image](https://user-images.githubusercontent.com/35020560/93660878-f14f2b00-fa70-11ea-9704-70a9a2ae3901.png)

- Let's create `getEmployees()` method in service which return list of employee beans.
#### /employee.service.ts
```
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

```

- Make empty employees array in employee-list.component.ts
#### /employee-list.component.ts
```
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

  /*public employees =[
    {"id": 1, "name": "Bruce", "age" : 30},
    {"id": 2, "name": "Andriw", "age" : 46},
    {"id": 3, "name": "Nicole", "age" : 35},
    {"id": 4, "name": "Ketty", "age" : 26},
  ];*/

  public employees =[];
  constructor() { }

  ngOnInit(): void {
  }
}

```

- Make empty employees array in employee-detail.component.ts

#### /employee-detail.component.ts
```
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

  /*public employees =[
    {"id": 1, "name": "Bruce", "age" : 30},
    {"id": 2, "name": "Andriw", "age" : 46},
    {"id": 3, "name": "Nicole", "age" : 35},
    {"id": 4, "name": "Ketty", "age" : 26},
  ];*/

  public employees =[];
  
  constructor() { }

  ngOnInit(): void {
  }
}

```
- Now our service is ready, lets register it with injector.

#### 1) Register service with injector
- If you dont register service with injector, It just a class according to angular.
- There are multiple phases where you can required service but the place you register is important, Because angualar has hirarchical DI system.
- Consider below application:

![image](https://user-images.githubusercontent.com/35020560/93661343-a8997100-fa74-11ea-9189-3940c32ec4d0.png)

- Here is how angulars DI system will work?
- If you register in employeeList component then the service can be use by the employeeList and its childs only. No other component not even emplyeeDetail component can use it. So this is not a good choise.

![image](https://user-images.githubusercontent.com/35020560/93661419-48ef9580-fa75-11ea-9c56-f92c43a9689e.png)


- Now if you register with appComponent then appComponent and all its children can make use of the service. this works fine. But each module is a usually feature area in your application and might grow in future. So it is better to register service at the module level.

![image](https://user-images.githubusercontent.com/35020560/93661518-01b5d480-fa76-11ea-99f1-b5e983372b5b.png)


- Now to register service we use providers metadata.
- In the app module include emplyee service in the providers array.

#### / app.module.ts
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeService } from './employee.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

```
- Now we have register our service in app module using providers metadata.

#### 3) Declare service as a dependency

- Dependency is specified in the constructor lets change employee-list.component.ts

#### / employee-list.comopnent.ts
```
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

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

```
- Let's do same thing in employee-detail.comopnent.ts

#### / employee-detail.comopnent.ts 
```
 constructor(private _employeeService : EmployeeService) { }
 // Now we have a local variable that gives us instance of EmployeeService
 // Need to make use of EmployeeService instance and fetch the data. as bellow
// ngOnInit() gets called when component has been initialized
  ngOnInit(): void {
    this.employees = this._employeeService.getEmployees();
  }
```
- Lets look at the browser, we still have Emplyee list and Employee Detail list, But this time are doing it must more efficiently.

![image](https://user-images.githubusercontent.com/35020560/93661863-f6b07380-fa78-11ea-81e3-c5cfd31d6016.png)


### `@Injectable()` decorator: Why is it required?

- `@Injectable()` decorator tells angular this service might itself have injected dependencies.
- If you want to inject one service into anathor service then `@Injectable()` decorator must.
- If you remove `@Injectable()` decorator from the service it become simple typescript class. Its mendatory because angular consider it might have dependencies in future.


# HTTP Error Handling

- We know that an observable is return an result of http call, So that to handle exceptions on an observable we make use of catch operator.

#### /employee.service.ts
```
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string = "/assets/data/employees.json";
  
  constructor(private http: HttpClient) { }

  getEmployees() : Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url)
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    // Return an observable with a user-facing error message.
    return throwError(
      error.message || 'Something bad happened; please try again later.');
  }

}
```
#### /employee-list.component.ts
```
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

```

#### /employee-detail.component.ts
```
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-detail',
  template: `
      <h2>Employee Detail</h2>
      <h2>{{errorMsg}}</h2>
      <ul *ngFor="let emp of employees">
        <li>{{emp.id}}. {{emp.name}} - {{emp.age}}</li>
      </ul>
  `,
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

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

```

- To get error just change data url `private _url: string = "/assets/data/employees1.json";` and see error message on browser.

![image](https://user-images.githubusercontent.com/35020560/95650662-85596300-0b02-11eb-9fa5-6034a6122828.png)

