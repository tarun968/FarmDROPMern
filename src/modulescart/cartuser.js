import { Navigate } from "react-router-dom";
import React from "react";
import { Route } from "react-router-dom";
import { useState } from "react";
import Cards from "./cart";
import { CartLoader } from "./carthelper";
import PaymentUser from "./payement";
import { useEffect } from "react";
import Menu2 from "../menu/menu2";
import { ProductsGet } from "../adminpanel/apiproducts";
import { isAuthenticated } from "../backendjoin/auth";
import Footer from "../pages/footer";
export default function CartsUser({ Props,
    addtoCart = true, removeFromCart = false }) {
    const [CartPros, setCartPros] = useState([])
    const { Token } = isAuthenticated()
    const [Reload, SetReload] = useState(false)
    const NewCart = []

    const [Products, setProducts] = useState([])
    const preload = () => {
        ProductsGet(Token).then(data => {
            if (data.error) {
                console.log(data.error)
            }
            else {
                setProducts(data.message)
            }
        })
    }
    useEffect(() => {
        preload()

    }, [])
    Products.map((index, element) => {
        console.log("index", index)
        CartPros.map((cartindex, cartelement) => {
            if (cartindex.NameofProduct === index.NameofProduct) {
                console.log("bb3")
                if (cartindex.Count < index.Quantity) {
                    console.log(index.Quantity)
                    cartindex.Quantity = index.Quantity
                    var new_const = localStorage.getItem("cart")
                    console.log(JSON.parse(new_const))
                    var x = JSON.parse(new_const)
                    x[cartelement].Quantity = index.Quantity
                    console.log((x))
                    localStorage.setItem("cart",JSON.stringify(x))
                    NewCart.push(cartindex)
                }
                else {
                    console.log("bb4")
                    cartindex.Quantity = index.Quantity
                    if (cartindex.Quantity >= cartindex.Count) {
                        NewCart.push(cartindex)
                    }
                }
            }
        })
    })


    console.log("cart new", CartPros, NewCart)



    useEffect(() => {
        setCartPros(CartLoader())
    }, [Reload])

    return (
        <>
            <Menu2 />
            {/* <div className="card my-2 mx-2"
            > */}
            <div className="card-body"
                style={{ border: '0 0 0 0', display: 'flex' }}
            >

                {(NewCart.length === 0) &&
                    <Cards
                    />
                }

                {(NewCart.length > 0) && (
                    NewCart.map((content, index) => {
                        console.log('Cart pros', CartPros.length);
                        console.log(content)
                        return (
                            <div className="col"
                                style={{ width: '35%' }}
                            >
                                <Cards Props={content}
                                    removeFromCart={true}
                                    addtoCart={false}
                                    Reload={Reload}
                                    SetReload={SetReload}
                                    Count={content.Count}
                                    showCount={true}
                                />
                            </div>
                        )
                    })
                )}

            </div>


            <PaymentUser
                Props={NewCart}
                SetReload={SetReload}
                Reload={Reload}
            />
<Footer/>
        </>
    )
}