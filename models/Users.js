var mongoose  = require('mongoose');
var schema = mongoose.Schema;
var users = new schema({
    name : { type:String , required :true},
    email : {type:String ,required:true }
});
var User = mongoose.model('Users',users,'Users')
module.exports = User