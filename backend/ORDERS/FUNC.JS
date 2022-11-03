var {Order} = require('./ordersdb')
exports.userPurchaseList = (req,res) =>{
    console.log('user with the purchase',req.profile)
    Order.find({user:req.profile._id})
    .exec((err,order) =>{
        if(err) {
            return res.status(400).json({error:'NO ORDER IN THIS ACCOUNT'})
        }
        return res.json(order)
    })
}