const mongoose = require("mongoose");

// const mongooseURI = "mongodb://localhost/iNotebook";
// const mongooseURI = "mongodb://127.0.0.1:27017/iNotebook";
const mongooseURI =
  "mongodb+srv://ashishrai8880:ashish@cluster0.pqzwb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/iNotebook";

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
    console.log("Connected to Database successfully this time ");
  } catch (error) {
    console.error(
      "Error connecting to MongoDB:",
      error.message,
      " and error : ",
      error
    );
  }
};

module.exports = connectToMongo;
