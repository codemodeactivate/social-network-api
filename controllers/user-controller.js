const User = require('../models/User');

const userController = {

    getAllUsers: async (req, res) => {
        try {
            const dbUserData = await User.find({});
            res.json(dbUserData);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'An error occurred while trying to get all users' });
        }
    },

    createUser: async (req, res) => {
        try {
            const dbUserData = await User.create(req.body);
            res.json(dbUserData);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'An error occurred while trying to create a user' });
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
            res.status(500).json({ error: 'An error occurred while trying to get a user by id' });
        }
    },

    //     .put(updateUser)
//     .delete(deleteUser);


// router
//     .route('/:userId/friends/:friendId')
//     .post(addFriend)
//     .delete(removeFriend);


}

module.exports = userController;
