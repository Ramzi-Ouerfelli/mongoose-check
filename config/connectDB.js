const mongoose = require("mongoose");

const connectDB = async ()=> {
try {
    await mongoose.connect('mongodb+srv://rms:1234@check-mongoose.ljho2cf.mongodb.net/Persons');
    console.log("Database connected ...")
} catch (error) {
    console.log(error)
}
}

module.exports = connectDB