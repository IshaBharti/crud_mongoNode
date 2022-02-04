const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  fullName: {
    type: String,
  },
  email: {
    email: {
      type: String,

  }


  },
  phoneNumber: {
    type: String,
  },
  password: {
    type: String,
  },
  
});

module.exports = mongoose.model("users", userSchema);
