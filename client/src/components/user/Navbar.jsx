import React, { useState,useRef } from 'react';
import { GiBurningForest } from 'react-icons/gi';
import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";
import { useNavigate } from 'react-router-dom';
import { UserLogin } from "../../api/Services/UserAuth.js";
import { OtpSubmit } from "../../api/Services/UserAuth.js";
import axios from '../../api/Axios.js';




function Navbar() {
   const navigate = useNavigate()
   const RegForm = useRef(null)

   const [Nav, setNav] = useState(false);
   const [otpModal, setotpModal] = useState(false);
   const [signupModal, setSignupModal] = useState(false);

   const [num, setNum] = useState("")
   const [otp, setOtp] = useState("")


   //LOGIN-HANDLING
   const handleSubmit = async (e) => {
         
      e.preventDefault();
      
      try{
         const response = await UserLogin(num)
     
         if (response.status === 200){
            setNav(false)
            setSignupModal(false)
            setTimeout(() => {
               setotpModal(true)             }, "5000");

         }
         if(response.status === 202) {

            setNav(false)
            setotpModal(false)
            setSignupModal(true)
         }
       
      }
      catch (err) {
         console.log("err", err)
      }
   }

   //OTP-HANDLING...
   async function handleSubmitotp(e) {
      e.preventDefault();
      console.log("!!!!!", otp);
      try {
         const response = await OtpSubmit(otp,num)

         if (response.status === 200) {
            console.log(response);
            setNav(false);
            setSignupModal(false);
            setotpModal(true);

         } else {
            console.log("something went wrong !");
            return;
         }
      }
      catch (err) {
         console.log("err", err);
      }
   }

   //SIGNUP-HANDLING..
   const handleRegister = async  (e)=>{
      e.preventDefault();
      try{
         console.log(RegForm,"<>>>>>>>>>>>>>>>>>>>>>>")
  
         const FirstName = RegForm.current.FirstName.value;
         const LastName = RegForm.current.LastName.value;
         const DateofBirth   = RegForm.current.DateofBirth.value;
         const Email = RegForm.current.Email.value;
         const PhoneNumber = num;
       
         const res = await axios({
            url : "/signup",
            method: "post" ,
            data :{
               FirstName,
               LastName,
               DateofBirth,
               Email,
               PhoneNumber
            }

         });
         if(res.status===201){
            setNav(false)
            setotpModal(false)
            setSignupModal(false)

         }
         else{
            return;
         }
        
      }
      catch(err){
         throw err;
      }
   }


   //Google-Auth

   const googleAuth = async (datas)=>{
      console.log(datas,"<><><><><><><>>>>>>>>>>>>>>>><<")
      try{
         const response = await axios ({
            url :"/google-Auth",
            method:"post",
            data:{
               datas
            }
         })

         console.log(response,"111212121324658941")


      }
      catch(err){
         console.log(err)
      }

   }

   const NavModal = () => { setNav(!Nav) }

   const otp_Modal = () => { setotpModal(!otpModal) }

   const signup_Modal =()=>{setSignupModal(!signupModal) }

   return (
      <div className="">

         <header className='container mx-auto p-4 flex justify-between border border-gray-200'>
            <a href='' className='flex items-center gap-1 '>
               <h3 className='font-bold'><GiBurningForest /></h3>
               <span className='font-bold text-xl text-rose-500'>Holiday Homes</span>
            </a>

            <div className='flex gap-2 border border-300 rounded-full py-2 px-4 shadow-md shadow-270'>
               <div className='font-medium'>Any where</div>
               <div className='font-bold border-l border-gray-300'></div>
               <div className='font-medium'>Any weeks</div>
               <div className='border-l border-gray-300'></div>
               <div className='text-slate-400 font-bold'>Add guests</div>
               <button className='bg-primary text-white px-1 p-1 rounded-full font-bold'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-xl">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>

               </button>

            </div>

            <div className='flex items-center gap-2 border border-300 rounded-full py-2 px-3 shadow-md ' onClick={NavModal}>

               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
               </svg>
               <div className='bg-gray-500 text-white rounded-full border border-gray overflow-hidden'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 relative top-.5">
                     <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                  </svg>

               </div>


            </div>

         </header>

    

         {console.log(Nav,11111)}

      <div className="w-full mt-5 flex justify-center border-gray-400">
         <div className="w-full relative flex flex-col mt-50 max-w-lg gap-4 p-0  rounded-md shadow-md  dark:bg-gray-900 dark:text-gray-100">
              
              {
               Nav && (
                  <div className={ "w-full"}>


                  <button className="absolute top-2 left-5" onClick={NavModal}>
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="flex-shrink-0 w-4 h-4">
                        <polygon points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313"></polygon>
                     </svg>
                  </button>

                  <div className='flex justify-center w- full'>  <h4 className=" gap-2 font-semibold   ">Log in or Sign up</h4></div>
                  <div className='w-full border border-gray-250 mt-5'></div>


                  <div className='px-6'>
                     <h1 className='mt-4 font-semibold text-xl'>Welcome to Holiday Homes</h1>

                     <form onSubmit={handleSubmit} >

                        <div className='flex border border-black-550 rounded-md mt-4 h-12'>
                           <input className='pl-1 justify-center color-gray w-full'
                              type='number'
                              placeholder='Phone Number..'
                              name='PhoneNumber'
                              value={num}
                              onChange={(e) => setNum(e.target.value)}
                           ></input>
                        </div>
                        <span className='mt-2 flex text-xs text-black-400 font-normal'>We’ll call or text you to confirm your number.@ stanterd rates . <p className='text-xs font-bold underline'> Privacy Policy</p></span>

                        <button type="submit" className="w-full hover:scale-100 mt-4  px-5 py-3 font-semibold rounded-md bg-primary " onClick={otp_Modal}><span className='text-white'>Continue</span></button>
                     </form>

                     <div className='flex w-2/5 border border-gray-300 mt-4' ></div>
                     <span className='flex '>or</span>
                     <div className='flex w-2/5 border border-gray-300'></div>

                     {/* <button type="button" className="w-full hover:scale-100 mt-4  px-5 py-3 font-semibold rounded-md border border-black "><span className='text-black'>Continue with Google</span></button> */}
                     <LoginSocialGoogle
                           client_id={"366705276579-pfjib8v3kphbvrd96nm4qh6ua0k9b8pb.apps.googleusercontent.com"}
                           scope="openid profile email"
                           discoveryDocs="claims_supported"
                           access_type="offline"
                           // onResolve={({provider, data }) => {
                           //    console.log(provider, data);
                           // }}
                           onResolve={googleAuth}

                           onReject={(err) => {
                              console.log(err);
                           }}
                           >
                       <GoogleLoginButton />
                     </LoginSocialGoogle>
                     <button type="button" className="w-full hover:scale-100 mb-4 mt-4 px-5 py-3 font-semibold rounded-md border border-black "><span className='text-black'>Continue with Facebook</span></button>

                  </div>
                  
               </div>
               )
              }
              
               


               {/* <div className={otpModal ? "w-full" : "hidden"}> */}
                {
                  otpModal && ( <div className= {"w-full"}>
                     <button className="absolute top-2 left-5" >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="flex-shrink-0 w-4 h-4">
                           <polygon points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313"></polygon>
                        </svg>
                     </button>

                     <div className='flex justify-center w- full'>  <h4 className=" gap-2 font-semibold   ">Confirm Your Number </h4></div>
                     <div className='w-full border border-gray-250 mt-5'></div>


                     <div className='px-6'>
                        <h1 className='mt-4  text-md text-gray'>Enter the code we've sent via SMS to +91{num}:</h1>

                        <form onSubmit={handleSubmitotp} >

                           <div className='flex border border-black-550 rounded-md mt-4 h-12 w-1/4'>
                              <input className='pl-1 justify-center color-gray w-full'
                                 type='number'
                                 placeholder=' - - - - - - '
                                 name='PhoneNumber'
                                 value={otp}
                                 onChange={(e) => setOtp(e.target.value)}
                              ></input>
                           </div>

                           <div className='w-full border border-gray-250 mt-5'></div>
                           <button type="submit" className=" hover:scale-100 mt-5  px-5 py-3 font-semibold rounded-md bg-black  "><span className='text-white'>Continue</span></button>


                        </form>

                        <div className='flex w-2/5 border border-gray-300 mt-4' ></div>
                     </div>
          


                  </div>)
                }

             <div className={signupModal ? "w-full" : "hidden"}>
                     <button className="absolute top-2 left-5" onClick={signup_Modal}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="flex-shrink-0 w-4 h-4">
                           <polygon points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313"></polygon>
                        </svg>
                     </button>

                     <div className='flex justify-center w- full'>  <h4 className=" gap-2 font-semibold   ">Finish signing up </h4></div>
                     <div className='w-full border border-gray-250 mt-5'></div>


                     <div className='px-6'>
                       

                        <form ref={RegForm} >

                           <div className='flex border border-gray rounded-md mt-4 h-14'>
                              <input className='pl-1 justify-center color-gray w-full'
                                 type='text'
                                 placeholder='First Name '
                                 name='FirstName'
                                 // value={}
                                 onChange={(e) => setOtp()}
                              ></input>
                              
                           
                           </div>
                           <div className='flex border border-black-550 rounded-md  h-14'>
                              
                           
                              <input className='pl-1 justify-center color-gray w-full'
                                 type='text'
                                 placeholder='Last Name'
                                 name='LastName'
                                 // value={otp}
                            
                              ></input> 
                           </div>
                           <span className='mt-2 flex text-xs text-black-400 font-normal'>Make sure it matches the name on your.<p className='text-xs text-black-500 font-bold underline'> government ID</p></span>

                           <div className='flex border border-black-550 rounded-md mt-5 h-14'>
                              <input className='pl-1 justify-center color-gray w-full'
                                 type='date'
                                 placeholder='Date of Birth'
                                 name='DateofBirth'
                                 // value={otp}
                               
                              ></input>
                           </div>

                           <span className='mt-2 flex text-xs text-black-400 font-normal'>To sign up, you need to be at least 18. Your birthday won’t be shared with other people who use Holiday Homes.</span>
                           
                           <div className='flex border border-black-550 rounded-md mt-5 h-14'>
                              <input className='pl-1 justify-center color-gray w-full'
                                 type='email'
                                 placeholder='email'
                                 name='Email'
                                 // value={otp}
                                 onChange={(e) => setOtp()}
                              ></input>
                           </div>

                           <span className='mt-2 flex text-xs text-black-400 font-normal'> We'll email you trip confirmations and receipts.</span>
                          
                           <div className='w-full border border-gray-250 mt-5'></div>
                           <button type="submit"  onClick={handleRegister} className="w-full hover:scale-100 mt-4  px-5 py-3 font-semibold rounded-md bg-primary "><span className='text-white'>Agree and Continue</span></button>


                        </form>

                        <div className='flex w-2/5 border border-gray-300 mt-4' ></div>
                     </div>
                  </div>


            </div>
         </div>
         {/* )} */}




     






      </div>
   );
}

export default Navbar;
