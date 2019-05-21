const { Router } = require("express");
const mongoose = require("mongoose");
const Model = require("./models/Tarea");
var path = require('path');
var expressVue = require("express-vue");
const express = require('express')
 
var app = express();
 
const expressVueMiddleware = expressVue.init();
app.use(expressVueMiddleware);

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

// // GET
// router.get("/users", function(req, res) {
//   Model.find({}, (err, users) => {
//     if (err) {
//       res.status(404).send(err);
//     } else {
//       res.status(200).send(users);
//     }
//   });
// });


// post

// router.post("/login", function(req, res) {
//   let model = new Model(req.body);
//   model.save();

  // res.send('login');
  // console.log(path.join(__dirname + '/pages/login.vue') )
  // res.render(path.join(__dirname + '../','../pages/login'));

  // res.renderVue('login.vue',{ },  { });
  // res.sendFile(__dirname + '..\\' + "\\pages\\login.vue" );
//   model.save().then( data => {
//     res.renderRoute( 'pages/login', { data: data } );
// } );
  // res.status(201).send(model);
  redirect('/');
});

module.exports = router;
