const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys.js"); // Get the mongoDB connection data and Google OAuth keys.
require("./models/User.js"); // Creates a Mongoose model class for user data.
require("./services/passport.js"); // Adds our OAuth handling information.
const app = express();

// Enable cookies inside our application.

sdf9h0pnamSD090jdosfihdf
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey]
	})
);

// Make sure our app uses the cookies.
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app); // Invoke our routes function, handing it the express object as an argument.

mongoose.connect(keys.mongoURI); // Connect to our mongoose database.

// HEROKU INJECTS ENVIRONMENT VARIABLES. LOOK AT THE PROCESS ENVIRONMENT, SEE IF THERE'S A PORT TO USE. IF WE'RE RUNNING THE CODE ON A COMPUTER, THE VARIABLE MIGHT NOT BE DEFINED. IF IT'S NOT DEFINED, USE 5000.
const PORT = process.env.PORT || 5000;

// LISTEN FOR THE PORT CONSTANT
app.listen(PORT);

//*** REMEMBER TO ADD A "engines" object, with a node 8.1.1, npm 5.0.3 ***\\

console.log("Server running...");