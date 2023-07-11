const jwt = require("jsonwebtoken")

// const key = require("crypto").randomBytes(64)
// console.log(key.toString("hex"));

const generateToken = (user)=>{
    // console.log(process.env.SECRET_KEY);
    const token = jwt.sign({user},process.env.SECRET_KEY,{expiresIn:"5d"})

    return token
}

module.exports = {generateToken}