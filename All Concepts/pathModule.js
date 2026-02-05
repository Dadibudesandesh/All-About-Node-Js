const path = require('node:path');
let basename= path.basename('C:\\temp\\myfile.html');
let dirname=path.dirname('C:\\temp\\myfile.html');
let exrname=path.extname('C:\\temp\\myfile.html');
console.log(basename);
console.log(dirname);
console.log(exrname);
console.log(__filename);