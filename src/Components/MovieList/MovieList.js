import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import Card from '../Card'


function MovieList() {

    const [movieList, setMovieList] = useState([])
    const {type} = useParams()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [type])

    const getData = () => {
        axios
        .get(
          `https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
        )
        .then((res) => setMovieList(res.data.results));
    }

  return (
    <div className='p-16'>
        <h2 className='uppercase text-3xl m-10'>{type ? type : "popular"}</h2>
        <div className='flex justify-center flex-wrap'>
            {
                movieList.map((movie) => (
                    <Card movie={movie}/>
                ))
            }
        </div>
    </div>
  )
}

export default MovieList