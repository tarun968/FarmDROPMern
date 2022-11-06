const ProductModel = require('./productsDB')
const formidable = require('formidable')
const _ = require('lodash')
const fs = require('fs')

exports.SubmitForm = (req, res) => {
    let form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, (err, fields, file) => {
        if (err) {
            console.log(err)
            return res.status(400).json({
                Message: 'Problem in the image'
            })
        }
        let product = ProductModel(fields)
        console.log('fields are',product)
        console.log('fields are',fields)
        console.log(file)
        if (file.photo) {
            if (file.photo.size > 8300000) {
                return res.status(400).json({
                    Message: 'Problem in the image and its size'
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
                    Message: 'Problem in the fields'    
                })
            }
            res.json(prod)
        })
    })
}