import React from "react";
import '../imgcont/imagecont.css'
export default function ImageContainer(){
    return (
        <div className="img-con">
        <img src={
            require('../img/Farmdrop-1.jpg')}
                        />
        <img src={require('../img/Farmdrop-1.jpg')}
                        />
        <img src={require('../img/Farmdrop-1.jpg')}
                        />
        <img src={require('../img/Farmdrop-1.jpg')}
                        />
        </div>
    )
}