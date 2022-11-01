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