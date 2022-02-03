import React, { useState } from 'react';
import usePagination from '../hooks/usePagination';
import { DATA } from '../data/data';
import {Card} from '.';


const Catalog = () => {
              const [filter, setFilter] = useState("all");
              const [search, setSearch] = useState('');

              const filteredData = DATA.filter(prod => filter === 'all' ? prod : prod.category === filter)
                                      .filter(prod => prod.title.toLocaleLowerCase().includes(search.trim()) && prod);

              const { next, prev, jump, currentData, currentPage, maxPage } = usePagination(filteredData , 12);

              const changeHandle =(e)=> {
              setFilter(e.target.value);
              setSearch("")
                jump(0);
              }
              const serachHandle = (e)=>{
                setSearch(e.target.value.toLocaleLowerCase());
              }
              window.scroll({top: 0});

  return <div className='flex justify-center items-center min-h-screen py-8'>
          <div className='min-h-screen w-full '>

            <h1 className="text-gray-900 text-3xl font-extrabold text-center">Our Products </h1>
            <div className="px-2 md:px-24 flex flex-wrap items-center justify-center gap-8 mt-8 mb-10">
                  <div className="bg-gray-100 rounded md:w-1/3 flex items-center px-2 py-1">
                    <i className='fas fa-search text-lg text-gray-400'></i>
                    <input onChange={serachHandle} value={search} type="search" className='w-full bg-gray-100 px-2 outline-none border-none'/>
                  </div>
                  <div className=" flex justify-center items-center bg-gray-100 px-2 rounded">
                        <select onChange={changeHandle} className="bg-gray-100 cursor-pointer form-select appearance-none block w-full px-3 py-1.5 text-lg md:text-xl font-normal text-gray-700 border-none transition ease-in-out m-0 focus:outline-none" aria-label="Default select example">
                            <option value="all" >All rooms</option>
                            <option value="kitchen">Kitchen</option>
                            <option value="bedroom">Bedroom</option>
                            <option value="bathroom">Bathroom</option>
                            <option value="livingroom">Living room</option>
                        </select>
                        <i className='fas fa-arrow-down text-sm text-gray-300'></i>
                  </div>
            </div>

            <div className='flex flex-wrap items-center justify-center gap-4 xl:px-24'>
              {currentData().map(prod => <Card key={prod.id} id={prod.id} title={prod.title} price={prod.price} image={prod.thumbnail} /> )}
            </div>
            {filteredData.length > 8 && (<div className="flex justify-center items-center gap-10">
                                            <button onClick={prev} className='w-12 h-12 mx-4 grid items-center rounded-full border transition-all ease-out hover:bg-gray-900 border-gray-900 hover:text-gray-50 text-gray-900 text-center text-lg'> prev </button>
                                            <p className="text-black">{currentPage}</p>
                                            <button onClick={next} className='w-12 h-12 mx-4 rounded-full grid items-center transition-all ease-out border hover:bg-gray-900 border-gray-900 hover:text-gray-50 text-gray-900 text-center text-lg'> next </button>
                                        </div>)
            }
          </div>
  </div>;
};

export default Catalog;
