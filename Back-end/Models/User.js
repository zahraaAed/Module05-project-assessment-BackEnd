import mongoose from "mongoose";
import autopopulate from 'mongoose-autopopulate'; 
import {Schema,model} from "mongoose";
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  role:{
    type:String,
    required:true
  },
  products: [{
    type: Schema.Types.ObjectId,
    ref: 'Product',
    autopopulate: true,
    allownull:true,
  }],
}, { timestamps: true });

userSchema.plugin(autopopulate);

const User = model('user', userSchema);

export default User;