const mongoose = require("mongoose");

const SubscriberSchema = new mongoose.Schema(
  {
    email: { type: String },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Subscriber", SubscriberSchema);
