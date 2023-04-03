import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div className='h-16 flex items-center text-lg'>
        <div>
          <Link className='mx-7 hover:text-red-500 ' to='/'>Logo</Link>
          <Link className='mx-7 hover:text-red-500 ' to='/movies/popular'>Popular</Link>
          <Link className='mx-7 hover:text-red-500 ' to='/movies/top_rate'>Top rate</Link>
          <Link className='mx-7 hover:text-red-500 ' to='/movies/upcoming'>Upcoming</Link>
        </div>
    </div>
  )
}

export default Header