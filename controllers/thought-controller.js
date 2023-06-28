
const Thought = require('../models/Thought');

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

};




module.exports = userController;
