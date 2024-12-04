import React from 'react';
// BrowserRouter: Maneja el enrutamiento en la aplicación web
// Router: es necesario para manejar las rutas en React
// Routes: Contiene las rutas de la aplicación
// Route: Define una ruta que renderiza un componente específico
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  //Maneja el enrutamiento en la aplicación web.
import Home from './pages/Home'; // Página principal que mostrará la lista de personajes
import CharacterDetailsPage from './pages/CharacterDetailsPage'; // Página que mostrará los detalles de un personaje
import './App.css'

function App() {
  return (
    <Router> 
      <Routes>
        {/* path="/": Es la ruta principal que muestra la lista de personajes (usando Home) */}
        <Route path="/" element={<Home />}/>

        {/* Ruta para mostrar los detalles de un personaje específico */}
        <Route path="/character/:id"            //Es la ruta que renderiza los detalles del personaje usando
        element={<CharacterDetailsPage />}      //El parámetro :id es dinámico y se usa para obtener el ID del personaje de la URL.
        />
      </Routes>
    </Router>
  );
};

export default App;
