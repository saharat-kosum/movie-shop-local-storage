import React, { useEffect, useState } from 'react'
import './Body.css'
import axios from 'axios'
import MovieCard from './MovieCard';

function Body() {
    const APIkey = '5c5cbbbdf80e1a2ad6240d4b45670f81';
    const [search,setSearch] = useState('a');
    const [movies,setMovies] = useState([]);
    const baseURL = `https://api.themoviedb.org/3/search/movie?api_key=${APIkey}&query=${search}`;

    useEffect(()=>{
      axios.get(baseURL)
      .then((res)=>{
        setMovies(res.data.results);
      }).catch((err)=>console.log(err))
    },[baseURL])

  return (
    <div className='Content'>
        <div className="header">
          <h1>Movie</h1>
          <input type="text" placeholder='Search Movie ..' onChange={(e)=>setSearch(e.target.value)}/>
        </div>
        <div className='MoviesContainer'>
          {movies && movies.map(movie=><MovieCard key={movie.id} movie={movie}/>)}
        </div>
    </div>
  )
}

export default Body