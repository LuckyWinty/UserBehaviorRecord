const fs = require("fs");
const path = require('path')

/**
 * 获取客户端ip
 * @param {request} req
 */
const getClientIp = (req) => {
    return req.headers['x-forwarded-for'] ||
        req.socket.remoteAddress || null
};

const writeFile = (fileName,data)=>{
    const directoryPath = path.resolve(process.cwd(),'dataFile')
    if (!fs.existsSync(directoryPath)) {
      fs.mkdirSync(directoryPath)
    }
    const filePath =  path.resolve(process.cwd(), fileName)
    fs.writeFileSync(filePath, `${data}\n`)
}
const readFile = (fileName)=>{
    console.log('__dirname+fileName',`${process.cwd()}/${fileName}`);
    return new Promise((resolve,reject)=>{
        fs.readFile(`${process.cwd()}/${fileName}`, {flag: 'r+', encoding: 'utf8'}, function (err, data) {
            if(err) {
                reject(err);
            }
            console.log('----finished read')
            resolve(data)
        });
    })
}
module.exports = {
    getClientIp,
    writeFile,
    readFile
}