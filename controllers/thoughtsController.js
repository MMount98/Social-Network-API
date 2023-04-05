const { Thought, User, Reaction } = require("../models");

module.exports = {
  //respond with all Thoughts
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  //respind with one thought by Id
  getOneThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No Thought Found" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  //Creats new thought and assigns thought id to User
  createNewThought(req, res) {
    //creates new Thought from body.thoughtText
    Thought.create(req.body)
      //Pushes new thought objectId to provided user from body.userId
      .then((thoguht) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $addToSet: { thoughts: thoguht._id } },
          { new: true }
        );
      })
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: "No User Found, Thought was Still Created" })
          : res.json("New Thought Posted!")
      )
      .catch((err) => res.json(err));
  },
  //Update Thought by Id
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: { thoughtText: req.body.thoughtText } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).res.json({ message: "Thought not found" })
          : res.json(thought)
      )
      .catch((err) => res.json(err));
  },
  //Delete Thought by Id
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).res.json({ message: "Thought not Found" })
          : res.json({ message: "Thought was Deleted!" })
      )
      .catch((err) => res.json(err));
  },
  //Adds Reaction To Thought by Id
  addReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } }, //reactionBody (matches schema key)
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "Thought not found" })
          : res.json(thought)
      )
      .catch((err) => res.json(err));
  },
  //removes Reaction from Thought
  removeReaction(req, res) {
    Thought.findByIdAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.body.reactionId } } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No Thought Found" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
};
