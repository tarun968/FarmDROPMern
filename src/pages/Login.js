import React from "react";
import Form from "../moduleslogin/formcomp";
import Menu from "../menu"
import Footer from "./footer";

export default function Login(){
    return (
        <div>
        <Menu>
        </Menu>
        <div>
            <h2 style = {{marginLeft:33,marginTop:-30}}>
            My Account
            </h2>
            <Form>
            </Form>
        </div>
        <Footer>
            
            </Footer>
        </div>
    )
}