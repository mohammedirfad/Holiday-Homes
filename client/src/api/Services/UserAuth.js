import axios from '../../api/Axios.js';


// login-auth 
export const UserLogin = async (num)=>{
        try{
            const response = await axios({
                url: "/login",
                method: "post",
                data: {
                   num
                }
             });
             const data = response
             if(data) return data;
        }
        catch(err){
            console.log(err,"errr occured")
        }

}


// otp 
export const OtpSubmit = async (otp,num) =>{
    try{
        const response = await axios({
            url: "/otp-verify",
            method: "post",
            data: {
               otp, num
            }
         });
         const data = response
         if(data) return data;
    }
    catch(err){
        console.log(err,"errr occured")
    }
}


