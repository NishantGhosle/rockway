// import mongoose from "mongoose";

// export const connectDB = async () => {
//   const { connection } = await mongoose.connect(process.env.MONGO_URI);
//   console.log(`Mongodb is connected with ${connection.host}`);
// };

// import mongoose from "mongoose";

// export const connectDB = async () => {
//   const { connection } = await mongoose
//     .connect(process.env.MONGO_URI)
//     .then(() => console.log(`Mongodb is connected with ${connection.host}`))
//     .catch((err) => console.log("MongoDB connection error:", err));
// };

import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected on : ${conn.connection.host}`);
  } catch (error) {
    console.log(`MongoDB connection error: ${error.message}`);
  }
};
