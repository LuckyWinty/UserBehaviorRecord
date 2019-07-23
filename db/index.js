const mysql = require('mysql')

const config = {
    host     : 'localhost',
    user     : 'root',
    password : '!winty230',
    database : 'UserBehaviorRecord',
    port:3333,
    multipleStatements: true//允许多条sql同时执行
};
const pool = mysql.createPool(config)

const query = (sql, values)=>{
    return new Promise((resolve, reject)=>{
        pool.getConnection((err, connection)=>{
            if(err) return reject(err)
            connection.query(sql,values,(err, results, fields)=>{
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