
# Template Reference Variables

- When there is a user interaction we might want some data to flow from the view to the class to perform an operation.
- *Eg.* We may required the value in textbox field to perform some validation.
- So to easily access DOM element and their properties angular provides us web template reference variable.
```
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  template:`
    <h2> Welcome {{name}} </h2>
    <br/><br/><br/>
    <input #myID type="text">
    <button (click)="logMessage(myID.value)"> log</button>

  `,
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  public name = "in event binding";
  public message = "";
  logMessage(value){
    console.log(value);
  }
  constructor() { }
  ngOnInit(): void {
  }
}

```

![image](https://user-images.githubusercontent.com/35020560/91067498-a0563d80-e650-11ea-980f-9edc94f11aa8.png)


# Two Way Binding

- When you work with forms it is essential your model and the view are always in sync otherwise your data might not be consistant.
- Eg. Consider below login form has username and password fields and component class has a corsponding properties.
![image](https://user-images.githubusercontent.com/35020560/91186650-eec91200-e70c-11ea-93ab-2035126f54ef.png)
- Whenever the user updates these input fields your model properties should automatically receive those values.
![image](https://user-images.githubusercontent.com/35020560/91186950-3d76ac00-e70d-11ea-8b2d-711c55615092.png)
- And when there is update in model propetie values your view should automatically reflect the upadated values.
![image](https://user-images.githubusercontent.com/35020560/91187465-d3123b80-e70d-11ea-89a5-526d1f197a62.png)

- We have learned about `property binding` and `event binding`. Instead of that angular provides us one more cool feature which is `two way binding`.
- Two way binding allows us to update a property and at the same time display the value of the property.
- For two way binding angular provides another directive called as `ngModel`.
```
  import { Component, OnInit } from '@angular/core';
  @Component({
    selector: 'app-event',
    template:`
      <h2> Welcome {{name}} </h2>
      <!-- Two way Binding-->
      <input [(ngModel)] = "twoWayBinding" type="text">
      {{twoWayBinding}}
    `,
    styleUrls: ['./event.component.css']
  })
  export class EventComponent implements OnInit {

    public twoWayBinding = "";
    public name = "Two way binding";
   
    constructor() { }
    ngOnInit(): void {
    }
  }

```
- To wark above code we need to tell angular for working with `ngModel`, because it is in another module, So we need to import it in `app.module.ts`.
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { EventComponent } from './event/event.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

![image](https://user-images.githubusercontent.com/35020560/91189774-79f7d700-e710-11ea-9148-783a1b5fb3d5.png)

