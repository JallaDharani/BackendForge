const mongoose = require("mongoose");

const connectdb = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://Dharani:DharaniExpress26@cluster0.1asnkkz.mongodb.net/productDB?retryWrites=true&w=majority&appName=Cluster0"
        );

        console.log("connected db");
    } catch (err) {
        console.log(err.message);
    }
};

module.exports = connectdb;