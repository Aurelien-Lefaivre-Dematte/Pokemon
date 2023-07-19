import { useState } from 'react'
import { useEffect } from 'react'
import Main from '../components/main/Main'
import Searchbar from '../components/searchbar/Searchbar'
import axios from 'axios'
import './App.css'



function App() {
  const [posts, setPosts] = useState([]); // posts = tableau vide

  const [filteredPikimon, setFilteredPikimon] = useState([]);



  useEffect(() => {
    axios.get(`https://api-pokemon-fr.vercel.app/api/v1/pokemon`) // requête axios
      .then(response => {
        setPosts(response.data); // on met à jour le tableau posts du state avec setPosts. On lui donne la réponse de la requête.
      })
      .catch(error => { // si erreur
        console.error(error); // on affiche l'erreur dans la console
      });
  }, []); // on met un tableau vide pour que la requête ne se fasse qu'une seule fois

  const handleSearch = (searchTerm) => {
    // Filtrer les résultats en fonction du terme de recherche
    const filteredResults = posts.filter(pokemon => {
      // Vous pouvez personnaliser la logique de recherche ici.
      // Par exemple, pour rechercher le terme de recherche dans le nom du Pokémon.
      return pokemon.name.fr.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setFilteredPikimon(filteredResults); // Mettre à jour les résultats filtrés avec les résultats de la recherche

  };

  return (
    <>
    <Searchbar onSearch={handleSearch} />
    <Main pikimon = {filteredPikimon} /> {/* on passe le tableau posts en props à Main */}
    </>
  );
}

export default App
