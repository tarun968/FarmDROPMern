import './sideslider.css'
import { Link } from 'react-router-dom';
import React from "react";
import { useEffect } from 'react';
import { useState } from 'react';

export default function Sideslider() {
    const [bgcolor, setbgcolor] = useState("#9bbc1c")
    const [fcolor, setfcolor] = useState('white');
    const [locations, setlocations] = useState([]);
    useEffect(() => {
        setlocations(data)
    }, []);
    // var selected;
    const [selected, setselected] = useState(1)
    const [selecteddesc, setselecteddesc] = useState("")
    const getlocation_id = (location_ID) => {
        console.log(location_ID)
        setselected(parseInt(location_ID));
        console.log(selected)
        const desc = locations.find(l => l.id === location_ID)
        setselecteddesc(desc.Description);
    }

    return (
        <div className="box">
            <div className="smallbox">
                {
                    locations.map((location, index) => {
                        return (
                            <li style={{
                                backgroundColor: selected === location.id ? "#D7DD3B" :
                                    "#9bbc1c"
                                ,
                                color: selected === location.id ? "white" :
                                    "black"
                            }}
                                onClick={() => {
                                    getlocation_id(location.id)
                                }} key={location.id}>
                                <Link
                                    className="nav-link">
                                    {location.id}.
                                    {location.title}
                                </Link>
                            </li>
                        )
                    })
                }
            </div>
            <div className="bigbox">
                {/* <p>
                    <p>
                        {selecteddesc}
                    </p>
                </p> */}
            </div>
        </div>
    )
}