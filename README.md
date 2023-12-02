# NotesAppAPI
Project Structure:

project-root/
|-- models/
|   |-- user.model.js
|   |-- note.model.js
|-- routes/
|   |-- user.routes.js
|   |-- note.routes.js
|-- controllers/
|   |-- user.controller.js
|   |-- note.controller.js
|-- db/
|   |-- dbconnection.js
|-- index.js
|-- package.json
|-- README.md



Features
User APIs


Sign Up

Endpoint: /user/signup
Description: Allows users to create an account with their name, email, password, and age.



Sign In

Endpoint: /user/signin
Description: Allows users to sign in with their email and password.







Update User

Endpoint: /user/:id
Description: Allows users to update their information.





Delete User
Endpoint: /user/:id
Description: Allows users to delete their account.



Search User (Name starts with "a" and age < 30)
Endpoint: /user/search-like
Description: Searches for users whose name starts with "a" and age is less than 30.



Search User (Age between 20 and 30)
Endpoint: /user/search-age
Description: Searches for users whose age is between 20 and 30.



Search User (By List of IDs)
Endpoint: /user/search-in
Description: Searches for users with IDs in a specified list.



Search User (3 Oldest Users)
Endpoint: /user/search-oldest
Description: Retrieves the three oldest users.


Notes APIs


Add Note
Endpoint: /notes/add
Description: Allows users to add a note with a title and content.


Delete Note (Note creator only)
Endpoint: /notes/:id
Description: Allows users to delete their own notes.


Update Note (Note owner only)
Endpoint: /notes/:id
Description: Allows users to update their own notes.


Get All Notes
Endpoint: /notes/all
Description: Retrieves all notes.


Get All Notes with Owner Information
Endpoint: /notes/all-with-owner
Description: Retrieves all notes with information about the note owners.




Usage
Provide examples and details on how to use your APIs. Include sample requests and responses.

API Documentation
Document your APIs using Swagger or any other API documentation tool. Include a link or details on how to access the documentation.

Dependencies
List the main dependencies used in your project.

Express
Sequelize
Contributing
Provide guidelines for contributors and how they can contribute to the project.

License
This project is licensed under the MIT License.
