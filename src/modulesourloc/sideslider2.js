import './sideslider.css'
import { Link } from 'react-router-dom';
import React from "react";
import { useEffect } from 'react';
import { useState } from 'react';
import './sideslider2.css'
export default function Sideslider2() {
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
        <>
            <div class="gx-0 row align-items-md-stretch mx-auto mt-5"
                style={{ width: '90%' }}>
                <div class="col-md-4 smallbox2">
                    <div class="h-100 text-white" style={{ height: '80vh', backgroundColor: '#9bbc1c' }}>
                        {
                            locations.map((location, index) => {
                                return (
                                    <li
                                        className='pt-3 pb-2 ps-3'
                                        style={{
                                            // marginLeft:'12px',
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
                </div>
                <div class="col-md-8"
                    style={{ backgroundColor: '#D7DD3B', height: '80vh' }}
                >
                    <div class="h-100 p-5" style={{ height: '80vh' }}>
                        {selecteddesc}
                    </div>
                </div>
            </div>
        </>
    )
}