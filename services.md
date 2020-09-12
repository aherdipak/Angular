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

