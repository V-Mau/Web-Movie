// webpack.config.js
const path = require('path');

module.exports = {
  entry: './scripts/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),  // Ajusta la carpeta de salida según tus preferencias
  },
  // Resto de la configuración...
};



// module.export = {
//     entry:"./scripts/index.js",

//     autput:{
//         path:__dirname + "/public",
//         filename:"build",
//     }
// }