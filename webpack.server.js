
const CleanWebpackPlugin = require('clean-webpack-plugin');
const cssplugin = require("mini-css-extract-plugin");
const nodeExternals = require("webpack-node-externals");

module.exports={
    entry:"./src/server.js",
    output:{
        path:__dirname+"/dist",
        filename: "server.js"
    },
    externals:nodeExternals(),
    mode:"development",
    module:{
        rules:[
            {test:/\.(js|jsx)$/, exclude:/node_modules/, use:"babel-loader"},
            {test:/\.css$/, exclude:/node_modules/, use:[cssplugin.loader,"css-loader"]},
        ]
    },
    resolve:{
        extensions:["*",".js",".jsx"]
    },
    plugins:[
        new CleanWebpackPlugin(["dist/server.js","dist/main.css"]),
        new cssplugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
}