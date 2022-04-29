const fs = require('fs');

fs.readFile('D:\\Projects\\All\\webpack-es-learning\\src\\browser-env\\XML\\basic.xml', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
    return
  }

  const parser = new DOMParser();
  const dom = parser.parseFromString(data, 'text/xml');
  console.log(dom);
})

// const reader = new FileReader();
// reader.onload = function () {
//   console.log(arguments)
// }
// reader.readAsText('D:\\Projects\\All\\webpack-es-learning\\src\\browser-env\\XML\\basic.xml');

