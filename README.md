# Flight Tracker Project

### Project Requirements

### Overview
'Event Tracker' is a broad term for anything that keeps track of information over time. Examples of these applications are 'Mint' (financial tracking) and 'MyFitnessPal' (diet and exercise tracker). These are very involved applications with a huge feature set. You are embarking on a weekend project that you may or may not come back to afterwards, thus we would caution you to limit your scope significantly. Examples of limited scope would be 'Gas Tracker' (keep track of your fill ups and total mileage to determine dollar/gallon in your car) or 'Timesheet' (track time in and time out to calculate total hours at some rate of pay).  

Last weekend we wrote the backend for our API that performed full CRUD on an event object. We are going to pick up where we left off and build a front end to manipulate and display this data to the client.

### Learning Objectives
* Configure an Angular application
* Use:
  * Components
  * Services
  * Directives
* Send / receive JSON  
* Send asynchronous request to Java controller with `http`

### Where to start?
1. Add angular functionality. Configure your application by bringing in dependencies and setting up the file structure.

2. Send asynchronous requests to your server using `http`.

3. Use your service in your components controller to display your data.

4. Build up Create/Read/Update/Delete functionality on the client.  

5. Add functionality. Once your presentation for your get is working, add a function that uses the response data to present the data in some other form (For instance, total all of the hours you worked and calculate the amount of money you are owed. This would involve retrieving all of the "PunchCard" records, totaling their values, and displaying the total multiplied times your hourly rate somewhere on the page.)

### Goal
Your objective for this project should be to do as much as you can. That is not to say as many features, but as much as you actually understand. Do not move onto the next step until you actually know what you just did and feel comfortable with what is happening. If you reach a point and are confused about what you are doing, or what you have done, ask questions, look for resources, or start over on that piece to ensure that you are comfortable with it.  For some of you DOM manipulation will be tricky to conceptualize, others will struggle with `http` and the nature of asynchrony/promises, and some will have a hard time conceptualizing JSON as a representation of objects and feel uncomfortable routing with it. All of these difficulties are understandable and the reason we are doing this project is to struggle through them.

### Overview:
This program is a simple flight event tracker, using Spring Boot, Spring Data JPA, and RestAPI the project currently has no front-end.

### How to run:
It must be run within the Spring Tool Suite IDE or AWS IP address of http://18.223.75.248:8080/EventTracker . Also, the user may verify mappings function correctly by utilizing Postman.

### API Mapping List


| CRUD Op. | HTTP Verb | URI                  | Request Body | Response Body |
|----------|-----------|----------------------|--------------|---------------|
| Read     | GET       | `/api/flights`      |              | Collection of representations of all flights |
| Read     | GET       | `/api/flights/2`   |              | Gets Flight with ID of '2' |
| Create   | POST      | `/api/flights`      | Representation of a new flight | Returns the created flight|
| Update   | PUT       | `/api/flights/2`   | Representation of a new version of flight `2` | Returns updated version of Flight 2 |
| Delete   | DELETE    | `/api/books/2`   |              | true or false |


### Technologies used:

Java, Java Persistence API, Spring MVC & STS, Gradle, SQL, MySQL Workbench, Atom, Git, GitHub, Spring Data JPA, Spring Boot, RestAPI, JSON, & Postman

### Topics implemented:

RestFul Services

Spring Data JPA

Data Serialization

HTTP Request & Response Objects

Object-Relational Mapping (ORM).

Relational Database: SQL Database creation using MySQL Workbench.

Java Libraries: SQL, List, and handling exceptions.

Object-Oriented Programming in Java: Abstraction, Polymorphism, Inheritance, and Encapsulation.

Test Driven Development using JUNIT 5 Juniper.

Angular 

Spring Security

### Lessons learned:

* Implemented understanding of RESTful Api's application with the use of Repositories and Services.
* Created tables in MySQL workbench, learned to be mindful of table item types, specially working with LocalDateTime, it is imperative to specify the correct data type both in SQL and in Java Entity to prevent conflicts.
* Entity mapping for bean creation, I spend a lot of time debugging my entity, making sure that Spring JPA could communicate appropriately with my database.

