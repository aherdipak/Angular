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
