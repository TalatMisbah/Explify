const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profession: {
    type: String,
    required: true,
  },
  likes: [
    {
      type: ObjectId,
      ref: "User",
    },
  ],
  photo: {
    type: String,
    //required:true
  },
});

mongoose.model("User", userSchema);
