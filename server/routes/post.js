const express = require('express');
const router = express.Router();
const { Post } = require("../models/Post");

router.post('/create', (req, res) => {
  const post = new Post(req.body);
  post.save((err, doc) => {
    if (err) return res.json({ success: false, err})
    res.status(200).json({ success: true })
  })
})

router.get('/getPosts', (req, res) => {
  Post.find()
    .populate('writer')
    .exec((err, posts) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({ success: true, posts});
    })
})

module.exports = router;
