import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromWishlist } from '../redux/wishlist.js';
import { addToCart } from '../redux/cart';

const Wishlist = () => {
    const dispatch = useDispatch();
    const {wishlistProds} = useSelector(state => state.wishlistProds);
    
    const moveTtocartHandle = (pro)=>{
        dispatch(addToCart(pro))
        dispatch(removeFromWishlist(pro))
    }
    window.scroll({top: 0});

  return <div className='min-h-screen w-full py-8 px-2 md:px-8'>
            <h1 className="text-center font-extrabold" >YOUR SHOPPING WISHLIST</h1>
            <hr className='w-1/2 mt-4 mb-6 m-auto'/>

    {wishlistProds.length === 0 ? (
                                    <div className='w-full pt-24 flex justify-center items-center flex-col gap-6 '>
                                        <h1 className='text-center text-4xl font-extrabold text-red-400'>YOUR WISHLIST IS STILL EMPTY <i className='fas fa-frown'></i> </h1>
                                        <p className='text-green-400 text-center '>Looks like you haven't seen our catalog</p>
                                        <Link to="/catalog" className='py-2 bg-green-400 w-64'>BACK TO CATALOG</Link>
                                    </div>
                                  )
                                :(
                                    wishlistProds.map(prod =>{
                                        return (
                                            <div key={prod.id} className="py-5 sm:py-8 md:px-20 shadow mb-2">
                                            <div className="flex flex-wrap gap-4 lg:gap-6 sm:py-2.5">
                                              <div className="sm:-my-2.5">
                                                <a href="#" className="group w-24 sm:w-40 h-40 sm:h-56 block bg-gray-100 rounded-lg overflow-hidden relative">
                                                  <img src={prod.image} loading="lazy" alt={prod.title} className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200" />
                                                </a>
                                              </div>
                                              <div className="flex flex-col justify-between flex-1">
                                                <div>
                                                  <a href="#" className="inline-block text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100 mb-1">{prod.title}</a>
                                                </div>
                                                <div>
                                                  <span className="block text-gray-800 md:text-lg font-bold mb-1">${prod.price}</span>
                                    
                                                  <span className="flex items-center text-gray-500 text-sm gap-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                    </svg>
                                    
                                                    In stock
                                                  </span>
                                                </div>
                                              </div>
                                              <div className="w-full sm:w-auto flex md:flex-col justify-between items-center border-t sm:border-none pt-4 sm:pt-0">
                                                        <button onClick={()=>moveTtocartHandle(prod)} className="text-green-500 mx-2 hover:text-indigo-600 text-lg font-semibold select-none transition duration-100">move to cart</button>
                                                        <button onClick={()=> dispatch(removeFromWishlist(prod))} className="text-red-500 mx-2 hover:text-red-800  text-lg font-semibold select-none transition duration-100">delete</button>
                                              </div>
                                            </div>
                                          </div>
                                        )
                                    })
                                )
            }
        </div>;
};
export default Wishlist;