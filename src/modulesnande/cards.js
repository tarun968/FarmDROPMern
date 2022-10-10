import React from "react";
// import "./cards.css";
import 'bootstrap/dist/css/bootstrap.css';
export default function Cards(
    {
    Title="FarmDrop featured on ABC7 News in Bangor",
    Description="Online farmers market connects farmers and"+
     "consumers By Brooke Reilly January 31, 2022 NEWPORT — Startup company,"+ 
     "FarmDrop, originated in Blue Hill in 2011. The online farmers market",
    Date="31 Jan 2022",
    comments=""}
) {
    return (
        <div className="card">
            <div className="card-image">
            <img src={
                        require('../pages/img/ssp.png')}
                        style={{ width: "100%", height: "100%" }}
                        />
            </div>
            <div className="card-box">
                <h2>
                {Title}
                </h2>
                <p>
                    {Description.substring(0,180)}....
                </p>
            </div>
            <div className="card-footer">
            <p>
               <span>
                {Date}
               </span> 
            </p>
            </div>
        </div>
    )
}