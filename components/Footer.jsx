import React from 'react'
import Link from 'next/link'
import { LOGO_URL } from '@/utils/constants'
function Footer() {
  return (
   <footer className='font-sans  bg-gradient-to-t from-[#dce8f3] to-white text-gray-700 px-4 py-10'>
    <div className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10'>
      <div className='col-span-1 flex flex-col items-start'>
        <img src={LOGO_URL} 
        alt="Supreme Group Logo" 
        className='' />
      </div>
      <div className='md:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-6 '>
        <div>
          <h4 className='font-bold mb-3 text-black'>APPLICATIONS</h4>
          <ul className='space-y-2'>
            <li><Link href='#' className='hover:text-black'>Apparel</Link></li>
            <li><Link href='#' className='hover:text-black'>Automotive</Link></li>
            <li><Link href='#' className='hover:text-black'>Filtration</Link></li>
            <li><Link href='#' className='hover:text-black'>Customised Nonwoven</Link></li>
          </ul>
        </div>
        <div>
          <h4 className='font-bold mb-3 text-black'>COMPANY</h4>
          <ul>
            <li><Link href='#' className='hover:text-black'>Who We Are</Link></li>
            <li><Link href='#' className='hover:text-black'>Global Competency</Link></li>
            <li><Link href='#' className='hover:text-black'>Innovation</Link></li>
            <li><Link href='#' className='hover:text-black'>ESG Impact</Link></li>
          </ul>
        </div>  
        <div>
          <h4 className='font-bold text-black mb-3'>MORE</h4>
          <ul>
            <li><Link href='#' className='hover:text-black'>Contact Us</Link></li>
            <li><Link href='#' className='hover:text-black'>Careers</Link></li>
          </ul>
        </div>
        <div>
          <h4 className='font-bold text-black mb-3'>FOLLOW US</h4>
          <ul>
            <li><Link href='#' className='hover:text-black'>Linkedin</Link></li>
          </ul>
        </div>
      </div>
    </div> 
      <div className='mt-10  flex justify-evenly  gap-4 text-sm text-gray-600'>
        <p className=''>©2024. All Rights Reserved.</p>
        <p className=''>Supreme House, 110, 16th Road, Chembur, Mumbai – 400071.</p>
      </div>
   </footer>
  )
}

export default Footer