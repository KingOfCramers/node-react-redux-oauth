const passport = require("passport"); // The original npm module, not our passport.js file

// TELL PASSPORT TO AUTHENTICATE ON THIS ROUTE, USING THE STRATEGY "GOOGLE"
// The "google" string refers to our googleStrategy.

module.exports = app => {
    app.get(
        "/auth/google",
        passport.authenticate("google", {
            scope: ["profile", "email"]
        })
    );

    // Passport will see the code included in the URL, and will not kick into the OAuth flow.
    app.get("/auth/google/callback", passport.authenticate("google"));

    app.get("/api/logout", (req,res) => {
        req.logout(); // Kills the cookie.
        res.send(req.user);
    })

    app.get("/api/current_user", (req,res) =>{
        res.send(req.user);
    });

};

// We're exporting this as a function, which accepts the "app" as an argument.