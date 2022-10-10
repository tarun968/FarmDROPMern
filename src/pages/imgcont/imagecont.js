import React from "react";
export default function ImageContainer(){
    return (
        <div class="row align-items-md-stretch">
        <div class="col-md-12 my-5 w-100">
            <div class="h-100 text-dark bg-white rounded-3">
                <div class="row align-items-md-stretch">
                    <img src={require("../img/images.jfif")} className='col-md-3'
                        style={{ height: '230px', }}
                    />
                    <img src={require("../img/bundle-1.jpg")} className='col-md-3'
                        style={{ height: '230px', }}
                    />
                    <img src={require("../img/bundle-2.jpg")} className='col-md-3'
                        style={{ height: '230px', }}
                    />
                    <img src={require("../img/Farmdrop-Header.jpg")} className='col-md-3'
                        style={{ height: '230px', }}
                    />
                </div>
            </div>
        </div>
    </div>
    )
}