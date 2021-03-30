// Import Task Model
Task = require("./taskModel");

//For index
exports.index = function (req, res) {
  Task.get(function (err, task) {
    if (err)
      res.json({
        status: "error",
        message: err,
      });

    res.json({
      status: "success",
      message: "Fetch Tasks Successfully!",
      data: task,
    });
  });
};

//For creating new task
exports.add = function (req, res) {
  var task = new Task();
  task.task = req.body.task ? req.body.task : task.task;

  //Save and check error
  task.save(function (err) {
    if (err) res.json(err);

    res.json({
      message: "New Task Added!",
      data: task,
    });
  });
};

// View Task
exports.view = function (req, res) {
  Task.findById(req.params.task_id, function (err, task) {
    if (err) res.send(err);
    res.json({
      message: "Task Details",
      data: task,
    });
  });
};

// Delete Task
exports.delete = function (req, res) {
  Task.deleteOne(
    {
      _id: req.params.task_id,
    },
    function (err, contact) {
      if (err) res.send(err);
      res.json({
        status: "success",
        message: "Task Deleted",
      });
    }
  );
};
