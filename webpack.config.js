module.exports = {
  context: __dirname + "/src",
// file that imports everything
  entry: './core/core.js',
  output: {
    // export library to global var
    filename: 'lib.js',
    path: __dirname + '/dist',
    libraryTarget: "umd",
    library: "d3fault",
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
//   filename: 'd3fault.js',
//   path: __dirname + '/dist'
// },
