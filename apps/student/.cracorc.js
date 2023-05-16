const { ModuleFederationPlugin } = require("webpack").container;

const deps = require("./package.json").dependencies;

module.exports = () => ({
  webpack: {
    configure: {
      output: {
        publicPath: "auto",
      },
    },
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: "student",
          filename: "remoteEntry.js",
          exposes: {
            "./Dashboard": "./src/Dashboard",
          },
          shared: {
            ...deps,
            ui: {
              singleton: true,
            },
          },
        }),
      ],
    },
  },
});
