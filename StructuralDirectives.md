# What are structural directives?

- Structural directives are resposible for HTML page design.
- They allow us to add and remove HTML element from DOM.
- Some structural directives as follow
  - `ngIf`
  - `ngSwitch`
  - `ngFor`

- `ngIf` and `ngSwitch` are used to conditionally render HTML element.
- `ngFor` is used to render list of HTML elements.

- Please look into the `structural-directives` project

## ngIf directive:

```
<h2 *ngIf="true">Welcome in ngIf true</h2>
```

```
<h2 *ngIf="false">Welcome in ngIf false</h2>
```
- set `*ngIf="false"` and look at the browser, Text is not visible in browser.
- One more thing you have to keep in mind is the above `<h2>` element is removed from the DOM itself. (You can not view `<h2>` element in element spanner of browser).
- This is the basic usage of `*ngIf` directives.
- Let's assign property value in it.
```
  import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-test',
    template:`
            <h2 *ngIf="true">Welcome in ngIf true</h2>
            <h2 *ngIf="false">Welcome in ngIf false</h2>
            <h2 *ngIf="displayName">ngIf using property</h2>
    `,
    styleUrls: ['./test.component.css']
  })
  export class TestComponent implements OnInit {

    displayName = true;
    constructor() { }
    ngOnInit(): void {
    }
  }

```

### Q. How to implement else block for `ngIf` directive?

```
    <h2 *ngIf="displayName; else elseBlock">Welcome in IF</h2>
    <ng-template #elseBlock>
       <h2>Welcome in else block</h2>
    </ng-template>
```
- First it checks `displayName` is true, If it is true then the element which attach to the `ngIf` will be render in DOM.
- If `displayName` is false, then angular checks for else statement, If present it checks which HTML element needs to be render, In above code it is the `elseBlock` and `elseBlock` is a reference of block of HTML code.
- `ng-template` tag is basically like a container for other element that the `ngIf` directive can use to propertly add and remove lot's of HTML code from DOM.
![image](https://user-images.githubusercontent.com/35020560/91320376-0ff83400-e7db-11ea-9019-7c33c250fa7e.png)

#### Another syntax for `ngIf` directives

```
  <h2>Another syntax for ngIf</h2>
  <div *ngIf="displayName; then thenBlock; else elseBlock"></div>
  <ng-template #thenBlock> <h2>Welcome in then block</h2></ng-template>
  <ng-template #elseBlock> <h2>Welcome in else block</h2></ng-template>
```
- Here, If `displayName` is true then render `thenBlock` else render `elseBlock`

## ngSwitch directive:

- `ngSwitch` directive is similar to switch statement in any language.
- Difference is that you render HTML instead of executing some logic.

```
  import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-test',
    template:`
            <h2>----- Another syntax for ngSwitch -----</h2>
            <div [ngSwitch]="colour">
                <div *ngSwitchCase="'red'"> Red Colour </div>
                <div *ngSwitchCase="'blue'"> blue Colour </div>
                <div *ngSwitchCase="'yellow'"> yellow Colour </div>
                <div *ngSwitchDefault> Default Colour </div>
            </div>

    `,
    styleUrls: ['./test.component.css']
  })
  export class TestComponent implements OnInit {

    public colour = "blue";

    constructor() { }
    ngOnInit(): void {
    }
  }

```

## ngFor directive:

- `ngFor` directive help us to render list of element.
- `ngFor` directive is like for loop in any programming language.


```
 import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template:`
          <h2>----- Another syntax for ngFor -----</h2>
          <div *ngFor="let color of colors">
            <h4>{{color}}</h4>
          </div>

  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public colors = ["red","yellow","blue","green"];
  constructor() { }
  }
}

```
- If you want to get index then follow below code

```
 <h4>----- ngFor get Index -----</h4>
<div *ngFor="let color of colors; index as i">
  <h4>{{i}} {{color}}</h4>
</div>
```
- Keep in mind index start with zero.
- Just like index we also some more keywords to use specific to the ngFor directive
1) Find first element in array.

```
 <div *ngFor="let color of colors; first as f">
  <h4>{{f}} {{color}}</h4>
</div>
```

2) Find last element in array.

```
 <div *ngFor="let color of colors; last as l">
    <h4>{{l}} {{color}}</h4>
  </div>
```

3) Find odd element in array.

```
 <div *ngFor="let color of colors; odd as o">
  <h4>{{o}} {{color}}</h4>
</div>
```

4) Find even element in array.

```
<div *ngFor="let color of colors; even as e">
    <h4>{{e}} {{color}}</h4>
  </div>
```

![image](https://user-images.githubusercontent.com/35020560/92300234-fdb68c80-ef76-11ea-9079-4c76d9235ee5.png)



