const {Schema, model} = require('../connection');


const mySchema = new Schema({
    name: String,
    brand:String,
    model:String,
    price:Number,
    image:String,
    createdAt:{type: Date, default:Date.now}
  
});

 module.exports = model('products', mySchema);