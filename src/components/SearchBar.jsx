import React from 'react';

function SearchBar({ value, onSearch }) {
    return (
        <input
            type="text"
            placeholder="Search characters..."
            value={value} // Vincula el valor del input con el estado 'searchQuery' del componente padre
            onChange={(e) => onSearch(e.target.value)} // Llama a la función 'onSearch' al cambiar el texto
        />
    );
};

export default SearchBar;

