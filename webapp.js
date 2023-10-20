//Brennan Catalan   
//Professor Bradley Watson
//Franklin University
// ITEC 660


//If the code runs on Heroku, assign a dynamic port number
let port = process.env.PORT;
//Require express
const express = require ("express");






//app object
const app = express();

//main page
app.get("/", function(req,res) { // HTML content is passed directly into the res.send function for simplicity. Ideally, an html file would be sent instead of raw HTML data.
	res.send ('  <Title >Home Page</Title> <h style ="color:White">Welcome to the home page</h>  <ul style ="background-color:white; border-radius:10px; width:10%; opacity:75%;"> <li>Brennan Catalan</li> <li>Professor Bradley Watson</li> <li> ITEC 660</li> <li>Franklin University</li> <li>10/13/2023</li> </ul> <body style="background-color:Gray"></body> <p style="color:white">Navigation Links Below:</p> <a href="https://hw4-itec660-ef5c8968ea15.herokuapp.com/bio" style = "color:green; font-weight:bolder">Bio</a> <br>  <a href="http://localhost:8002/contact" style = "color:green; font-weight:bolder">Contact</a>' );
   
    
});

//contact page
app.get("/contact", function(req,res) {
	res.send ('<h style ="color:White">Contact</h> <ul style ="background-color:white; border-radius:10px; width:20%; opacity:75%;">  <li>Name: Brennan Catalan</li> <li>Email: catala04@email.franklin.edu</li> <li>Phone: 513-571-2592</li>  </ul>  <body style="background-color:Gray"></body>  <br> <a href="http://localhost:8002/bio" style = "color:green; font-weight:bolder">Bio</a> <br>  <a href="http://localhost:8002/" style = "color:green; font-weight:bolder">Home</a>');
});

//Bio page
app.get("/bio", function(req,res) {
	res.send ('<h style ="color:White">Welcome to the bio page.</h> <p style="background-color:black; color:green; opacity:40%; border-radius:15px; width:25%; padding-left:10px;" >This is a sample bio page for Brennan Catalan running on a node.js server. Brennan Catalan is a 22 year old student in the Franklin University ITEC M.S program, currently enrolled in ITEC 660 with Professsor Bradley Watson. He works full time as a Computer Technician for the West Clermont Local School District. </p> <body style="background-color:Gray"></body>  <br> <a href="http://localhost:8002/" style = "color:green; font-weight:bolder">Home</a> <br>  <a href="http://localhost:8002/contact" style = "color:green; font-weight:bolder">Contact</a> ');
    
});

app.listen(port) // Set the app to listen on port 8002.
