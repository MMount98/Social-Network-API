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
      default: Date,
      get: (date) => {
        if (date) return date.toString().split("G")[0];
      },
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

// thoughtSchema.virtual("convertDat").get(function () {
//   return { $toDate: String(this.createdAt) };
// });

//Initialize Thought
const Thought = model("thought", thoughtSchema);

module.exports = Thought;
