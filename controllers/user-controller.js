const User = require('../models/User');
const Thought = require('../models/Thought');
const userController = {

    getAllUsers: async (req, res) => {
        try {
            const dbUserData = await User.find({});
            res.json(dbUserData);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'An error occurred while trying to get all users', details: err.message });
        }
    },

    createUser: async (req, res) => {
        try {
            const dbUserData = await User.create(req.body);
            res.json(dbUserData);

        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'An error occurred while trying to create a user', details: err.message });
        }
    },

    getUserById: async (req, res) => {
        try {
            const dbUserData = await User.findById(req.params.id);

            if (!dbUserData) {
                return res.status(404).json({ error: 'No user found with this id' });
            }

            res.json(dbUserData);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'An error occurred while trying to get a user by id', details: err.message });
        }
    },

    updateUser: async (req, res) => {
        try {
            const dbUserData = await User.findOneAndUpdate(
                { _id: req.params.id },
                { $set: req.body },
                { runValidators: true, new: true }
            );

            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }

            res.json(dbUserData);
        } catch (err) {
                console.error(err);
                res.status(500).json({ error: 'An error occurred while trying to update a user', details: err.message });
            }
    },


    deleteUser: async (req, res) => {
        try {
            const dbUserData = await User.findOneAndDelete({ _id: req.params.id });

            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }

            // After deleting the user, delete their thoughts
            await Thought.deleteMany({ userId: req.params.id });

            res.send(`${dbUserData.username} and associated thoughts deleted successfully!`);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'An error occurred while trying to delete the user and associated thoughts', details: err.message });
        }
    },

    addFriend: async (req, res) => {
        try {

            const dbUserData = await User.findById(req.params.id);

            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }

            dbUserData.friends.push(req.params.friendId);
            dbUserData.save();

            res.json(dbUserData);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'An error occurred while trying to add a friend', details: err.message });
        }
    },

    removeFriend: async (req, res) => {
        try {
            const dbUserData = await User.findById(req.params.id);
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }

            dbUserData.friends.pull(req.params.friendId);
            dbUserData.save();
            res.json(dbUserData);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'An error occurred while trying to remove a friend', details: err.message });
        }
    }
};






module.exports = userController;
