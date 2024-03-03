import React from 'react'
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";

const Pagination = ({ totalPost, currentPage, mealPerPage, setCurrentPage }) => {
  const pageArr = [];

  for (let i = 1; i <= Math.ceil(totalPost / mealPerPage); i++)
    pageArr.push(i);

    

    // className='border-2 text-sm text-white w-8 rounded-full h-8 flex justify-center items-center  font-bold p-2 my-2 transform duration-300 hover:bg-white hover:text-black'

  return (
    <div className='flex gap-3 items-center' >

        <IoMdArrowDropleft className='text-gray-400 text-lg'/>

      {
          pageArr.map((page, index) => {
              return <button key={index} className={`w-6 h-6 text-xs text-orange-500 rounded-full duration-300 border-2 hover:scale-95  shadow-xl font-bold ${
                  currentPage === page ? ' text-white bg-orange-400' : ''
                }`}  onClick={() => setCurrentPage(page)}>

            {page}

          </button>
        })
    }

    <IoMdArrowDropright className='text-gray-400 text-lg'/>

    </div>
  )
}

export default Pagination;
