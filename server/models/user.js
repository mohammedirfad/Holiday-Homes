import mongoose from 'mongoose';
import validator from 'validator';

const UserSchema = mongoose.Schema({

    FirstName : {
         type : String,
         required: [true,"please Tell your Name !"],
         minLen: [3, "FirstName must have atleast 2 Letters"],
         maxlen: [25, "FirstName must have atmost 25 Letters"],
         validate: [validator.isAlpha, 'Please enter a valid FirstName']

    },
    LastName : {
         type : String,
         required: [true,"please Tell your Name !"],
         minLen: [3, "LastName must have atleast 2 Letters"],
         maxlen: [25, "LastName must have atmost 25 Letters"],
         validate: [validator.isAlpha, 'Please enter a valid FirstName']
    },
    Email : {
        type : String ,
        required:true,
        unique:true,
        validate: [validator.isEmail, 'Please enter a valid email address'],

    },
    PhoneNumber : {
        type : Number,
        required: true,
        unique: true,

    },
    DateofBirth : {
        type : String,

    },
    Image : {
        type : String
    },
    isBanned : {
        type : Boolean , 
        default : false
    }

},
{timestamps: true}

);


const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
