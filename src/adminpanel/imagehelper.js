import React from "react";
// import './del.css'
export default function ImageProductContainer({ product }) {
    return (
        <>
            <img src={`http://localhost:5000/Photo/${product._id}`
            }
            />
        </>
    )
}