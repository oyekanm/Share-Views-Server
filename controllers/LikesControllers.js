const { Likes } = require("../models");
const asyncHandler = require("express-async-handler");

const AddLike = asyncHandler(async (req, res) => {
  const { PostId } = req.body;
  const { id } = req.user;
  const likes = { PostId, UserId: id };

  const likeExists = await Likes.findOne({
    where: { PostId: PostId, UserId: id },
  });

  if (!likeExists) {
    await Likes.create(likes);
    res.json({ Liked: true });
  } else {
    await Likes.destroy({
      where: { PostId: PostId, UserId: id },
    });
    res.json({ Liked: false });
  }

  // console.log(likeExists);
});

module.exports = { AddLike };
