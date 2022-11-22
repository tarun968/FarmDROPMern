import React from "react";
// import "./cards.css";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
export default function Cards2(
  {
    Title = "FarmDrop featured on ABC7 News in Bangor",
    Description = "Online farmers market connects farmers and" +
    "consumers By Brooke Reilly January 31, 2022 NEWPORT — Startup company," +
    "FarmDrop, originated in Blue Hill in 2011. The online farmers market",
    Date = "31 Jan 2022",
    Id="",
    base64String = "",
    comments = 0 }
) {
  const changeText = (e) => {
    e.target.style.color = "#90B501"
    e.target.style.borderBottom = "3px solid #90B501";
  }
  const changetext2 = e => {
    e.target.style.color = "#808285";
    e.target.style.borderBottom = "None"
  }
  return (
    <>
      <div className="col-md-4">
        <div className="card mb-4 box-shadow">

          <img src={`data:image/jpeg;base64,${base64String}`}
            style={{ height: '320px' }}
          />

          <div className="card-body">
            <h5>
              {Title}
            </h5>
            <p className="card-text" style={{ color: '#808285' }}>
              {Description.substring(0, 120)}
              <br>
              </br>
              <a style={{ color: '#90B501' }} >
                <Link className="nav-link" 
                style={{ color: "#808285" }} 
                onMouseOver={changeText} 
                onMouseLeave={changetext2} aria-current="page" to={`/News/${Id}`}>
                  Read More
                </Link>
              </a>
            </p>
            <div style={{ borderTop: '0.5px solid grey', paddingTop: '1px' }} className="d-flex justify-content-between align-items-center">
              <small className="text-muted" >{Date.substring(0, 10)}</small>
              <small className="text-muted" >{comments} Comments</small>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}