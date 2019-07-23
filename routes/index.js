const user = require('./users');

module.exports = function(app){
    app.use(user.routes()).use(user.allowedMethods());
}
