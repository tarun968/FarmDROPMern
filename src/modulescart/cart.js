import { Navigate } from "react-router-dom";
import React from "react";
import { Route } from "react-router-dom";
import { useState } from "react";
// import { Navigate } from "react-router-dom";
import { addItemtoCart } from "./carthelper";
import ImageCardContainer from "./imgcontainer";
export default function Cards({ Props,
addtoCart=true,removeFromCart=false }) {
    console.log("image",Props.ImageProduct)
    const [Redirect, setRedirect] = useState(false)
    // const [removeFromCart, setremoveFromCart] = useState(true)
    const addCart = () => {
        addItemtoCart(Props,()=>setRedirect(true))
    }
    const getRedirect = (Redirect) => {
        console.log("redirec",Redirect)
        if (Redirect) {
            return (
                <Navigate to = "/Cart"/>
                // <Route path="/" element={<Navigate to="/cart" />}></Route>
            )
        }
    }
    const showaddtocart = (addtoCart) => {
        return (addtoCart && (
            <button className="btn" style={{
                background: "linear-gradient(#90B500, #7c9b00)",
                color: 'white'
            }}
            onClick={addCart}
            >Add</button>
        )
        )
    }
    const removefromcart = (removeFromCart) => {
        return (
            removeFromCart && (
                <button className="btn mt-2" style={{
                    background: "red",
                    color: 'white'
                }}>Remove</button>
            )
        )
    }


    return (
        <div className="card my-2 mx-2"
        >
            <div className="card-body"
                style={{ border: '0 0 0 0' }}
            >
        {getRedirect(Redirect)}
        
                <ImageCardContainer props={Props} />
                <span className="card-title" style={{
                    fontSize: '90%'
                }}>{Props.NameofProduct}
                {/* {Props.ImageProduct._id} */}
                </span>
                <br></br>
                <span className="card-title" style={{
                    fontSize: '87%'
                }}>{Props.Quantity}</span>
                <p
                    style={{ fontSize: '95%' }}
                    className="fw-bold card-text">
                    {/* {Props.Desc.substring(0, 30)}${Props.Cost} */}
                </p>
                <div>
                    {showaddtocart(addtoCart)}
                </div>
                <div>
                    {
                        removefromcart(removeFromCart)
                    }
                </div>
            </div>
        </div>
    )
}