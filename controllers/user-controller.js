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
    }
}

module.exports = userController;
