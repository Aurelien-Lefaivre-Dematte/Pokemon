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
    <>
    <ul>
        {posts.map(pokemon => (
          <div key={pokemon.pokedexId}>
            <img src={pokemon.sprites.regular} alt="" />
            <li>Nom Français: {pokemon.name.fr}</li>
            <p>Nom Japonais: {pokemon.name.jp}</p>
            <p>Numéro dans le pokedex: {pokemon.pokedexId}</p>
            <p>Génération: {pokemon.generation}</p>
            {/* Console.log a été supprimé de JSX */}
            {/* <li>{console.log(pokemon.types)}</li> */}
          </div>
        ))}
      </ul>
    </>
  );
}

export default App
