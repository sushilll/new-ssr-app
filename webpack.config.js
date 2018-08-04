
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports={
    mode:"development",
    module:{
        rules:[
            {test:/\.(js|jsx)$/, exclude:/node_modules/, use:"babel-loader"},
            {test:/\.css$/, exclude:/node_modules/, use:["style-loader","css-loader"]},
        ]
    },
    resolve:{
        extensions:["*",".js",".jsx"]
    },
    plugins:[
        new CleanWebpackPlugin("dist/main.js")
    ]
}