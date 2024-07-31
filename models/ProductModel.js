const {Schema, model} = require('../connection');


const mySchema = new Schema({
    title: String,
    brand:String,
    category:String,
    model:{type: String, default:'base model'},
    price:Number,
    image:String,
    createdAt:{type: Date, default:Date.now}
  
});

 module.exports = model('products', mySchema);