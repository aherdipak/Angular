# Binding Of Event's
Basic's of mouse click and keyboard event's

- So far we had look at data binding where the data flow was from the component class to the component template.

![image](https://user-images.githubusercontent.com/35020560/91057993-8fec9580-e645-11ea-9087-7eef1d49728b.png)

- When we update class property then we will get template updated as well.
- But sometime to respond user events such as `mouse click's` or `keyboard events` we need the data flow other direction as well. i.e. from template to class.
- So to capture events we have to make use of event binding.
*Eg.* Let's say we have button, When user clicks on it. We want to display "Welcome in Angular".
  for that we need to listen click event on this button.
