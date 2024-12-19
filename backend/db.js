const mongoose = require("mongoose");

// const mongooseURI = "mongodb://localhost/iNotebook";
const mongooseURI = "mongodb://127.0.0.1:27017/iNotebook";

const connectToMongo = async () => {
  //   mongoose.connect(mongooseURI, () => {
  //     console.log("Connected to Database succcesfully");
  //   });
  try {
    await mongoose.connect(mongooseURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Adjust the timeout as needed
    });
    console.log("Connected to Database successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

module.exports = connectToMongo;
