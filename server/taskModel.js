var mongoose = require("mongoose");

//schema
var taskSchema = mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

// Export Task Model
var Task = (module.exports = mongoose.model("task", taskSchema));

module.exports.get = function (callback, limit) {
  Task.find(callback).limit(limit);
};
