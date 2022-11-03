var userModel = require('./filemws')
exports.getUserByEmail = (req, res, next, id) => {
    console.log("lets get the user by email")
    console.log('ID', id)
    // console.log('reqqUEST',req)
    userModel.findById(id).exec((err, user) => {
        if (err || !user) {
            console.log("error is here 1", err)
            return res.status(400).json({
                error: "No user found in Db"
            })
        }
        console.log('user', user)
        console.log("hui hii")
        req.profile = user;
        next()
    })
}

exports.getAllUsers = (req,res) => {
    userModel.find().exec((err,users) => {
        if(err|| !users){
            return res.status(400).json({Message:'No users found'})
        }
        res.status(200).json(users)
    })
}

exports.updateUser = (req,res) =>{
    userModel.findByIdAndUpdate({_id:req.profile._id},
        {$set:req.body}
        ,
        {
            new:true,
            useFindAndModify:false
        },(
            err,user
        )=>{
            if(err){
                return res.status(400).json({message:"Update unsucessfull"})
            }
            console.log("json data",req.body)
        res.json(user)
        })
}