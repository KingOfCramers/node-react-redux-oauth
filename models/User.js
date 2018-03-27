const mongoose = require("mongoose");
const { Schema } = mongoose; // same as –> const schema = mongoose.schema;

// Use the schema object to create user records. Can change internal properties freely. This is the model class.
const userSchema = new Schema({
    googleID: String
});

mongoose.model("user", userSchema); // This tells mongoose to create a new collection called users. If it already exists, it won't override it.