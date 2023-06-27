// const { userSeed, thoughtSeed } = require('./data');
// const mongoose = require('mongoose');
// const db = require('./config/connection');
const mongoose = require('mongoose');
const { User, Thought } = require('./../models');
const { userSeed, thoughtSeed } = require('./data');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});





async function seedDB() {
    User.deleteMany({})
    .then(() => User.collection.insertMany(userSeed))
    .then(data => {
        console.log(data.insertedCount + " records inserted!");
    })
    .then(() => Thought.deleteMany({}))
    .then(() => Thought.collection.insertMany(thoughtSeed))
    .then(data => {
        console.log(data.insertedCount + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
}

// async function seedDB() {
//     const users = await User.insertMany(userSeed);
//     const thoughtsWithReactions = await Promise.all(thoughtSeed.map(async thought => {
//         const reactions = await Reaction.insertMany(thought.reactions);
//         thought.reactions = reactions.map(reaction => reaction._id);
//         return thought;
//     }));
//     const thoughts = await Thought.insertMany(thoughtsWithReactions);

//     // arbitrarily add the first user as a friend to all other users
//     for (let i = 1; i < users.length; i++) {
//         await User.findByIdAndUpdate(users[i]._id, { $push: { friends: users[0]._id } }, { new: true });
//     }
//     // arbitrarily associate the first thought with the first user
//     await User.findByIdAndUpdate(users[0]._id, { $push: { thoughts: thoughts[0]._id } }, { new: true });
//     console.log('all done!');
//     process.exit(0);
// }

seedDB();
