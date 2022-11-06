const { NewsComment } = require('../NEWS/FUNC');
var {Order} = require('./ordersdb')
var userModel = require('../USER/filemws')
const ProductModel = require('../PRODUCTS/productsDB')
exports.getOrderById = (req,res,id,next) => {
    Order.findById(id)
    .populate("ProductSchema.product", "name price")
    .exec((err,order) => {
        if(err){
            return res.status.json({message:'Nothing was found'})
        }
    req.order = order;
    next();
    })
}
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

exports.createOrder = (req,res) => {
    req.body.order.user = req.profile
    const order = new Order(req.body.order)
    order.save((err,order) => {
        if(err){
            return res.json({error:'Error in the user order'})
        }
        res.json(order)
    })
}
exports.pushOrderInPurchaseList = (req,res,next) => {
    let purchases = [];
    req.body.order.products.forEach(element => {
        purchases.push({
            _id:product._id,
            NameofProduct:product.NameofProduct,
            ProductID:product.ProductID,
            Quantity:product.Quantity,
            transaction_id:product.transaction_id,
            price:product.price
        })
        userModel.findOneAndUpdate(
            {_id:req.profile._id},
            {$push:{purchases:purchases}},
            {new:true},
            (err,user)=>{
                if(err){
                    return res.status(400).json({
                        error:"Error in the finding of the user"
                    })
                }
                next();
            }
        )
    });
}
exports.updateStock = (req,res,next) => {
    let myOps = req.body.order.products.map(prod => {
        return {
            updateOne:{
                filter:{_id:prod._id},
                update:{$inc:{Quantity:-prod.count}}
            }
        }
    })
    ProductModel.bulkWriet(myOps,{},(err,prods) => {
        if(err){
            return res.status(400).json({error:'Bulk ops failed'})
        }
        next()
    })
}
exports.updateOrder = (req,res) => {
    Order.findByIdAndUpdate({
        _id:req.body.OrderID
    },
    {
        $set:{
            status:req.body.status
        }
    },(err,order) => {
        if(err){
            return res.status(400).json({error:'Can not update order'})
        }
        res.json(order)
    })
}
exports.getOrderStatus = (req,res) => {   
    res.json(Order.schema.path("status").enumValues)
}