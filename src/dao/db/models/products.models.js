import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      code: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      status: {
        type: Boolean,
        default: true,
      },
      stock: {
        type: Number,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      thumbnails: [String],
    });
    
    export const productsModel = mongoose.model("Products", productsSchema);