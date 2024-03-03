import React, { useEffect, useState } from 'react'
import { MdStars } from "react-icons/md";
import { BsDot } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const idUrl='https://www.themealdb.com/api/json/v1/1/lookup.php?i='

const FoodGrid = ({ items, setFlag, }) => {

    const [idDetails, setIdDetails] = useState([])
    const [randomRating, setRandomRating] = useState(3)
    const [randomTime, setRandomTime] = useState(12)

    const fetchIdData = async()=>{
        const {data} = await axios.get(`${idUrl}${items.idMeal}`);
        setIdDetails(data.meals)
        
    }
    useEffect(()=>{
     
            
            const randomDecimal = Math.random() * 2 + 3;
            const rating = parseFloat(randomDecimal.toFixed(1));
            setRandomRating(rating)

            const randomTimeDecimal = Math.random() * 12 + 12;
            const time = parseFloat(randomTimeDecimal.toFixed())
            setRandomTime(time)
          
        fetchIdData();
    },[])

    const navigate = useNavigate();
    const handleDetails =()=>{
        setFlag(true)
        navigate(`/FoodGridModel/${items.idMeal}`,
        {
            state:{
                item:idDetails,
            },
        })
        
        
    }

   
      
      // Example usage
    

    return (
        <div className='flex flex-col gap-2  md:h-52 duration-100 hover:scale-95 cursor-pointer  text-gray-700 hover:text-gray-900' onClick={handleDetails}>
            <div className='rounded-2xl md:w-48 shadow-xl'>
                <img className='h-40 md:h-32 md:w-48 rounded-2xl shadow-xl ' src={items.strMealThumb} alt="err" />
            </div>
            <div className='md:px-2 font-medium '>
                <div>
                    <h2>{items.strMeal}</h2>
                    <div>
                        <p className='flex items-center font-rob '><MdStars className='text-green-600' /> {randomRating} <span><BsDot /></span> <span>{randomTime} min</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodGrid
