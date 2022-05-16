const CracoAlias = require("craco-alias");

module.exports = {
  style: {
    sass: {
      loaderOptions: {
        additionalData: `
          @import "src/assets/styles/_variables.scss";
          @import "src/assets/styles/_utils.scss";
        `
      }
    }
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "options",
        baseUrl: "./",
        aliases: {
          "@assets": "./src/assets",
          "@screens": "./src/screens",
          "@components": "./src/components",
          "@styles": "./src/assets/styles"
        }
      }
    }
  ]
};
