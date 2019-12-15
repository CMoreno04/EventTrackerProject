# Event Tracker Project

## Flights

### Project Requirements>


### Overview

'Event Tracker' is a broad term for anything that keeps track of information over time. Examples of these applications are 'Mint' (financial tracking) and 'MyFitnessPal' (diet and exercise tracker). These are very involved applications with a huge feature set.

You are embarking on a weekend project that you may or may not come back to afterwards, thus we would caution you to limit your scope significantly. Examples of limited scope would be 'Gas Tracker' (keep track of your fill ups and total mileage to determine dollar/gallon in your car) or 'Timesheet' (track time in and time out to calculate total hours at some rate of pay).  

### Learning Objectives

* Create a JPA Project
  * Create a Java entity class POJO that models your database table.
  * Map your POJO using JPA.

* Configure a Spring Boot app to publish a REST API.
  * Use Spring REST annotations.
  * Use Spring Data JPA to perform all CRUD operations.
  * Send and receive JSON.

### Where to start?

1. Create a new STS workspace for your project.
   1. Initialize your workspace with `git`.
   1. Associate your workspace with a Github repo named **EventTrackerProject**.
1. Use MySQL Workbench to create a database schema with a single table.
   * Be sure to create a _appusername_@localhost account with a password for your database.
   * Include some initial sample data.
1. Create a Gradle Project for your JPA entity and tests.
1. Create a Spring Boot project for your REST API controller(s), service, and Spring Data JPA repository.
1. Create controller logic to perform the basic CRUD operations of a REST API.
   * Test these routes using *Postman*
1. Deploy your project to your EC2 instance, and link to it from your portfolio web site.

### Goal

Your objective for this project should be to do as much as you can. That is not to say as many features, but as much as you actually understand.

Do not move onto the next step until you actually know what you just did and feel comfortable with what is happening. If you reach a point and are confused about what you are doing, or what you have done, ask questions, look for resources, or start over on that piece to ensure that you are comfortable with it.  

Make sure to commit and push once you have an MVP with full CRUD operations working.

##### Stretch Goals
* JUnit tests for your repository, service, and controller layers.
* Supplemental tables, mappings, and controller routes for nested CRUD.

#### Grading

This is a graded project.  You are expected to have your project completed by noon on Monday.  

Your project must be pushed to a Github repo named **EventTrackerProject**.

You must include a _README.md_ that describes your program and how to access it on AWS.  This must document your REST route URIs and HTTP methods, and what they do.

You must also deploy your app to your AWS server.

You will be given either a pass or fail based on whether your code works given all of the following test conditions:

  * A new event object implements full CRUD.  
  * All interactions with the database are done so RESTfully.  

If the project does work with all of the above test conditions, you will be given a *1* for this week's project.

If the project does not work with the above test conditions, you will be given a *0* for this week's project.

If you get a zero on the project, you can upgrade to a score of *.5* if you turn in a working project by the start of class the following Monday morning AND notify an instructor that you wish to get partial credit.


#### Deployment
*  [Deploying Spring Boot Apps](bootDeployment.md)

<hr>



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

### Lessons learned:

* Implemented understanding of RESTful Api's application with the use of Repositories and Services.
* Created tables in MySQL workbench, learned to be mindful of table item types, specially working with LocalDateTime, it is imperative to specify the correct data type both in SQL and in Java Entity to prevent conflicts.
* Entity mapping for bean creation, I spend a lot of time debugging my entity, making sure that Spring JPA could communicate appropriately with my database.  
