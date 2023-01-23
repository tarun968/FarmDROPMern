import { Navigate } from "react-router-dom";
import React from "react";
import { Route } from "react-router-dom";
import { useState } from "react";
import { removeItemfromCart } from "./carthelper";
import { addItemtoCart } from "./carthelper";
import ImageCardContainer from "./imgcontainer";
export default function Cards({ Props,
    addtoCart = true, removeFromCart = false,
    SetReload = f => f, Reload = undefined, Count = undefined, showCount = false }) {
    // console.log("image", Props.ImageProduct)
    console.log('Props of cards',Props)
    const [Redirect, setRedirect] = useState(false)

    // const [removeFromCart, setremoveFromCart] = useState(true)
    const addCart = () => {
        addItemtoCart(Props, () => setRedirect(true))
    }
    const getRedirect = (Redirect) => {
        // console.log("redirec", Redirect)
        if (Redirect) {
            return (
                <Navigate to="/Cart" />
                // <Route path="/" element={<Navigate to="/cart" />}></Route>
            )
        }
    }

    const showaddtocart = (addtoCart,Count) => {
        console.log("add to cart,",addtoCart,Count)
        return (addtoCart && (
            <button className="btn" 
            disabled = {Count === 0}
            style={{
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
                <button className="btn" style={{
                    background: "red",
                    color: 'white'
                }}
                    onClick={() => {
                        removeItemfromCart(Props._id);
                        SetReload(!Reload)
                    }}>
                    Remove
                </button>
            )
        )
    }


    return (
        <div className="card my-2 mx-auto"
        >
            <div className="card-body"
                style={{ border: '0 0 0 0' }}
            >
                {getRedirect(Redirect)}


                {(Props === undefined) &&
                    (
                        <div class="card w-100 text-center mx-auto">
                            <div class="card-header">
                                Empty Cart !
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Your Cart Don't Have Any Products Till Now</h5>
                                <p class="card-text">Click Below to Add Products to Your Cart.</p>
                            </div>
                        </div>
                    )
                }


                {(Props !== undefined) && (
                    <>
                        <ImageCardContainer props={Props} />
                        <span className="card-title fw-bolder" style={{
                            fontSize: '90%'
                        }}>{Props.NameofProduct}
                        </span>
                        <br></br>

                        <span className="card-title fw-bolder" style={{
                            fontSize: '87%'
                        }}>Available Quantity {Props.Quantity}
                        </span><br></br>

                        <span className="card-title text-dark fw-bolder" style={{
                            fontSize: '87%'
                        }}>Your Count{Props.Count}
                        </span><br></br>

                        <span className="card-title fw-bolder" style={{
                            fontSize: '87%'
                        }}>{Props.Price}
                        </span><br></br>

                        <span className="card-title fw-bolder" style={{
                            fontSize: '87%', display: showCount ? "" : "none"
                        }}>Total Cost  Rs.{Props.Price * Props.Count}
                        </span><br></br>

                        <p
                            style={{ fontSize: '95%' }}
                            className="fw-bold card-text">
                            {/* {Props.Desc.substring(0, 30)}${Props.Cost} */}
                        </p>
                        <div>
                            {showaddtocart(addtoCart,Props.Quantity)}
                        </div>
                        <div>
                            {
                                removefromcart(removeFromCart)
                            }
                        </div>
                    </>
                )

                }

            </div>
        </div>
    )
}