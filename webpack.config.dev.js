const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const Dotenv = require("dotenv-webpack");
// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
// const TerserPlugin = require("terser-webpack-plugin");
// const webpack = require('webpack');

const path = require("path");

module.exports = {
  // entry: "./src/index.js",
  entry: {
    index: "./src/index.js",
    // about: "./src/about.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    // filename: "[name].[contenthash].js", // el hash nos indicarà si hay cambios en el build...
    filename: "[name].js", // el hash nos indicarà si hay cambios en el build...
    // assetModuleFilename: "assets/resources/[hash][ext][query]",
    assetModuleFilename: "assets/resources/[name]_[hash][ext][query]",
  },
  resolve: {
    // Aqui ponemos las extensiones que tendremos en nuestro proyecto para webpack los lea
    extensions: [".js", ".jsx"],
    alias: {
      "@images": path.resolve(__dirname, "src/assets/images/"),
      "@styles": path.resolve(__dirname, "src/scss/"),
      // "@css_plugin": path.resolve(__dirname, "src/assets/plugins/"), // estos assets css se encuentran dispersos en la carpeta li   bs.. por ahora se omitirà una ruta genèrica como css_plugin..
      "@scss_assets": path.resolve(__dirname, "src/assets/scss/"),
      "@scss": path.resolve(__dirname, "src/assets/scss/"),
      // "@scss": path.resolve(__dirname, "src/scss/"),
      "@plugins_assets": path.resolve(__dirname, "src/assets/plugins/"),
      "@assets": path.resolve(__dirname, "src/assets/"),
      "@assets2": path.resolve(__dirname, "src/assets"),
      // '@fonts': path.resolve(__dirname, 'src/assets/fonts/'),
      "@templates": path.resolve(__dirname, "/public/"),
      "@fontawesomev5": path.resolve(__dirname, "/src/assets/fontawesome-free-5.15.3-web/css/"),
      "@fonts_assets": path.resolve(__dirname, "/src/assets/fonts/"),
      "@libs": path.resolve(__dirname, "src/assets/libs/"),
      // 'jvectormap' : path.resolve(__dirname, 'src/assets/bundles/jvectormap.bundle.js')
    },
  },
  // devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: [MiniCSSExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/i,
        // include: path.join(__dirname, 'src/assets/scss'), 
        use: [MiniCSSExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.jpg$/,
        use: [
          {
            loader: 'file-loader',
            // options: {
            //   name: '[path][name].[ext]',
            //   // outputPath: 'images/'
            //   publicPath: 'assets/'
            // }  
          },
        ],
      },
      {
        // test: /\.png/,
        // test: /\.(png|svg|eot|ttf|jpg)$/,
        test: /\.(png|svg|eot|ttf)$/,
        type: "asset/resource",
      },
      // {
      //   // test: /\.png/,
      //   test: /\.(jpg)$/,
      //   type: "asset/images",
      // },
      {
        test: /\.(woff|woff2)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 10000,
            mimetype: "aplication/font-woff",
            name: "[name].[ext]",
            outputPath: "./assets/fonts/",
            publicPath: "../assets/fonts/", // '..' porque el css se llevò a la carpeta assets con el plugin MiniCssExtractPlugin*
            esModule: false,
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
      inject: "body", //  'head' || 'body' || false
      hash: true,
      chunks: ["index"],
    }),
    // new HtmlWebpackPlugin({
    //   template: "./public/about/index.html",
    //   filename: "./about/index.html",
    //   inject: "body", //  'head' || 'body' || false
    //   hash: true,
    //   chunks: ["about"],
    // }),
    new MiniCSSExtractPlugin({
      filename: "assets/[name].css",
      // filename: 'assets/[name].[contenthash].css',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "assets/images"),
          to: "assets/images",
        },
        {
          from: path.resolve(__dirname,"src", "assets/fontawesome-free-5.15.3-web"),
          to: "assets/fontawesome-free-5.15.3-web",
        },
        {
          from: path.resolve(__dirname, "src", "assets/fonts"),
          to: "assets/fonts",
        },
        // {
        //   from: path.resolve(__dirname, "src", "assets/plugins"),
        //   to: "assets/plugins",
        // },
        {
          from: path.resolve(__dirname, "src", "assets/libs"),
          to: "assets/libs",
        },
        {
          from: path.resolve(__dirname, "src", "assets/js"),
          to: "assets/js",
        },
        {
          from: path.resolve(__dirname, "src", "assets/plugins"),
          to: "assets/plugins",
        },
      ],
    }),
    // new webpack.ProvidePlugin({
    //     $: "jquery",
    //     jQuery: "jquery",
    //     jvectormap : "jvectormap"
    //   }),
    // new Dotenv(),
  ],
  devServer: {
    port: 9001,
    contentBase: path.join(__dirname, "dist"), // actuarà como servidor estàtico para los recursos..
    compress: true,
    historyApiFallback: true,
    headers: { "Access-Control-Allow-Origin": "*" },
  },
  // optimization: {
  //     minimize: true,
  //     minimizer: [
  //         new CssMinimizerPlugin(),
  //         new TerserPlugin()
  //     ]
  // },
  stats: {
    assets: true,
    children: true,
  },
};
