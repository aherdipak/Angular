# Angular Interpolation

1) By Interpolation you can bind data from the class to the template.
2) Please look into binding project: [click here](https://github.com/aherdipak/Angular/tree/master/binding)
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
     
     If you look into the browser this time the name is come from the class property.
     
     This is the interpolation which is the simplast way to bind data from the class to template.
     
   - Mathematical calculation `<h2> {{2+2}} </h2>`
   - String concatination `<h2> {{"Hello "+name}} </h2>`
   - Length of string  `<h2> {{"Length: "+name.length}} </h2>`
   - Uppercase `<h2> {{"Method call: "+helloUser()}} </h2>`
   ```
       export class TestComponent implements OnInit {

        public name = "Deepak";

        helloUser(){
          return "Welcome in method..!!"
        }
        constructor() { }

        ngOnInit(): void {
        }

      }
   ```
   
   #### Some of the things you can not do:
   1) Assign the expression to variable.
      `<h2> {{a=2+2}} </h2>` -> Error: Bindings cannot contain assignments
      
      You can not assign the result of an expression to a variable within double querly bracess.
      
      So assignments are not possible.
      
   2) Access to global variables such as windows, screen and so on..
      
      So if you try to find out url of current page using `<h2>{{window.location.href}}</h2>` you will get an error `Property 'window' does not exist`
      
      If you want to access then you can do it in the class and them bind it to the template.
      ```
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

           `,
           //styleUrls: ['./test.component.css']
           styles:[]
         })
         export class TestComponent implements OnInit {
           public siteUrl = window.location.href;

           helloUser(){
             return "Welcome in method..!!"
           }
           constructor() { }

           ngOnInit(): void {
           }
         }
      
      ```
      
      
     
