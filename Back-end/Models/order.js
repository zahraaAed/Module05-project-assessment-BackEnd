import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";

const { Schema, model } = mongoose;

const OrderSchema = new Schema(
  {
    customer_name: {
      type: String,
      required: true,
    },
    total_price: {
      type: Number,
    },
    total_quantity: {
      type: Number,
    },
    status: {
      type: String,
      enum: ["submit", "processing", "shipped", "delivered", "closed"],
      required: true,
    },

    address: {
      type: String,
      required: true,
    },
    phone_number: {
      type: String,
      required: true,
    },
    orderedProducts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Product",
        autopopulate: true,
      },
    ],
  },
  { timestamps: true }
);

OrderSchema.plugin(autopopulate);

export default model("Order", OrderSchema);
