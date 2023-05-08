import React from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {

 const [movies,setMovies]= React.useState([])
 const [load,setLoad]=React.useState(false)
 const [error,seterror]=React.useState(null)
  async function  getMovies(){
      setLoad(true)
      seterror(null)
      try{
        let response=await fetch("https://swapi.dev/api/films")
        if(!response.ok){
          throw new Error(error.message)
        }
        let data=await response.json()
         
          const fetchedData=data.results.map((item)=>{
             return{
               id:item.episode_id,
               title:item.title,
               releaseDate:item.release_date,
               openingText:item.opening_crawl
             }
          })
          setMovies(fetchedData)
      }
      catch(error){
 
        seterror("Some thing went wrong")
      }
      setLoad(false)
     
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={getMovies}>Fetch Movies</button>
      </section>
      <section>
       {!load && movies.length>0 && <MoviesList movies={movies} />}
       { load && <p>loading ....</p>}
       {!load && error && <p>{error}</p>}
       {!load && movies.length===0 && !error  && <p>no movies found</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
