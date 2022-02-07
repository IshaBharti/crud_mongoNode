const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    eventName: {
      type: String,
    },
    eventAddress: {
      type: String,
    },
    eventDescription: {
      type: String,
    },
    eventDate: {
      type: String,

    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", userSchema);
