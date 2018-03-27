// Figure out which credentials to return, based on prod or dev environment.

if (process.env.NODE_ENV === "production") {
    // return prod keys
    module.exports = require("./prod.js")
} else {
    // return dev keys
    module.exports = require("/dev.js")
}

module.exports = {
    googleClientID:
        "105885109639-fm47lnml6p4t2vq6k6ooh0n9r3142a5b.apps.googleusercontent.com",
    googleClientSecret: "td92vNE-pseZDXLMfZB9Ei_M",
    mongoURI:
        "mongodb://testuser:thisisthepassword@ds221609.mlab.com:21609/fakedatabase",
    cookieKey: "aisdfuahasbaspohbbisnvljzniue"
};

190045980903-08v0007aklhsbmv3cunn6lkctq83gu7a.apps.googleusercontent.com
U_nBsLo4VXLOiuITdCG-Fd7-