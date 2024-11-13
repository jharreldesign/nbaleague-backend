const mongoose = require('mongoose');

const teamSchema =  mongoose.Schema({
    teamName: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    teamCode: { type: String, required: true },
    teamColors: {
        type: [String],
        required: true},
    division: { type: String, required: true }
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;