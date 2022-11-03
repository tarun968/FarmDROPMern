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
// const bodyParser = require('body-parser')
const { resolveSrv } = require('dns')
mongoose.connect('mongodb+srv://Tarun968:12345@farmdropcluster.fy5lrgc.mongodb.net/?retryWrites=true&w=majority',
{ useNewUrlParser: true, useUnifiedTopology: true })
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));
// app.use(express.json({extended:false}))
// app.use(bodyParser.json({extended:true}))
const Auths = require('./USER/fileroutes')

const {isAuthenticated,isAdmin,isSignedIn} = require('./CONTROLLERS/AUTH')
const {getUserByEmail,getAllUsers,updateUser} = require('./USER/FUNC')
const {Feedback,RatingCalc,AddingProduct} = require('./PRODUCTS/FUNC')
const {AddingNews,NewsComment,getNewsbyId} = require('./NEWS/FUNC')
const {FindbyName,FindbyAdder,FindbyID,FindbyRating} = require('./PRODUCTS/AGG')
const {getProductbyId} = require('./PRODUCTS/FUNC')
const {getShopbyID} = require('./LOCATIONS/FUNC')
const {userPurchaseList} = require('./ORDERS/FUNC')

app.param("adder", getUserByEmail)
app.param("news", getNewsbyId)
app.param("product", getProductbyId)
app.param("location",getShopbyID)

app.get('/users/:adder', isSignedIn,isAuthenticated,isAdmin,getAllUsers)
app.put('/users/:adder', isSignedIn,isAuthenticated,updateUser)
app.get('/Order/users/:adder', isSignedIn,isAuthenticated,userPurchaseList)

app.post('/feedback/:product/:adder', isSignedIn,isAuthenticated,Feedback,RatingCalc)
app.post("/add-product/:adder", isSignedIn, isAuthenticated, isAdmin, AddingProduct)
app.post("/comment/:adder/:news", isSignedIn, isAuthenticated,getUserByEmail, NewsComment)
app.post("/add-news/:adder",isSignedIn,isAuthenticated,AddingNews)

app.get("/productsbyName",FindbyName)
app.get("/productsbyID",FindbyID)
app.get("/productsbyAdder",FindbyAdder)
app.get("/productsbyRating",FindbyRating)

app.use("/", Auths)

app.listen(5000, () => {
    console.log("On the port 5000")
})