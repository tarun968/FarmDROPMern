import arrayContext from "./ProfileContext";
import React from "react";
import { useState } from "react";
export default function OrdersArrayContext ({props}){
    const [Purchases, setPurchases] = useState(
    {
        name:"Tarun",
        surname:'Sinha'
    }
        //     [
    //     1,
    //     2,
    //     3,
    //     4,
    //     5
    // ]
    )
    return (
        <arrayContext.Provider value={Purchases}>
        {props}
        </arrayContext.Provider>
    )
}