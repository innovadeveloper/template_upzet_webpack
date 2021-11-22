const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    // filename: "[name].[contenthash].js", // el hash nos indicarà si hay cambios en el build...
    filename: "[name].js", // el hash nos indicarà si hay cambios en el build...
    assetModuleFilename: "assets/resources/[hash][ext][query]",
  },
  resolve: {
    // Aqui ponemos las extensiones que tendremos en nuestro proyecto para webpack los lea
    extensions: [".js", "jsx"],
    alias: {
      "@images": path.resolve(__dirname, "src/assets/images/"),
      "@styles": path.resolve(__dirname, "src/scss/"),
      "@css_plugin": path.resolve(__dirname, "src/assets/plugins/"),
      "@scss_assets": path.resolve(__dirname, "src/assets/scss/"),
      // '@fonts': path.resolve(__dirname, 'src/assets/fonts/'),
      "@templates": path.resolve(__dirname, "/public/"),
      "@fontawesomev5": path.resolve(
        __dirname,
        "/src/assets/fontawesome-free-5.15.3-web/css/"
      ),
    },
  },
  // devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: [MiniCSSExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/i,
        use: [MiniCSSExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        // test: /\.png/,
        test: /\.(png|svg|eot|ttf)$/,
        type: "asset/resource",
      },
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
    }),
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
          from: path.resolve(
            __dirname,
            "src",
            "assets/fontawesome-free-5.15.3-web"
          ),
          to: "assets/fontawesome-free-5.15.3-web",
        },
        {
          from: path.resolve(__dirname, "src", "assets/plugins"),
          to: "assets/plugins",
        },
        {
          from: path.resolve(__dirname, "src", "assets/bundles"),
          to: "assets/bundles",
        },
        {
          from: path.resolve(__dirname, "src", "assets/js"),
          to: "assets/js",
        },
      ],
    }),
    new Dotenv(),
  ],
  devServer: {
    port: 9001,
    contentBase: path.join(__dirname, "dist"), // actuarà como servidor estàtico para los recursos..
    compress: true,
    historyApiFallback: true,
    headers: { "Access-Control-Allow-Origin": "*" },
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        // exclude: /\/assets/,
        // exclude: ["src/assets/js", "src/assets/plugins", "assets/js", "assets/plugins"],
        exclude: ["assets/js", "assets/plugins"],
        // exclude: ["src/assets/js", "src/assets/plugins"],
      }),
    ],
  },
  stats: {
    assets: true,
    children: true,
  },
};
