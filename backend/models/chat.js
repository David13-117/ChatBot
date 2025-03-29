const mongoose = require("mongoose")

const chatShema = new mongoose.Schema({
    question: {type: String, required: true},
    answer: {type:String, required: true},
})

module.exports = mongoose.model("chat", chatShema)