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
> >Basics of componant:

 
 



