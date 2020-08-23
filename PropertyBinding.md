# Property Binding

## Attributes Vs Properties
  1) Attributes and properties are not the same.
  2) Attributes are defined by html.
  3) Properties are defined by DOM(Document object model).
  4) Attributes initialise DOM properties and then they are done.
  5) Attributes values cannot change once they initialise but properties values can change.
  
   ![image](https://user-images.githubusercontent.com/35020560/90977709-fea5f200-e564-11ea-959a-e4bc091453e8.png)
    
   If i inspect above image element and in the console type ```$0.getAttribute('value');``` we can see "deepak".
    
   `$0` reprsents current element.
    
   In below image if i change value of textbox and repeat the same commands attributes still retuen "deepak" but the value property returns "Angular coading".
    
   So the attributes did not changes but the value pro is change.
    
   ![image](https://user-images.githubusercontent.com/35020560/90977695-e59d4100-e564-11ea-9589-2b2576ce6e52.png)
