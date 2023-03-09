import twilio from 'twilio';
import * as dotenv from 'dotenv';
dotenv.config();



const Service_id = process.env.ACC_SERVICEID;
const Auth_token = process.env.ACC_AUTHTOKEN;
const Acc_sid = process.env.ACCOUNT_SID


export const SendOtp = (phone) => {
  console.log("vannu")
  console.log(Acc_sid);
    const client = twilio(Acc_sid, Auth_token);
    client.verify.v2
      .services(Service_id)
      .verifications.create({ to: `+91 ${phone}`, channel: "sms" })
      .then((verification) => console.log(verification.status))
      .catch((error) => console.log(error.message));
  };
  
  export const VerifyOtp = (phone, otp) => {
    const client = twilio(Acc_sid, Auth_token);
    return new Promise((resolve, reject) => {
      client.verify.v2
      .services(Service_id)
        .verificationChecks.create({ to: `+91${phone}`, code: otp })
        .then((verification_check) => {
          resolve(verification_check.status);
        })
        .catch((error) => reject(error.status));
    });
  };
  


