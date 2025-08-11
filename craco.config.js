const TerserPlugin = require("terser-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    webpack: {
        configure: (webpackConfig) => {
            /*
            webpackConfig.optimization.minimizer = [
                new TerserPlugin({
                    terserOptions: {
                        compress: { drop_console: true },
                    }
                }),
            ];
            */
            webpackConfig.optimization.splitChunks = {
                chunks: "all",
            }
            return webpackConfig;
        },
        plugin: [
            new CompressionPlugin({
                filename: "[path][base].gz",
                algorithm: "gzip",
                test: /\.(js|html)$/,
                threshold: 10240,
                minRatio: 0.8,
            }),
        ],
        plugin: [
            new HtmlWebpackPlugin({
                minify: {
                    collapseWhitespace: true,
                    removeComments: true
                },
                hash: true
            }),
        ]
    },
};
