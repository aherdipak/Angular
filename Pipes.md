# Transforming Data Using Pipes

- pipes allow us to transform data before displaying them in the view.
- It transforms value for view only it does not change value of property in the class.

1) lowecase - It converts us to string to its lowercase representation.
2) uppercase
3) titlecase - first leter if every word will be capitalise.
```
<h2>{{name | lowercase}}</h2>
<h2>{{name | uppercase}}</h2>
<h2>{{message | titlecase}}</h2>
```
4) slice - Thia takes an argument
```
  <h2>{{name | slice:3}}</h2>
```
- This indicates from where string has to start.

```
  <h2>{{name | slice:3:5}}</h2>

```
- 5 is limit
- This will going to give you string from index 3 to 4 only, excluding 5.

5) json - it will pring json representation of object.

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h2>Welcome in {{ title }}</h2>
  <h2>{{name}}</h2>
  <h2>{{name | lowercase}}</h2>
  <h2>{{name | uppercase}}</h2>
  <h2>{{message | titlecase}}</h2>

  <h2>{{name | slice:3}}</h2>
  <h2>{{name | slice:3:5}}</h2>

  <h2>{{employee | json}}</h2>

  `,
  styles: [`
      h2 {text-align: center;}
      h3 {text-align: center;}
      p {text-align: center;}
      div {text-align: center;}
  `]
})
export class AppComponent {
  title = 'pipes';
  name = "Deepak";
  message = "Welcome in angular";
  employee ={
    "FirstName": "Robert",
    "LastName": "wick"
  }

}

```
6) number - This takes one argument in a specific format.
  ```
  <h2>{{4.567 | number : '1.2-3' }}</h2>
  ```
  - 1 : minimum number of integer digits.
  - 2 : minimum number of decimal digits.
  - 3 : maximum number of decimal digits.

```

  <h2>{{4.567 | number}}</h2>
  <h2>{{4.567 | number : '1.2-3' }}</h2>
  <h2>{{4.567 | number : '3.4-5' }}</h2>
  <h2>{{4.567 | number : '3.1-2' }}</h2>
  <h2>{{450.567 | number : '2.1-2' }}</h2>
```
7) percent - It shows percentage representation in browser.

```
<h2>{{0.25 | percent }}</h2>
<h2>{{0.35 | percent }}</h2>
```

8) currency - It shows currency on browser. By default currency is in USD.

```
  <h2>{{0.25 | currency }}</h2>
  <h2>{{0.25 | currency : 'GBP' }}</h2>
```
- If you want to show currency code instead of currency symbol

```
 <h2>{{0.25 | currency : 'GBP' : 'code' }}</h2>
```

9) date

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h2>Welcome in {{ title }}</h2>
  <h2>{{name}}</h2>
  <h2>{{name | lowercase}}</h2>
  <h2>{{name | uppercase}}</h2>
  <h2>{{message | titlecase}}</h2>

  <h2>{{name | slice:3}}</h2>
  <h2>{{name | slice:3:5}}</h2>

  <h2>{{employee | json}}</h2>

  <h2>{{4.567 | number}}</h2>
  <h2>{{4.567 | number : '1.2-3' }}</h2>
  <h2>{{4.567 | number : '3.4-5' }}</h2>
  <h2>{{4.567 | number : '3.1-2' }}</h2>
  <h2>{{450.567 | number : '2.1-2' }}</h2>

  <h2>{{0.25 | percent }}</h2>
  <h2>{{35 | percent }}</h2>

  <h2>{{0.25 | currency }}</h2>
  <h2>{{0.25 | currency : 'GBP' }}</h2>
  <h2>{{0.25 | currency : 'GBP' : 'code' }}</h2>

  <h2>{{date}}</h2>
  <h2>{{date | date : 'short'}}</h2>
  <h2>{{date | date : 'shortDate'}}</h2>
  <h2>{{date | date : 'shortTime'}}</h2>

  `,
  styles: [`
      h2 {text-align: center;}
      h3 {text-align: center;}
      p {text-align: center;}
      div {text-align: center;}
  `]
})
export class AppComponent {
  public title = 'pipes';
  public name = "Deepak";
  public message = "Welcome in angular";
  public employee ={
    "FirstName": "Robert",
    "LastName": "wick"
  }

  public date = new Date();

}

```

![image](https://user-images.githubusercontent.com/35020560/92322731-b1d81600-f050-11ea-8556-0c9b8907b64f.png)


