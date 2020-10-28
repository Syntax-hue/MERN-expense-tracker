const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connected", con.connection.host);
  } catch (e) {
    console.error(e.message);
  }
};

module.exports = connectDB;
