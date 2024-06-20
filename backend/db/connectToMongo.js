import mongoose from "mongoose";
const connectToMongo = async () => {
  try{
    await mongoose.connect(process.env.MONGO_DB_URL)
    console.log("connected mongo db");
  }
  catch(error){
    console.log("Error connected mongo db !!");

  }
}
export default connectToMongo;