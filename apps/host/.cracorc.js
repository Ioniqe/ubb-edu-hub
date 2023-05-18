const { ModuleFederationPlugin } = require("webpack").container;

const deps = require("./package.json").dependencies;

module.exports = () => ({
  webpack: {
    configure: (config, { env }) => {
      config.output.publicPath =
        env === "development"
          ? "http://localhost:3000/"
          : "http://localhost:3000/";

      return config;
    },

    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: "host",
          filename: "remoteEntry.js",
          exposes: {},
          remotes: {
            student: "student@http://localhost:3001/remoteEntry.js",
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
