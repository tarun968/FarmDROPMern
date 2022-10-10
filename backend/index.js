const express = require('express')
require('dotenv').config()
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema
const cookieParser = require('cookie-parser')
const app = express()
var { expressjwt: jwtk } = require("express-jwt");
var formidable = require("formidable");
require('ejs')
app.use(cookieParser());
app.use(express.static("public"));
app.use(express.json());
app.use(cors())
const fs = require('fs')
const { json } = require('body-parser')
const { resolveSrv } = require('dns')
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));

mongoose.connect('mongodb://localhost:27017/farmdrop', { useNewUrlParser: true })
const Schema = mongoose.Schema;
const User = new Schema({
    Phone: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Role: {
        type: Number,
        required: true
    },
    FDMarket: {
        type: String,
        required: true
    },
    Reference: {
        type: String,
        required: true
    },
})

const News = new Schema({
    Headline: {
        type: String,
        required: true
    },
    Adder: {
        type: String,
        required: true,
    },
    News: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
        required: true
    },
    Comments: [{
        commentedby: String,
        commentdesc: String,
        Dateofcomment: Date,
    }],
    Likes: {
        type: Number
    }
})
const newsModel = mongoose.model("New", News)
const userModel = mongoose.model("User", User)
var isSignedIn = jwtk(
    {
        secret: process.env.SECRET,
        userProperty: "auth1",
        algorithms: ['sha1', 'HS256', 'RS256']
    })

app.get("/", async (req, res) => {
    const abc = "abc";
    res.json(abc)
})
const getUserByEmail = (req, res, next, id) => {
    console.log("lets get the user by email")
    userModel.findOne({ EmaiL: id }).exec((err, user) => {
        if (err || !user) {
            console.log("error is here 1", err)
            return res.status(400).json({
                error: "No user found in Db"
            })
        }
        req.profile = user;
        next()
    })
}
const getNewsbyId = (req, res, next, id) => {
    console.log("lets get the new by id")
    newsModel.findOne({ _id: id }).exec((err, news) => {
        if (err || !news) {
            return res.status(400).json({
                error: "No News with such ID found in Db"
            })
        }
        req.news_item = news;
        next()
    })
}
app.param("adder", getUserByEmail)
app.param("news", getNewsbyId);
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
                res.json({Message:"Updated successfully"})
            })
    } catch (e) {
        console.log(e)
    }
})


app.post("/add-news/:adder", async (req, res) => {
    console.log(req)
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
app.post("/signup", async (req, res) => {
    console.log(req.body);
    try {
        const record_new = await new userModel({
            Email: req.body.email,
            Password: req.body.password,
            Role: req.body.role,
            Reference: req.body.reference,
            FDMarket: req.body.fdmarket,
            Phone: req.body.phone,
        })
        await record_new.save();
        const token = await createToken(req.body.email);
        console.log(token);
        res.cookie("user", token, {
            httpOnly: true
        })
        return res.json({ record_new });
    }
    catch (err) {
        console.log(err)
        return res.json({ message: "Error in the SiginUp, Kindly Try again later" })
    }
})
const createToken = async (id) => {
    const x = jwt.sign({ id: id }, process.env.SECRET)
    return x;
}

app.post("/signin", async (req, res) => {
    try {
        const record_to_find = await userModel.findOne({
            Email: req.body.email, Password: req.body.password
        })
        console.log(record_to_find, req.body)
        if (!record_to_find) {
            res.json({ Message: "No User Was Found" });
        }
        const Token = jwt.sign(
            {
                password: req.body.password,
                email: req.body.password, _id: record_to_find._id
            }
            , process.env.SECRET)
        res.cookie("UserLoggedIN", Token);
        const { _id, Email, Password, Role, FDMarket, Phone, Reference } = record_to_find
        return res.json({ Token, user: { _id, Email, Password, Role, FDMarket, Phone, Reference } })

    } catch (error) {
        console.log(error);
        res.json({ Message: "Error, Kindly Login Again" })
    }
})

app.listen(5000, () => {
    console.log("On the port 5000")
})