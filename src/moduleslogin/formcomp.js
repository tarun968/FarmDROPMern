import React from "react";
import './formcomp.css';
import { Link } from "react-router-dom";
import { useState } from "react";
import { isAuthenticated, signup, signin, authenticate } from "../backendjoin/auth";
import Login from "./login";
import SignIn from "./signin";
export default function Form() {
    
    return (
        <>
            <div className="row align-items-md-stretch my-5">
                <Login />
                <SignIn/>
            </div>
        </>
    )
}