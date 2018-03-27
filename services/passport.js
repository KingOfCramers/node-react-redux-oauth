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
	User.findById(id).then((user => {
		done(null, user);
	}))
})

passport.use(
	new googleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: "/auth/google/callback",
			proxy: true
		},
		(accessToken, refreshToken, profile, done) => {
			// Is there a record that matches? This returns a promise.
			User.findOne({ googleID: profile.id }).then(existingUser => {
				if (existingUser) {
					// If the promise is null...
					console.log("We already have a record with ", profile.id, " in our database.");
					done(null, existingUser); // No error, existing record. Tell passport we're done
				} else {
					// If it returns an existing "model instance" in our database...
					new User({ googleID: profile.id })
						.save()
						.then(user => done(null, user));
					console.log("User ", profile.id, " saved to database.");
				}
			});
		}
	)
);