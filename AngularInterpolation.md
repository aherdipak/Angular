# Angular Interpolation

1) By Interpolation you can bind data from the class to the template.
2) Please look into binding project: [click here]()
   - How to bind dynamic value in template?
     Just create property in class and assign value to them and get this in template by using `{{name}}`.
     This sytax of a property in angular known as interpolation.
     ```
      @Component({
        selector: 'app-test',
        //templateUrl: './test.component.html',
        template:`
          <h2> Welcome {{name}} </h2>
        `,
        //styleUrls: ['./test.component.css']
        styles:[]
      })
      export class TestComponent implements OnInit {

        public name = "Deepak";

        constructor() { }

        ngOnInit(): void {
        }

      }
     ```
     By using interpolation you are asking angular to evaluate the content inside the querly braces and display the value when the component is render in the browser.
