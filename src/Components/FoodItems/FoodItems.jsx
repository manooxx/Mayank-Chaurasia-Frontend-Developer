import React, {useEffect, useState } from 'react'
import axios from 'axios'
import FoodGrid from './FoodGrid'
import Pagination from '../Pagination/Pagination'
import CartSkeleton from '../Additional/CartSkeleton'


const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?a='

const FoodItems = ({country, setFlag, sortFilter, currentPage, setCurrentPage}) => {
    const [foodData, setFoodData] = useState([])
    const [sortedData, setSortedData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    // Pagination
    
    const [mealPerPage] = useState(8);

    const fetchData = async()=>{
        const {data} = await axios.get(`${url}${country}`)

        setFoodData(data.meals);
        setIsLoading(false)
    }    
    useEffect(()=>{
        fetchData();
       

    },[country])

    useEffect(()=>{

        const sortData =()=>{
            let newData = [...foodData];
            if(sortFilter === 'A-Z Sort'){
                newData.sort((a, b) => a.strMeal.localeCompare(b.strMeal));

            }
            else if(sortFilter === 'Z-A Sort')
            newData.sort((a, b) => b.strMeal.localeCompare(a.strMeal));

            setSortedData(newData)
        }
        sortData()


    },[sortFilter, foodData])


    // this is for the pagination purpose
  const lastPostIndex = currentPage * mealPerPage;
  const firstPostIndex = lastPostIndex - mealPerPage;
  const paginatedData = sortedData.slice(firstPostIndex, lastPostIndex)

    
   


    
    

  return (
    <>
    <div className='flex justify-center pt-5 md:mx-36'>




      <div className=' min-h-72 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 m-3 '>
        {
            isLoading && <CartSkeleton carts= {8}/>

        }
        
        {
        paginatedData.map((items)=>(<FoodGrid key={items.idMeal} setFlag={setFlag} items={items} />))
        }
      </div>


        
      
    </div>
      <div className=' flex justify-center items-center mt-4 '>
        <Pagination totalPost={sortedData.length} currentPage={currentPage} mealPerPage={mealPerPage} setCurrentPage={setCurrentPage} />
      </div>
    </>
  )
}

export default FoodItems
