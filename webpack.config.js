const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const path = require( 'path' );
module.exports = {
   context: __dirname,
   entry: './src/index.tsx',
   output: {
      path: path.resolve( __dirname, 'dist' ),
      filename: 'main.js',
      publicPath: '/',
   },
   devServer: {
      historyApiFallback: true
   },
   resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
   module: {
      rules: [
         {
            test: /\.js$/,
            use: 'babel-loader',
         },
         {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
         {
            test: /\.(png|j?g|svg|gif)?$/,
            use: 'file-loader'
         },
         {
            test: /\.s?(a|c)ss$/,
            use: [
              'style-loader',
              { loader: 'typings-for-css-modules-loader', options: { sourceMap: true, importLoaders: 1, modules: true, namedExport: true, camelCase: true } },
              { loader: 'sass-loader', options: { sourceMap: true } }
            ] 
         }
      ]
   },
   plugins: [
      new HtmlWebPackPlugin({
         template: path.resolve( __dirname, 'public/index.html' ),
         filename: 'index.html'
      })
   ]
};