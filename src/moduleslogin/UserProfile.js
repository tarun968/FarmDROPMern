import React, { useEffect, useState } from "react";
import { getProfile } from "./APIs";
import { useParams, Link } from "react-router-dom";
import Menu2 from "../menu/menu2";
import Footer from "../pages/footer";
import { isAuthenticated } from "../backendjoin/auth";
const UserProfile = (

) => {
    const { email } = useParams()
    console.log("news", email)
    const [Profile, setProfile] = useState({
        Email: "",
        FDMarket: "",
        Reference: "",
        CommentsbyUser: [],
        Headline: []
    })

    const { Email, FDMarket, Reference, Headline, CommentsbyUser } = Profile

    const preload = () => {
        getProfile(email).then(
            data => {
                if (data.error) {
                    console.log("", data.error)
                }
                else {
                    console.log(data.message)
                    setProfile(data.message)
                }
            }
        )
    }

    useEffect(() => {
        preload()
    }, [])

    const { user, Token } = isAuthenticated()
    return (
        <div>
            <Menu2 />
            <div class="container">
                <div class="row">
                    <div class="col-7">
                        <div class="mt-5 mb-4 p-1 ms-1"
                            style={{ backgroundColor: "white", width: "90%" }}>
                            <h5 class="card-title mt-4">
                                {Email}
                            </h5>
                            <p class="mt-4 card-text">{FDMarket}</p>
                            <div class="card-body mt-4">
                                <p class="card-text">
                                </p>
                            </div>
                            <div class="card-body mt-4">
                                <p class="card-text">
                                    {
                                        Reference
                                    }
                                </p>
                            </div>

                            <h5 class="card-title mt-4">
                                News
                            </h5>
                            {
                                Headline.map((index, element) => {
                                    return (
                                        <div class="card-body mt-4">

                                            {
                                                index
                                            }
                                            <p class="card-text">
                                            </p>
                                        </div>
                                    )
                                })
                            }


                        </div>
                    </div>


                    <div class="col-5 mt-5">
                        <div className="center-col">
                            <ul>
                                <div class="card mt-3">
                                    <div class="card-body">
                                        <p class="card-text">
                                        </p>

                                        {
                                            user.Email === email && (
                                                <Link className="btn w-100" style={{
                                                    background: "linear-gradient(#90B500, #7c9b00)",
                                                    color: 'white'
                                                }}
                                                >
                                                    Update Your Profile
                                                </Link>
                                            )}
                                    </div>
                                </div>
                                <h5 class="card-title mt-4">
                                    CommentsDone
                                </h5>
                                {
                                    CommentsbyUser.map((index, element) => {
                                        return (
                                            <div class="card-body mt-4">

                                                {
                                                    index
                                                }
                                                <p class="card-text">
                                                </p>
                                            </div>
                                        )
                                    })
                                }
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default UserProfile