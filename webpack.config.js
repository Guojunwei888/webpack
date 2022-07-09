// 导入path模块
const path = require('path')
// 定义JS打包的规则
module.exports = {
    // 1：入口函数从哪里开始进行编译打包
    entry:'./src/main.js',
    // 2：编译成功以后把内容输出到哪里去
    output:{
        // 2-1: 定义输出的指定的目录__dirname 当前项目根目录，生长一个dist文件
        path:path.resolve(__dirname, "./dist"),
        // 2-2: 合并的js文件存储在dist/bundule.js文件中
        filename:"bundle.js"
    },
    module:{
        rules:[{
            test:/\.css$/,//把项目中所有的.css结尾的文件进行打包
            use:["style-loader","css-loader"]
        }]
    }
}
