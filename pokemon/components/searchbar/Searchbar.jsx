import { useState } from 'react';

export default function Searchbar({ onSearch }) {

    const [searchTerm, setSearchTerm] = useState(''); // search = chaîne de caractères vide

    const handleInputChange = (event) => { // event correspond à l'événement onChange de l'input
        setSearchTerm(event.target.value); // on met à jour search avec la valeur de l'input
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // on empêche le comportement par défaut du formulaire
        onSearch(searchTerm); // on appelle la fonction onSearch avec search en paramètre
    };
  return (
    <div>
        <form onSubmit={handleSubmit}> {/* on appelle la fonction handleSubmit au submit du formulaire */}
            <input 
            type="text" // type de l'input
            placeholder="Que recherchez vous ?" // placeholder de l'input
            value={searchTerm} // la valeur de l'input est la valeur de search
            onChange={handleInputChange}  /> {/* on appelle la fonction handleInputChange à chaque changement de l'input */}
            <button>Recherche</button>
        </form>
    </div>
  )
}

