const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventScheme = new Schema({
  date: Date,
  route: String,
  firstName: Number,
  method: String,
  body: {},
  params: {},
  query: {},
});

module.exports = eventScheme;
