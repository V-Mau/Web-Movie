// webpack.config.js
// const path = require('path');

// module.exports = {
//   entry: './scripts/index.js',
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'public'), 
//     publicPath: '/public/', 
//   },
  
// };

const path = require('path');
const outputPath = path.resolve(__dirname, 'public');

module.exports = {
  entry: './scripts/index.js',
  output: {
    path: outputPath,
    filename: 'bundle.js',
  }
}



