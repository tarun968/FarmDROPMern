import React from "react";
import './alternate.css'
import byrantimage from '../pages/img/ssp.png'
export default function Alternate({
    Relpos = 1,
    Heading = "About FarmDrop",
    LeftTitle = "FarmDrop is a Maine-based, woman-owned, mission-driven business.",
    RightTitle = " Co-Founders Hannah Semler (CEO) and Kelin Welborn (COO) are passionate about the resilience of food systems everywhere",
    Paraleft = " A family in Blue Hill, Maine – who you can often find selling natural wines and specialty Italian sundries at the Blue Hill Wineshop – created the first" +
    "eighborhood FarmDrop site as a community service.  Their vision supported" +
    "farmer friends and small food producers in their region with a year-round" + "online farmers market. After four years of serving the neighborhood they were"
    + "eager to hand off the technology to new leadership." + "While Hannah was working as Gleaning Coordinator at Healthy Acadia, a public health" +
    "organization serving Hancock and Washington Counties, Kelin contacted her with an" + "idea for a gleaning app to better engage volunteers, matching them with surplus crops" + "from farm partners. Hannah said, “let’s make FarmDrop happen first!” and the rest is"
    + "history. After Hannah and Kelin formally incorporated FarmDrop L3C, farms and gleaning  programs alike are now running FarmDrop online farmers markets across Maine and beyond. In the last four years, our founding values have broadened to include a mission of building powerful networks of regenerative community food systems. FarmDrop provides additional farm income, creates access to the most"
    + "delicious food customers’ neighbors have to offer, and ensures small farm viability through smart, data-driven, technology-powered business planning. We are now a social enterprise building thriving local food economies. Each location sells the freshest local food around and supports nonprofits that prevent food waste and feed hungry families. FarmDrop is dedicated to preserving the knowledge and sustainable stewardship of our rural" +
    " landscapes by making it more convenient to choose the extraordinary local food being produced in our own foodsheds. We make it possible for communities to buy and sell, and trade year-round, sharing the most nutritious, safe, and delicious foods available, that in turn protect our planet, restore our place-based culture, and build food sovereignty."
    + "Please contact us to talk about FarmDrop, our wildest dreams, your wildest dreams, and how we might support each other and the mission that hopefully connects us",
    images = [
        byrantimage,
        byrantimage,
        byrantimage
    ]
}
) {
    return (
        <>
            <h1 style={{
                marginLeft: "37vw",
                fontWeight: "700",
                marginTop: "4vh",
                marginBottom: "4vh",
            }}>{Heading}</h1>
            {
                Relpos === 1 && (
                    <div className="contalt">
                        <div className="contaltleft">
                            <h2 style={{ fontSize: "255%" }}>
                                {LeftTitle}
                            </h2>
                            <div className="contaltimg">
                                {
                                    images.map((image, index) => {
                                        return (
                                            <img src={image} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="contaltright">
                            <h4 style={{ fontSize: "15px" }}>
                                {RightTitle}
                            </h4>
                            <p style={{ fontSize: "14px" }}>
                                <span>
                                    {Paraleft}
                                </span>
                            </p>
                        </div>
                    </div>

                )
            }
            {
                Relpos === -1 && (
                    <div className="contalt">
                        <div className="contaltright">
                            <h4 style={{ fontSize: "15px" }}>
                                {RightTitle}
                            </h4>
                            <p style={{ fontSize: "14px" }}>
                                <span>
                                    {Paraleft}
                                </span>
                            </p>
                        </div>

                        <div className="contaltleft">
                            <h2 style={{ fontSize: "255%" }}>
                                {LeftTitle}
                            </h2>
                            <div className="contaltimg">
                                {
                                    images.map((image, index) => {
                                        return (
                                            <img src={image} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>

                )
            }       </>
    )
}