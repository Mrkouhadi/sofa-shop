import React from 'react';
import {Gallery, Accordion , Card} from '.';
import { DATA } from '../data/data';
import { useDispatch } from 'react-redux';
import {addToCart } from '../redux/cart';
import {addToWishlist } from '../redux/wishlist';

import { useParams } from 'react-router-dom';

const Product = ()=>{
    const {id} = useParams();
    const dispatch = useDispatch();
    const prod = DATA.filter(product => product.id == id)[0];
    const mayLikeProds = DATA.filter(pro => pro.category === prod.category)
                             .slice(0,4);


  window.scroll({top: 0});
  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-4 min-h-screen p-4 md:pt-20 lg:p-8 ">
              <div className='absolute top-4 left-6 md:left-8 lg:left-12 flex items-center gap-2'>
                    <p className=''>Catalog</p>
                    <i className='fas fa-angle-right text-sm'></i>
                    <p className=''>{prod.category}</p>
              </div>
          <Gallery  imgs={prod.images}/>
          <div className="flex flex-col items-start w-full gap-1 md:gap-4 h-4/5 lg:mt-8 px-2 lg:px-4">
              <h1 className="font-bold text-gray-900 ">{prod.title}</h1>
              <p className="">${prod.price}</p>
              <p className="text-sm font-bold text-black mb-2">{prod.description}</p>
              <div className="flex items-center gap-4 mb-2">
                  <p onClick={()=> dispatch(addToWishlist(prod))} className="text-gray-900 text-sm font-bold"><i className="fas fa-heart mr-2 text-2xl cursor-pointer"></i> ADD TO WISHLIST</p>
                  <button onClick={()=>dispatch(addToCart(prod))} className="bg-gray-900 flex-1 text-sm text-gray-200 px-3 p-2">ADD TO CART</button>
              </div>

            <Accordion content={"Additional inforamtion and details about the product !"}/>

          </div>
          <div className='col-span-2 mt-8 px-2'>
            <h1 className='font-bold text-3xl text-gray-900 text-center'> You May Also Like</h1>
            <div className="mt-8 flex flex-wrap items-center justify-center md:justify-between gap-2">

              {mayLikeProds.map(product => <Card key={product.id} id={product.id} title={product.title} price={product.price} image={product.thumbnail}/>)}

            </div>
          </div>
    </div>
  )
}
export default Product;
