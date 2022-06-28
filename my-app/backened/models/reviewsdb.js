import mongoose from "mongoose";

const reviewsSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique:true,
  },
  phone: {
    type: Number,
  },
  message: {
    type: String,
  },
});

const reviewsDB = mongoose.model("Reviews", reviewsSchema);

export { reviewsDB };

