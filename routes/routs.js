const express = require('express');
const router = express.Router();

// require the Routs Model

const Rout = require('../models/Rout')

// GET ALL ROUTS

router.get("/", async (req, res) => {
    const routs = await Rout.find();
    res.send(routs)
})

// ADD SAME ROUTS

router.post("/", async (req, res) => {
    const rout = new Post({
        title: req.body.title,
        description: req.body.description,
        type: req.body.type,
        duration: req.body.duration,
        distance: req.body.distance
    })
    try {
        const savedRout = await rout.save()
        res.send(savedRout)
    } catch(err) {
        res.json(err)
    }
    
})

module.exports = router;