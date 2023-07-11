const express = require("express")
const { getAllPosts, CreatePosts, getSinglePost, getUserPosts } = require("../controllers/PostsControllers")
const { AuthenticateMiddleware } = require("../middleware/AuthenticateMiddleware");

const router = express.Router()

router.route("/").get(AuthenticateMiddleware,getAllPosts).post(AuthenticateMiddleware,CreatePosts);
router.get("/:id",AuthenticateMiddleware,getSinglePost)
router.get("/user/:id",AuthenticateMiddleware,getUserPosts)



module.exports = router