var mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  start_date: { type: Date, required: true },
  end_date: { type: Date, required: true },
});

module.exports = mongoose.model("Project", projectSchema);
