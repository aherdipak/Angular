## Angular architecture & execution flow

###  Overview

You will learn about

- Introduction to modules
- Introduction to components and templates
- Introduction to services and dependency injection
- 


### Introduction to modules:

- Angular application is modular in nature, so an angular application just a collection of a many individual modules. 
- Every module represents a feature area in application.

  Eg. `user module` related to application users and `admin module` related to application administrators.

- Every angular application has at least one module, i.e. `root module` also called as `app module` which provides the bootstrap mechanism that launches the application.
- Each module is made up of `components` and `services`.


![Screenshot 2020-08-19 at 5 06 46 PM](https://user-images.githubusercontent.com/35020560/90630543-d786b200-e23e-11ea-9b5a-bc18ca110d8b.png)

- The module will also have services which is basically a class that contents the business logic of your application.



#### metadata
- module is defined by a class decorated with `@NgModule()`
- The most important properties are as follows.

> `declarations`: The components that belong to this module.

> `imports`: Other modules whose exported in this module.

> `providers`: Global collection of services, they become accessible in all parts of the app.

> `bootstrap`: The main application view, called the root component. Only the root module should set the bootstrap property.

##### app.module.ts
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
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



### Introduction to components and templates:

- Components controls portion of view of the browser.
- Angular application has at least one component which would be the `root component` of your application and also called as `app component`.
- Each component defines a class that contains application data and logic.

![Screenshot 2020-08-19 at 5 14 53 PM](https://user-images.githubusercontent.com/35020560/90630979-993dc280-e23f-11ea-9edf-a985ae7d1407.png)

- All other componant will be nested inside this componant.

![Screenshot 2020-08-19 at 5 30 30 PM](https://user-images.githubusercontent.com/35020560/90632241-ba9fae00-e241-11ea-8894-2860477da20d.png)

- Each component will have an html template to represent view on the browser and  class that controls the logic of that particular view.

### Architecture summary:
 - Angular App - one or more modules
 - Module - one or more componant and services
 - componants - HTML + class
 - services - bussiness logic
 - Modules interact and ultimately render the view in the browser.
 
### Some files in project:

> `package.json`

- This file contains the dependencies and dev dependencies which is nothing but the libraries and modules that are required
 for your application to work.
 
- The packages listed here get installed when you fire command `$ng new hello-world`
and all the packages get installed in `node_modules` folder.

- We also have some of the script bellow that can be executed `$ ng serve` command one of them which runs our applications.

```
"scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
  }
```

- we also execute `$ npm start` which internallly execute `$ ng serve` command.

> `src` folder:

- Conatent the `main.ts` file which is the entry point to our angular application.

#### main.ts
```
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

```

- When we run the command `$ ng serve` to start our application the execution comes till the `main.ts` file, over here we boostrap or quickstart our app module.
- We also have an app folder which contains `app.module.ts` which is the root module of our application.

> `app.componant.ts` : which is the root componant of our application.

#### app.componant.ts
```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';
}

```

#### Basics of componant:

Components made up of three parts:

1) template - Which represents view and created using html and used for your user interface of application.
2) class - Class is nothing but code that supports the view and this is created using type script. The class contains datamembers and methods that can be used the logic of the view.
   Eg. We have method to show and hide element bases on the value of a property.
3) metadata - This is the info that angular need to decide if the particular class is an angular component or just a class.
  - Metadata is defined using a `decorator` which is a feature in typescript.
  - A decorator is just a function that provides info about the class attach to it.
  - For component we use component decorator.
  - In the above class attached the metadata `@Component` which is component decorator.
  - This decorator tells the angular hey, this is not plane class, This is a component.
  - The component decorator contains the both metadata and the template which represents the view (templateUrl).
  - So as part of the metadata we have `selector`, `templateUrl` and `styleUrls`.

  > `selector`:
  
  - selector is basically custom HTML tag that can be used to represent this component.
  - In our case we can see in below file is used `<app-root></app-root> `as a custom tag.
  
  ##### index.html
  ```
  <!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <title>HelloWorld</title>
    <base href="/">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/x-icon" href="favicon.ico">
  </head>
  <body>
    <app-root></app-root>
  </body>
  </html>

  ```
 - So angular renders the AppComponent template which is comes across this `<app-root></app-root>` tag. The template for this componant is define in `templateUrl`.
 - The `templateUrl` points to html (`app.component.html`)file which represents the view for this componant.
 
 #### app.component.html
 ```
 ...
 ...
 <span>{{ title }} app is running!</span>
 ...
 ...
 
 ```
 - We have `{{title}}` :this is nothing but the property in our componant class.
 - When we run the application html in `app.component.html` is replaced in `index.html` file with `<app-root></app-root>` tag.
 - Finally we have `styleUrls` that applies only to this component.
 
 ## Create one new component and add into to application:
 
 To create new component we are using angular CLI
 
 > `$ng g c test`
 
 g - generate
 c - create
 
 ![Screenshot 2020-08-19 at 7 35 00 PM](https://user-images.githubusercontent.com/35020560/90645155-3f46f800-e253-11ea-9958-0785873663ae.png)


- Bydefault `.componant` naming convension follows angular.
- We can see `test.component.html` file is created for `test.componant.ts` this newly created component.
- Here we have created a new component but your application should be aware of it. So in the `app.module.ts` file we need to import and then add to declaration array.

![Screenshot 2020-08-19 at 7 41 50 PM](https://user-images.githubusercontent.com/35020560/90645929-3145a700-e254-11ea-8d5e-947dcbe2b6d0.png)

- Declaration array contens all the componant used by the appliacation.
- To include this component in html we need to just add a custom tag that represents the selector.

#### test.component.ts
```
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

```

- Here we have ` selector: 'app-test'` for html custom tag.
- Now open `app.component.html` which represents the view of `app.component.ts` which is the root componant of our appliacation.

#### app.component.html
```
<span>{{ title }} app is running!</span>
<!-- test Component page-->
<app-test></app-test>
<span>End of the test component data...!</span>
```

![image](https://user-images.githubusercontent.com/35020560/90647893-7965c900-e256-11ea-85b2-15f889d7e1dc.png)


 
 



 
 



