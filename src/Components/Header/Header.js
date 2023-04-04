import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div className='h-16 bg-transparent flex items-center text-lg'>
        <div className='flex items-center'>
          <Link className='mx-7 hover:text-red-500 ' to='/'>
            <img className='w-[80px]' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png' alt=''/>
          </Link>
          <Link className='mx-7 hover:text-red-500 ' to='/movies/popular'>Popular</Link>
          <Link className='mx-7 hover:text-red-500 ' to='/movies/now_playing'>Now Playing</Link>
          <Link className='mx-7 hover:text-red-500 ' to='/movies/upcoming'>Upcoming</Link>
        </div>
    </div>
  )
}

export default Header