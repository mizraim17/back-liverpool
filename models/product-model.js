const mongoose = require ('mongoose')
const Schema = mongoose.Schema;

const productSchema  = new Schema({
  name:String,
  price:Number,
  imgName: String,
  imgPath: String,


},{
  timestamps: {
  createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const Product = mongoose.model('Product', productSchema)

module.exports=Product;
