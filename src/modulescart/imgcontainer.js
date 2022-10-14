import React from "react";

export default function ImageCardContainer(props) {
    return (
        <>
            <img src={props.image} className="card-img-top" alt="..." />
        </>
    )
}