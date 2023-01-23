import React from "react";
import { NewsComment } from "./apiNews";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
        Comments: []
    })
    const { user, Token } = isAuthenticated()

    console.log(Comment)
    const { commentdesc, commentedby, Dateofcomment, formData } = Comment
    // console.log("comment desc",commentdesc)

    


    const [base64String, setBaseString] = useState("");
    console.log(News)
    const preload = () => {
        NewsGet(news).then(
            data => {
                if (data.error) {
                    console.log("")
                }
                else {
                    console.log("", data.Message[0].Comments)
                    SetNews(data.Message[0])
                    News.Comments = data.Message[0].Comments
                    // setValues({...values,categories:data,formData: new FormData()})
                    setBaseString(btoa(
                        String.fromCharCode(...new Uint8Array(data.Message[0].ImageNews.data.data))
                    ))
                    console.log(News)
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
            <div class="container">
                <div class="row">
                    <div class="col-9 mx-auto">
                        <div class="mt-5 mb-4 p-1 ms-1"
                            style={{ backgroundColor: "white", width: "90%" }}>
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
                                    Date Of Adding {
                                        News.DateNews.substring(0, 10)
                                    }
                                </p>
                            </div>
                        </div>


                        {/* </div> */}



                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default NewItem