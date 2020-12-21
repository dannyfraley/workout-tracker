const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 8000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  });

app.use(require("./routes/html"));
app.use(require("./routes/api"));
app.listen(PORT, function(){
    console.log("App is listening on port " + PORT)
})