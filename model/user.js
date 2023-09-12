const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "please provide name"],
    maxlength: 50,
  },
});

const user = mongoose.model("user", userSchema);

module.exports = {user};
