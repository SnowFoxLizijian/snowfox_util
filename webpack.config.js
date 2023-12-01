const path = require("path")

module.exports = {
    entry: "./index.ts",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "utils.min.js"
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node-modules/
            }
        ]
    }
}
