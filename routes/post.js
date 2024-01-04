const express = require("express");
const fetchuser = require("../middleware/fetchuser");
const router = express.Router();
const Posts = require("../models/Posts");
const { body, validationResult } = require("express-validator");

// Add new Post using POST "/api/auth/addpost". Login required

router.post(
  "/addpost",
  fetchuser,
  [
    body("title", "Title must be atleast 3 character").isLength({ min: 3 }),
    body("description", "Description must be atleast five character").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    const { title, description, tag } = req.body;
    // If there are errors return Bad requests and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const post = new Posts({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savedPost = await post.save();

      res.json(savedPost);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("internal server error");
    }
  }
);

// Delete an existing Post using DELETE: "api/posts/deletepost". Login required
router.delete("/deletepost/:id", fetchuser, async (req, res) => {
  try {
    // Find the post to be deleted and delete it

    let post = await Posts.findById(req.params.id);

    // const userId = req.user.id;

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    // Allow deletion only if user owns this Post

    if (post.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    post = await Posts.findByIdAndDelete(req.params.id);
    res.json({ Success: "Post has been deleted", post: post });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("internal server error");
  }
});

// Fetch all Posts using GET: "/api/auth/fetchallposts"

router.get("/fetchallposts", async (req, res) => {
  try {
    const posts = await Posts.find();

    res.json(posts);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// Change UpVote Count onclick

router.post("/upvote/:id", async (req, res) => {
  try {
    const postId = req.params.id;

    // Find the post by ID
    let post = await Posts.findById(postId);

    if (!post) {
      return res.status(404).send("Not Found");
    }

    post.upvote += 1;

    // Save the updated post
    await post.save();

    // Send a response with the updated post
    return res.json({ upvote: post.upvote });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
});

// Change DownVote Count onclick

router.post("/downvote/:id", async (req, res) => {
  try {
    const postId = req.params.id;

    // Find the post by ID
    let post = await Posts.findById(postId);

    if (!post) {
      return res.status(404).send("Not Found");
    }

    post.downvote += 1;

    // Save the updated post
    await post.save();

    // Send a response with the updated post
    return res.json({ downvote: post.downvote });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
