let express = require("express");
//import body parser
let bodyParser = require("body-parser");
//import mongoose
let mongoose = require("mongoose");
var cors = require("cors");

let app = express();

//Import routes
let apiRoutes = require("./routes");

app.use(cors());

//configure bodyparser to hande the post requests
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

//connect to mongoose
const dbPath =
  "mongodb+srv://rajitha:admin123@cluster0.gmbbl.mongodb.net/todoDatabase?retryWrites=true&w=majority";
const options = { useNewUrlParser: true, useUnifiedTopology: true };
const mongo = mongoose.connect(dbPath, options);

mongo.then(
  () => {
    console.log("connected");
  },
  (error) => {
    console.log(error, "error");
  }
);
var db = mongoose.connection;

//Check DB Connection
if (!db) console.log("Error connecting db");
else console.log("DB Connected Successfully");

// Server Port
var port = process.env.PORT || 3000;

// Welcome message
app.get("/", (req, res) => res.send("Welcome to Express"));

//Use API routes in the App
app.use("/api", apiRoutes);

// Launch app to the specified port
app.listen(port, function () {
  console.log("Server started on port : " + port);
});

module.exports = app;
