const express = require("express");
const app = express();

// CREATE A ROUTE HANDLER, ON THE HOME "ROUTE", ASSOCIATED WITH THE GET REQUEST
app.get("/", (req,res) => {res.send({hi: 'There'})});

// HEROKU INJECTS ENVIRONMENT VARIABLES. LOOK AT THE PROCESS ENVIRONMENT, SEE IF THERE'S A PORT TO USE.
// *** IF WE'RE RUNNING THE CODE ON A COMPUTER, THE VARIABLE MIGHT
// NOT BE DEFINED. IF IT'S NOT DEFINED, USE 5000.
const PORT = process.env.PORT || 5000;

// LISTEN FOR THE PORT CONSTANT
app.listen(PORT);

//*** REMEMBER TO ADD A "engines" object, with a node 8.1.1, npm 5.0.3 ***\\

//TELL HEROKU TO FIRE WITH 