import mongoose from 'mongoose';
mongoose.set('strictQuery',false);

const DBconnect = async () =>{ 
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        console.log("DB connected successfully ..")
    }
    catch(err){
        // throw err;
        console.log("err",err)
    }
}

export default DBconnect;