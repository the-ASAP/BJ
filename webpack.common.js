const path = require("path");
const glob = require("glob");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    target: "web",
    context: path.resolve(__dirname, "src"),
    entry: Object.assign(
        {},
        ...glob.sync("./src/js/*.js").map((jsFile) => ({
            [jsFile.replace("./src/", "")]: `${jsFile}`.replace("./src", "."),
        }))
    ),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name]",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "postcss-loader",
                    },
                    {
                        loader: "sass-loader",
                    },
                ],
            },
            {
                test: /\.(html)$/,
                use: "html-loader",
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                type: "asset",
                generator: {
                    filename: "[path][name]-[hash][ext]",
                },
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                type: "asset",
                generator: {
                    filename: "[path][name]-[hash][ext]",
                },
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/style.css",
            chunkFilename: "css/style.css",
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "src/img"),
                    to: path.resolve(__dirname, "dist/img"),
                },
                {
                    from: path.resolve(__dirname, "src/fonts"),
                    to: path.resolve(__dirname, "dist/fonts"),
                },
            ],
        }),
        ...glob.sync("./src/*.html").map(
            (htmlFile) =>
                new HtmlWebpackPlugin({
                    inject: true,
                    filename: path.basename(htmlFile),
                    template: path.basename(htmlFile),
                })
        ),
    ],
};
