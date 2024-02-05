import {Schema, model} from 'mongoose';

const ProductSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },

  description: {
    type: String,
    required: true,
  },
  price: { 
    type: Number,
    required: true,
  },
  image: { 
    type: String,
    required: true,
  },


  
}, {timestamps: true,});

const Product = model('Product', ProductSchema);

export default Product;