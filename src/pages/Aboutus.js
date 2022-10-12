import React from "react";
import Menu2 from "../menu2";
import ImageSlider from "../modulesourloc/smallslider";
import Footer from "./footer";
import ByrantImage from "./img/bounty.jpg"
import Alternate2 from "../modulesourloc/alternate2";
import SuperBg from "../moduleshome/SuperBg";
import ImageContainer from "./imgcont/imagecont";
export default function Aboutus(){
    return (
        <div>
        <Menu2>
        </Menu2>
        <SuperBg
        ImageSource={ByrantImage}
        ButtonArr={[]}
        SmallHeading=""
        HeightBox="7"
        >
        </SuperBg>
        <Alternate2>
        </Alternate2>
        <ImageSlider>
        </ImageSlider>
        <ImageContainer>
        </ImageContainer>
        <Footer>
        </Footer>
        </div>
    )
}