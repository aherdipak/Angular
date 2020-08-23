  import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-test',
    //templateUrl: './test.component.html',
    template:`
      <h2> Welcome {{name}} </h2>
      <h2> {{2+2}} </h2>

      <h2> {{"Hello "+name}} </h2>

      <h2> {{"Length: "+name.length}} </h2>
      <h2> {{"Uppercase: "+name.toUpperCase()}} </h2>

      <h2> {{"Method call: "+helloUser()}} </h2>

      <!--<h2> {{a=2+2}} </h2> Error: Bindings cannot contain assignments -->

      <!--<h2>{{window.location.href}}</h2>-->
      <h2>{{siteUrl}}</h2>


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
      <!-- aleternate property binding -->
      <input type="text" bind-disabled ="isDisabled" value="Deepak">
      
      <!-- Binding classes in html -->
        <h2 class="text-success"> Welcome in angular world </h2>

        <h2 [class]="successClass"> Assign dynamic class to HTML element </h2>

        <h2  class="text-special" [class]="successClass" > Using both class attribute and class binding </h2>

        <h2 [class.text-danger]="hasError"> Class Binding using expression </h2>

        <h2 [ngClass]="messageClasses"> ngClass directive: add multiple classes conditionally </h2>

        <!--Style Binding -->
        <h2 [style.color]="'orange'"> Style Binding </h2>

        <h2 [style.color]="hasError?'green':'red'"> using condiitonal operator for Style Binding </h2>

        <h2 [style.color]="highLightColor"> Assign component class property for style binding </h2>

        <h2 [ngStyle]="ngStylesProp"> Style binding using ngStyle directive</h2>

    `,
    //styleUrls: ['./test.component.css']
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
    public highLightColor = "pink";
    public ngStylesProp = {
      color: "blue",
      fontStyle:"italic"
    }
    public hasError = true;
    public isSpecial = true;
    public messageClasses = {
      "text-success": !this.hasError,
      "text-danger": this.hasError,
      "text-special":this.isSpecial
    }
    
    public successClass = "text-success";
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
