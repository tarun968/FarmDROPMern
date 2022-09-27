import React from "react";
import './footer.css'
export default function Footer(){
    return (
        <div className="footer">
        <div className="footer-nav">
        <ul>
            <li>
            About
            </li>
            <li>
                Our Markets
            </li>
            <li>
                Contact
            </li>
            <li>
                Login
            </li>
            <li>
                Support
            </li>
            <li>
                Let's Connect
            </li>
        </ul>
        </div>
        <h4>Submit</h4>
        <form>
            <input text="text" label="Submit"/>
            <button type="submit">Submit</button>
        </form>
        <h6>Copyright 2022 FarmDrop</h6>
        </div>
    )
}