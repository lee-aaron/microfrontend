const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';
const deps = require("./package.json").dependencies;
module.exports = {
  entry: "./src/index.tsx",

  output: {
    publicPath: "auto",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".json", ".js"],
  },

  devServer: {
    port: 8080,
  },

  target: isDevelopment ? 'web' : 'browserslist',

  module: {
    rules: [
      {
        test: /bootstrap\.tsx$/,
        loader: "bundle-loader",
        options: {
          lazy: true,
        },
      },
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              isDevelopment && "react-refresh/babel"
            ].filter(Boolean)
          }
        },
      },
      {
        test: /\.(png|j?g|svg|gif)?$/,
        exclude: /node_modules/,
        use: 'file-loader'
      }
    ],
  },

  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new ModuleFederationPlugin({
      name: "RootApp",
      shared: {
        ...deps
      }
    }),
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico"
    }),
  ].filter(Boolean),
}