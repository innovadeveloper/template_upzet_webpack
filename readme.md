# Webpack Repositorie
## Intro
Una pequeña plantilla de webpack para poder desarrollar **el frontend y su empaquetado** de : CSS, JS, HTML Injection, Hash de ficheros, LiveReload..

### Structure
Estructura de directorios y ficheros
```bash
|-- package-lock.json
|-- package.json
|-- public
|   `-- index.html
|-- readme.md
|-- src
|   |-- assets
|   |   |-- fonts
|   |   `-- images
|   |       |-- foto_1.png
|   |       |-- foto_2.png
|   |       `-- foto_3.png
|   |-- css
|   |   `-- style.css
|   |-- index.js
|   `-- scss
|       `-- style.scss
`-- webpack.config.js
```



### Dependencias and scripts (package.json)

```json
    {
        "main": "index.js",
        "scripts": {
            "build": "webpack --mode production --config webpack.config.js",
            "builddev": "webpack --mode development --config webpack.config.dev.js",
            "start": "webpack serve --mode development --config webpack.config.dev.js --open"
        },
        "devDependencies": {
            "@babel/core": "^7.14.0",
            "@babel/plugin-transform-runtime": "^7.13.15",
            "@babel/preset-env": "^7.14.1",
            "babel-loader": "^8.2.2",
            "copy-webpack-plugin": "^8.1.1",
            "css-loader": "^5.2.4",
            "css-minimizer-webpack-plugin": "^2.0.0",
            "dotenv-webpack": "^7.0.2",
            "file-loader": "^6.2.0",
            "html-webpack-plugin": "^5.3.1",
            "mini-css-extract-plugin": "^1.6.0",
            "node-sass": "^6.0.0",
            "sass-loader": "^11.1.0",
            "terser-webpack-plugin": "^5.1.1",
            "url-loader": "^4.1.1",
            "webpack": "^5.37.0",
            "webpack-cli": "^4.7.0",
            "webpack-dev-server": "^3.11.2"
        }
    }
```

### Plugins
| Plugins | #Uso |
| :---: | :---: |
| HtmlWebpackPlugin | Permite definir los **entrypoints html** a los que se les inyectará los css, js
| MiniCSSExtractPlugin | **Extraerá todo el css** que se importe dentro de los js para que luego sea llevado a un fichero externo
| CopyPlugin | Copiará recursos como directorios, ficheros (jpeg, wof, json, etc) al realizar los builds
| Dotenv | Soporte para leer ficheros **.env** y cargarlos como variables de entrono

### Loaders
| Loaders | #Uso |
| :---: | :---: |
| babel-loader | Soporte para trabajar con babel. Requiere otros plugins y **presets** como complemento, ademàs del fichero **.babelrc**
| css-loader | Interpreta los imports dentro del *.js que hacen referencia a ficheros css
| sass-loader | Carga sass,scss y los compila a ficheros css
| url-loader | Transforma los recursos (woff, png, etc) en **base64 URIs** permitiendo q se puedan trabajar importandolos desde css o scss con font-face. Y màs casos.


### DevServer with LiveReload
| Dependencies | #Uso |
| :---: | :---: |
| webpack-dev-server | Soporte para trabajar con webpack en modo de desarrollo con live reloading. El comando de ejecución **webpack serve --mode development --open**
| file-loader | Muchos de los cargadores como **url-loader** o **assets-module** tambièn lo utilizan en el build.



 
## Características
- Build development and production
- **Live Reloading**
- Preprocessor for SASS
- Copy resources
- Alias para resolver rutas de ficheros
- Importación de imágenes,ttf, etc dentro del mismo js y generar un **base64 URI** de ese recurso
- Environment variables
- ForntAwesome5 (folder) added and bootstrap (tag script)

## Explanation

#### UrlLoader
**urlLoader** nos permitirá transformar ficheros en base64 URIs y poder trabajar con distintos tipos de ficheros como para este caso (woff|woff2) para que las guarde dentro de la carpeta 'assets/fonts' dentro del dir 'dist'.
 
#### Assets Module
**module assets of type : asset/resource** nos permite trabajar con recursos  (fonts, icons, etc) de forma separada similar al urlLoader (generar una base64 URI) sin necesidad de especificar un loader. Para este caso se aplicó la regla para capturar archivos (png|svg|eot|ttf) y se especificó una ruta con **assetModuleFilename**. Cabe decir que en este repo se utilizó para esos recursos que son llamados como las fuentes dentro de los css de fontawesome..

**webpack.config.js**
```js
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        assetModuleFilename: 'assets/resources/[hash][ext][query]'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCSSExtractPlugin.loader,
                    "css-loader",
                ]
            },
            {
                // test: /\.png/,
                test: /\.(png|svg|eot|ttf)$/,
                type: "asset/resource"
            },
            {
                test: /\.(woff|woff2)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000, // O LE PASAMOS UN BOOLEANOS TRUE O FALSE
                        mimetype: 'aplication/font-woff',
                        name: "[name].[ext]",
                        outputPath: './assets/fonts/',
                        publicPath: '../assets/fonts/',
                        esModule: false
                    }
                }
            },
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [{
                from: path.resolve(__dirname, "src", "assets/images"),
                to: "assets/images"
            }, {
                from: path.resolve(__dirname, "src", "assets/fontawesome-free-5.15.3-web"),
                to: "assets/fontawesome-free-5.15.3-web"
            }],
        }),
    ],
}
```
[Extra] : Si se requiere trabajar las imágenes (foto_1.png, foto_2.png, *.ttf) tan solo se deben de importar dentro del mismo js de la siguiente forma..


**index.js**
```js
import '@fontawesomev5/all.css'
import '@styles/theme.css'
import photo from '@images/person_photo@2x.png' // se hashearà al generar el bundle
```
### index.js (Full)


```js
import '@fontawesomev5/all.css'
import '@styles/style.scss'
import photo from '@images/foto_1.png'

//  environment vars..
const API = process.env.API;
const USER = process.env.USER_ACCOUNT;

$( document ).ready(function() {
    console.log("=====.env ===");
    console.log("API : " + API);
    console.log("USER ACCOUNT xd   : " + USER);
});
```

## Instalación

```bash
npm install
# npm tasks : production, development
npm run build
npm run buildev
# npm task : open dev server
npm run start
```


## Optimización
- Hacer uso del transpilado solo para navegadores que no soporten ES6 y trabajar
con ES6 nativo en los que si, generarà ficheros màs reducidos y òptimos. 
Info :
https://desarrolloweb.com/articulos/javascript-transpilacion-es5-es6-webpack.html


[//]: # (comments)


 
## License

MIT
