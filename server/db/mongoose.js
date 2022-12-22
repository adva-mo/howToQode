const mongoose = require("mongoose");

const URI = `mongodb+srv://advamo:${process.env.MONGO_PASS}@cluster0.qqzaahu.mongodb.net/?retryWrites=true&w=majority`;

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
