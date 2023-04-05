const { Schema, model } = require("mongoose");

//Schema for User Model
const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true, trim: true },
  },
  {
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^.+@[^\.].*\.[a-z]{2,}$/, "Vaild Email Address is Required"],
    },
  },
  {
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
  },
  {
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property
userSchema.virtual("firendCount").get(function () {
  return this.friends.length;
});

//Initialize Model
const User = model("user", userSchema);

module.exports = User;
