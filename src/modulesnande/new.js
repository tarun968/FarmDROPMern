import React from "react";
import { NewsComment } from "./apiNews";
import { useEffect, useState } from "react";
import { NewsGet } from "./apiNews";
import { useParams } from "react-router-dom";
import Menu2 from "../menu/menu2";
import Footer from "../pages/footer";
import { isAuthenticated } from "../backendjoin/auth";
const NewItem = () => {
    const { news } = useParams()
    console.log("news", news)
    const [News, SetNews] = useState({
        Headline: "",
        Adder: "",
        News: "",
        DateNews: "",
    })
    const { user, Token } = isAuthenticated()
    const [Comment, setComment] = useState({
        commentedby: user.Email,
        commentdesc: "",
        Dateofcomment: new Date(),
        formData: "",
    })

    console.log(Comment)
    const { commentdesc, commentedby, Dateofcomment, formData } = Comment
    // console.log("comment desc",commentdesc)

    const CommentDone = event => {
        event.preventDefault();
        setComment({ ...Comment})
        NewsComment(Token,formData,user._id,news).then(data => {
            if (data.error) {
                console.log("data",data.error)
                setComment({ ...Comment});
            } else {
                setComment({
                    ...Comment,
                    commentedby: user.Email,
                    commentdesc: "",
                    Dateofcomment: new Date(),
                    formData: "",
                });
            }
        });
    }


    const handleChange = name => event => {
        console.log("etv",event.target.value,name)
        formData.set(name, event.target.value);
        setComment({ ...Comment, [name]: event.target.value });
    }


    const [base64String, setBaseString] = useState("");
    console.log(News)
    const preload = () => {
        setComment({ ...Comment, formData: new FormData() })
        NewsGet(news).then(
            data => {
                if (data.error) {
                    console.log("")
                }
                else {
                    SetNews(data.Message[0])
                    setBaseString(btoa(
                        String.fromCharCode(...new Uint8Array(data.Message[0].ImageNews.data.data))
                    ))
                }
            }
        )
    }
    useEffect(() => {
        preload()
    }, [])

    return (
        <>
            <Menu2 />
            <div
                className="col"
                style={{ backgroundColor: '' }}>
                <div class="mt-5 mb-4 p-4 ms-5"
                    style={{ backgroundColor: "white", width: "60%" }}>
                    <img src={`data:image/jpeg;base64,${base64String}`}
                        style={{ height: '60vh' }}
                        class='card-img-top' />
                    <h5 class="card-title mt-4">{News.Headline}</h5>
                    <p class="card-text">By {News.Adder}</p>
                    <div class="card-body mt-4">
                        <p class="card-text">
                            {
                                News.News
                            }
                        </p>
                    </div>
                    <div class="card-body mt-4">
                        <p class="card-text">
                            {
                                News.DateNews.substring(0, 10)
                            }
                        </p>
                    </div>
                </div>
            </div>


            <div class="mt-5 mb-4 p-4 ms-5"
                style={{ backgroundColor: "white", width: "60%" }}>
                <form>
                    <label for="exampleFormControlTextarea1" class="form-label">Comment</label>
                    <textarea class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        onChange={handleChange("commentdesc")}
                        name="commentdesc"
                        value={commentdesc}
                        />
                    <button className="btn float-end mt-3" style={{
                        background: "linear-gradient(#90B500, #7c9b00)",
                        color: 'white'
                    }}
                        onClick={CommentDone}
                    >Submit</button>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default NewItem