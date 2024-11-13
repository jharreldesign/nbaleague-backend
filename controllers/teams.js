const Team = require('../models/team');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const createdTeam = await Team.create(req.body);
        res.status(201).json(createdTeam);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

router.get('/', async (req, res) => {
    try {
        const foundTeams = await Team.find();
        res.status(200).json(foundTeams);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/:teamId', async (req, res) => {
    try {
        const foundTeam = await Team.findById(req.params.teamId);

        if (!foundTeam) {
            res.status(404);
            throw new Error('Team not found.');
        }

        res.status(200).json(foundTeam);

    } catch (error) {
        if (res.statusCode === 404) {
            res.json({ error: error.message });
        } else {
            res.status(500).json({ error: error.message });
        }
    }
});

router.delete('/:teamId', async (req, res) => {
    try {
        const deletedTeam = await Team.findByIdAndDelete(req.params.teamId);

        if(!deletedTeam) {
            res.status(404);
            throw new Error('Team not found');
        }

        res.status(200).json({ message: 'Team successfully deleted.', team: deletedTeam });
    } catch (error) {
        if (res.statusCode === 404) {
            res.json({ error: error.message });
        } else {
            res.status(500).json({ error: error.message});
        }
    }
});

router.put('/:teamId', async (req, res) => {
    try {
        const updatedTeam = await Team.findByIdAndUpdate(req.params.teamId, req.body);

        if(!updatedTeam) {
            res.status(404);
            throw new Error('Team not found');
        }

        res.status(200).json(updatedTeam);
    } catch (error) {
        if (res.statusCode === 404) {
            res.json({ error: error.message })
        } else {
            res.status(500).json({ error: error.message });
        }
    }
})

module.exports = router;