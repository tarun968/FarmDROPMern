const express = require('express')
require('dotenv').config()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema
const cookieParser = require('cookie-parser')
const app = express()
var { expressjwt: jwtk } = require("express-jwt");
var formidable = require("formidable");
// require('ejs')
app.use(cookieParser());
app.use(express.static("public"));
app.use(express.json());
app.use(cors())
const fs = require('fs')
const { json } = require('body-parser')
const { resolveSrv } = require('dns')
// app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));
var userModel = require('./USER/filemws')
var newsModel = require('./NEWS/filedbs')
var ProductModel = require('./PRODUCTS/productsDB')
const Auths = require('./USER/fileroutes')
var isSignedIn = jwtk(
    {
        secret: process.env.SECRET,
        userProperty: "auth1",
        algorithms: ['sha1', 'HS256', 'RS256']
    })


const getUserByEmail = (req, res, next, id) => {
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
const getProductbyId = (req, res, next, id) => {
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
app.param("adder", getUserByEmail)
app.param("news", getNewsbyId)
app.param("product", getProductbyId)
const isAuthenticated = (req, res, next) => {
    console.log("req auth", req.auth)
    console.log('req profile', req.profile)
    try {
        console.log(req.profile._id.toString())
        console.log("req auth is", req.auth)
        console.log("req profile is", req.profile)
        let checker = req.profile && req.auth &&
            req.profile._id.toString() === req.auth._id
        if (!checker) {
            return res.status(403).json({
                error: "Acess is denied"
            })
        }
        next()
    } catch (er) {
        console.log("error", er)
    }
}
const isAdmin = (req, res, next) => {
    try {
        console.log("is admin profile", req.profile)
        console.log("is admin profile", req.body)
        if (req.profile.Role != 1) {
            return res.json({ message: 'Acess denied as you are not an admin' })
        }
        else {
            next()
        }
    } catch (e) {
        console.log(e)
    }
}
const Feedback = async (req, res, next) => {
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
            next();
            // return res.status(200).json({
            //     message:'Pushed successfully'
            // })
        })
}
app.post('/feedback/:product/:adder', isSignedIn, isAuthenticated, Feedback, async (req, res) => {
    console.log('in the feedback',req.productfound)
    var total_stars = 0;
    req.productfound.Feedbacks.forEach(element => {
        total_stars = total_stars + element.Stars
    });
    total_stars  = total_stars / req.productfound.Feedbacks.length
    ProductModel.findOneAndUpdate({_id:req.productfound._id},{
        $set:{Rating:total_stars}
    }).exec((err,product)=>{
        if(err || !product){
            return res.json({message:'Not done successfully'})
        }
        return res.status(200).json({
            message: 'Pushed successfully'
        })
    })
})
app.post("/add-product/:adder", isSignedIn, isAuthenticated, isAdmin, async (req, res) => {
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
})
app.post("/comment/:adder/:news", getUserByEmail, async (req, res) => {
    console.log("in the process of adding the comment", req.news_item)
    console.log("in the process of adding the comment", req.profile)
    console.log(req.body.Comment)
    try {
        var comnts = {
            commentedby: req.profile.Email,
            commentdesc: req.body.Comment,
            Dateofcomment: new Date()
        }
        newsModel.findOneAndUpdate(
            { _id: req.news_item._id },
            { $push: { Comments: comnts } },
            { new: true },
            (err, result) => {
                if (err) {
                    return res.status(400).json({
                        error: "Unable to save purchase list"
                    });
                }
                res.json({ Message: "Updated successfully" })
            })
    } catch (e) {
        console.log("", e)
    }
})

app.post("/add-news/:adder", isSignedIn, isAuthenticated, async (req, res) => {
    console.log('->', req.profile)
    console.log('--->', req.body)
    try {
        const record_new = await new newsModel({
            Headline: req.body.Heading,
            Adder: req.profile.Email,
            News: req.body.Desc,
            Date: new Date(),
            Comments: [],
            Likes: 0,
        })
        await record_new.save();
        return res.json({ record_new });
    } catch (err) {
        console.log('error', err)
    }
})
app.use("/", Auths)

app.listen(5000, () => {
    console.log("On the port 5000")
})
