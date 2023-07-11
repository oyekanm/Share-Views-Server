const express = require("express")
const { CreateUser, AuthenticateUser, Auth,findSingleUser } = require("../controllers/UsersControllers");
const { AuthenticateMiddleware } = require("../middleware/AuthenticateMiddleware");

const router = express.Router()

router.route("/").get(AuthenticateMiddleware,Auth).post(CreateUser);
router.post("/login",AuthenticateUser)
router.get("/:id",findSingleUser)



module.exports = router