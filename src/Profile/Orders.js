import React from "react";
import Menu2 from "../menu/menu2";
import { GetuserOrder } from "./profileAPIs";
import { isAuthenticated } from "../backendjoin/auth";
import Footer from "../pages/footer";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function Orders() {
    const { user, Token } = isAuthenticated();
    const {User} = useParams()
    const [Orders, SetOrders] = useState([])
    const preload = () => {
        GetuserOrder(User, Token).then(
            data => {
                SetOrders(data)
            }
        )
    }

    useEffect(() => {
        preload()
    }, [])
    return (
        <>
            <Menu2 />
            <div className="row row-cols-md-2 col-md-8 gx-0 mx-auto">
            <h1 class="ms-5 mt-5">
                Orders
            </h1>
                <div class="w-75 ms-5 mt-5"
                    style={{ height: "fit-content" }}>
                    <ul class="list-group list-group-flush my-2">
                        {Orders.map((index, element) => {
                            return (
                                <li className="list-group-item nav-item">
                                    <Link className="nav-link" style={{ color: "Black" }} aria-current="page" to={`order/${index._id}/`}>
                                        Order ID:{index._id}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    )
}