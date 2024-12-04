import React from 'react';
import { Link } from 'react-router-dom'; // Link para manejar la navegación entre páginas sin recargar la aplicacion
import CharacterCard from './CharacterCard'; // Componente que muestra una tarjeta de personaje

function CharacterList({ characters }) {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            {/* Mapeamos cada personaje para renderizar una tarjeta */}
            {characters.map(character => (
                <Link
                    to={`/character/${character.id}`} // Creamos un enlace a la página de detalles del personaje
                    key={character.id} // Clave única para React
                >
                    {/* Renderizamos el componente `CharacterCard` */}
                    <CharacterCard character={character} />
                </Link>
            ))}
        </div>
    );
};

export default CharacterList;

