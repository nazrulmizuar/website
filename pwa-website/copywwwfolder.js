var myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs);

const fse = require('fs-extra');

const srcDir = 'C:\\git\\website\\WWW';
const destDir = myArgs;
                              
// To copy a folder or file  
fse.copySync(srcDir, destDir, function (err) {
  if (err) {                 
    console.error(err);     
  } else {
    console.log("success!");
  }
});