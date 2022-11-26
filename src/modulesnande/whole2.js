import React from "react";
import { useState, useEffect } from "react";
import Cards2 from "./cards2";
import { getNews } from "../adminpanel/newsapi";
export default function Whole2() {
    console.log("")
    const [AllNews, setAllNews] = useState([])
    const preload = () => {
        getNews().then(data => {
            if (data.error) {
                console.log("data.error", data.error)
            }
            else {
                setAllNews(data.message)
            }
        })
    }

    useEffect(() => {
        preload()
    }, [])

    console.log("", AllNews)
    return (<>
        <div className="album py-5 bg-light">
            <div className="container">
                <div className="row">
                    {
                        AllNews.map((index, element) => {
                            console.log(index.Comments.length)
                            const base64String = btoa(
                                String.fromCharCode(...new Uint8Array(index.ImageNews.data.data))
                            )
                            return (
                                <Cards2
                                    Title={index.Headline}
                                    Description={index.News}
                                    Date={index.DateNews}
                                    Id={index._id}
                                    comments={index.Comments.length}
                                    base64String={base64String}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </>
    )
}