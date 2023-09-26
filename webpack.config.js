const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",

    entry: {
        bundle: path.resolve(__dirname, "src/index.js"),
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        assetModuleFilename: "[name][ext]",
    },

    
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader","css-loader"]
            },
    
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                type: "asset/resource"
        }],
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: "Resturant Project",
            filename: "index.html",
            template:"src/template.html",
        }),
    ],

}