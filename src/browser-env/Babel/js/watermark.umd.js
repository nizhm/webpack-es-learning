function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var watermark = {}; // 默认的水印设置参数

var options_default = {
  w_texts: ['我是水印呀', '第二行水印'],
  w_options: {
    width: 200,
    height: 100,
    top: '0px',
    left: '0px',
    fontSize: '16',
    fontFamily: 'serif',
    fillStyle: 'rgba(200, 200, 200, 0.8)',
    color: '#666',
    opacity: '0.8',
    textAlign: 'left',
    // 水印文本对齐方向
    rotateDeg: 20,
    zIndex: 999999
  }
};

var checkOptions = function checkOptions(options) {
  if (options.w_texts && Object.prototype.toString.call(options.w_texts) !== '[object Array]') {
    alert('水印文字参数必须是数组类型');
    return false;
  }

  if (!options.w_texts.length) {
    alert('水印文字数组的长度必须大于0');
    return false;
  }

  return true;
}; // 定义设置水印的方法，


var watermarkFun = function watermarkFun(options) {
  // 校验水印文字的合法性
  if (!checkOptions(options)) {
    return;
  }

  var w_options = {};

  if (options.w_options && Object.prototype.toString.call(options.w_options) === '[object Object]') {
    w_options = _extends({}, options_default.w_options, options.w_options);
  } else {
    w_options = _extends({}, options_default.w_options);
  } // 如果水印元素已经存在就先移走，重新生成, id要是全局独一无二的


  var id = '3.14159261111';

  if (document.getElementById(id) !== null) {
    document.body.removeChild(document.getElementById(id));
  } // 第一步：生成cavas元素，使用canvas, 绘制水印


  var canvasEle = document.createElement('canvas'); // 设置单个水印元素的宽高，这决定了页面水印的密度，需要更具水印文字的大小以及长度设置合理的值

  canvasEle.width = w_options.width;
  canvasEle.height = w_options.height;
  var ctx = canvasEle.getContext('2d'); // 绘制2d图形

  ctx.rotate(-(w_options.rotateDeg * Math.PI / 180)); // 设置水印元素的倾斜, 这一行代码要写在设置水印文字之前，涉及样式的都写在设置水印文字之前

  ctx.font = w_options.fontSize + 'px ' + w_options.fontFamily; // 设置水印文字的大小和字体

  ctx.fillStyle = w_options.color; // 设置水印文字的颜色

  ctx.textAlign = w_options.textAlign; // 文本左对齐

  var w_texts = options.w_texts; // 水印在画布的x轴、y轴位置

  for (var i = 0; i < w_texts.length; i++) {
    var str = w_texts[i] ? w_texts[i] : ' ';
    ctx.fillText(str, canvasEle.width / 16, canvasEle.height / 2 + i * w_options.fontSize); // 设置水印文字
  } // 第二步：把canvas转化为一张图片，作为背景图，添加到div


  var divEle = document.createElement('div');
  divEle.id = id;
  divEle.style.width = document.documentElement.clientWidth - 10 + 'px'; // 设置div元素的宽高

  divEle.style.height = document.documentElement.clientHeight - 20 + 'px';
  divEle.style.pointerEvents = 'none'; // 元素永远不会成为鼠标事件的target

  divEle.style.position = 'fixed'; // 固定定位, 让元素撑满整个可视区域

  divEle.style.top = w_options.top;
  divEle.style.left = w_options.left;
  divEle.style.opacity = w_options.opacity;
  divEle.style.background = 'url(' + canvasEle.toDataURL() + ') left top repeat'; // 水印图片做div的背景,并且重复，这样看起来就是满屏都是水印

  divEle.style.zIndex = w_options.zIndex; // 水印元素的权值设得大一些，以此来遮盖所有的元素
  // 第三步：div添加到body元素，水印生成

  document.body.appendChild(divEle);
  return id;
}; // 设置水印，调用setWaterMark方法


watermark.setWatermark = function (options) {
  var id = watermarkFun(options);

  if (document.getElementById(id) === null) {
    var _id = watermarkFun(options);
  } // 页面发生缩放，重绘水印


  window.onresize = function () {
    watermarkFun(options);
  };
}; // 移除水印的方法


watermark.removeWatermark = function () {
  var id = '3.14159261111';
  var watermarkEle = document.getElementById(id);

  if (watermarkEle !== null) {
    document.body.removeChild(watermarkEle);
  }
};
