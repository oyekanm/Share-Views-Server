const express = require("express")
const { getAllComments, createComment, deleteComment } = require("../controllers/CommentsControllers");
const { AuthenticateMiddleware } = require("../middleware/AuthenticateMiddleware");

const router = express.Router()

router.route("/").get().post(AuthenticateMiddleware,createComment);
router.get("/:PostId",getAllComments)
router.delete("/:id",deleteComment)



module.exports = router