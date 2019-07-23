const mysql = require('mysql')

const config = {
    host     : 'localhost',
    user     : 'root',
    password : '!winty230',
    database : 'UserBehaviorRecord',
    port:3333,
    connectionLimit : 1000,
    connectTimeout  : 6000,
    acquireTimeout  : 6000,
    timeout         : 6000,
    multipleStatements: true//允许多条sql同时执行
};
const pool = mysql.createPool(config)

const query = (sql, values)=>{
    console.log('start to query')
    return new Promise((resolve, reject)=>{
        pool.getConnection((err, connection)=>{
            console.log('connect...',err,connection)
            if(err) return reject(err)
            connection.query(sql,values,(err, results, fields)=>{
                console.log('query result...',err,results)
                connection.release();
                if(err) return reject(err)
                resolve(results)
                connection.end()
            })
        })
    })
}
module.exports = {
    query
}