
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

- 
