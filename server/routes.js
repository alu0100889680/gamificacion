const { Router } = require("express");
const mongoose = require("mongoose");
const Model = require("./models/Tarea");

const router = Router();

const users = [];

mongoose.connect(
  "mongodb://aranza:pass19@ds147946.mlab.com:47946/gami_bd",
  (err, res) => {
    if (err) {
      console.log("Failed to connected to " + db);
    } else {
      console.log("Connected to " + db);
    }
  }
);

// GET
router.get("/users", function(req, res) {
  Model.find({}, (err, users) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(users);
    }
  });
});

// post

router.post("/login", function(req, res) {
  let model = new Model(req.body);
  model.save();
  res.status(201).send(model);
});

module.exports = router;
