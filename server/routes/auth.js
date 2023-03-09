import express from 'express';

import {
    userAuth,
    OtpVerify,
    Signup
} from '../controllers/auth.js'
const router = express.Router();



router.post('/login',userAuth);
router.post('/otp-verify',OtpVerify)
router.post('/signup',Signup)




export default router;


