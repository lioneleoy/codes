var mongoose = require('mongoose');
 


const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
const UserSchema = new Schema({
  id: ObjectId,
  name: String,
  email: String,
  age: Number,
  career: String
});


var UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;