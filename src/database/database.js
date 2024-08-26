import mongoose from 'mongoose';
const { MONGODB_URI } = process.env;
const URI= process.env.MONGODB_URI
const db= process.env.MONGODB_DB

const connectDB= async () => {
  try {
    await mongoose.connect(`${URI}/${db}`, );
    console.log(`MongoDB Connected: ${db}`)
  }
  catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`)
  } 
}

export default connectDB;
