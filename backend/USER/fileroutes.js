const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
var userModel = require('./filemws')
router.post('/signin', async (req, res) => {
    try {
        console.log(req.body)
        const record_to_find = await userModel.findOne({
            Email: req.body.email, Password: req.body.password
        })
        console.log(record_to_find, req.body)
        if (!record_to_find) {
            res.json({ error: "No User Was Found" });
        }
        const Token = jwt.sign(
            {
                email: req.body.email, _id: record_to_find._id
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

router.post('/signup', async (req, res) => {
    console.log(req.body);
    console.log("====================")
    try {
        const record_new = await new userModel({
            Email: req.body.Email,
            Password: req.body.Password,
            Role: req.body.Role,
            Reference: req.body.Reference,
            FDMarket: req.body.FDMarket,
            Phone: req.body.Phone,
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
        return res.json({ error: "Error in the SiginUp, Kindly Try again later" })
    }
})

router.post('/signout',async (req, res) => {
    console.log('res',res)
    res.clearCookie('UserLoggedIN')
    // res.clearCookie('user')
    res.json({
        Message:"Cookie Cleared"
    })
})
const createToken = async (id) => {
    const x = jwt.sign({ id: id }, process.env.SECRET)
    return x;
}

module.exports = router