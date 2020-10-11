# Routing in Angular

- Angular application contains multiple components and each component has its own view.
- So we need a way to navigate between different view and when user performs some action.
- This purpose angular makes use of router.
- To handle the navigation from one view to the next, you use the Angular Router. The Router enables navigation by interpreting a browser URL as an instruction to change the view.

#### Q) How to navigate between two different views with button clicks ?

![image](https://user-images.githubusercontent.com/35020560/95673608-c4052100-0bc7-11eb-80d3-acd9857b69af.png)

### Steps for Routing in Angular :-

1) Generate a project with routing option.
2) Generate DepartmentList and EmployeeList components.
3) Configure the routers.
4) Add buttons and use directives to navigate.

##### 1) Generate a project with routing option

> `ng new routing-demo --routing`

- `--routing` option creates routing module for angular application.
- add `<base href="/">` tag in index.html so that the application know that the application how to construct the url while navigating.

## /index.html
```
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>RoutingDemo</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
</body>
</html>

```
- Now in app folder open file `app-routing.module.ts`. This file content routing module for our application.
- In `app-routing.module.ts` file we configure different routes.
- In `app.module.ts` import "AppRoutingModule" so that it is part of our routing-demo application.

```
import { AppRoutingModule } from './app-routing.module';

imports: [
    BrowserModule,
    AppRoutingModule
  ],
```

##### 2) Generate DepartmentList and EmployeeList components

>`$ ng g c department-list -it -is`

>`$ ng g c employee-list -it -is`
  - g : Generate
  - c : Component
  - -it : Inline Template
  - -is : Inline Style
  

##### 3) Configure the routers.

- Configuration is we do in app routing module ie. `app-routing.module.ts`
- In `app-routing.module.ts` file we have Routes array which is stringly tight to the router package.
```
  const routes: Routes = [];
  
```
- Here we define all possible routes to our package.
- And each route is nothing but an oject. Object content path and component to be render.

### /app-routing.module.ts 
```
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

// If we navigate department then we need to display DepartmentListComponent
const routes: Routes = [
  {path: 'department', component: DepartmentListComponent}, 
  {path: 'employee', component: EmployeeListComponent}
];
```
- But by doing above code we are duplicating import statments. We have same import statement in `app.module.ts` and `app-routing.module.ts`.

#### /app.module.ts
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentListComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```
- So to avoid this we need to create an array of all the routing components export it and then import it in `app.module.ts`.

#### /app-routing.module.ts
```
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

// If we navigate department then we need to display DepartmentListComponent
const routes: Routes = [
  {path: 'department', component: DepartmentListComponent}, 
  {path: 'employee', component: EmployeeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepartmentListComponent, EmployeeListComponent]

```

#### /app.module.ts
```
import { AppRoutingModule , routingComponents} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
```

### Q) How are we specify where this component display?
- ans is `<router-outlet></router-outlet>` tag in `app.component.html`.
- `<router-outlet></router-outlet>` this directive available from the router package and it marks where the router displays a view.

#### /app.component.html
```

<div class="content" role="main">
    <h2>Routing and Navigation</h2>
</div>

<router-outlet></router-outlet>
<!--router view goes here-->
```

![image](https://user-images.githubusercontent.com/35020560/95674726-cb302d00-0bcf-11eb-8f1f-e8bb862361b3.png)

![image](https://user-images.githubusercontent.com/35020560/95674798-3c6fe000-0bd0-11eb-928a-1e4929bcf77e.png)

![image](https://user-images.githubusercontent.com/35020560/95674827-590c1800-0bd0-11eb-9f1a-d381c52d88d6.png)
