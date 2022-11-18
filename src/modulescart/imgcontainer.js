import React from "react";

export default function ImageCardContainer({props}) {
    console.log('image cont props',props)
    return (
        <>
            <img src={`http://localhost:5000/Photo/${props._id}`}
            // {/* }
            className="card-img-top" alt="..." />
        </>
    )
}