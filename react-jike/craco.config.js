const path = require("path");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const { whenProd, getPlugin, pluginByName } = require("@craco/craco");
module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    plugins: [
      // 这里的逻辑是：只有当运行 npm run analyze 时，才启动分析插件
      ...(process.env.ANALYZE === "true" ? [new BundleAnalyzerPlugin()] : []),
    ],
  },
};
