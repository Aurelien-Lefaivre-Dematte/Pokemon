import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import './App.css'



function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://api-pokemon-fr.vercel.app/api/v1/pokemon')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <ul>
      {posts.map(pokemon => (
        console.log(pokemon),
        <li key={pokemon.pokedexId}>{pokemon.pokedexId}</li>
      ))}
    </ul>
  );
}

export default App
