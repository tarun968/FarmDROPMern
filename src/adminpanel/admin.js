import React from "react";
import Menu2 from "../menu/menu2";
import { Link } from "react-router-dom";
import Footer from "../pages/footer";
import { isAuthenticated } from "../backendjoin/auth";
import { OrdersToAdmin, UsersToAdmin } from "./apiorders";
import { useState, useEffect } from "react";
export default function AdminPanel() {
    const { user, Token } = isAuthenticated()
    const [Orders, setOrders] = useState([])
    const [Users, setUsers] = useState([])
    const preload = () => {
        UsersToAdmin(user, Token).then(
            data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    setUsers(data)
                }
            }
        )

        OrdersToAdmin(user, Token).then(
            data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    setOrders(data)
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
            <div className="row mt-5">
                <div className="row row-cols-md-2 col-md-3 gx-0">
                    <div class="w-75 ms-5 mt-5"
                        style={{ height: "fit-content" }}>

                        <ul class="list-group list-group-flush my-2">
                            <li className="list-group-item nav-item">
                                <Link className="nav-link" style={{ color: "Black" }} aria-current="page" to="/Adding-news">Adding news</Link>
                            </li>
                            <li className="list-group-item nav-item">
                                <Link className="nav-link" style={{ color: "Black" }} to="/Updating-News">Updating News</Link>
                            </li>
                            <li className="list-group-item nav-item">
                                <Link className="nav-link" style={{ color: "Black" }} aria-current="page" to="/Deleting-News">Deleting News</Link>
                            </li>
                        </ul>
                        <ul class="list-group list-group-flush my-2">
                            <li className="list-group-item nav-item">
                                <Link className="nav-link" to="/Adding-Products">Adding Products</Link>
                            </li>
                            <li className="list-group-item nav-item">
                                <Link className="nav-link" style={{ color: "Black" }} aria-current="page" to="/Updating-Products">Updating Products</Link>
                            </li>
                            <li className="list-group-item nav-item">
                                <Link className="nav-link" to="/Deleting-Products">Deleting Products</Link>
                            </li>
                        </ul>

                        <ul class="list-group list-group-flush my-2">
                            <li className="list-group-item nav-item">
                                <Link className="nav-link" to="/Adding-Locations">Adding Locations</Link>
                            </li>
                            <li className="list-group-item nav-item">
                                <Link className="nav-link" style={{ color: "Black" }} aria-current="page" to="/Updating-Locations">Updating Locations</Link>
                            </li>
                            <li className="list-group-item nav-item">
                                <Link className="nav-link" to="/Deleting-Locations">Deleting Locations</Link>
                            </li>
                        </ul>
                    </div>
                </div>



                <div className="row row-cols-md-2 col-md-9 gx-0">
                    <div class="w-75 ms-5 mt-5"
                        style={{ height: "fit-content" }}>
                        <ul class="list-group list-group-flush my-2">
                            {Orders.map((Order, element) => {
                                return (
                                    <li className="list-group-item nav-item">
                                        <Link className="nav-link" style={{ color: "Black" }} aria-current="page" to={`order/${Order._id}/`}>
                                            Order ID:{Order._id}
                                        </Link>
                                        {
                                            Users.map((index, element) => {
                                                console.log("", index)
                                                return (index._id === Order.user) && (
                                                    <h3 className="">{index.Email}</h3>
                                                )
                                            })
                                        }
                                    </li>
                                )

                                {/* {
                  categories.map((index,element) => {
                    console.log("",index)
                    return (index._id === product.category) &&(
                      <h3 className="text-light text-left">{index.name}</h3>
                    )
                  })
                } */}
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}