const Player = require('../models/player');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const createdPlayer = await Player.create(req.body);
        res.status(201).json(createdPlayer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

router.get('/', async (req, res) => {
    try {
        const foundPlayers = await Player.find();
        res.status(200).json(foundPlayers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

router.get('/:playerId', async (req, res) => {
    try {
        const foundPlayer = await Player.findById(req.params.playerId);

        if (!foundPlayer) {
            res.status(404);
            throw new Error('Player not found.');
        }

        res.status(200).json(foundPlayer);

    } catch (error) {
        if (res.statusCode === 404) {
            res.json({ error: error.message });
        } else {
            res.status(500).json({ error: error.message });
        }
    }
})

router.delete('/:playerId', async (req, res) => {
    try {
        const deletedPlayer = await Player.findByIdAndDelete(req.params.playerId);

        if(!deletedPlayer) {
            res.status(404);
            throw new Error('Player not found');
        }

        res.status(200).json({ message: 'Player successfully deleted.', player: deletedPlayer });
    } catch (error) {
        if (res.statusCode === 404) {
            res.json({ error: error.message });
        } else {
            res.status(500).json({ error: error.message});
        }
    }
});

router.put('/:playerId', async (req, res) => {
    try {
        const updatedPlayer = await Player.findByIdAndUpdate(req.params.playerId, req.body);

        if(!updatedPlayer) {
            res.status(404);
            throw new Error('Player not found');
        }

        res.status(200).json(updatedPlayer);
    } catch (error) {
        if (res.statusCode === 404) {
            res.json({ error: error.message })
        } else {
            res.status(500).json({ error: error.message });
        }
    }
})

module.exports = router;