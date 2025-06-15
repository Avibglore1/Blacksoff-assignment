import { LOGO_URL } from '@/utils/constants'
import React from 'react'

function Header() {
  return (
    <div className='mt-5 flex items-center'>
        <img src={LOGO_URL} 
        alt="Supreme Group Logo" 
        className='pl-20 pb-4 items-center'/>
    </div>
  )
}

export default Header