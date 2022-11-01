const express = require('express')
require('dotenv').config()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema
const cookieParser = require('cookie-parser')
const app = express()
var formidable = require("formidable");
app.use(cookieParser());
app.use(express.static("public"));
app.use(express.json());
app.use(cors())
const fs = require('fs')
const { json } = require('body-parser')
const { resolveSrv } = require('dns')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));
var userModel = require('./USER/filemws')
var newsModel = require('./NEWS/filedbs')
var ProductModel = require('./PRODUCTS/productsDB')
var ShopModel = require('./LOCATIONS/locationdb')

const Auths = require('./USER/fileroutes')
const { NextArrow } = require('infinite-react-carousel/lib/carousel/arrows')

const {isAuthenticated,isAdmin,isSignedIn} = require('./CONTROLLERS/AUTH')
const {getUserByEmail} = require('./USER/FUNC')
const {Feedback,RatingCalc,AddingProduct} = require('./PRODUCTS/FUNC')
const {AddingNews,NewsComment} = require('./NEWS/FUNC')
const {FindbyName,FindbyAdder,FindbyID,FindbyRating} = require('./PRODUCTS/AGG')
const getNewsbyId = (req, res, next, id) => {
    console.log("lets get the new by id")
    newsModel.findOne({ _id: id }).exec((err, news) => {
        if (err || !news) {
            console.log("9999")
            return res.status(400).json({
                error: "No News with such ID found in Db"
            })
        }
        req.news_item = news;
        next()
    })
}
const {getProductbyId} = require('./PRODUCTS/FUNC')
const getShopbyID = (req,res,next,id) => {
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
app.param("adder", getUserByEmail)
app.param("news", getNewsbyId)
app.param("product", getProductbyId)
app.param("location",getShopbyID)

app.post('/feedback/:product/:adder', isSignedIn,isAuthenticated,Feedback,RatingCalc)
app.post("/add-product/:adder", isSignedIn, isAuthenticated, isAdmin, AddingProduct)
app.post("/comment/:adder/:news", isSignedIn, isAuthenticated,getUserByEmail, NewsComment)
app.post("/add-news/:adder", isSignedIn, isAuthenticated, AddingNews)

app.get("/productsbyName",FindbyName)
app.get("/productsbyID",FindbyID)
app.get("/productsbyAdder",FindbyAdder)
app.get("/productsbyRating",FindbyRating)

app.use("/", Auths)
app.listen(5000, () => {
    console.log("On the port 5000")
})