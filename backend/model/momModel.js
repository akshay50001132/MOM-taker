const mongoose = require("mongoose");

const momModel = mongoose.Schema(
  {
    title: String,
    content: String,
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);

const Mom = mongoose.model("mom", momModel);

module.exports = Mom;
