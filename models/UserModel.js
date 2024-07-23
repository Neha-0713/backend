const {Schema, model} = require('../connection');
//double dot for importing from outside the folder {} are used for importing certain classes from mongoose

const mySchema = new Schema({
    name: String,
    email:{type:String, unique: true},
    password:{ type: String, required: true},
    createdAt:{ type: Date, default:Date.now}
});

 module.exports = model('users', mySchema);