import UserModel from '../models/user.js';
import { generateToken } from "../middlewares/authVerify.js"; 
import { SendOtp,VerifyOtp} from '../middlewares/Twilio.js';





// User-Login-AUTH
export const userAuth = async (req,res)=>{

    const{ num } = req.body
    console.log(req.body);

    try{
        
        const user = await UserModel.findOne({PhoneNumber:req.body.num})
        console.log(user)
        if(user){
            console.log(1.1)
            SendOtp(req.body.num);
            res.status(200).json({message:"Succesfully logged in"})
        
        }
        else{   
            console.log("nooooo user")
            return res.status(202).json({message:"no user Registed. Signup please "})
        }
    }
       
    catch(err){
        console.log(err)
        res.status(500).json({message:err})
    }



}

//User-SignUp-auth
export const Signup = async (req,res)=>{
    try{

        console.log(req.body)
        const {FirstName,LastName,DateofBirth,Email,PhoneNumber} = req.body
        console.log(0.1)
        const newUser = new UserModel ({
            FirstName,
            LastName,
            DateofBirth,
            Email,
            PhoneNumber
        })
        console.log(1)
        await newUser.save();
      
        const Token = generateToken(newUser,201);
        console.log(Token,"><<><><")
        res.status(201).json({newUser,Token})
  
    }
    catch(err){
        console.log(err,"<><><>")
        res.status(500).json({message:"something went wrong"})
    }
}


// Otp-verification

export const OtpVerify = async (req,res)=>{

    try{
        const { otp ,num} = req.body
        console.log(req.body)
        console.log(0,num,otp)
        const response = await VerifyOtp(num,otp);
        console.log(1)
        console.log(response)
        if(response === "approved"){
            console.log(2)
            const User = await UserModel.findOne({PhoneNumber:num})
            const Token = generateToken(User,201);
            res.status(200).json(User,Token)
    
    
        }
        else{
            console.log(3)
            res.status(202).json({message:"Something went Wrong"})
        }
    }
    catch(err){
        console.log(err,"err")
        res.status(500).json({message:err})
    }

}