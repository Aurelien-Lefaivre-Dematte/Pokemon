export default function searchByName(posts, searchTerm) {
    // Vérifie si le terme de recherche est un nombre (pokedexId)
    const isPokedexId = !isNaN(searchTerm);
  
    // Filtrer les résultats en fonction du terme de recherche
    const filteredResults = posts.filter(pokemon => {
      if (isPokedexId) {
        // Recherche par pokedexId
        return pokemon.pokedexId === parseInt(searchTerm);
      } else {
        // Recherche par nom
        return pokemon.name.fr.toLowerCase().includes(searchTerm.toLowerCase());
      }
    });
  
    return filteredResults;
  }

