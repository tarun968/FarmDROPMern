import React from "react";
import Menu2 from "../menu/menu2";
import Footer from "../pages/footer";
import { useState, useEffect } from "react";
import Orders from "./Orders";
import { Link } from "react-router-dom";

import { GetuserDetails } from "./profileAPIs";
import { isAuthenticated } from "../backendjoin/auth";
import { createContext } from "react";
const OrdersArrayContext = createContext()
export default function UserProfile({ props }) {
    const { user, Token } = isAuthenticated();


    const [UserDetails, SetUserDetails] = useState({
        Email: "",
        FDMarket: "",
        Reference: "",
        Phone: "",
        Purchases: []
    })

    const preload = () => {
        GetuserDetails(user._id, Token).then(
            data => {
                console.log(data)
                SetUserDetails(data)
            }
        )
    }

    useEffect(() => {
        preload()
    }, [])
    console.log(UserDetails.Purchases)
    return (
        <>
            <Menu2 />


            <div class="card text-center mt-5 mx-auto w-50">
                <div class="card-header">
                    Your Profile
                </div>
                <OrdersArrayContext.Provider value={UserDetails}>
                    <Orders />
                </OrdersArrayContext.Provider>
                <div class="card-body">
                    <h5 class="card-title">Welcome</h5>
                    <p class="card-text">
                        {UserDetails.Email}
                    </p>
                    {UserDetails.Phone}
                    <p class="card-text">
                    </p>
                    {UserDetails.FDMarket}
                    <p class="card-text">
                    </p>
                    <p class="card-text">
                        {UserDetails.Reference}
                    </p>
                </div>
                <div class="card-footer text-muted">
                    <Link class="btn btn-primary mx-4" to='orders'
                        state={{ state: UserDetails.Purchases }}>
                        Your Orders
                    </Link>
                    <Link class="btn btn-primary mx-4" to='edit-profile'>Edit Profile</Link>
                </div>
            </div>
            <Footer />
        </>
    )
}

export { OrdersArrayContext }