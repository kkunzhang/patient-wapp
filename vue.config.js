
"use strict";
const path = require("path");

function resolve (dir) {
  return path.join(__dirname, dir);
}

const name = "西峰";

module.exports = {
  lintOnSave: process.env.NODE_ENV === "development",
  // 路径别名
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        // "@": resolve("src"),
        "@api": resolve("/api"),
        // "@components": resolve("src/components"),
        "@uni": resolve("uni_modules"),
      },
    },
  },
};
