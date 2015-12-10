module.exports = {
  context: __dirname + "/test",
// file that imports everything
  entry: './test-entry.js',
  output: {
      path: __dirname + "/test",
      filename: "testBundle.js"
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
