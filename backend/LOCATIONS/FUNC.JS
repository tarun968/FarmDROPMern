exports.getShopbyID = (req,res,next,id) => {
    ShopModel.findOne({_id:id}).exec((error,shop)=>{
        if(error || shop){
            return res.status(400).json({
                error:'No shop was found'
            })
        }
        req.shop = shop;
        next()
    })
}