const path = require('path');

// 其他引入
const HtmlWebpackPlugin = require("html-webpack-plugin");

//  导入提取样式的webpack插件
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// 导入清除插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// 引入vue-loader插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')
//导入复制文件夹的插件
const CopyPlugin = require("copy-webpack-plugin")

module.exports = {
    // 入口
    entry: {
        // index: "./src/index.js",
        // about: "./src/about.js"
        main: "./src/main.js"
    },

    //  + 添加模块解释
    resolve: {
        //提供别名，方便查找模块的路径
        alias: {
            // 1.以后@符号就是src目录，__dirname为config路径
            '@': path.resolve(__dirname, "../src"),

        },
        // 2.省略导入模块时的后缀名。可以忽略扩展名
        extensions: ['.js', '.json', '.vue']
    },

    // + 提取公共模块配置
    optimization: {
        splitChunks: {
            chunks: 'all'	// 提取所有文件的共同模块
        }
    },
    // 输出
    output: {
        // 修改输出路径和文件名，[name]是动态的，读取entry的属性
        //filename: "bundle.js",
        filename: "js/[name].bundle.js",
        path: path.resolve(__dirname, "../dist")  // 注意此处输出目录是父级文件夹
    },

    // 模块加载器
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    //fallback: "style-loader",
                    // 替换原来配置中的 style-loader
                    fallback: "vue-style-loader",
                    use: ["css-loader"]
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    //fallback: "style-loader",
                    // 替换原来配置中的 style-loader
                    fallback: "vue-style-loader",
                    use: ["css-loader", "less-loader"]
                })
            },
            // 匹配图片文件
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            publicPath: "./images/",
                            outputPath: "images"
                        }
                    }
                ]
            },
            //其他加载器, 匹配vue的单文件组件
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
        ]
    },

    plugins: [
        // 提取css样式到单独文件
        new ExtractTextPlugin("style/style.css"),

        // 每次构建前清除dist目录
        new CleanWebpackPlugin(),

        // 自动生成index.html到dist
        new HtmlWebpackPlugin({
            // template指定默认html模板
            template: "public/index.html"
        }),

        // vue加载器插件
        new VueLoaderPlugin(),

        new CopyPlugin([
            {
                from:'static',to:'static'
            },
        ]),
    ]
}
