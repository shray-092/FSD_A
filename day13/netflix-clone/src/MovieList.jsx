import './MovieList.css'
import movies from "../src/movies"

export default function MovieList() {
  return (
    <div className='movie-list'>
        {movies.map((movie)=>(
            <div key={movie.id} className='movie-card'>
                <img src={movie.image} className='movie-img'/>
                <h1>Title:{movie.title}</h1>
                <h2>language:{movie.Language}</h2>
                <h2>Cost:{movie.cost}</h2>
            </div>
        ))}
    </div>
  )
}