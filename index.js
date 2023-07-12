const express = require("express");
const dotenv = require('dotenv')
const cors = require("cors")

const db = require("./models");
const router = require("./routes/PostRoute");
const commentRouter = require("./routes/CommentsRoute");
const UsersRouter = require("./routes/UsersRoute");
const LikesRouter = require("./routes/LikesRoute");
const {NotFound,ErrorBoundary} = require("./middleware/errorMiddleware");

dotenv.config()
const port = process.env.PORT;

const app = express()
// db.sequelize.sync()

app.use(express.json())
app.use(cors())
app.use("/api/posts",router) 
app.use("/api/comments",commentRouter) 
app.use("/api/auth",UsersRouter) 
app.use("/api/likes",LikesRouter) 

// console.log(port);

app.listen(port,()=>{
    console.log(process.env.NODE_ENV  + port);
})

app.use(NotFound)
app.use(ErrorBoundary)