import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cart.js';
import { addToWishlist } from '../redux/wishlist.js';
import useHomeAnimate from '../hooks/useIntersectAnimate';

const Card = ({id, title, price, image}) => {
                const cardRef = useRef(null);
                const cardIsvisible = useHomeAnimate({
                                                root:null,
                                                rootMargin:'0px',
                                                threshold:0.1,
                                          }, cardRef);
                const navigate = useNavigate();  
                const dispatch = useDispatch();

                const addProdToCart =()=>{
                      dispatch(addToCart({id, title, price, image}));
                }
                const wishlistHandle = ()=>{
                      dispatch(addToWishlist({id, title, price, image}))
                }

  return <div ref={cardRef} className={`mb-4 flex flex-col items-center justify-center hover:shadow-xl transition card ${cardIsvisible && "card--animated"}`}>
              <div className="relative flex-1">
                   <img src={image} alt={title} width="300px" height="500px" className='' />
                    <div className="btns absolute bottom-1 right-0 left-0 py-2 px-4 opacity-0 transition flex items-center justify-around">
                        <button onClick={addProdToCart} className="py-2 px-4 bg-gray-900 transition grid items-end rounded text-gray-300 hover:text-gray-900 hover:bg-gray-300 "><i className=" fas fa-shopping-bag"></i></button>
                        <button onClick={()=>navigate(`/catalog/${id}`)} className="py-2 px-4 bg-gray-900 transition grid items-end rounded text-gray-300 hover:text-gray-900 hover:bg-gray-300"><i className=" fas fa-eye"></i></button>
                        <button onClick={wishlistHandle} className="py-2 px-4 bg-gray-900 transition  grid items-end rounded text-gray-300 hover:text-gray-900 hover:bg-gray-300"><i className=" fas fa-heart"></i></button>
                    </div>
              </div>
              <h2 className='text-gray-700 font-bold my-4'>{title}</h2>
              <p className="text-gray-400 my-2">${price}</p>
         </div>
}
export default Card;