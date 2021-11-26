// NPM Modules
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
//Components
import Catalogue from './componenets/Catalogue'
import MovieDetails from './componenets/MovieDetails'

const App = () => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios({
      url: 'https://api.themoviedb.org/3/discover/movie',
      params: {
        api_key: 'f012df5d63927931e82fe659a8aaa3ac',
        language: 'en-US',
        sort_by: 'popularity.desc',
        include_adult: 'false',
        include_video: 'false',
        page: 1,
        primary_release_year: 1999,
      }
    }).then((response) => {
      setMovies(response.data.results)
    })
  }, [])

  return(
    <BrowserRouter>
      <div className="wrapper">
        <header>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <h1>HackFlix</h1>
          </Link> 
        </header>

        <Routes>
          <Route path="/" element={<Catalogue movies={movies} />}/>
          <Route path="movie/:movieID" element={<MovieDetails />}/>
        </Routes>
        
      </div>
    </BrowserRouter>
    
  )
}

export default App;