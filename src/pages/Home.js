import React from "react";
import SuperBg from "../moduleshome/SuperBg";
import Menu2 from "../menu/menu2";
import Footer from "./footer";
import AltCont from "../moduleshome/AltCont";
import ByrantImage from "../pages/img/Sell-On-FarmDrop.jpg"
import ByrantImage2 from "../pages/img/CYM.jpg"
export default function HomePage() {
    return (
        <>
            <Menu2>
            </Menu2>
            <SuperBg>
            </SuperBg>
            <AltCont>
            </AltCont>
            <AltCont Relpos={-1}
                Heading={"Sell on FarmDrop"}
                ImgSource={ByrantImage}
                Lists={["Shoppers order from your availability each week and pay in advance.",
                    "A dedicated Market Hub Manager receives your weekly bulk harvest deliveries and parcels out customer orders.",
                    "Customers pickup their orders at a designated pickup location"]}
                ParaGrpah1={"FarmDrop is a collaborative marketplace hosting multiple farmers and producers together on a local online storefront. Here’s how it works"}
                ParaGrpah2={"This prepaid, harvest-to-order model reduces waste by ensuring your customers get your freshest goods while you make efficient use of your labor, product, and time."
                    + "Review our current locations to contact the market hub nearest to you. Your location’s Market Hub Manager will invite you to complete a brief training on how to register on FarmDrop."}
                ButtonDetail={"Get Started"} />
            <AltCont
                Heading={"Create Your Market"}
                ImgSource={ByrantImage2}
                Lists={[
                    "Bring your local producers together in a shared marketplace where they set prices & keep 95% of their sales fee.",
                    "Earn income by bolstering your local economy! Market Hub Managers receive a small fee, paid by the customer at checkout, for fulfilling each order.",
                    "FarmDrop provides the tools & training to bring producers onboard and help their stores thrive."]}
                ParaGrpah1={"Earn income by supporting your local economy! If you are interested in becoming a FarmDrop Market Hub Manager for your community, or are already in talks with local producers about creating a shared marketing and distribution platform, you’ve come to the right place! It takes about 3 weeks to launch a new market. Find out more."}
                ParaGrpah2={""}
                ButtonDetail={"Get Started"}
            />
            <SuperBg
            Heading="Have any questions?"
            ParaGraph="Please contact us to talk about FarmDrop, our wildest dreams, your wildest dreams, and how we might support each other and the mission that hopefully connects us."
            SmallHeading=""
            Buttons={["Contact Us"]}>
            </SuperBg>
            <Footer>
            </Footer>
        </>
    )
}