import React, {useState, useEffect} from 'react'
import Skeleton, { SkeletonTheme} from 'react-loading-skeleton'
import { Link } from 'react-router-dom'


function Card({movie}) {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, [])

  return (
    <>
        {
            isLoading
            ?
            <div>
                <SkeletonTheme color="#202020" highlightColor='#444'>
                    <Skeleton height={300} duration={2}/>
                </SkeletonTheme>
            </div>
            :
            <Link
                to={`movie/${movie.id}`} style={{textDecoration:"none", color:"white"}}
            >
                <div className='inline-block transition-transform duration-200 relative rounded-lg overflow-hidden m-1/5 cursor-pointer min-w-40rem h-96 z-0 border border-gray-600 cards hover:transform-scale-120 hover:z-1000 shadow-2xl'>
                    <img className='h-[300px]' src={` https://image.tmdb.org/t/p/original/${movie ? movie.poster_path : ""}`} alt=''/>
                    <div className='absolute pb-4 px-4 bottom-0 h-96 flex flex-col w-85% justify-end bg-gradient-to-t from-transparent to-black opacity-0 transition-opacity duration-200 hover:opacity-100'>
                        <div className='font-bold text-lg mb-1'>{movie ? movie.original_title : ""}</div>
                        <div className='text-xs mb-1'>
                            {movie ? movie.release_date : ""}
                            <span className='float-right'>{movie ? movie.vote_average : ""} <i>icon</i></span>
                        </div>
                        <div className='italic text-xs mb-1'>{movie ? movie.overview.slice(0, 118) + "..." : ""}</div>
                    </div>
                </div>
            </Link>

        }
    </>
  )
}

export default Card