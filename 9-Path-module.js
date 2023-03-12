const path = require('path')

console.log(path.sep)


const filePth = path.join('/content', 'subfolder', 'text.txt')
console.log(filePth)

const base = path.basename(filePth)
console.log(base)

const absPath = path.resolve(__dirname, "content", "subfolder", "text.txt")
console.log(absPath)