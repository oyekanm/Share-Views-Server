const express = require("express")
const { AddLike } = require("../controllers/LikesControllers");
const { AuthenticateMiddleware } = require("../middleware/AuthenticateMiddleware");

const router = express.Router()

router.route("/").get().post(AuthenticateMiddleware,AddLike);
// router.get("/",)



module.exports = router