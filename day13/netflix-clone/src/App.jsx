import React from 'react'
import MovieList from './MovieList'

function App() {
  return (
    <div>
            <h1
            style={{ backgroundColor:"black",
                color:"white",
                textAlign:"center",
                fontSize:"20px"

            }}>
                Netflix Clone App
            </h1>
            <MovieList/>
            
      </div>
  )
}

export default App