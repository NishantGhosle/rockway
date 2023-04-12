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
  const { connection } = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(`Mongodb is connected successfully`);
};
