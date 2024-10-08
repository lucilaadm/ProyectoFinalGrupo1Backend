import mongoose from 'mongoose';

const Product = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  available: {
    type: Boolean,
    required: true,
  },
  ingredients: {
    type: String,
    required: true,
    enum: ['N/A', 'vegetariano', 'vegano', 'sin TACC'],
  },
  category: {
    type: String,
    required: true,
    enum: ['entrantes', 'burgers', 'kids', 'bebidas', 'postres'],
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

export default mongoose.model('Products', Product);
