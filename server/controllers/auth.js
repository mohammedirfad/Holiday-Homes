import nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';
dotenv.config();
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
            console.log(1.2)
            res.status(200).json({message:"Succesfully Done!"})
        
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

         
        try{
            const transporter = nodemailer.createTransport({
                service : "gmail",
                auth :{
                    user:process.env.USER,
                    pass:process.env.PASSWORD
                }
            });
            console.log(Email)
            const mailOptions = {
                from :process.env.USER,
                to :Email,
                subject:"Greetings From Holiday Homes " ,
                html:'<div style="text-align:center;"><h1 style="text-align:center; color:"#c72058";>Holiday Homes</h1><br></br><h5></h5>Congatullation your are sucssesfully registred to HOLIDAY HOMES <br></br></br><button style="color:"red";>Explore Now</button> </br></br> <h4 style"text-md"> thanks from Holiday Homes Team--- </h4></div>'
            }

            transporter.sendMail(mailOptions,(error,info)=>{
                if(error){
                    console.log(err)
                }
                else{
                    console.log("email send",info.response)
                }
            })

        }
        catch(err){
            console.log(err)
        }
  
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
            res.status(201).json({User,Token})
        }
        else{
            console.log(3)
            res.status(400).json({message:"Something went Wrong"})
        }
    }
    catch(err){
        console.log(err,"err")
        res.status(500).json({message:err})
    }

}


export const googleAuth = async (req,res)=>{

    try{
        const email = req.body.datas.data.email;
        console.log(email,">>>>>>>>>>>>>")
        console.log(req.body)
        const User = await UserModel.findOne({Email:email})
        console.log(User);
        if(User !== null){
            const Token = generateToken(User,201);
            console.log(Token,1)
            res.status(201).json({User,Token})
        } else {
            console.log("Here");
            const { given_name,family_name,email } =req.body.datas.data;
          
            const newUser = new UserModel ({
                FirstName: given_name,
                LastName :family_name,
               
                Email :email,
               
            })
            console.log(1.0)
            await newUser.save();
          
            const Token = generateToken(newUser,201);
            console.log(Token,"><<><><")
            res.status(201).json({newUser,Token})
    
    
        }
    }
    catch(err){
        res.status(400).json({message:err})
    }

}