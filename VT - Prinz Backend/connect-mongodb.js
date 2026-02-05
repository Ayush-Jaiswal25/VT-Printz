import mongoose from 'mongoose';

const MongoURL = process.env.MONGO_ATLAS_URL;

const connectMongoDB = async () =>{
    await mongoose.connect(MongoURL)
    .then(() => { 
        console.log("VT Printz Server has been Connected from MongoDB Atlas Successfully");
    })
    .catch((error) =>{ 
        console.log("Error Connecting to MongoDB Atlas Server \n", error);
        process.exit(1);
    })
}

export default connectMongoDB