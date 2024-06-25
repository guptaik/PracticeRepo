const path = require('path');

console.log(path.sep)           //  '/' --- this is path seperator


//join path 
console.log(path.join('content','subfolder','text.txt'))        //content/subfolder/text.txt


//return the base(last part of file)
console.log(path.basename(path.join('content','subfolder','text.txt')))     //text.txt


//absolute path 
console.log(path.resolve(__dirname,'content','subfolder','text.txt')) ///Users/Ritik/Desktop/node/content/subfolder/text.txt

