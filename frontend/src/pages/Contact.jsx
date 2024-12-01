//import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className=' font-semibold text-lg text-gray-600'>OUR OFFICE</p>
          <p className=' text-gray-500'>1234 Messi Station <br /> Suite 350, Barcelona, Spain</p>
          <p className=' text-gray-500'>Tel: (123) 555-6543 <br /> Email: astra@gmail.com</p>
          <p className=' font-semibold text-lg text-gray-600'>CAREERS AT <span className='text-primary'>ASTRA.HEALTH</span> </p>
          <p className=' text-gray-500'>Learn more about our teams and job openings.</p>
          <button onClick={() => alert("We don't have any jobs currently. Please try again later.")} className='border border-gray-200 px-8 py-4 text-sm hover:bg-primary hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>

    </div>
  )
}

export default Contact
