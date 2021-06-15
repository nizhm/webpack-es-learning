/**
 * 1.区分大小写
 * 2.驼峰法命名标识符(specificVariable)；匈牙利法命名构造函数(SpecificConstructor())；
 * 3.字母、下划线、美元符号开头；
 * 4.字母、下划线、美元符号、数字后续；
 */
var name = 'nzhiming'
var Name = 'NZHMING' // 用let命名相同名字（同为小写）变量会报already been declared语法错误
let _name = 'nzhming'
let $name = 'nzhming' // _和$开头容易跟系统定义的用法发生冲突
let _$n1111111111111ame = 'nzhming'
// let 1name = 'nzhming'  // 数字开头报"invalid or unexpected token"

console.log(_$n1111111111111ame)