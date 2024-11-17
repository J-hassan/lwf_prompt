import mongoose from "mongoose";

const connectDb = async () => {
  if (mongoose.connections[0].readyState) {
    return; // Already connected
  }
  await mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("MongoDB connected!");
};

export default connectDb;