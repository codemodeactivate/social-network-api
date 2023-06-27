const userSeed = [
    {
        username: "AlbertEinstein",
        email: "alberteinstein@example.com"
    },
    {
        username: "WilliamShakespeare",
        email: "williamshakespeare@example.com"
    },
    {
        username: "OscarWilde",
        email: "oscarwilde@example.com"
    },
    {
        username: "FridaKahlo",
        email: "fridakahlo@example.com"
    },
    {
        username: "Socrates",
        email: "socrates@example.com"
    }
];

const thoughtSeed = [
    {
        thoughtText: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        username: "AlbertEinstein",
        reactions: [
            {
                reactionBody: "That's deep, Albert!",
                username: "WilliamShakespeare",
            },
            {
                reactionBody: "Indeed, the only thing to do with good advice is to pass it on.",
                username: "OscarWilde",
            }
        ]
    },
    {
        thoughtText: "This above all: to thine own self be true.",
        username: "WilliamShakespeare",
        reactions: [
            {
                reactionBody: "So true, Will! Be yourself, everyone else is already taken.",
                username: "OscarWilde",
            },
            {
                reactionBody: "Agreed! I am my own muse, I am the subject I know best.",
                username: "FridaKahlo",
            }
        ]
    },
    {
        thoughtText: "An unexamined life is not worth living.",
        username: "Socrates",
        reactions: [
            {
                reactionBody: "And to think is to create reality, for reality is merely an illusion, albeit a very persistent one.",
                username: "AlbertEinstein",
            },
            {
                reactionBody: "I couldn't agree more. We are all fools in love.",
                username: "WilliamShakespeare",
            }
        ]
    }
];

module.exports = { userSeed, thoughtSeed };
