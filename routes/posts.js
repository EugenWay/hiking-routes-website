const express = require('express');
const router = express.Router();

// require the Post Model

const Post = require('../models/Post')

// GET ALL POSTS

router.get("/", async (req, res) => {
    const posts = await Post.find();
    res.json(posts)
})

// GET POST BY ID

router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findOne({ _id: req.params.id })
        res.json(post)
    } catch(err) {
        res.json({ massage: err })
    }
    
})

// ADD SOME POST

router.post("/", async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })
    try {
        const savedPost = await post.save()
        res.send(savedPost)
    } catch(err) {
        res.json(err)
    }
    
})

//  UPDATE SAME POST

router.put("/:id", async (req, res) => {
    try {
        await Post.update({ _id: req.params.id }, { $set: { title: req.body.title } })
        res.sendStatus(200)
    } catch(err) {
        res.json(err)
    }
})


module.exports = router;