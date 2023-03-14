import express from 'express';

import {
    userAuth,
    OtpVerify,
    Signup,
    googleAuth
} from '../controllers/auth.js'
const router = express.Router();



router.post('/otp-verify',OtpVerify)
router.post('/login',userAuth);
router.post('/signup',Signup)
router.post('/google-Auth',googleAuth)




export default router;


