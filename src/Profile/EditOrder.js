import React from "react";
import Menu2 from "../menu/menu2";
import Footer from "../pages/footer";
import { useState, useEffect } from "react";
import { OrderStatusUpdate } from "./profileAPIs";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { GetAuserOrder } from "./profileAPIs";
import { isAuthenticated } from "../backendjoin/auth";
import { createContext } from "react";
const OrdersArrayContext = createContext()

export default function EditOrder({ props }) {
    const { user, Token } = isAuthenticated();
    const { orderid } = useParams()
    const [name, setName] = useState(["Cancelled"])
    const navigate = useNavigate()
    const [status, setStatus] = useState("")
    console.log(orderid)

    const handleChange = event => {
        console.log('------->',event.target.value)
        setStatus(event.target.value)
        console.log(status)
    }
    const [OrderDetails, SetOrderDetails] = useState({})

    const Update = event => {

        OrderStatusUpdate(orderid, user._id, Token, { status }).then(
            data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    setStatus("")
                    navigate(`/user/${user._id}/orders`)
                    console.log(data)
                }
            }
        )
    }
    const preload = () => {
        GetAuserOrder(user._id, Token, orderid).then(
            data => {
                SetOrderDetails(data)
            }
        )
        // OrderStatusFetch(user._id, Token).then(
        //     data => {
        //         if (data.error) {
        //             console.log(data.error)
        //         }
        //         else {
        //             setName(data)
        //             console.log(data)
        //         }
        //     }
        // )
    }

    console.log(OrderDetails.products)
    useEffect(() => {
        preload()
    }, [])

    return (
        <>
            <Menu2 />


            <div class="card text-center mt-5 mx-auto w-50">
                <div class="card-header">
                    Your Order
                </div>

                <div class="card-body">
                    <h5 class="card-title">{OrderDetails.status}</h5>
                    <h5 class="card-title">Order ID {OrderDetails._id}</h5>
                    <h5 class="card-title">{OrderDetails.user}</h5>
                </div>
                <select

                    type='button'
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Category"
                    value={status}
                >
                    <option
                    >Select</option>
                    {
                        name && name.map((cate, index) => (
                            <option key={index} value={cate}>
                                {cate}
                            </option>
                        ))
                    }
                </select>
                {
                 OrderDetails.status === ('Delivered' || 'Cancelled') ? 
                 <button
                    type="submit"
                    // onClick={Update}
                    disabled
                    className="mt-5 btn btn-outline-success mb-3"
                >
                    Update The Order
                </button> :
                <button
                    type="submit"
                    onClick={Update}
                    disabled ={OrderDetails.status === 'Cancelled'}
                    className="mt-5 btn btn-outline-success mb-3"
                >
                    Update The Order
                </button> 
                }
                {/* <button
                    type="submit"
                    onClick={Update}
                    className="mt-5 btn btn-outline-success mb-3"
                >
                    Update The Order
                </button> */}
            </div>
            <Footer />
        </>
    )
}

export { OrdersArrayContext }