# MovieFinder-Back

<h3>The MovieFinder is a simple API that allows users to retrieve movie data from an external API. It exposes a single endpoint that returns movie data based on a query string.</h3>

  
## Requirements:
<h3>To run this application, you will need the following software installed on your system:</h3>
<h3>Node.js</h3>
<h3>NPM (Node Package Manager)</h3>

## Usage

<h3>Open a terminal window</h3>
<h3>Clone this repository to your local machine</h3> 
  
```bash
  git clone https://github.com/wesley-franca/MovieFinder-API.git
``` 

<h3>navigate to the project directory</h3>

```bash
  cd MovieFinder-Back
``` 
  
<h3>Run the command the following command to install the project's dependencies</h3>

```bash
  npm install
``` 


<h3>Build the application</h3>
  
```bash
  npm run build
```
  
<h3>Start the application by running</h3>

```bash
  npm start
```

## Documentation

Route GET "/" is an status route 
return:
200 OK
Content-Type: application/json

{
    "message": "Hello world"
}

=============================

Route GET "/movies/:movie_name"

200 OK

{
  "Title": string,
  "Year": string,
  "Director":  string,
  "Actors":  string,
  "Plot":  string,
  "Poster":  string,
  "imdbRating":  string,
  "Id":  string
}

////////

400 bad request 

{
  "statusCode": 404,
  "message": "Filme não encontrado",
  "error": "Not Found"
}
