import React from 'react';
import { useDispatch } from 'react-redux';
import {removeAll} from '../redux/cart'

const CartItem = ({id, title, image, price, quantity, addProdToCart, removeProdToCart}) => {
    const dispatch = useDispatch();
    
    const addHandle = ()=> addProdToCart({id, title, image, price, quantity});
    const delHandle = ()=> removeProdToCart({id, title, image, price, quantity});

  return (
        <div className="shadow py-4 px-1 md:px-2 flex justify-between items-center gap-2 mb-4">
            <div className='flex-1 flex items-center'>
                <img className='round-full md:mr-2' src={image} alt="" height="50px" width="50px" />
                <p className='text-lg md:text-2xl font-bold text-center ml-1'>{title}</p>
            </div>
            <div className="w-20 flex items-center rounded-lg">
                <span className="border border-gray-400 w-12 h-12 pt-2 text-center text-black font-bold bg-gray-50 ">{quantity}</span>
                <div className="flex flex-col">
                    <button onClick={addHandle} className="grid items-center px-2 h-6 text-sm text-black font-bold bg-gray-50 border  border-gray-400">+</button>
                    <button onClick={delHandle} className="px-2 h-6 text-sm text-black font-bold bg-gray-50 border  border-gray-400 ">-</button>
                </div>
            </div>
            <p className='font-bold md:ml-4 text-lg md:text-2xl'>${price * quantity}</p>
            <i onClick={()=> dispatch(removeAll({id, title, image, price, quantity}))} className='fas fa-times ml-2 text-gray-900 cursor-pointer hover:text-red-500 '></i>
        </div>
  );
};
export default CartItem;