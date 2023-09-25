# App Recipes React + Vite + Tailwind

En este desarrollo se implementa ReactJs con Vite y Tailwind como framework de css, se implementa infinite scroll para el paginado, pero sin usar componente de terceros, solo manipulando el scroll y altura de la pantalla.

Se usa **Edaman** como api de recetas, la cual requiere de ***appKey*** y ***appId***, lo que solo permite un máximo de solicitudes por día, en caso que no pueda mostrar mas data.

Se implementa redux con **react redux** y **redux toolkit** para la comunicacion entre componentes de la response del api y el estado del loading, aunque no es estrcitamente necesario su uso, se implementa por práctica de redux.


## Dependencias

- [EDAMAN - Recetas](https://developer.edamam.com/es/api-recetas-edamam-documentacion) API Buscador de Recetas
- [Node.js](https://nodejs.org/en/) version 14.18+, 16+
- [React Redux](https://redux-toolkit.js.org/)
- [ReduxJs ToolKits](https://react-redux.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Compatibility Note

Vite requires Node.js version 14.18+, 16+. However, some templates require a higher [Node.js](https://nodejs.org/en/) version to work, please upgrade if your package manager warns about it.


