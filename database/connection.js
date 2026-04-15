import mongoose from "mongoose";

// export const connection = () => {
//   mongoose
//     .connect(process.env.MONGO_URI, {
//       dbName: "mern_auction_platform",
//     })
//     .then(() => {
//       console.log("Connected to database.");
//     })
//     .catch((err) => {
//       console.log(`Some error occured while connecting to database: ${err}`);
//     });
// };


let isConnected = false;

 const connection = async () => {
  if (isConnected) {
    console.log("MongoDB already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "mern_auction_platform",
    });

    isConnected = true;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(`Some error occured while connecting to database: ${error}`);
  }
};

export default connection

