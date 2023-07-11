const { Comments } = require("../models");
const asyncHandler = require("express-async-handler");

const getAllComments = asyncHandler(async (req, res) => {
  const { PostId } = req.params;
  const comments = await Comments.findAll({
    where: {
      PostId: PostId,
    },
    order: [["createdAt", "DESC"]],
  });

  res.status(200).json(comments);
});

const createComment = asyncHandler(async (req, res) => {
  const value = req.body;
  value.username = req.user.username
  value.UserId = req.user.id
  const comments = await Comments.create(value);
  // console.log(comments);
  res.status(201).json(comments);
});

const deleteComment = asyncHandler(async(req,res)=>{
  const { id } = req.params;
  console.log(id,"done");
 await Comments.destroy({
    where: {
      id: id,
    },
  })
  res.status(204).json({data:"successful"});
})

module.exports = { getAllComments, createComment,deleteComment };
