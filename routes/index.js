const user = require('./user');

module.exports = function(app){
    app.use(user.routes()).use(user.allowedMethods());
}
