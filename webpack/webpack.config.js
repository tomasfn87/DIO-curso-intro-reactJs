const path =  require("path")

module.exports = {
    // mode: "production", // pode ser passado o modo aqui ao inves de em "package.json"
    entry: "./teste.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: `bundler.js`
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader:  "babel-loader"
                }
            }
        ]
    }
}
