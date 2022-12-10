import React from "react";
import Menu2 from "../menu/menu2";
import arrayContext from "./ProfileContext";
import { useContext } from "react";
import { OrdersArrayContext } from "./userProfile"
import Footer from "../pages/footer";
export default function Orders() {
    const UserDetails = useContext(OrdersArrayContext)

    return (
        <>
            <Menu2 />
            {/* <OrdersArrayContext.Consumer>
            </OrdersArrayContext.Consumer> */}
            <Footer />
        </>
    )
}