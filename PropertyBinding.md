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
  ```<input type="text" disabled value="Deepak">
  ```
  Output : disabled textbox
  
  ```<input type="text" disabled="false" value="Deepak">
  ```
  Output : still disabled textbox
  - setting the value `disabled="false"` has not effect at all. and because of this `boolean`value attribute needs.
  - true or false interpolation doesn't work. even we write below code it does't work.
   ```<input type="text" disabled="{{false}}" value="Deepak">
  ```
  
  - So the solution here is the property binding as bellow.
  ```<input type="text" [disabled]="false" value="Deepak">
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
  ```<input type="text" bind-disabled ="isDisabled" value="Deepak">
  ```
  
 
  
