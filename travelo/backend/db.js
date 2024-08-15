const mongoose = require("mongoose");

const mongoURL = "mongodb+srv://ktanzeem850:Tanzeem@cluster0.ygfgpng.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a function to connect to the database
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1); // Exit process with failure
  }
};

// Export the connectDB function
module.exports = connectDB;


// const fetchData = async () => {
//     try {
//         const collection = mongoose.connection.db.collection("food_items");
//         const data = await collection.find({}).toArray();
//         const foodcategry = mongoose.connection.db.collection("foodcategry");
//         const catData = await foodcategry.find({}).toArray();
//         // console.log(data);
//         global.food_items = data;
//         global.foodcategry = catData;
//     } catch (err) {
//         console.log(err);
//     }
// };

// module.exports = mongoose;
