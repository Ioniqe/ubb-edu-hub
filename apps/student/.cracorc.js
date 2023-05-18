const { ModuleFederationPlugin } = require("webpack").container;

const deps = require("./package.json").dependencies;

module.exports = () => ({
  webpack: {
    configure: (config, { env }) => {
      config.output.publicPath =
        env === "development"
          ? "http://localhost:3001/"
          : "http://localhost:3001/";

      return config;
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
      ],
    },
  },
});
