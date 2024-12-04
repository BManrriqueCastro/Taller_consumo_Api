// Importamos React para definir el componente funcional
import React from 'react';

function CharacterCard({ character }) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>
            {/* Mostramos la imagen del personaje */}
            <img
                src={character.image} // URL de la imagen
                alt={character.name} // Texto alternativo
                style={{ width: '100px', borderRadius: '50%' }} // Estilo: tamaño y forma circular
            />
            {/* Mostramos el nombre del personaje */}
            <h3>{character.name}</h3>
        </div>
    );
}

export default CharacterCard;

