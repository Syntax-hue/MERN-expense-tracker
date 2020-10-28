const mongoose = require("mongoose");

const TransactionShema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, "Please fill the text"],
  },
  amount: {
    type: Number,
    required: [true, "Please add a number"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Transaction", TransactionShema);
