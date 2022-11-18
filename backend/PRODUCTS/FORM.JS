const ProductModel = require('./productsDB')
const formidable = require('formidable')
const _ = require('lodash')
const fs = require('fs')
// const bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.urlencoded({ extended: false }));
// 
exports.SubmitForm = (req, res) => {
    console.log("form ")
    let form = new formidable.IncomingForm()
    form.keepExtensions = true
    console.log("form ")
    form.parse(req, (err, fields, file) => {
        if (err) {
            console.log("error")
            console.log(err)
            return res.status(400).json({
                error: 'Problem in the image'
            })
        }
        let product = ProductModel(fields)
        // console.log('fields are',product)
        // console.log('fields are',fields)
        // console.log(file)
        if (file.photo) {
            if (file.photo.size > 8300000) {
                return res.status(400).json({
                    error: 'Problem in the image and its size'
                })
            }
        }
        product.AddedBy = req.profile.Email
        product.Date = new Date()
        product.ImageProduct.data = fs.readFileSync(file.photo.filepath)
        product.ImageProduct.contentType = file.photo.type
        product.save((errors,prod) => {
            if(errors){
                console.log('error',errors)
                return res.json({
                    error: 'Problem in the fields'    
                })
            }
            res.json(prod)
        })
    })
}
