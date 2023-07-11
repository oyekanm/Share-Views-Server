const {Posts,Likes} = require("../models")
const asyncHandler = require('express-async-handler')

const getSinglePost = asyncHandler(async(req,res) =>{
    const {id} = req.params
    // console.log(params);
    const posts = await Posts.findByPk(id);
    const like = await Likes.findAll({where: { PostId: id },})
    const likes = await Likes.findOne({where: { PostId: id,UserId :req.user.id },})

    if(!posts){
        res.status(404)
        throw new Error(`Post ${id} Not Found`)
    }else{

        res.json({posts,like,likes})
    }
})
const getAllPosts = asyncHandler(async(req,res) =>{
    const posts = await Posts.findAll({ include:[Likes],order: [['updatedAt', 'DESC']] })
    const like = await Likes.findAll({where: { UserId: req.user.id },})
    
    res.json({posts,like})
})
const CreatePosts = asyncHandler(async(req,res) =>{
    const post =req.body
const posts =await Posts.create({...post, username:req.user.username,UserId:req.user.id});
    res.json(posts)
})
const getUserPosts = asyncHandler(async(req,res)=>{
    const {id} = req.params

    const posts = await Posts.findAll({include:[Likes],where:{ UserId: id }});
    const like = await Likes.findAll({where: { UserId: req.user.id },})

    res.json({posts,like})
})
module.exports = {getAllPosts,CreatePosts,getSinglePost,getUserPosts}