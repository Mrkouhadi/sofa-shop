import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { LogIn } from '../redux/auth';

const LogRegister = () => {
                const dispatch = useDispatch();
                const [register, setRegister] = useState(false);
                const [loginValues, setLoginValues] = useState({email:"", password:""});

                const guestUser ={email:"mrkouhadi@gmail.com", password:"123456"}

                const submitHandle = (e)=>{
                    e.preventDefault();
                    if(loginValues.email === guestUser.email && loginValues.email === guestUser.email ){
                        dispatch(LogIn(loginValues));
                        setLoginValues({email:"", password:""});
                    }
                }
                window.scroll({top: 0});

  return <div className=" py-2 w-full">
        {!register ? (
                        <form onSubmit={submitHandle} action="" className=" mt-20 py-2 flex flex-col m-auto w-full md:w-2/3 lg:w-1/2">
                            <h1 className="text-gray-900 text-3xl mb-4 font-extrabold">LOG IN PLEASE</h1>
                            <input value={loginValues.email} onChange={(e)=> setLoginValues({...loginValues, email:e.target.value})} className='my-2 px-4 py-2 bg-gray-200' type="email" name="email" id="email" placeholder='your email' />
                            <input value={loginValues.password} onChange={(e)=> setLoginValues({...loginValues, password:e.target.value})} className='mt-2 mb-4 px-4 py-2 bg-gray-200' type="password" name="password" id="password" placeholder='your password' />
                            <input className="bg-gray-900 text-gray-100 px-4 py-2" type="submit" value="LOG IN" />
                            <div className='text-gray-600 text-center mt-4 flex flex-col items-center justify-between '>
                                <span onClick={()=> setRegister(true)} className='text-lg  cursor-pointer'>Signup </span>
                                <span  className='cursor-pointer text-lg bg-gray-300 px-2 py-1 mt-2'> email: {guestUser.email}</span>
                                <span  className='cursor-pointer text-lg bg-gray-300 px-2 py-1 mt-1'> password: {guestUser.password}</span>
                            </div>
                        </form>
        ):(
                <form onSubmit={(e)=> e.preventDefault()} action="" className=" mt-8 py-2 flex flex-col m-auto w-full md:w-2/3 lg:w-1/2">
                    <h1 className="text-gray-900 text-3xl mb-4 font-extrabold">REGISTER</h1>
                    <input className='my-2 px-4 py-2 bg-gray-200' type="text" name="name" id="name" placeholder='your full name' />
                    <div className="flex items-center gap-4">
                        <div className="form-check">
                                <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-gray-900  focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="male" id="male"/>
                                <label className="form-check-label inline-block text-gray-800 text-lg md:text-2xl" htmlFor="flexRadioDefault1">
                                    Male
                                </label>
                        </div>
                        <div className="form-check ml-8">
                                <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-gray-900  focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="female" id="female"/>
                                <label className="form-check-label inline-block text-gray-800 text-lg md:text-2xl" htmlFor="flexRadioDefault1">
                                    Female
                                </label>
                        </div>
                    </div>
                    <input value="" className='my-2 px-4 py-2 bg-gray-200' type="email" name="email" id="email" placeholder='your email' />
                    <input value="" className='my-2 px-4 py-2 bg-gray-200' type="phone" name="phonenumber" id="phonenumber" placeholder='your phone number' />
                    <input value="" className='my-2 px-4 py-2 bg-gray-200' type="password" name="password" id="password" placeholder='your password' />
                    <input value="" className="bg-gray-900 text-gray-100 px-4 py-2 disabled" type="submit" value="REGISTER" />
                    <p className='text-gray-600 text-center mt-4 text-lg '>SignUp not working! use guest details <span onClick={()=> setRegister(false)}  className='cursor-pointer'>LOG IN</span></p>
                </form>
             )}
  </div>
};

export default LogRegister;
