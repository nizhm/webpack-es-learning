const path = require('path');

const curPath = 'D:\\Desktop\\IntelliJWS\\webpack-es-learning\\src\\node-learning\\path.js';
const curDir = 'D:\\Desktop\\IntelliJWS\\webpack-es-learning\\src\\node-learning\\';
const relPath = './module/index.js';

/**
 * 获取路径的最后部分
 * @method path.basename(path[, ext])
 * @param { string } path是路径字符串，backslash需要转义；要是以backslash结束则会被忽略，返回前面的目录名称；
 * @param { string } ext 文件后缀，包括"."；其实是删截掉传入的ext字符串；
 * @return { string } name/name.ext
 *
 */
//console.log(path.basename(curPath, 'js'), '|<>|', path.basename(curDir), '|<>|', path.basename(relPath, '.js'));

/**
 * 获取路径的目录路径字符串
 * @method path.dirname(path)
 * @param { string } path路径字符串；要是有backslash会被忽略；
 * @return { string } 目录路径字符串；其实就是最后的部分当成文件名删截掉；
 *
 */
//console.log(path.dirname(curPath), '|<>|', path.dirname(curDir), '|<>|', path.dirname(relPath));

/**
 * 将路径字符串片段合并成路径
 * @method path.join([...paths])
 * @param { string } 路径片段字符串,若不传入则返回"."；
 * @return { string } 路径
 *
 */
const filePath = path.join(__dirname, 'path.js');
//console.log(filePath, '|<>|', __filename === filePath)

/**
 * 获取当前系统环境的路径定界符
 * @property path.delimiter
 * @return { string } 路劲定界符，":" POSIX, ";" Window；
 *
 */
//console.log(path.delimiter);
//console.log(process.env.PATH.split(path.delimiter));

/**
 * 解析文件路径
 * @method path.parse(path)
 * @param { string } 文件完整路径,只有是完整的文件绝对路径时，返回的object才是完整的；
 * @return { object } 路劲信息对象keys:[dir, root, base, name, ext]
 *
 */
//console.log(path.parse(curPath))
//console.log(path.parse(curDir))
//console.log(path.parse(relPath))