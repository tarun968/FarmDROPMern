const ProductModel = require('./productsDB')
exports.Feedback = async (req, res, next) => {
    console.log("in the feedback function")
    ProductModel.findOneAndUpdate({ _id: req.productfound._id },
        {
            $push: {
                Feedbacks: {
                    GivenBy: req.profile.Email,
                    FeedbackDesc: req.body.Feedback,
                    DateofFB: new Date(),
                    Stars: req.body.Star
                }
            }
        }).exec((err, products) => {
            if (err || !products) {
                return res.status(400).json({
                    message: 'Not done'
                })
            }
            console.log("product after the feedback", products)
        })
    next()
}

exports.getProductbyId = (req, res, next, id) => {
    ProductModel.findOne({ _id: id }).exec((error, product) => {
        if (error || !product) {
            return res.status(400).json({
                errormessage: 'no such product was found'
            })
        }
        req.productfound = product;
        next()
    })
}

exports.RatingCalc =  async (req, res) => {
    console.log('in the feedback', req.productfound)
    var total_stars = 0;
    req.productfound.Feedbacks.forEach(element => {
        total_stars = total_stars + element.Stars
    });
    total_stars = total_stars / req.productfound.Feedbacks.length
    ProductModel.findOneAndUpdate({ _id: req.productfound._id }, {
        $set: { Rating: total_stars }
    }).exec((err, product) => {
        if (err || !product) {
            return res.json({ message: 'Not done successfully' })
        }
        return res.status(200).json({
            message: 'Pushed successfully'
        })
    })
}

exports.AddingProduct = async (req, res) => {
    console.log("/", req.profile)
    try {
        const product_new = await new ProductModel({
            NameofProduct: req.body.ProductName,
            ProductID: req.body.ProductID,
            Rating: 0,
            AddedBy: req.profile.Email,
            Date: new Date(),
            Feedbacks: [],
            Quantity: req.body.Quantity
        })
        await product_new.save();
        return res.json({ product_new });
    } catch (e) {
        console.log('error in product', e)
        res.json({ Message: 'Not saved' })
    }
}