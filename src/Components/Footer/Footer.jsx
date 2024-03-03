import React from 'react'
import { SiSwiggy } from "react-icons/si";



const Footer = () => {
  return (
    <div className='h-96 bg-black w-full flex justify-center items-center text-gray-200 font-pop'>
      <div className='  md:w-2/3 h-full grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-3 py-10'>

        <div className='flex flex-col gap-2'>
          <div className='flex gap-1 items-center'>
            <div>
              <SiSwiggy className='text-4xl' />
            </div>
            <p className='text-center font-bold text-2xl'>Swiggy</p>
          </div>
          <p className='text-m p-2 text-gray-300'>© 2024 Bundl Technologies Pvt. Ltd</p>
        </div>
        <div className='flex flex-col gap-2 text-sm text-gray-300 '>
          <h2 className='font-bold text-lg text-gray-100'>Company</h2>
          <p>About</p>
          <p>Careers</p>
          <p>Team</p>
          <p>Swiggy One</p>
          <p>Swiggy Instamart</p>
          <p>Swiggy Genie</p>
        </div>
        <div className='hidden md:flex flex-col gap-8'>
          <div className='flex flex-col gap-2 text-sm text-gray-300 '>
            <h1 className='font-bold text-lg text-gray-100'>Contact us</h1>
            <p>Help & Support</p>
            <p>Partner with us</p>
            <p>Ride with us</p>
          </div>
          <div className='hidden  md:flex flex-col gap-2 text-sm text-gray-300 '>
            <h1 className='font-bold text-lg text-gray-100'>Legal</h1>
            <p>Terms & Conditions</p>
            <p>Cookie Policy</p>
            <p>Privacy Policy</p>

          </div>
        </div>
        <div className='hidden md:flex flex-col gap-2 text-sm text-gray-300 '>
        <h2 className='font-bold text-lg text-gray-100'>We deliver to:</h2>
          <p>Banglore</p>
          <p>Careers</p>
          <p>Gurgaon</p>
          <p>Hyderabad</p>
          <p>Delhi</p>
          <p>Mumbai</p>
          <p>Pune</p>
        </div>

      </div>

    </div>
  )
}

export default Footer
