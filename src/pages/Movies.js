import React, { useState, useEffect } from 'react'
import MovieFrom from '../components/MovieForm'
import Movie from '../components/movie'



const Movies =()=>{
    const [movies, setMovies] = useState([])

    const removeMovie=(id)=>{
        setMovies(movies.filter(movie=>{
          return movie.id!== id
        }))
      }

    const renderMovies = movies.length ? movies.map(movie =>{
        return (
          <Movie 
            movie={movie} 
            key={movie.id} 
            removeMovie={removeMovie}/>
        );
      }):"추가된 영화가 없습니다." 
    
      const addMovie =(movie)=>{
        setMovies([...movies,movie])
      }

    
    return(
        <React.Fragment>
            <h1>Movie List</h1>
            <MovieFrom addMovie={addMovie}/>
            {renderMovies}
        </React.Fragment>
    )
}


export default Movies;