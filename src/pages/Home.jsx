// useState: Se usan para manejar el estado en el componente.
// useEffect: Realiza la petición a la API cuando el componente se monta por primera vez.
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Axios para hacer peticiones HTTP
import CharacterList from '../components/CharacterList'; // Componente para mostrar la lista de personajes
import SearchBar from '../components/SearchBar'; // Barra de búsqueda

function Home() {
    const [characters, setCharacters] = useState([]); // Estado para guardar la lista de personajes 
    const [filteredCharacters, setFilteredCharacters] = useState([]); // Estado para los personajes filtrados
    const [searchQuery, setSearchQuery] = useState(''); // Estado para almacenar lo que el usuario escribe en el buscador

    // Efecto que se ejecuta una vez cuando el componente se monta
    useEffect(() => {
        // Hacemos una solicitud GET a la API de Rick and Morty
        axios.get('https://rickandmortyapi.com/api/character')
            .then(response => {
                // Guardamos los resultados en el estado `characters`
                setCharacters(response.data.results);
                // Inicialmente, los personajes filtrados son todos los personajes
                setFilteredCharacters(response.data.results);
            });
    }, []); // El arreglo vacío asegura que la petición solo se haga una vez al montar el componente

    // Función para manejar la búsqueda de personajes
    // Actualiza la lista de personajes filtrados en función de la consulta de búsqueda
    const handleSearch = (query) => {
        // Actualizamos el estado de la consulta de búsqueda
        setSearchQuery(query);
        // Filtramos los personajes cuyo nombre coincida con la consulta
        setFilteredCharacters(
            characters.filter(character =>
                character.name.toLowerCase().includes(query.toLowerCase()) // Comparar el nombre con la búsqueda (insensible a mayúsculas)
            )
        );
    };

    return (
        <div>
            <h1>Rick and Morty Characters</h1>
             {/* Componente de la barra de búsqueda */}
            <SearchBar value={searchQuery} onSearch={handleSearch}/>
            {/* Componente que muestra la lista de personajes filtrados */}
            <CharacterList characters={filteredCharacters}/>
        </div>
    );
};

export default Home;
