const Mongoose = require("mongoose")

const MovieSchema = new Mongoose.Schema({
  movieName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  director: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  tickets: {
    type: String,
    required: true
  },
  timing: {
    type: String,
    required: true
  },
  TicketPrice: {
    type: Number,
    required: true
  },

})
Mongoose.model("User", MovieSchema)

module.exports = User;