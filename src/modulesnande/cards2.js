import React from "react";
// import "./cards.css";
import 'bootstrap/dist/css/bootstrap.css';
export default function Cards2(
    {
        Title = "FarmDrop featured on ABC7 News in Bangor",
        Description = "Online farmers market connects farmers and" +
        "consumers By Brooke Reilly January 31, 2022 NEWPORT — Startup company," +
        "FarmDrop, originated in Blue Hill in 2011. The online farmers market",
        Date = "31 Jan 2022",
        comments = "No comments" }
) {
    return (
        <>
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <img className="card-img-top" src={
                        require('../pages/img/ssp.png')}
                 />
                <div className="card-body">
                <h5>
                    {Title}
                </h5>
                  <p className="card-text" style={{ color: '#808285'}}>
                    {Description}
                  <br>
                  </br>
                    <a style= {{color:'#90B501'}} >
                    Read More
                  </a>
                  </p>
                  <div style= {{borderTop:'0.5px solid grey', paddingTop:'1px'}} className="d-flex justify-content-between align-items-center">
                    <small className="text-muted" >{Date}</small>
                    <small className="text-muted" >{comments}</small>
                  </div>
                </div>
              </div>
            </div>
        </>
    )
}