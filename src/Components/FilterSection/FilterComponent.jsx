import React, { useEffect, useState } from 'react'
import { LuSettings2 } from "react-icons/lu";
import { FaAngleDown } from "react-icons/fa6";
import FilterModal from './FilterModal';
import SortModal from './SortModal';
import axios from 'axios';



const url = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list'

const FilterComponent = ({ setCountry, setSortFilter, setCurrentPage }) => {
  const [data, setData] = useState([]);
  const [disableBtn, setDisableBtn] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState('Indian')
  const [selectedSortOption, setSelectedSortOption] = useState('Relevance (Default)');
  const [openSort, setOpenSort] = useState(false)


  const fetchData = async () => {
    const { data } = await axios.get(`${url}`)
    setData(data.meals);
  }
  useEffect(() => {
    fetchData();
  }, [])



//this are for filter Modal
  const handleShowMore = () => {
    if (!disableBtn) {
      setDisableBtn(true)
    }

  }

  const handleCloseModal = () => {
    setDisableBtn(false)
  }

  const handleApplyFilters = () => {
    // console.log("Selected Filter:", selectedFilter);
    handleCloseModal();
    setCurrentPage(1);
  }

  const handleRestFilters = () => {
    setSelectedFilter('Indian');
    handleApplyFilters();
  }
  const handleRadioChange = (value) => {
    setSelectedFilter(value);
  }

  useEffect(() => {
    setCountry(selectedFilter)
  }, [selectedFilter])


  // this is for Sort-By 

  const handleSortChange = (option)=>{
    setSelectedSortOption(option);
  }
  const handleApplySort = () => {
    console.log("Selected Sort:", selectedSortOption);
    handleCloseSort();
  }
  const handleOpenSort = () => {
    if (!openSort) {
     setOpenSort(true)
    }
 }
 const handleCloseSort =()=>{
  setOpenSort(false)
 }
 useEffect(()=>{
      setSortFilter(selectedSortOption)
 },[selectedSortOption])
  



  return (
    <div className='border-b p-3  md:px-32 flex flex-col gap-4  md:pt-6 justify-center items-center'>
      <div className='font-rob w-full '>
        <h1 className='text-sm md:text-xl font-bold '>Restaurants with online food delivery in Pune</h1>
      </div>
      <div className='flex gap-2 text-xs md:text-sm text-gray-600'>


        <button className='border  rounded-2xl px-4 py-1 shadow-md hover:shadow-lg duration-300 '><p className='flex items-center  justify-between gap-1' onClick={handleShowMore}
          disabled={disableBtn} >Filter <span><LuSettings2 /></span></p> </button>
         <div className='border-3 border-black'>
            {
             disableBtn &&
              <FilterModal onClose={handleCloseModal} items={data}
              selectedFilter={selectedFilter}
              onApplyFilters={handleApplyFilters}
              onResetFilters={handleRestFilters}
              onRadioChange={handleRadioChange}
              
              />
            }
         </div>
        <button className='border  rounded-2xl px-4 py-1 shadow-md hover:shadow-lg duration-300 '><p className='flex items-center  justify-between gap-1' onClick={handleOpenSort}
          disabled={openSort} >Sort By <span><FaAngleDown /></span></p> </button>
         <div className='border-3 border-black'>
            {
             openSort &&
              <SortModal onClose={handleCloseSort} 
              selectedSortOption={selectedSortOption}

              onApplySort={handleApplySort}
             
              onRadioChange={handleSortChange}

              />
            }
         </div>

            




        {/* <button className='border  rounded-2xl px-4 py-1 shadow-md hover:shadow-lg duration-300' > <p className='flex items-center justify-between gap-1 '>Sort By <span><FaAngleDown className='' /></span></p></button> */}





        <button className='hidden md:block border  rounded-2xl px-4 py-1 shadow-md hover:shadow-lg duration-300'>Fast Delivery</button>
        <button className='hidden md:block border  rounded-2xl px-4 py-1 shadow-md hover:shadow-lg duration-300'>New on Swiggy</button>
        <button className='hidden md:block border  rounded-2xl px-4 py-1 shadow-md hover:shadow-lg duration-300'>Rating 4.0+</button>
        <button className='hidden md:block border  rounded-2xl px-4 py-1 shadow-md hover:shadow-lg duration-300'>Pure Veg</button>
       
        <button className='hidden md:block border  rounded-2xl px-4 py-1 shadow-md hover:shadow-lg duration-300'>Rs.300-Rs.600</button>
        <button className='hidden md:block border  rounded-2xl px-4 py-1 shadow-md hover:shadow-lg duration-300'>Less than Rs.300</button>
      </div>
    </div>
  )
}

export default FilterComponent
