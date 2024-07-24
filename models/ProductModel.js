const {Schema, model} = require('../connection');


const mySchema = new Schema({
    name: String,
    cateogry: {type: String},
    
    createdAt:{ type: Date, default:Date.now}
});

 module.exports = model('products', mySchema);