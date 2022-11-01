exports.AddingNews = async (req, res) => {
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
}
exports.NewsComment =async (req, res) => {
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
}