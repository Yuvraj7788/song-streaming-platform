const path = require("path");
module.exports = {
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.output.path = path.resolve(
        __dirname,
        "custom-output-directory"
      );
      return webpackConfig;
    },
  },
};
