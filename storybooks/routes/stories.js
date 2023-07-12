const express = require("express");
const router = express.Router();
const { ensureAuth } = require("../middleware/auth");

const Story = require("../models/Story");
const Comment = require("../models/Comment");

// @desc    Show add page
// @route   GET /stories/add
router.get("/add", ensureAuth, (req, res) => {
  res.render("stories/add");
});

// @desc    Process add form
// @route   POST /stories
router.post("/", ensureAuth, async (req, res) => {
  try {
    req.body.user = req.user.id;
    await Story.create(req.body);
    res.redirect("/dashboard");
  } catch (err) {
    console.error(err);
    res.render("error/500");
  }
});

// @desc    Show all stories
// @route   GET /stories
router.get("/", ensureAuth, async (req, res) => {
  try {
    const stories = await Story.find()
      .populate("user")
      .sort({ createdAt: "desc" })
      .lean();

    res.render("stories/index", {
      stories,
    });
  } catch (err) {
    console.error(err);
    res.render("error/500");
  }
});

// @desc    Show single story
// @route   GET /stories/:id
router.get("/:id", ensureAuth, async (req, res) => {
  try {
    let story = await Story.findById(req.params.id)
      .populate("user")
      .populate("comments")
      .lean();

    if (!story) {
      return res.render("error/404");
    }

    res.render("stories/show", { story });
  } catch (err) {
    console.error(err);
    res.render("error/404");
  }
});

// @desc    Show edit page
// @route   GET /stories/edit/:id
router.get("/edit/:id", ensureAuth, async (req, res) => {
  try {
    const story = await Story.findOne({
      _id: req.params.id,
    }).lean();

    if (!story) {
      return res.render("error/404");
    }

    if (story.user != req.user.id) {
      res.redirect("/stories");
    } else {
      res.render("stories/edit", {
        story,
      });
    }
  } catch (err) {
    console.error(err);
    return res.render("error/500");
  }
});

// @desc    Update story
// @route   PUT /stories/:id
router.put("/:id", ensureAuth, async (req, res) => {
  try {
    let story = await Story.findById(req.params.id)
      .populate("user")
      .populate("comments")
      .lean();

    if (!story) {
      return res.render("error/404");
    }

    if (story.user._id != req.user.id) {
      res.redirect("/stories");
    } else {
      story = await Story.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
      });

      res.redirect("/dashboard");
    }
  } catch (err) {
    console.error(err);
    return res.render("error/500");
  }
});

// @desc    Delete story
// @route   DELETE /stories/:id
router.delete("/:id", ensureAuth, async (req, res) => {
  try {
    let story = await Story.findById(req.params.id)
      .populate("user")
      .populate("comments")
      .lean();

    if (!story) {
      return res.render("error/404");
    }

    if (story.user._id != req.user.id) {
      res.redirect("/stories");
    } else {
      await Story.remove({ _id: req.params.id });
      res.redirect("/dashboard");
    }
  } catch (err) {
    console.error(err);
    return res.render("error/500");
  }
});

// @desc    User stories
// @route   GET /stories/user/:userId
router.get("/user/:userId", ensureAuth, async (req, res) => {
  try {
    const stories = await Story.find({
      user: req.params.userId,
    })
      .populate("user")
      .lean();

    res.render("stories/index", {
      stories,
    });
  } catch (err) {
    console.error(err);
    res.render("error/500");
  }
});

//@desc Search stories by title
//@route GET /stories/search/:query
router.get("/search/:query", ensureAuth, async (req, res) => {
  try {
    const stories = await Story.find({
      title: new RegExp(req.query.query, "i"),
    })
      .populate("user")
      .sort({ createdAt: "desc" })
      .lean();
    res.render("stories/index", { stories });
  } catch (err) {
    console.log(err);
    res.render("error/404");
  }
});

router.post("/:id/comments", ensureAuth, async (req, res) => {
  try {
    const newComment = new Comment({
      body: req.body.body,
      user: req.user.id,
    });
    await newComment.save();
    let story = await Story.findById(req.params.id);
    story.comments.push(newComment._id);

    if (req.user.id != story.user._id && !story.users.includes(req.user.id)) {
      story.users.push(req.user.id);
    }
    //story = await Story.findById(req.params.id).populate("comments");
    await story.save();

    res.redirect(`/stories/${req.params.id}`);
  } catch (error) {
    console.error(error);
    res.redirect("/error");
  }
});

router.delete("/:id/comments/:commentId", ensureAuth, async (req, res) => {
  try {
    let story = await Story.findById(req.params.id);
    if (!story) {
      return res.status(404).send("Story not found");
    }

    // 찾아낸 story에서 해당 commentId를 가진 comment를 찾는다.
    const commentId = story.comments.find(
      (id) => id.toString() === req.params.commentId
    );

    // 해당 댓글이 존재하지 않는 경우
    if (!commentId) {
      return res.status(404).send("Comment not found");
    }

    // Comment collection에서 해당 comment를 찾는다.
    const comment = await Comment.findById(commentId);

    // 해당 댓글이 로그인한 사용자의 것이 아닌 경우
    if (comment.user.toString() !== req.user.id) {
      return res
        .status(403)
        .send("You do not have permission to delete this comment");
    }

    // comment를 story에서 제거한다.
    const commentIndex = story.comments.indexOf(commentId);
    if (commentIndex !== -1) {
      story.comments.splice(commentIndex, 1);
    }
    await story.save();

    // 실제 Comment collection에서도 해당 comment를 제거한다.
    await Comment.findByIdAndRemove(req.params.commentId);

    res.redirect(`/stories/${req.params.id}`);
  } catch (error) {
    console.error(error);
    res.redirect("/error");
  }
});

router.post("/:id/likes", ensureAuth, async (req, res) => {
  try {
    let story = await Story.findById(req.params.id);
    console.log(typeof req.user.id);
    story.likes.push(String(req.user.id));
    await story.save();
    console.log(story.likes);
    console.log(req.user.id);
    res.redirect(`/stories/${req.params.id}`);
  } catch (error) {
    console.error(error);
    res.redirect("/error");
  }
});

router.post("/:id/likes/delete", ensureAuth, async (req, res) => {
  try {
    let story = await Story.findById(req.params.id);
    console.log(typeof req.user.id);

    const indexToDelete = story.likes.indexOf(String(req.user.id)); // index of the element to delete
    story.likes.splice(indexToDelete, 1); // Deletes one element at the specified index

    await story.save();
    console.log(story.likes);
    console.log(req.user.id);
    res.redirect(`/stories/${req.params.id}`);
  } catch (error) {
    console.error(error);
    res.redirect("/error");
  }
});

module.exports = router;
