import React from "react";
import Menu2 from "../menu2";
import '../modulescontact/contactus.css'
import Footer from "./footer";
export default function Connect() {
    return (
        <>
            <Menu2>
            </Menu2>
            <div className="row m1"
            // style={{ backgroundImage: 'url("../pages/img/FARMDROPCONTACT.jpg")'}}
            >
                <div className="col-md-8 ms-5 w-50 mt-5">
                    <form>
                        <h2 classNameName="text-white" style={{ fontWeight: 'bolder', color: 'white' }}>
                            Contact Us
                        </h2>
                        <h5 classNameName="text-white"
                            style={{ color: 'white' }}
                        >
                            Contact Us
                            Please fill our the form below and a team<br></br> member will get back to you as soon as possible.</h5>
                        <label for="inputEmail4" className="mt-2 text-white form-label">Email</label>
                        <input type="text" className="w-75 form-control" id="inputEmail4" />
                        <label for="input5" className="form-label mt-2  text-white ">Name</label>
                        <input type="text" className="w-75 form-control" id="input5" />
                        <label for="input6" className="form-label text-white mt-2 ">Phone</label>
                        <input type="text" className="w-75 form-control" id="input6" />
                        <label for="exampleFormControlTextarea1 mt-2" className="mt-2 text-white form-label">Message</label>
                        <textarea className="form-control w-75" id="exampleFormControlTextarea1" rows="3"></textarea>
                        <label for="formGroup3" className="mt-2 form-label text-white " style={{ fontWeight: 'bold' }}>Subject</label>
                        <select className="form-select w-75 " id="formGroup3" aria-label="Default select example">
                            <option selected>Select Your Subject</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <label for="exampleFormControlTextarea1" className="mt-2 form-label text-white">Message</label>
                        <textarea className="form-control w-75" id="exampleFormControlTextarea1" rows="3"></textarea>
                        <button type="submit" className="w-75 mt-5 mb-5 btn" style={{ backgroundColor: "#90B501", fontWeight: 'bold', color: 'white' }}>Submit</button>
                    </form>
                </div>
                <div className="col-md-5 mt-5 pt-5"
                style={{fontSize:'20px'}}
                >
                    <ul className="text-white">
                        <li>
                            Bring your local producers together in a shared marketplace where they set prices & keep 95% of their sales fee.
                        </li>
                        <li>
                            Earn income by bolstering your local economy! Market Hub Managers receive a small fee, paid by the customer at checkout, for fulfilling each order.
                        </li>
                        <li>
                            FarmDrop provides the tools & training to bring producers onboard and help their stores thrive.
                        </li>
                    </ul>
                </div>
            </div>
            <Footer>
            </Footer>
        </>
    )
}