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




 

  
