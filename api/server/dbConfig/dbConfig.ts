import mongoose from 'mongoose';

const dbConnect = async () => {
    await mongoose.connect(process.env.MONGO_URL,{dbName: process.env.MONGO_DBNAME}).then((data: any)=> {
        console.log(`Database connection to ${process.env.MONGO_DBNAME} successful: ${(data)}`);
        
    }).catch(e => console.log(`Database Connection Error ${e}`));
};

export default dbConnect;