# Property Binding

## Attributes Vs Properties
  1) Attributes and properties are not the same.
  2) Attributes are defined by html.
  3) Properties are defined by DOM(Document object model).
  4) Attributes initialise DOM properties and then they are done.
  5) Attributes values cannot change once they initialise but properties values can change.
  
   ![image](https://user-images.githubusercontent.com/35020560/90977709-fea5f200-e564-11ea-959a-e4bc091453e8.png)
    
   - If you inspect above image element and in the console type ```$0.getAttribute('value');``` we can see "deepak".
    
   - `$0` reprsents current element.
    
   - In below image if i change value of textbox and repeat the same commands attributes still retuen "deepak" but the value property returns "Angular coading".
    
   - So the attributes did not changes but the value pro is change.
    
   ![image](https://user-images.githubusercontent.com/35020560/90977695-e59d4100-e564-11ea-9589-2b2576ce6e52.png)
   
  6) HTML attribute values specifies the initial value.
  7) DOM values property is the current value so the value attribute is the same where as the value property change.
  
  eg. Let's create new property and bind this to html id property in input element.
  
  ```
      import { Component, OnInit } from '@angular/core';
      @Component({
        selector: 'app-test',
        template:`
          <h2> Welcome {{name}} </h2>
          <input type="text" [id] = "myId" value="Deepak">
        `,
        styles:[]
      })
      export class TestComponent implements OnInit {

        public myId = "testId";
       
        constructor() { }
        ngOnInit(): void {
        }
      }

  ```
  - Here we can use interpolation as well to bind id of interpolation element.
  
  ```
     <input type="text" id = "{{myId}}" value="Deepak">
  ```
  
  #### Why do we need property binding?
  
  - There is limitation with interpolation, It can work with string only.
  - eg. Consider disabled attr of input element. By default it is always set to `false`. Sp that input textbox is always enabled.
  ```
    <input type="text" disabled value="Deepak">
  ```
  Output : disabled textbox
  
  ```
    <input type="text" disabled="false" value="Deepak">
  ```
  Output : still disabled textbox
  - setting the value `disabled="false"` has not effect at all. and because of this `boolean`value attribute needs.
  - true or false interpolation doesn't work. even we write below code it does't work.
   ```
      <input type="text" disabled="{{false}}" value="Deepak">
   ```
  
  - So the solution here is the property binding as bellow.
  ```
    <input type="text" [disabled]="false" value="Deepak">
    <input type="text" [disabled] ="true" value="Deepak">
  ```
  - For dyanamic value
  ```import { Component, OnInit } from '@angular/core';
      @Component({
        selector: 'app-test',
        template:`
          <h2> Welcome {{name}} </h2>
          <input type="text" [id] = "myId" value="Deepak">
          <br/>
          <input type="text" id = "{{myId}}" value="Deepak">
          <br/><br/>
          <input type="text" disabled value="Deepak">
          <input type="text" disabled="false" value="Deepak">
          <input type="text" disabled="{{false}}" value="Deepak">
          <br/><br/>
          <input type="text" [disabled]="false" value="Deepak">
          <input type="text" [disabled] ="true" value="Deepak">
          <input type="text" [disabled] ="isDisabled" value="Deepak">

        `,
        styles:[]
      })
      export class TestComponent implements OnInit {
        public isDisabled = false;
        public myId = "testId";
        public name = "Deepak";
        public siteUrl = window.location.href;
        helloUser(){
          return "Welcome in method..!!"
        }
        constructor() { }
        ngOnInit(): void {
        }
      }

  ```
  - Alternate syntax for property binding.
  ```
    <input type="text" bind-disabled ="isDisabled" value="Deepak">
  ```
  
# Binding Classes
Binding classes in HTML element.


 1) We have some classes in bellow css code and some HTML element to bind classes to it.

  ```
      @Component({
        selector: 'app-test',
        template:`
          <h2> Welcome {{name}} </h2>
          <!-- Binding classes in html -->
          <h2 class="text-success"> Welcome in angular world </h2>

        `,
        styles:[`
            .text-success{
              color: green;
            }
            .text-danger{
              color: red;
            }
            .text-special{
              font-style: italic;
            }
        `]
      })
  ```
  - To assign class dynamically to the HTML element we have to write below code.
  ```
      import { Component, OnInit } from '@angular/core';

      @Component({
        selector: 'app-test',
        template:`
          <h2> Welcome {{name}} </h2>

            <!-- Binding classes in html -->
            <h2 class="text-success"> Welcome in angular world </h2>
            <h2 [class]="successClass"> Assign dynamic class to HTML element </h2>

        `,
        styles:[`
            .text-success{
              color: green;
            }
            .text-danger{
              color: red;
            }
            .text-special{
              font-style: italic;
            }
        `]
      })
      export class TestComponent implements OnInit {

        public successClass = "text-success";

        constructor() { }
        ngOnInit(): void {
        }
      }

  ```
  
  #### Q. What happens when we use both class binding and class attribute in the same html element.
 
 ```
      <h2  [class]="successClass" class="text-special"> Using both class attribute and class binding </h2>
 ```
 - Look at browser by inspecting above element you can see both class will apply to the html element.
 
 #### Expression based class binding
 ```
  import { Component, OnInit } from '@angular/core';

   @Component({
     selector: 'app-test',
     template:`
       <h2> Welcome {{name}} </h2>
       <!-- Binding classes in html -->
         <h2 class="text-success"> Welcome in angular world </h2>

         <h2 [class]="successClass"> Assign dynamic class to HTML element </h2>

         <h2  class="text-special" [class]="successClass" > Using both class attribute and class binding </h2>

         <h2 [class.text-danger]="hasError"> Class Binding using expression </h2>

     `,
     styles:[`
         .text-success{
           color: green;
         }
         .text-danger{
           color: red;
         }
         .text-special{
           font-style: italic;
         }
     `]
   })
   export class TestComponent implements OnInit {

     public hasError = true;
     public successClass = "text-success";
     constructor() { }
     ngOnInit(): void {
     }
   }

 ```
 - It is possible to toggle the class by changing the hasError property. If we change the hasError property to false you can see that `text-danger` class will no longer exist and text is in black color.
 
 - This works fine when we want to conditionally appply single class. But if we want to conditionally apply multiple classes.
 - To handle this angular provides us `ngClass` directive.
 - The `directive` is nothing but custom HTML attribute that angular provides.
 ```
   import { Component, OnInit } from '@angular/core';
   @Component({
     selector: 'app-test',
     template:`
       <h2> Welcome {{name}} </h2>

       <!-- Binding classes in html -->
         <h2 class="text-success"> Welcome in angular world </h2>

         <h2 [class]="successClass"> Assign dynamic class to HTML element </h2>
         <h2  class="text-special" [class]="successClass" > Using both class attribute and class binding </h2>

         <h2 [class.text-danger]="hasError"> Class Binding using expression </h2>

         <h2 [ngClass]="messageClasses"> ngClass directive: add multiple classes conditionally </h2>

     `,
     styles:[`
         .text-success{
           color: green;
         }
         .text-danger{
           color: red;
         }
         .text-special{
           font-style: italic;
         }
     `]
   })
   export class TestComponent implements OnInit {

     public hasError = true;
     public isSpecial = true;
     public messageClasses = {
       "text-success": !this.hasError,
       "text-danger": this.hasError,
       "text-special":this.isSpecial both classes will apply.
       
     }
     constructor() { }
     ngOnInit(): void {
     }
   }
 ```
 - In above code you can see `hasError` and `isSpecial` both properties are `true` so firstly `text-danger` and then `text-special` both classes will apply.
 
 
# Binding Styles
Binding style in HTML element.

1) Style is very similar to class binding.
```
  <h2 [style.color]="'orange'"> Style Binding </h2>
```
2) It is possible to use conditional operator to assign value to css property.
```
 <h2 [style.color]="hasError?'green':'red'"> using condiitonal operator for Style Binding </h2>
```
3) You can assign component class property during binding.
```
 <h2 [style.color]="highLightColor"> Assign component class property for style binding </h2>
 
 export class TestComponent implements OnInit {
   public highLightColor = "pink";
 }
 
```
4) To apply multiple style we need to use `ngStyle` directive.
```
 import { Component, OnInit } from '@angular/core';
 @Component({
   selector: 'app-test',
   template:`
     <h2> Welcome {{name}} </h2>

       <!--Style Binding -->
       <h2 [style.color]="'orange'"> Style Binding </h2>

       <h2 [style.color]="hasError?'green':'red'"> using condiitonal operator for Style Binding </h2>

       <h2 [style.color]="highLightColor"> Assign component class property for style binding </h2>

       <h2 [ngStyle]="ngStylesProp"> Style binding using ngStyle directive</h2>
   `,
   styles:[]
 })
 export class TestComponent implements OnInit {
   public highLightColor = "pink";
   public ngStylesProp = {
     color: "blue",
     fontStyle:"italic"
   }
   public hasError = true;
   constructor() { }
   ngOnInit(): void {
   }
 }

```
- Now if you look at browser you can see text with blue color with italic style.

![image](https://user-images.githubusercontent.com/35020560/90982309-fa3d0180-e583-11ea-886d-db6fd8fdebed.png)


# Binding Of Event's
Basic's of mouse click and keyboard event's

- So far we had look at data binding where the data flow was from the component class to the component template.

![image](https://user-images.githubusercontent.com/35020560/91059903-e955c400-e647-11ea-9cf8-33b8ca73b264.png)

- When we update class property then we will get template updated as well.
- But sometime to respond user events such as `mouse click's` or `keyboard events` we need the data flow other direction as well. i.e. from template to class.
- So to capture events we have to make use of event binding.
- *Eg.* Let's say we have button, When user clicks on it. We want to display "Welcome in Angular" massage in console.
  for that we need to listen click event on this button.
```
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-event',
  template:`
    <h2> Welcome {{name}} </h2>
    <button (click)="onClick()"> click here</button>
  `,
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  public name = "in event binding";

  onClick(){
    console.log('Welcome to angular');
  }
  constructor() { }
  ngOnInit(): void {
  }
}
```
- Now if you head over to the browser open the console and click the button you will see "Welcome in Angular" massage in console.

- It is also possible to set properties value when we click on mouse.
```
  import { Component, OnInit } from '@angular/core';
  @Component({
    selector: 'app-event',
    template:`
      <h2> Welcome {{name}} </h2>
      <button (click)="onClick()"> click here</button>
      {{message}}
    `,
    styleUrls: ['./event.component.css']
  })
  export class EventComponent implements OnInit {

    public name = "in event binding";
    public message = "";
    onClick(){
      console.log('Welcome to angular');
      this.message = 'Welcome to angular';
    }
    constructor() { }
    ngOnInit(): void {
    }
  }

```

![image](https://user-images.githubusercontent.com/35020560/91062316-2ae76e80-e64a-11ea-92c2-250c72eb206d.png)

- Sometime we also want information about click event itself.
- *Eg.* Information about click event. for that you have to simply send parameter `$event`
- `$event` this is the special variable of angular, This will give you all the information of DOM event that was raised.
```
  import { Component, OnInit } from '@angular/core';
  @Component({
    selector: 'app-event',
    template:`
      <h2> Welcome {{name}} </h2>
      <button (click)="onClick()"> click here</button>
      {{message}}

      <button (click)="onClickEvent($event)"> event</button>
    `,
    styleUrls: ['./event.component.css']
  })
  export class EventComponent implements OnInit {

    public name = "in event binding";
    public message = "";
    
    onClick(){
      console.log('Welcome to angular');
      this.message = 'Welcome to angular';
    }
    onClickEvent(event){
      console.log(event);
    }
    constructor() { }
    ngOnInit(): void {
    }
  }

```
- Now if you go to the browser and click event button and look at the console it will show you all the information about raised event.
![image](https://user-images.githubusercontent.com/35020560/91063397-9251ee00-e64b-11ea-82e3-410fe721b65e.png)

- If you want to know the event, You can get this using `event.type`.
- Sometime while working with event binding a separate handler may not be necessary
- *Eg.* In above method body code is very small, so instead of writing method we can write this code in html itself.
```
<button (click)="message= 'Welcome Deepak'"> code in HTML with event</button>
```


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


