import React from "react";
import { useState } from "react";
import { isAuthenticated } from "../backendjoin/auth";
import { cartEmpty, CartLoader } from "./carthelper";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { createOrder } from "./cartAPI";

export default function PaymentUser({
    Props,
    SetReload = f => f,
    Reload = undefined
}) {
    const { user, Token } = isAuthenticated()
    const [CartPros, setCartPros] = useState({
        loading: false,
        sucess: false,
        error: "",
        address: ""
    })



    const initPayment = (data, user, Token) => {
        console.log(data, Token)
        const options = {
            key: "rzp_test_mAeSZ0xKdkylm1",
            amount: data.amount,
            currency: data.currency,
            // name: book.name,
            description: "Test Transaction",
            // image: book.img,
            order_id: data.id,
            handler: async (response) => {
                try {
                    console.log("res", response)
                    const orderData = {
                        products: Props,
                        // transaction_id: response.id,
                        // amount: response.transaction.amount,
                        // address: isAuthenticated().user.address,
                    };
                    const verifyUrl = `http://localhost:5000/verify/${user}`;
                    const { data } = await axios.post(verifyUrl,
                        response
                        ,
                        {
                            headers: { Authorization: `Bearer ${Token}` }
                        });
                    console.log(data);
                    // alert(response.razorpay_payment_id)
                    alert("payment sucessfully")
                } catch (error) {
                    console.log(error);
                }
                // delete Props['ImageProduct']
                createOrder(user, Token, Props).then(
                    dataX => {
                        console.log("data",dataX)
                        if (dataX.error) {
                            console.log(dataX.error)
                        }
                        else {
                            console.log(dataX)
                        }
                    }
                )
            },
            theme: {
                color: "#3399cc",
            },
        };
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    };



    const handlePayment = async () => {
        try {
            console.log(`${user._id}`)
            const orderUrl = `http://localhost:5000/payment/${user._id}/product`;
            const { data } = await axios.post(orderUrl,
                {
                    amount: getFinalPrice(),
                },
                {
                    headers: { Authorization: `Bearer ${Token}` }
                }
            );

            console.log(data);
            initPayment(data.data, user._id, Token);
        } catch (error) {
            console.log(error);
        }
    };
    // console.log("",isAuthenticated())
    // const { user, Token } = isAuthenticated();
    const ShowButton = () => {
        return isAuthenticated() ? (
            <button className="btn" style={{
                background: "linear-gradient(#90B500, #7c9b00)",
                color: 'white'
            }}
                onClick={handlePayment}
            >Pay With Razorpay</button>
        ) :
            <Link to="/Login">
                <button className="btn" style={{
                    background: "linear-gradient(#90B500, #7c9b00)",
                    color: 'white'
                }}
                >Sign In</button>

            </Link>
    }
    const getFinalPrice = () => {
        let Amount = 0;
        console.log("props", Props)
        Props.map((element, index) => {
            console.log("element", element)
            Amount = Amount + (element.Price) * (element.Count)
        })
        return Amount
    }
    useEffect(() => {
        setCartPros(CartLoader())
    }, [Reload])
    return (
        <>
            <div className="card my-2 mx-2"
            >
                <div className="card-body"
                    style={{ border: '0 0 0 0', display: 'flex', justifyContent: 'space-between' }}
                >
                    <button className="btn" style={{
                        background: "linear-gradient(#90B500, #7c9b00)",
                        color: 'white'
                    }}
                    >Total Payment {getFinalPrice()}</button>
                    {ShowButton()}
                </div>
            </div>
        </>
    )
}