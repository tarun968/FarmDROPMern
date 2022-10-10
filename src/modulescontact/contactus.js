import React from "react";
import './contactus.css'
export default function Contact() {
    return (
        <>
            <div className="row m1" 
            // style={{ backgroundImage: 'url("../pages/img/FARMDROPCONTACT.jpg")'}}
            >
                <div className="col-md-6 ms-5 mt-5">
                    <form>
                    <h2 classNameName="text-white" style={{fontWeight:'bolder',color:'white'}}>
                        Contact Us
                    </h2>
                        <h5 classNameName="text-white"
                        style={{color:'white'}}
                        >
                            Contact Us
                            Please fill our the form below and a team member will get back to you as soon as possible.</h5>
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
                        <button type="submit" className="w-25 mt-5 mb-5 btn" style={{ backgroundColor: "#90B501", fontWeight: 'bold',color:'white' }}>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}