
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from 'webpack'

const webpackConfig: webpack.Configuration = {
  // Configuration Object
  // 1. Entry 配置
  entry: path.join(process.cwd(), "./src/index"),

  // 2. Output 配置
  output: {
    path: path.join(process.cwd(), "build"),
    filename: "app.bundle.js"
  },
  // 3. loader 配置
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        use: {
          loader: "babel-loader",
          options:{
            presets:[
              "@babel/preset-typescript",
              "@babel/preset-react",
              "@babel/preset-env"
            ]
          } 
        }
      }
    ]
  },
  // 4. plugin 配置
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      // favicon: "./src/favicon.ico",
      inject: "body"
      // publicPath
    })
  ],
  // 5. mode 配置
  mode: "production",
  // 6.resolve
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx", ".json"], // 自动补全的扩展名
    modules: [
      path.join(process.cwd(), "src"),
      path.join(process.cwd(), "node_modules")
    ]
  }
};

export default webpackConfig;