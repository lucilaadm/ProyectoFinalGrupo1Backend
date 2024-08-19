import mongoose from 'mongoose';

const Consult = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  consult: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Consults', Consult);
