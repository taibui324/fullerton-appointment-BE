const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userbookingSchema = new Schema(
  {
    name: { type: String, required: true},
    email: { type: String, required: true},
    time: { type: String, required: true },
    date: { type: String, required: true },
    activity: { type: String, required: true },
    confirmed: { type: Boolean, default: false},
    isBooked: { type: Boolean, default: false},
  },

  { timestamps: true }
);

const Userbooking = mongoose.model("userbooking", userbookingSchema);

module.exports = Userbooking;
