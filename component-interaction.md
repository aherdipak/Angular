# Angular Component Interaction

- AppComponent is the parent componenet and TestComponent is the child component. So far we have been working independently but in angular application sometime you are going come across a scenario where the components interact/ communicate eachother.
- The parent componenet might send some data to child component and child componenet might also send data to perent component.
![image](https://user-images.githubusercontent.com/35020560/92320648-b85e9180-f040-11ea-8c0c-828635687159.png)

- They are interact using `@Input()` and `@Output()` dicorators.
- Using `@Input()` decorator the child can accept input from parent component and using the `@Output()` decorator the child will send out to parent to indicate something.

### Q) We will send a name from the AppComponent to the TestComponent and in the TestComponent you are going to display "Hello Deepak" similarly we are going to send a message "Hey Angular" from that TestComponent to the AppComponent and display that message in AppComponent?

![image](https://user-images.githubusercontent.com/35020560/92320641-a7158500-f040-11ea-8911-023e21aefde5.png)



