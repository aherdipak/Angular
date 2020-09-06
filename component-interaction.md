# Angular Component Interaction

- AppComponent is the parent componenet and TestComponent is the child component. So far we have been working independently but in angular application sometime you are going come across a scenario where the components interact/ communicate eachother.
- The parent componenet might send some data to child component and child componenet might also send data to perent component.
![image](https://user-images.githubusercontent.com/35020560/92320648-b85e9180-f040-11ea-8c0c-828635687159.png)

- They are interact using `@Input()` and `@Output()` dicorators.
- Using `@Input()` decorator the child can accept input from parent component and using the `@Output()` decorator the child will send out to parent to indicate something.

#### Q) We will send a name from the AppComponent to the TestComponent and in the TestComponent you are going to display "Hello Deepak" similarly we are going to send a message "Hey Angular" from that TestComponent to the AppComponent and display that message in AppComponent?

![image](https://user-images.githubusercontent.com/35020560/92320641-a7158500-f040-11ea-8911-023e21aefde5.png)

1) Sending data from AppComponent to TestComponent.

##### /app.component.ts
```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component-interaction';
  public name = "Deepak";
}

```
##### /app.component.html
```
<style>
  h2 {text-align: center;}
  h3 {text-align: center;}
  p {text-align: center;}
  div {text-align: center;}
  </style>

<h2>Welcome in {{ title }}</h2>
<app-test [parentData]="name"></app-test>
```
- Now we are sending this data to TestComponenet.

2) Receive data from AppComponenet.

##### /test.component.ts
```
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
      <h3>Test Component</h3>
      <h3>{{"Hello "+parentData}}</h3>
  `,
  styles: [`
      h2, h3 {text-align: center;}
  `]
})
export class TestComponent implements OnInit {

  @Input() public parentData;

  constructor() { }

  ngOnInit(): void {
  }
}

```
- Here we need to inform TestComponent about parentData property, Hey this is input property and you will receive this value from the parent by setting `@Input()` before parentData property.
- Sometime you might want to use different property name than the parent component uses for that we can specify alias with the input decorator.

```
@Input('parentData') public name;
```

3) Sending data from child component to parent component.

- This is slightly different than sending data from parent comp to child comp. Because in parent comp html we have the child comp selector so we can easily bond the data bellow way.
```
<app-test [parentData]="name"></app-test>
```
- But in child comp you do not have the parent comp selector so you can not send data same way. To send data from child comp to parent comp is using events.

##### /test.component.ts
```
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
      <h3>Test Component</h3>
      <!--<h3>{{"Hello "+parentData}}</h3>-->
      <h3>{{"Hello "+name}}</h3>

      <button (click) = "fireEvent()">Send Event</button>
  `,
  styles: [`
      h2, h3 {text-align: center;}
  `]
})
export class TestComponent implements OnInit {

  //@Input() public parentData;
  @Input('parentData') public name;

  @Output() public childEvent = new EventEmitter();

  fireEvent(){
    this.childEvent.emit("Hey Angular");
  }
  constructor() { }

  ngOnInit(): void {
  }
}
```

4) Capture data in the parent component.

##### /app.component.html
```
<style>
  h2 {text-align: center;}
  h3 {text-align: center;}
  p {text-align: center;}
  div {text-align: center;}
  </style>

<h2>Welcome in {{ title }}</h2>
<h2>{{message}}</h2>
<app-test (childEvent)="message=$event" [parentData]="name"></app-test>

```

##### /app.component.ts

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component-interaction';
  public name = "Deepak";
  public message = "";
}

```

