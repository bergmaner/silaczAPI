const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const excerciseSchema = new mongoose.Schema(
  {
    name: String,
    description: {
        type: String,
        required: true,
        maxlength: 2000,
        text: true,
      },
      duration: Number,
      count: Number,
      intensity: {
        type: String,
        enum: ["mało intensywny", "średnio intensywny", "wysoko intensywny" ]
      }
 
  },
  { timestamps: true }
);

module.exports = mongoose.model("Excercise", excerciseSchema);