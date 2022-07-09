// 导入util
const util = require('./util')
// 导入common
const common = require('./common')
// 导入css
require("./style.css")

common.info('Hello World,' + util.add(100,100))
common.info('Hello World,' + util.minus(1000,100))