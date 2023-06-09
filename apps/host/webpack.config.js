const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");
const deps = require("./package.json").dependencies;

module.exports = (_, argv) => {
  const getStudentBundleBasedOnEnv = () => {
    return `student@${
      argv.mode === "development"
        ? "http://localhost:3001"
        : "https://ubb-edu-hub-student-ioniqe.vercel.app"
    }/remoteEntry.js`;
  };

  return {
    output: {
      publicPath:
        argv.mode === "development"
          ? "http://localhost:3000/"
          : "https://ubb-edu-hub-host-ioniqe.vercel.app/",
      path: path.resolve("./dist"),
    },

    resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    },

    devServer: {
      port: 3000,
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
        name: "host",
        filename: "remoteEntry.js",
        remotes: {
          student: getStudentBundleBasedOnEnv(),
        },
        exposes: {},
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
  };
};
