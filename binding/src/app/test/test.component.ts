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
    
  `,
  //styleUrls: ['./test.component.css']
  styles:[]
})
export class TestComponent implements OnInit {

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
