import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // hook para acceder a los parámetros de la URL
import axios from 'axios';
import CharacterDetails from '../components/CharacterDetails'; // Componente que muestra los detalles del personaje

function CharacterDetailsPage() {
  const { id } = useParams(); // Obtiene el parámetro 'id' de la URL
  const [character, setCharacter] = useState(null); // Estado para guardar los datos del personaje

  useEffect(() => {
    // Petición GET para obtener los detalles del personaje según su ID
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => setCharacter(response.data)); // Guardamos el personaje en el estado
  }, [id]); // El efecto se vuelve a ejecutar cuando el ID cambia

  if (!character) return <p>Loading...</p>; // Muestra "Loading..." mientras se obtiene el personaje

  return <CharacterDetails character={character} />; // Muestra los detalles del personaje
}

export default CharacterDetailsPage;


