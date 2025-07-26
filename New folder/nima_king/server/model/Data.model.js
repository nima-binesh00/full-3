const mongoose = require("mongoose");
const stracher = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  completed: { type: Boolean, default: false },
  important: { type: Boolean, default: false },
  deadline: { type: Date },
  dirId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Directory",
    required: true,
  },
});
const directorySchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const Directory = mongoose.model("Directory", directorySchema);

const Databd = mongoose.model("Task", stracher);
module.exports = { Directory, Databd };
