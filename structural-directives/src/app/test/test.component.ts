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
          <h2>Another syntax for ngIf</h2>
          <div *ngIf="displayName; then thenBlock; else elseBlock"></div>
          <ng-template #thenBlock> <h2>Welcome in then block</h2></ng-template>
          <ng-template #elseBlock> <h2>Welcome in else block</h2></ng-template>
          
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  displayName = true;
  constructor() { }

  ngOnInit(): void {
  }

}
