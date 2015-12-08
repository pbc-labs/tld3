module.exports = {
  context: __dirname + "/src",
// file that imports everything
  entry: './core/core.js',
  output: {
    filename: 'd3fault.js',
    path: __dirname + '/dist'
  },
// create sourcemap for debugging - for DEV ONLY
  devtool: 'eval-source-map',
// run Babel
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel', exclude: /node_modules/}
    ]
  }
};
