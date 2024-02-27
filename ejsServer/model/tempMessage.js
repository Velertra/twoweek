//delete for new signin
const mongoose = require("mongoose");

const { Schema } = mongoose;
const messageSchema = new Schema(
  {
    body: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Message", messageSchema);