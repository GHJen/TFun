module.exports = {
  entry: [
    '@babel/polyfill', // enables async-await
    './client/App.js'
  ],
  mode: 'development',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'babel-loader',
          'eslint-loader',
          'source-map-loader'
        ]
      }
    ]
  }
}
