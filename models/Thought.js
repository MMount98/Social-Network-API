const { Schema, model } = require("mongoose");
const Reactions = require("./Reaction");

//Schema Thought
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      minLength: 1,
      maxLength: 280,
      required: true,
    },

    createdAt: {
      type: Date,
      default: Date.toString("en-us", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
    },

    username: {
      type: String,
      required: true,
    },

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
