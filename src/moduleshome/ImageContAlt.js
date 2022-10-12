import React from "react";

const ImageContainer = (props) => {
    return (
        <>
            <div class="row align-items-md-stretch">
                <img src=
                    {props.image}
                />
            </div>
        </>
    )
}

export default ImageContainer