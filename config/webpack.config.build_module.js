var path = require('path');
var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// TODO: hide this behind a flag and eliminate dead code on eject.
// This shouldn't be exposed to the user.
var isInNodeModules = 'node_modules' ===
  path.basename(path.resolve(path.join(__dirname, '..', '..')));
var relativePath = isInNodeModules ? '../../..' : '..';
var srcPath = path.resolve(__dirname, relativePath, 'src');
var nodeModulesPath = path.join(__dirname, '..', 'node_modules');
var indexHtmlPath = path.resolve(__dirname, relativePath, 'index.html');
var faviconPath = path.resolve(__dirname, relativePath, 'favicon.ico');
var buildPath = path.join(__dirname, isInNodeModules ? '../../..' : '..', 'dist');

module.exports = {
  bail: true,
  devtool: 'source-map',
  entry: path.join(srcPath, 'index'),
  output: {
    path: buildPath,
    filename: 'index.js',
    library: 'RichEditor',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['', '.js'],
  },
  resolveLoader: {
    root: nodeModulesPath,
    moduleTemplates: ['*-loader']
  },
  externals: {
    'react': 'react',
    'react-dom': 'react-dom',
    'draft-js': 'draft-js',
    'classnames': 'classnames'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        include: srcPath
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        include: srcPath,
        loader: 'babel',
        query: require('./babel.module_build')
      },
      {
        test: /\.css$/,
        include: srcPath,
        // Disable autoprefixer in css-loader itself:
        // https://github.com/webpack/css-loader/issues/281
        // We already have it thanks to postcss.
        loader: ExtractTextPlugin.extract('style', 'css?-autoprefixer!postcss')
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)$/,
        loader: 'file',
      },
      {
        test: /\.(mp4|webm)$/,
        loader: 'url?limit=10000'
      }
    ]
  },
  eslint: {
    // TODO: consider separate config for production,
    // e.g. to enable no-console and no-debugger only in prod.
    configFile: path.join(__dirname, 'eslint.js'),
    useEslintrc: false
  },
  postcss: function() {
    return [autoprefixer];
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new ExtractTextPlugin('[name].css')
  ]
};
