# Binding Classes
Binding classes in HTML element.


 1) We have some classes in bellow css code and some HTML element to bind classes to it.

  ```
      @Component({
        selector: 'app-test',
        template:`
          <h2> Welcome {{name}} </h2>
          <!-- Binding classes in html -->
          <h2 class="text-success"> Welcome in angular world </h2>

        `,
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
  ```
  - To assign class dynamically to the HTML element we are gona write below code.
    ```
        import { Component, OnInit } from '@angular/core';

        @Component({
          selector: 'app-test',
          template:`
            <h2> Welcome {{name}} </h2>

              <!-- Binding classes in html -->
              <h2 class="text-success"> Welcome in angular world </h2>
              <h2 [class]="successClass"> Assign dynamic class to HTML element </h2>

          `,
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

          public successClass = "text-success";

          constructor() { }
          ngOnInit(): void {
          }
        }

    ```
  #### Q.
