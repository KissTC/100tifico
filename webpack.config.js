// Aqui va toda la config que requiere nuestro proyecto

//nos permite acceder hacia donde estamos dentro de las carpetas sea donde sea
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

//Aquí se encuentra toda la configuración de lo que va a suceder. Modulo para exportar.
module.exports = {
    entry: './src/index.js', //punto de entrada
    output: { //Donde se envía el proyecto estructurado y compilado listo para producción.
        path: path.resolve(__dirname, 'dist'), //Creamos el lugar dónde se exportará el proyecto.
        filename: 'main.js' //el compilado cuando este listo para produccion se llama main.js
    },
    resolve: {
        extensions: ['.js'] //Extensiones que vamos a utilizar. requiere un array con extensiones
    },
    module: { //Se crea un modulo con las reglas necesarias que vamos a utilizar.
        rules: [
            { //estructura de babel
                test:  /\,js?$/, //Nos permite identificar los archivos según se encuentran en nuestro entorno.
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin([
            {
                inject: true,
                template: './public/index.html',
                filename: './index.html'
            }
        ]) //Permite trabajar con los archivos HTML
    ]
}