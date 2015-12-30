module.exports = {
  context: __dirname + "/src",
// file that imports everything
  entry: './core/core.js',
  output: {
    // export library to global var
    filename: 'tld3.js',
    path: __dirname + '/dist',
    libraryTarget: "umd",
    library: "tld3",
    umdNamedDefine: true,
},
externals: {
        // require("d3") is external and available
        //  on the global var d3
        "d3": "d3"
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

// Config for normal dist export:
// output: {
//   filename: 'tld3.js',
//   path: __dirname + '/dist'
// },
