import { Navigate } from "react-router-dom";
import React from "react";
import { Route } from "react-router-dom";
import { useState } from "react";
import Cards from "./cart";
import { CartLoader } from "./carthelper";
import { addItemtoCart } from "./carthelper";
import ImageCardContainer from "./imgcontainer";
import { useEffect } from "react";
import Menu2 from "../menu/menu2";
export default function CartsUser({ Props,
    addtoCart = true, removeFromCart = false }) {
    // console.log("image", Props.ImageProduct)
    const [CartPros, setCartPros] = useState([])
    const [Redirect, setRedirect] = useState(false)
    useEffect(() => {
        setCartPros(CartLoader())
    })
    // const [removeFromCart, setremoveFromCart] = useState(true)


    return (
        <>
        <Menu2/>
        <div className="card my-2 mx-2"
        >
            <div className="card-body"
                style={{ border: '0 0 0 0' }}
            >
                {(
                    CartPros.map((content, index) => {
                        {/* console.log('->', content) */ }
                        return (
                            <div className="col"
                                style={{ width: '35%' }}
                            >
                                <Cards Props={content} 
                                    removeFromCart={true}
                                    addtoCart={false}
                                />
                            </div>
                        )
                    })
                )}
            </div>
        </div>
        </>
    )
}