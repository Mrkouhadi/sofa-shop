import React, { useState } from 'react';
import {CartItem} from './';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../redux/cart.js';

const Cart = () => {
    const dispatch = useDispatch();
    
    const {cartProds} = useSelector(state => state.cartProds);

    let totalPrice = cartProds.reduce((total, prod)=>total+( prod.quantity * prod.price) , 0);    
    const tax = 11;
    const [shipping, setShipping] = useState(0);

    const addProdToCart =(pro)=>{
        dispatch(addToCart(pro));
    }
    const removeProdToCart =(pro)=>{
        dispatch(removeFromCart(pro));
    }
  return <div className='min-h-screen py-8 px-2 md:px-8'>
            <h1 className="text-center font-extrabold" >YOUR SHOPPING CART</h1>
            <hr className='w-1/2 mt-4 mb-6 m-auto'/>

{   cartProds.length === 0 ? <div className='w-full pt-24 flex justify-center items-center flex-col gap-6 '>
                                <h1 className='text-center text-4xl font-extrabold text-red-400'>YOUR CART IS STILL EMPTY <i className='fas fa-frown'></i> </h1>
                                <p className='text-green-400 text-center '>Looks like you haven't seen our catalog</p>
                                <Link to="/catalog" className='py-2 bg-green-400 w-64'>BACK TO CATALOG</Link>
                            </div>
                            :(
            <div className=" min-h-screen grid grid-cols-1 lg:grid-cols-5 lg:mb-2">
                <div className='lg:col-span-3 px-1 lg:mr-4'>
                {
                  cartProds.map(prod =>{
                     return <CartItem removeProdToCart={removeProdToCart} addProdToCart={addProdToCart} key={prod.id} id={prod.id} quantity={prod.quantity} title={prod.title} price={prod.price} image={prod.image}/>
                  })
                }
                </div>
                <div className='bg-red-100 lg:col-span-2 px-2 md:px-8 mt-12 lg:mt-0 py-4'>
                        <h1 className='text-gray-900 mb-4'>SHIPPING</h1>
                        <div className="form-check mb-2">
                            <input onChange={()=>setShipping(0)} className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-gray-900  focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label inline-block text-gray-800 text-lg md:text-2xl" htmlFor="flexRadioDefault1">
                                Ground shipping(Free) : 2 - 5  days
                            </label>
                        </div>
                        <div className="form-check  mb-2">
                            <input onChange={()=>setShipping(50)} className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-gray-900 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label inline-block text-gray-800 text-lg md:text-2xl" htmlFor="flexRadioDefault1">
                                Expedite shipping($50): 2-3  days
                            </label>
                        </div>
                        <div className="form-check ">
                            <input onChange={()=>setShipping(150)} className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-gray-900 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label inline-block text-gray-800 text-lg md:text-2xl" htmlFor="flexRadioDefault1">
                                Overnight shipping($150): Next day
                            </label>
                        </div>
                        <input type="text" className='outline-none border border-gray-500 p-2 w-full mt-8' placeholder='Country'/>
                        <input type="text" className='outline-none border border-gray-500 p-2 w-full mt-8' placeholder='State/County'/>
                        <input type="text" className='outline-none border border-gray-500 p-2 w-full mt-8' placeholder='City'/>
                        <input type="text" className='outline-none border border-gray-500 p-2 w-full mt-8' placeholder='Postcode/ZIP'/>
                        <button type="text" className='text-gray-200 bg-gray-900 p-2 w-full mt-8' >UPDATE</button>
                        <div className="mt-8 py-4">
                            <h1 className="font-bold mb-4">Tax : <span className="text-gray-500 ml-12">${tax}</span> </h1>
                            <h1 className="font-extrabold mb-4">Total : <span className="text-gray-500 ml-8">${totalPrice + tax + shipping}</span> </h1>
                            <button type="text" className=' text-gray-200 bg-gray-900 p-2 w-full mt-8' > CHECKOUT 
                                    <i className='ml-4 animate-pulse fas fa-angle-right text-gray-100'></i>
                                    <i className='animate-pulse fas fa-angle-right text-gray-100'></i>
                                    <i className='animate-pulse fas fa-angle-right text-gray-100'></i>
                             </button>
                        </div>
                </div>
            </div> )}
  </div>;
};
export default Cart;