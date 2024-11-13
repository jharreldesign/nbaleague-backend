const mongoose = require ('mongoose');

const playerSchema = mongoose.Schema ({
    name: { type: String, required: true },
    playerNumber: { type: Number, required: true },
    position: { type: String, required: true },
    height: { type: Number, required: true },
    weight: { type: Number, required: true },
    birthdate: { type: Date, required: true },
    age: { type: Number, required: true },
    school: { type: String, required: true }
})

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;