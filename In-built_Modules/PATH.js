const path=require('path')

console.log(path.sep);

//content is a folder and subfolder is folder inside content 
const filePath=path.join('/content','subfolder','test.txt')
console.log(filePath)


const base=path.basename(filePath)
console.log(base);

const absolute=path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute);