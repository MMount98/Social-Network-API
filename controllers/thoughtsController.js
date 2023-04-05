const { Thought, User } = require("../models");

module.exports = {
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  getOneThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No Thought Found" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
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
};
