
export default function Searchbyid(posts, searchTerm) {
    const filteresults = posts.filter(pokemon => {
        return pokemon.pokedexId.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return filteresults;
}

    

