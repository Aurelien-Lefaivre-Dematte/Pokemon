import PropTypes from 'prop-types';


const Main = ({ pikimon  }) => {
    return (
      <div>
        <h1>Liste des Pokémons</h1>
        <ul>
          {pikimon.map(pokemon => (
            console.log(pokemon),
            <div key={pokemon.pokedexId}>
              <img src={pokemon.sprites.regular} alt="" />
              <p>Génération: {pokemon.generation}</p>
              <p>Numéro dans le pokedex: {pokemon.pokedexId}</p>
              <p>Nom Français: {pokemon.name.fr}</p>
              <p>Nom Japonais: {pokemon.name.jp}</p>
              <p>Nom Anglais: {pokemon.name.en}</p>
              <p>Type: {pokemon.types.map(type => type.name).join(' / ')} </p>
            </div>
          ))}
        </ul>
      </div>
    );
  };



  
  export default Main;


