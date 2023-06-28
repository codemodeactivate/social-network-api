
const Thought = require('../models/Thought');
const User = require('../models/User');
const userController = {

    getAllThoughts: async (req, res) => {
        try {
            const dbThoughtData = await Thought.find({});
            res.json(dbThoughtData);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'An error occurred while trying to get all thoughts', details: err.message });
        }
    },
    createThought: async (req, res) => {
        try {
          const { thoughtText, username, userId } = req.body;

          const newThought = new Thought({
            thoughtText,
            username,
            userId,
          });

          const dbThoughtData = await newThought.save();

          await User.findByIdAndUpdate(
            userId,
            { $push: { thoughts: dbThoughtData._id } },
            { new: true, useFindAndModify: false }
          );

          res.status(200).json(dbThoughtData);
        } catch (err) {
          res.status(500).json({ error: 'An error occurred while trying to create a thought', details: err.message });
        }
      },

      updateThought: async (req, res) => {
        try {
          const { thoughtText } = req.body;

          const updatedThought = await Thought.findByIdAndUpdate(
            req.params.id,
            { thoughtText },
            { new: true, runValidators: true, context: 'query' }
          );

          if (!updatedThought) {
            return res.status(404).json({ message: 'No thought with this id!' });
          }

          res.json(updatedThought);
        } catch (err) {
          res.status(500).json({ error: 'An error occurred while trying to update a thought', details: err.message });
        }
      },

};


// router
//     .route('/:id')
//     .get(getThoughtById)
//     .put(updateThought)
//     .delete(deleteThought);


// router
//     .route('/:thoughtId/reactions')
//     .post(addReaction);


// router
//     .route('/:thoughtId/reactions/:reactionId')
//     .delete(removeReaction);



module.exports = userController;
