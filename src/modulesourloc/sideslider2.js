import './sideslider.css'
import { Link } from 'react-router-dom';
import React from "react";
import { useEffect } from 'react';
import { AllShops } from './ourlocAPI';
import { useState } from 'react';
import './sideslider2.css'
export default function Sideslider2() {
    const [bgcolor, setbgcolor] = useState("#9bbc1c")
    const [fcolor, setfcolor] = useState('white');
    const [shops, setshops] = useState([])
    const preload = () => {
        AllShops().then(data => {
            console.log(data)
            if (data.error) {
                console.log(data.error)
            }
            else {
                // console.log(data.error)
                setshops(data.message)
            }
        })
    }
    useEffect(() => {
        console.log(shops)
        preload();
    }, []);
    // var selected;
    const [selected, setselected] = useState(1)
    const [selecteddesc, setselecteddesc] = useState("")
    const [selected_id, setselectedid] = useState("")
    const [selecteduser, setselecteduser] = useState({
        ImagesShop:[]
    })
    const getlocation_id = (location_ID) => {
        console.log(location_ID)
        setselected(location_ID);
        console.log(selected)
        const desc = shops.find(l => l.EmailShop === location_ID)
        console.log("data desc", desc)
        setselecteduser(desc)
        console.log('selecteduser',selecteduser)
        setselecteddesc(desc.EmailShop);
        setselectedid(desc.selected_id);
    }

    return (
        <>
            <div class="gx-0 row align-items-md-stretch mx-auto mt-5"
                style={{ width: '90%' }}>
                <div class="col-md-4 smallbox2">
                    <div class="h-100 text-white" style={{ height: '80vh', backgroundColor: '#9bbc1c' }}>
                        {
                            shops.map((location, index) => {
                                return (
                                    <li
                                        className='pt-3 pb-2 ps-3'
                                        style={{
                                            // marginLeft:'12px',
                                            backgroundColor: selected === location.EmailShop ? "#D7DD3B" :
                                                "#9bbc1c"
                                            ,
                                            color: selected === location.EmailShop ? "white" :
                                                "black"
                                        }}
                                        onClick={() => {
                                            getlocation_id(location.EmailShop)
                                        }} key={location.EmailShop}>
                                        <Link
                                            className="nav-link">
                                            {location.NameofShop}.
                                            {/* {location.title} */}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </div>
                </div>
                <div class="col-md-8"
                    style={{ backgroundColor: '#D7DD3B', height: '80vh', display: 'inline-block' }}
                >
                    <div class="px-2 row mx-auto align-items-start"
                        style={{ width: '95%' }}>
                        <div class="row mx-auto mt-3">
                            {
                                selecteduser.ImagesShop.map((element, index) => {
                                    return (
                                        <img
                                            src={`http://localhost:5000/Image/${selecteduser._id}/photo/${element._id}/`}
                                            style={{
                                                width: 105
                                            }}
                                        />
                                    )
                                })
                            }
                        </div>

                        <div class="row mx-auto mt-5">
                            <p>
                                {selecteddesc}
                            </p>
                            <p>
                                <span
                                    style={{
                                        fontWeight: 'bold'
                                    }}>
                                    Contact Information:
                                </span>
                                {selecteddesc}
                            </p>
                        </div>
                        {/* <div class="d-grid mt-5 gap-2 d-sm-flex justify-content-sm-center"> */}
                        <div className='row'>
                            <div className='col-md-2'>
                                <button type="button" class="btn btn-lg px-4 gap-3"
                                    style={{
                                        backgroundColor: 'rgb(144, 181, 1)',
                                        color: '#D7DD3B',
                                        border: '2px solid #D7DD3B'
                                    }}>
                                    SHOP
                                </button>
                            </div>
                            <div className='col'>
                                <button type="button" class="btn btn-lg px-4 gap-3"
                                    style={{
                                        backgroundColor: 'rgb(144, 181, 1)',
                                        color: '#D7DD3B',
                                        border: '2px solid #D7DD3B'
                                    }}>
                                    MARKET INFO
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* <div class="h-100 p-5" style={{ height: '80vh' }}>
                        {selecteddesc}
                    </div> */}
                </div>
            </div>
        </>
    )
}