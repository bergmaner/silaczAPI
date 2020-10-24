const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const trainingSchema = new mongoose.Schema(
  {
    // products: [
    //   {
    //     product: {
    //       type: ObjectId,
    //       ref: "Excercise",
    //     },
    //     count: Number,
    //     color: String,
    //   },
    // ],
    name: String,
    description: {
        type: String,
        required: true,
        maxlength: 2000,
        text: true,
      },
      duration: Number,
      intensity: {
        type: String,
        enum: ["mało intensywny", "średnio intensywny", "wysoko intensywny" ]
      }
 
  },
  { timestamps: true }
);

module.exports = mongoose.model("Training", trainingSchema);