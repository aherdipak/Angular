import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template:`
          <h2 *ngIf="true">Welcome in ngIf true</h2>
          <h2 *ngIf="false">Welcome in ngIf false</h2>
          <h2 *ngIf="displayName">ngIf using property</h2>
          <br/><br/><br/>
          <h2 *ngIf="displayName; else elseBlock">Welcome in IF</h2>
          <ng-template #elseBlock>
             <h2>Welcome in else block</h2>
          </ng-template>
          <br/>
          <h2>------ Another syntax for ngIf ------ </h2>
          <div *ngIf="displayName; then thenBlock; else elseBlock"></div>
          <ng-template #thenBlock> <h2>Welcome in then block</h2></ng-template>
          <ng-template #elseBlock> <h2>Welcome in else block</h2></ng-template>
          
          <h2>----- Another syntax for ngSwitch -----</h2>
          <div [ngSwitch]="colour">
              <div *ngSwitchCase="'red'"> Red Colour </div>
              <div *ngSwitchCase="'blue'"> blue Colour </div>
              <div *ngSwitchCase="'yellow'"> yellow Colour </div>
              <div *ngSwitchDefault> Default Colour </div>
          </div>

          <h2>----- Another syntax for ngFor -----</h2>
          <div *ngFor="let color of colors">
            <h4>{{color}}</h4>
          </div>

          <h4>----- ngFor get Index -----</h4>
          <div *ngFor="let color of colors; index as i">
            <h4>{{i}} {{color}}</h4>
          </div>

          <h4>----- ngFor find First element -----</h4>
          <div *ngFor="let color of colors; first as f">
            <h4>{{f}} {{color}}</h4>
          </div>

          <h4>----- ngFor find Last element -----</h4>
          <div *ngFor="let color of colors; last as l">
            <h4>{{l}} {{color}}</h4>
          </div>

          <h4>----- ngFor find Odd element -----</h4>
          <div *ngFor="let color of colors; odd as o">
            <h4>{{o}} {{color}}</h4>
          </div>

          <h4>----- ngFor find Even element -----</h4>
          <div *ngFor="let color of colors; even as e">
            <h4>{{e}} {{color}}</h4>
          </div>

  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public colors = ["red","yellow","blue","green"];
  public colour = "blue";

  displayName = true;
  constructor() { }

  ngOnInit(): void {
  }

}
