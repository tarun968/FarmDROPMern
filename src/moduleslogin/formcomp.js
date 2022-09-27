import React from "react";
import './formcomp.css';
export default function Cards() {
    return (
        <div className="formbox">
            <div className="logform">
                <h2>Login</h2>
                <form>

                    <label for="uname">Username Or Email </label>
                    <input id="uname" type={'text'} required></input>
                    <br></br>

                    <label for="pswd">Password</label>
                    <br></br>
                    <input id="pswd" type={'password'} required></input>
                    <br></br>
                    <button style={{color:"white"}}
                    className="btn btn-primary">
                        Login
                    </button>
                </form>
            </div>
            <div className="regform">
                <h2>Register</h2>
                <form>
                    <label for="">Select Your FarmDrop Market</label>
                    <br></br>
                    <input id="" type={'text'} required></input>
                </form>
            </div>
        </div>
    )
}