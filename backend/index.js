const express = require("express");
var cors = require("cors");
const helmet = require("helmet");
const app = express();
const port = 3001;
const connectToMongo = require("./db");

connectToMongo();

//for accessing database from browser
app.use(
  cors({
    origin: "https://collegeduniaassignment-frontend.onrender.com",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);

//for getting user data in json format
app.use(express.json());

//for securing api from huge number of request
app.use(helmet());

// Logging middleware
app.use((req, res, next) => {
  const currentDateTime = new Date();
  console.log(`[${currentDateTime}] ${req.method} ${req.url}`);
  console.log(`Body: ${JSON.stringify(req.body)}`);
  next();
});

app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`iNotebook backend listening on port ${port} `);
});
