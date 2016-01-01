module.exports = {
  context: __dirname + "/src",
  entry: './core/core.js',
  output: {
    filename: 'tld3.js',
    path: __dirname + '/dist',
    libraryTarget: "umd",
    library: "tld3",
    umdNamedDefine: true,
},
externals: {
        "d3": "d3"
    },
// create sourcemap for debugging - for DEV ONLY
  devtool: 'eval-source-map',
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel', exclude: /node_modules/}
    ]
  }
};
