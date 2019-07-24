const fs = require("fs");

/**
 * 获取客户端ip
 * @param {request} req
 */
export const getClientIp = (req) => {
    return req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
};

export const writeFile = (fileName,data)=>{
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log(`${fileName} has been saved!`);
    });
}