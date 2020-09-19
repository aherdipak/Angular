# Http, Observables and RxJs in Angular

## 1) Http Mechanism:

![image](https://user-images.githubusercontent.com/35020560/93670311-2af75480-fab8-11ea-9e12-e573c1c541cf.png)

- In services we have seen services provides data and share with employeeList and employeeDetail components.
- But now we want data should be fetch from the server for that we make an Http request.
- The Http Get request will help a web api or a webservice which will fetch the data from a DB and send it back as an Http response.
- Respose we get back from the Http call is an `Observable`.
- Now employeeService needs to cast this observable into an array of emplyees and return same to the employeelist and employeeDetail components.
- So Http mechanism is just two steps:
1) Send Http request.
2) Receive and process the Http response.

#### Q) What is observable and How to work with them?

- To undestand this we consider bellow example of newspaper company.
![image](https://user-images.githubusercontent.com/35020560/93669983-4a40b280-fab5-11ea-85df-38acb8b9c36b.png)

- We have a news paper company and this company has source of information.
- The makes request to the source to sends an every day news.
- As a respose to the companies request source sends a sequence of infomation throughout the day. Once the information received the first thing news paper company has to do.
- Convert the info into to the newspaper format and ready to destribute to the subscribed houses.
- After destribution, Itis in hands of houses to modify data or not.

- In our employeeservice application, The newspaper company is like employeeService as shown in below image.

![image](https://user-images.githubusercontent.com/35020560/93670185-08b10700-fab7-11ea-9ddd-39dc10f9984f.png)
