const express = require("express");
const bodyParser = require("body-parser");
const consola = require("consola");
const { Nuxt, Builder } = require("nuxt");
const app = express();
var MongoClient = require("mongodb").MongoClient;

// Import and Set Nuxt.js options
let config = require("../nuxt.config.js");
config.dev = !(process.env.NODE_ENV === "production");

app.use(bodyParser.urlencoded({ extended: true }));

var dir = "mongodb://aranza:pass19@ds147946.mlab.com:47946/gami_bd";

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config);

  const { host, port } = nuxt.options.server;

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  } else {
    await nuxt.ready();
  }

  // Give nuxt middleware to express
  app.use(nuxt.render);

  var db;
  MongoClient.connect(dir, (err, client) => {
    if (err) return console.log(err);
    db = client.db("usuarios"); // whatever your database name is
  });

  // Listen the server
  app.listen(port, host);
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  });

  app.get("/", (req, res) => {
    db.collection("usuarios")
      .find()
      .toArray((err, result) => {
        if (err) return console.log(err);
        res.send("holaa");
        // res.render('index.ejs', {quotes: result})
      });
  });
}

start();
