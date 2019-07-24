const mysql = require('mysql')

const config = {
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'UserBehaviorRecord',
    multipleStatements: true//允许多条sql同时执行
};
const pool = mysql.createPool(config)

const query = (sql, values)=>{
    console.log('start to query')
    return new Promise((resolve, reject)=>{
        pool.getConnection((err, connection)=>{
            console.log('connect...',err)
            if(err) return reject(err)
            connection.query(sql,values,(err, results, fields)=>{
                console.log('query result...',err,results)
                if(err) return reject(err)
                resolve(results)
                connection.end(function(err) {
                    // The connection is terminated now
                    if(err){
                        console.log(err);
                    }else {
                        console.log('end');
                    }
    
                });
            })
        })
    })
}
const add = (params = ['', '', '', '', '', '', ''], table) => {
    var addSql = `INSERT INTO ${table}(Id,username,ip,date,dataFile,msg) VALUES(0,?,?,?,?,?)`;
    const p = new Promise(function (res, rej) {
      connection.query(addSql, params, function (err, result) {
        if (err) {
          rej(err.message);
        } else {
          res(result);
        };
      });
    });
    return p;
}

module.exports = {
    query,
    add
}