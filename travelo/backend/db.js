const mongoose = require("mongoose");

var mongoURL = "mongodb+srv://ktanzeem850:Tanzeem@cluster0.e5ctnuo.mongodb.net/mernfood?retryWrites=true&w=majority";

mongoose.connect(mongoURL, { useNewUrlParser: true });

var db = mongoose.connection;

db.on('connected', () => {
    console.log("MongoDB connected successfully");

    fetchData();
});

db.on('error', () => {
    console.log("MongoDB connection failed");
});

const fetchData = async () => {
    try {
        const collection = mongoose.connection.db.collection("food_items");
        const data = await collection.find({}).toArray();
        const foodcategry = mongoose.connection.db.collection("foodcategry");
        const catData = await foodcategry.find({}).toArray();
        // console.log(data);
        global.food_items = data;
        global.foodcategry = catData;
    } catch (err) {
        console.log(err);
    }
};

module.exports = mongoose;
