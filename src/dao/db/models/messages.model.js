import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  user: String,      
  message: String,  
  timestamp: { type: Date, default: Date.now }, 
});

export const messageModel = mongoose.model('Message', messageSchema);

