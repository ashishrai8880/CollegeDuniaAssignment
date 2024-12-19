const express = require("express");
var cors = require("cors");
const helmet = require("helmet");
const app = express();
const port = 3001;
const connectToMongo = require("./db");

connectToMongo();

//for accessing database from browser
app.use(cors());

//for getting user data in json format
app.use(express.json());

//for securing api from huge number of request
app.use(helmet());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`iNotebook backend listening on port ${port} `);
});
