const passport = require("passport");
const googleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");
const User = mongoose.model("user"); // This is our model class.

// Serialize user turns our user model into a unique id for a cookie.
passport.serializeUser((user, done) => {
	done(null, user.id); // This is NOT the profile.id, it's from mongo.
});

// Deserialize turns that cookie back into a user model.
passport.deserializeUser((id, done) => {
	User.findById(id).then(user => {
		done(null, user);
	});
});

// First argument makes query to database to find user with given ID.
// Second is creating and saving a user to the database.
passport.use(
	new googleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: "/auth/google/callback",
			proxy: true
		},
		async (accessToken, refreshToken, profile, done) => {
			// Is there a record that matches? This returns a promise.
			const existingUser = await User.findOne({ googleID: profile.id });
			if (existingUser) {
				// If the promise is null...
				console.log(
					"We already have a record with ",
					profile.id,
					" in our database."
				);
				done(null, existingUser); // No error, existing record. Tell passport we're done
			} else {
				// If it returns an existing "model instance" in our database...
				const user = await new User({ googleID: profile.id }).save();
				done(null, user);
				console.log("User ", profile.id, " saved to database.");
			}
		}
	)
);