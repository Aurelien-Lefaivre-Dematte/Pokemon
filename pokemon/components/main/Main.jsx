import PropTypes from 'prop-types';


const Main = ({ pikimon  }) => {
    return (
      <div>
        <h1>Liste des Pokémons</h1>
        <ul>
          {pikimon.map(pokemon => (
            <div key={pokemon.pokedexId}>
              <img src={pokemon.sprites.regular} alt="" />
              <li>Nom Français: {pokemon.name.fr}</li>
              <p>Nom Japonais: {pokemon.name.jp}</p>
              <p>Numéro dans le pokedex: {pokemon.pokedexId}</p>
              <p>Génération: {pokemon.generation}</p>
            </div>
          ))}
        </ul>
      </div>
    );
  };



  
  export default Main;


