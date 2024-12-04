# Rick and Morty Explorer

Una aplicación desarrollada en React que consume la API pública de [Rick and Morty API](https://rickandmortyapi.com/), permitiendo a los usuarios explorar personajes, buscar por nombre, filtrar resultados, y ver detalles específicos de cada personaje.

## Características

- **Lista de personajes**: Visualiza todos los personajes disponibles en la API.
- **Búsqueda dinámica**: Encuentra personajes escribiendo su nombre.
- **Navegación**: Explora detalles de un personaje específico al hacer clic en su tarjeta.
- **Rutas dinámicas**: Gestión de páginas usando React Router.

---

## Estructura

```plaintext
src/
├── components/
│   ├── CharacterCard.jsx          # Componente para cada tarjeta de personaje
│   ├── CharacterList.jsx          # Componente para mostrar la lista de personajes
│   ├── SearchBar.jsx              # Componente de búsqueda
│   └── CharacterDetails.jsx       # Componente para mostrar los detalles de un personaje específico
├── pages/
│   ├── Home.jsx                   # Página principal
│   └── CharacterDetailsPage.jsx   # Página de detalles del personaje
├── App.jsx                        # Definición de rutas
└── main.jsx                       # Punto de entrada de la aplicación
```
---

## Tecnologías utilizadas

- **React**: Framework para construir la interfaz de usuario.
- **React Router**: Manejo de rutas en la aplicación.
- **Axios**: Para realizar solicitudes HTTP a la API.
- **CSS**: Estilización básica de los componentes.

---

## Clona este repositorio:
   ```bash
   git clone https://github.com/BManrriqueCastro/Taller_consumo_Api.git
