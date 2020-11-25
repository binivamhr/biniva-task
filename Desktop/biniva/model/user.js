const mongoose = require('mongoose');
// const {Schema} = mongoose;
const Schema = mongoose.Schema;

const UserSchema = new Schema({
id: {type: String},
    user_name: {type: String},
    user_salary: {type: String},
    user_age: {type: String},
    user_image: {type:String},
});

module.exports = mongoose.model('User', UserSchema);
