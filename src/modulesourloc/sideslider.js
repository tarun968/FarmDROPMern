import './sideslider.css'
import { Link } from 'react-router-dom';
import React from "react";
import { useEffect } from 'react';
import { useState } from 'react';

import { ListGroupItem } from 'react-bootstrap';
import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';
export default function Sideslider() {
    const [bgcolor, setbgcolor] = useState("#9bbc1c")
    const [fcolor, setfcolor] = useState('white');
    const [locations, setlocations] = useState([]);
    const data = [
        {
            id: 1,
            title: "Blue Hill",
            Description: " Blue hill Contrary to popular belief, Lorem Ipsum is not" +
                "simply random text. It has roots in a piece of classical Latin" +
                " literature from 45 BC, making it over 2000 years old. Richard McClintock,"
        },
        {
            id: 2,
            title: "Cape Elizabeth",
            Description: " cape elizabeth Contrary to popular belief, Lorem Ipsum is not" +
                "simply random text. It has roots in a piece of classical Latin" +
                " literature from 45 BC, making it over 2000 years old. Richard McClintock,"

        },
        {
            id: 3,
            title: "Deer Isle",
            Description: "Deer isle Contrary to popular belief, Lorem Ipsum is not" +
                "simply random text. It has roots in a piece of classical Latin" +
                " literature from 45 BC, making it over 2000 years old. Richard McClintock,"

        },
        {
            id: 4,
            title: "Howland",
            Description: "Howland Contrary to popular belief, Lorem Ipsum is not" +
                "simply random text. It has roots in a piece of classical Latin" +
                " literature from 45 BC, making it over 2000 years old. Richard McClintock,"

        },
        {
            id: 5,
            title: "Lisbon",
            Description: "Lisbon Contrary to popular belief, Lorem Ipsum is not" +
                "simply random text. It has roots in a piece of classical Latin" +
                " literature from 45 BC, making it over 2000 years old. Richard McClintock,"

        }
    ]
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
                <p>
                    <p>
                        {selecteddesc}
                    </p>
                </p>
            </div>
        </div>
    )
}