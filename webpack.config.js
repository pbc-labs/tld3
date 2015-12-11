module.exports = {
  context: __dirname + "/src",
// file that imports everything
  entry: './core/core.js',
  output: {
    // export library to global var
    filename: 'lib.js',
    path: __dirname + '/dist',
    libraryTarget: "var",
    library: "d3fault"
},
externals: {
        // require("jquery") is external and available
        //  on the global var jQuery
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
//   filename: 'd3fault.js',
//   path: __dirname + '/dist'
// },
