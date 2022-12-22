const mongoose = require("mongoose");

const URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.lugjdkd.mongodb.net/?retryWrites=true&w=majority`;

mongoose.set("strictQuery", false);
const connectToDB = async () => {
  try {
    mongoose.connect(
      URI,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log(`MONGO DB connected`)
    );
  } catch (error) {
    console.log("could not connect to DB");
  }
};
connectToDB();
