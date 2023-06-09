const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");
const deps = require("./package.json").dependencies;

module.exports = (_, argv) => ({
  output: {
    publicPath:
      argv.mode === "development"
        ? "http://localhost:3001/"
        : "https://ubb-edu-hub-student-ioniqe.vercel.app/",
    path: path.resolve("./dist"),
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 3001,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /\.png/,
        type: "asset/resource",
      },
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.tsx?$/,
        exclude: [
          path.resolve(__dirname, "node_modules"),
          path.resolve(__dirname, "cypress"),
        ],
        use: {
          loader: "babel-loader",
          options: {
            plugins: ["@babel/plugin-transform-runtime"],
            presets: [
              [
                "@babel/env",
                {
                  targets: {
                    browsers: ["last 2 versions"],
                  },
                },
              ],
              [
                "@babel/preset-react",
                {
                  runtime: "automatic",
                },
              ],
              "@babel/typescript",
            ],
          },
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "student",
      filename: "remoteEntry.js",
      exposes: {
        "./Assignments": "./src/pages/Assignments",
        "./Badges": "./src/pages/Badges",
        "./Challenges": "./src/pages/Challenges",
        "./Checklists": "./src/pages/Checklists",
        "./Dashboard": "./src/pages/Dashboard",
        "./Roadmaps": "./src/pages/Roadmaps",
        "./Subjects": "./src/pages/Subjects",
      },
      shared: {
        ...deps,
        ui: {
          singleton: true,
        },
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
});
