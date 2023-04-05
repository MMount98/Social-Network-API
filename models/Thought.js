const { Schema, model } = require("mongoose");
const Reactions = require("");

//Schema Thought
const thoughtSchema = new Schema(
  {
    thoughText: { type: String, minLength: 1, maxLength: 280, required: true },
  },
  {
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => {
        if (date) return date.toString();
      },
    },
  },
  {
    username: { type: String, required: true },
  },
  {
    reactions: [Reactions],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

//create virtual returns reactions count
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

//Initialize Thought
const Thought = model("thought", thoughtSchema);

module.exports = Thought;
