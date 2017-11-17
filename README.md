# Grocery-list app
This application uses Spring Boot, AngularJS with Material Design and an H2 file-based database.

## Running and building the application

You will need to have Java 1.8 and Maven installed before beginning (Note: ensure that you are using Java 1.8 and not 1.9).

Open the project through command line or in an IDE of your choice (Spring Tool Suite or IntelliJ will work best).

The application uses Maven and the front-end Maven plugin to build both the back-end and front-end.
Run the following commands:
```
mvn clean install
```

To run the application, start the Application.java in your IDE or in command line by running the JAR:
```
java -jar target/grocery-list-1.0-SNAPSHOT.jar
```

Then navigate your browser to http://localhost:8080/
