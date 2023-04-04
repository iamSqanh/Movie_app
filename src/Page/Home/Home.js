import React, { useEffect, useState } from "react";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import {AiFillStar} from 'react-icons/ai'

import MovieList from "../../Components/MovieList";

function Home() {
  const [popularMovie, setPopularMovie] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
      )
      .then((res) => setPopularMovie(res.data.results));
  });

  return (
    <div>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
      >
        {
            popularMovie.map((movie) => (
                <Link to={`/movie/${movie.id}`}>
                    <div className="h-[600px]">
                        <img className="w-full block m-auto" src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt=""/>
                    </div>
                    <div className="absolute p-20 bottom-0 h-[70%] w-full flex flex-col items-center justify-end opacity-100 transition-opacity duration-300 hover:opacity-100">
                        <div className="font-black text-[64px] mb-2 text-left">{movie ? movie.original_title : ""}</div>
                        <div className="text-[32px] mb-4 flex items-center">
                            {movie ? movie.release_date : ""}
                            <span className="ml-12">
                                {movie ? movie.vote_average : ""}
                            </span>
                            <span><AiFillStar /></span> 
                        </div>
                        <div className="text-[16px] flex text-left w-[50%] mb-1 italic">{movie ? movie.overview : ""}</div>
                    </div>
                </Link>
            ))
        }
      </Carousel>
      <MovieList />
    </div>
  );
}

export default Home;
