# WetubeChallengeDay171819
Created with CodeSandbox

## Nomad Academy YouTube clone coding challenge Day 17~19
### criteria
- Using Mongoose, create a CRUD (Create, Read, Delete, Update) Application for Movies.
- Make all the six routes with their controllers.
- On the line 12 of models/Movie.js you have to create a complete schema for your movie model. The schema should have the fields id, title, year, rating, synopsis, genres[], uploadedAt
- All the fields are required.
- You need to validate that the year is a number.
- You need to validate that the title is at least 3 characters long.
- When I create a movie I should be redirected to the detail page of that movie.
- When a movie is not found I should see a 404.
- When I delete a movie I should be redirected to the home page.
- On the /search page I should be able to filter by greater than or equal ( $gte ) /search?year=1900 or /search?rating=9.6
