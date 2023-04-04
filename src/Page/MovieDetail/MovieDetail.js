import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


function MovieDetail() {

    const [currentMovieDetail, setMovie] = useState()
    const {id} = useParams()

    useEffect(() => {
        getData()
        window.scrollTo(0, 0)
    }, [])

    const getData = () => {
        axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
        )
        .then((res) => setMovie(res.data.results));
    }

  return (
    <div>
        movie detail
    </div>
  )
}

export default MovieDetail