# curso-platzi-react-avanzado ⚛️

Repositorio con el código del [Curso Avanzado de React de Platzi](https://platzi.com/cursos/react-avanzado/)


---------------------------------------------------------------------------------

# Bienvenida al curso y prerrequisitos

¡Te damos la bienvenida al Curso Avanzado de React!

En este curso nuestro profesor Miguel Ángel Durán García, Lead Frontend Architect en Adevinta Spain trabajando desde hace cinco años con React, nos dará una vista más profunda de cómo usar React con Hooks, propTypes y mucho más. Recuerda que React es una biblioteca de vistas creada por Facebook no solo para la web, también podemos hacer vistas nativas para el móvil, aplicaciones de terminal e incluso realidad virtual. React es basado en componentes y declarativo.

¿Por qué debes seguir profundizando en tus conocimientos de React?

    Actualmente es la tecnología más demandada del mercado.
    Divide el código utilizando React.lazy.
    Render props.
    Hooks personalizados.
    Comparte la lógica con componentes de orden superior.

Recuerda que cualquier duda puedes usar nuestro sistema de discusiones. ¡Nunca pares de aprender!


## Proyecto y tecnologías que usaremos

En este curso realizaremos una aplicación muy parecida a Instagram, llamada petgram. Tendremos nuestras rutas, gestión de usuarios y likes.

Utilizaremos como empaquetador y transpilador:
- Webpack
- Babel

Estilado con CSS en JS con:
- styled-components

Como linter utilizaremos:
- Standard JS

Para fetching (obtención) de datos:
- GraphQL
- React Apollo

Para el enrutado de la SPA utilizaremos:
- Reach Router

Para las buenas prácticas utilizaremos:
- Lighthouse
- Cypress

Por último haremos SEO, PWA y Deploy con:
- React Helmet
- Workbox
- Progressive Web App
- Deply con Now


## Clonando el repositorio e instalando Webpack

Pasos para iniciar nuestro proyecto:

Paso 1: Vamos a clonar el repositorio desde github.com/midudev/curso-platzi-react-avanzado usando git clone URL_DEL_REPO en nuestra consola.
Paso 2: Vamos a instalar webpack y webpack-cli como dependencias de desarrollo con: npm i webpack wepack-cli --save-dev.
Paso 3: Crearemos una carpeta llama src y dentro de ella un archivo index.js en el cual colocaremos solo un console.log('Empezamos el curso!').
Paso 4: Crearemos en el root de nuestro proyecto un archivo webpack.config.js el cual tendrá toda la configuración de webpack
Paso 5: Instalaremos html-webpack-plugin con: npm i html-webpack-plugin --save-dev.
Paso 6: Instalaremos webpack-dev-server con: npm i webpack-dev-server --save-dev.
Paso 7: Añadiremos un nuevo script llamado dev: "dev": "webpack-dev-server".

```
// webpack.config.js
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
        output: {
                filename: 'app.bundle.js'
        },
        plugins: [
                new HtmlWebpackPlugin()
        ]
}
```