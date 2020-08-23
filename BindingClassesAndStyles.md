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
  - To assign class dynamically to the HTML element we are gona write below code.
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



 
 
