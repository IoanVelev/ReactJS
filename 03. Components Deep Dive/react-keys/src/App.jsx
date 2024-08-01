import { useState } from 'react';
import './App.css'


function App() {
  const [movies, setMovies] = useState([
    'Coach Carter',
    'The Matrix',
    'Fast and Furious 3'
  ]);

  const onButtonClick = () => {
    setMovies((oldMovies) => {
      let newMovies = [...oldMovies];
      newMovies[2] = 'Rush Hour';

      return newMovies;
    });
  };
 

  return (
    <>
    <h1>Movies</h1>
    
    {/* <ul>
      <li>{movies[0]}</li>
      <li>{movies[1]}</li>
      <li>{movies[2]}</li>
    </ul> */}

    <ul>
      {movies.map(movie => <li>{movie}</li>)}
    </ul>

    <button onClick={onButtonClick}>Change list</button>
      
    </>
  )
}

export default App
