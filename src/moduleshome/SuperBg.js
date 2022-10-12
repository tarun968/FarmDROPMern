import React from "react";
import "./SuperBg.css"
import ByrantImage from "../pages/img/header1.jpg"
export default function SuperBg({
    Heading = "YOUR COMMUNITY. YOUR FOOD.",
    ParaGraph = "Shop our online farmers market for quality local food. Convenient community pickup* and delivery.",
    SmallHeading = "*contact-free options vary by market",
    ButtonArr = ["Shop Now", "Login"],    
    ImageSource = ByrantImage,
    HeightBox = "90",
}
) {
    return (
        <>
            <div class="px-2 py-5 mb-0 text-center text-white"
            style={{
                height:`${HeightBox}`,
                backgroundImage:`url(${ImageSource})`,
                backgroundRepeat:"no-repeat",
                backgroundSize:"cover"
                 }}
            >
                <img class="d-block mx-auto mb-2"
                    src={require('../pages/img/farmdroplogo.png')}
                    alt="" width="172" height="107" />
                <h6
                    style={{ fontSize: '32px' }}
                    class="display-3 fw-bold">{Heading}</h6>
                <div class="col-lg-6 mx-auto my-5">
                    <p class="lead mb-4 fw-bold">
                        {ParaGraph}
                    </p>
                    <p
                        style={{ fontSize: '10px' }}
                    >{SmallHeading}</p>
                    <div class="d-grid mt-5 gap-2 d-sm-flex justify-content-sm-center">
                        {
                            ButtonArr.map((content, index) => {
                                if (index % 2 == 0) {
                                    return (
                                        <button type="button" class="text-light btn-outline-light btn btn-lg px-4 gap-3"
                                            style={{ backgroundColor: 'rgb(144, 181, 1)' }}
                                    >{content}
                                            <i aria-hidden="true" class="far fa-arrow-alt-circle-right"></i>
                                        </button>
                                    )
                                }
                                else {
                                    return (
                                        <button type="button" class="btn btn-outline-light btn-lg px-4">{content}</button>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}