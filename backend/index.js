const express = require('express')
require('dotenv').config()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema
const cookieParser = require('cookie-parser')
const app = express()
// var formidable = require("formidable");
app.use(cookieParser());
const ProductModel = require('./PRODUCTS/productsDB')
const formidable = require('formidable')
const _ = require('lodash')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));
// 
app.use(express.static("public"));
app.use(express.json());
app.use(cors())
const fs = require('fs')
// const bodyParser = require('body-parser')
const { resolveSrv } = require('dns')
const conn = 'mongodb+srv://' + process.env.USNAME + ':' + process.env.PASSWORD + '@farmdropcluster.fy5lrgc.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(conn,
    { useNewUrlParser: true, useUnifiedTopology: true })
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));
// app.use(express.json({extended:false}))
// app.use(bodyParser.json({extended:true}))
const Auths = require('./USER/fileroutes')

const { isAuthenticated, isAdmin, isSignedIn } = require('./CONTROLLERS/AUTH')
const { getUserByEmail, getAllUsers, updateUser } = require('./USER/FUNC')
const { Feedback, RatingCalc, getPhoto, productDelete } = require('./PRODUCTS/FUNC')
const { AddingNews, NewsComment, getNewsbyId } = require('./NEWS/FUNC')
const { FindbyName, FindbyAdder, FindbyID, FindbyRating, FindAll } = require('./PRODUCTS/AGG')
const { createOrder, pushOrderInPurchaseList, updateStock } = require('./ORDERS/FUNC')
const { getProductbyId } = require('./PRODUCTS/FUNC')
const { getShopbyID,getAllshopBycountry,
    getAllImages,SubmitLocation,SubmitLocationsImage,
    getImageOne,getPhotoofImage,getShopOwnerById } = require('./LOCATIONS/FUNC')
const { userPurchaseList } = require('./ORDERS/FUNC')
// const { SubmitForm } = require('./PRODUCTS/FORM')
const { googlesignin } = require('./USER/FUNC')





const SubmitForm = (req, res) => {
    console.log("form in the index")
    console.log(req.body)
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
        console.log('fields are', product)
        console.log('fields are', fields)
        console.log(file)
        if (file.photo) {
            if (file.photo.size > 8300000) {
                return res.status(400).json({
                    Message: 'Problem in the image and its size'
                })
            }
        }
        console.log('here',file.ImageProduct.type)
        product.AddedBy = req.profile.Email
        product.Date = new Date()
        console.log(product)
        product.ImageProduct.data = fs.readFileSync(file.ImageProduct.filepath)
        product.ImageProduct.contentType = file.ImageProduct.type
        console.log(file.ImageProduct.type)
        product.save((errors, prod) => {
            if (errors) {
                console.log('error', errors)
                return res.json({
                    Message: 'Problem in the fields'
                })
            }
            res.json(prod)
        })
    })
}
const UpdateForm = (req, res) => {
    console.log("update products")
    console.log(req.body)
    let form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, (err, fields, file) => {
        if (err) {
            console.log("error")
            console.log(err)
            return res.status(400).json({
                error: 'Problem in the image'
            })
        }
        let product = req.productfound
        product = _.extend(product,fields)
        console.log(file)
        if (file.photo) {
            if (file.photo.size > 8300000) {
                return res.status(400).json({
                    error: 'Problem in the image and its size'
                })
            }
        }
        product.ImageProduct.data = fs.readFileSync(file.ImageProduct.filepath)
        product.ImageProduct.contentType = file.ImageProduct.type
        product.save((errors, prod) => {
            if (errors) {
                console.log('error', errors)
                return res.json({
                    error: 'Problem in the Updating'
                })
            }
            res.json(prod)
        })
    })
}


app.param("adder", getUserByEmail)
app.param("news", getNewsbyId)
app.param("image",getImageOne)
app.param("shopowner",getShopOwnerById)
app.param("product", getProductbyId)
app.param("location", getShopbyID)

app.post('/googlesignin', googlesignin)
app.get('/users/:adder', isSignedIn, isAuthenticated, isAdmin, getAllUsers)
app.put('/users/:adder', isSignedIn, isAuthenticated, updateUser)
app.get('/Order/users/:adder', isSignedIn, isAuthenticated, userPurchaseList)

app.post('/feedback/:product/:adder', isSignedIn, isAuthenticated, Feedback, RatingCalc)

app.post("/add-product/:adder", isSignedIn, isAuthenticated, isAdmin, SubmitForm)
app.post("/update-product/:product/item/:adder", isSignedIn, isAuthenticated, isAdmin, UpdateForm)
app.get("/All-Products/:adder", isSignedIn, isAuthenticated, isAdmin, FindAll)
app.get("/Products/", isSignedIn,FindAll)
app.get("/Photo/:product", getPhoto)

app.post("/comment/:adder/:news", isSignedIn, isAuthenticated, getUserByEmail, NewsComment)
app.post("/add-news/:adder", isSignedIn, isAuthenticated, AddingNews)
app.post("/order-purchase/:adder", isSignedIn, isAuthenticated, pushOrderInPurchaseList, updateStock, createOrder)

app.get("/productsbyName", FindbyName)
app.get("/productsbyID", FindbyID)
app.delete("/product/:product/:adder",isSignedIn,isAuthenticated,     isAdmin,     productDelete, )
// /Image/${selecteduser._id}/photo/${element._id}
app.get("/Image/:shopowner/photo/:image",getPhotoofImage)
app.get("/productsbyAdder", FindbyAdder)
app.get("/productsbyRating", FindbyRating)
app.get("/shopsbycountry",getAllshopBycountry)
app.get("/all-images/:adder",isSignedIn, isAuthenticated, getAllImages)
app.post("/add-product/:adder", isSignedIn, isAuthenticated, isAdmin, SubmitForm)


app.post("/add-shop/:adder", isSignedIn, isAuthenticated, isAdmin,SubmitLocation)
app.post("/update-shop/:location/by/:adder", isSignedIn, isAuthenticated, isAdmin,SubmitLocationsImage)
app.use("/", Auths)
app.listen(5000, () => {
    console.log("On the port 5000")
})