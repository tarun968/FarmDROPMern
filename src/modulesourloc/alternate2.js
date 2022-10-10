import React from "react";

import byrantimage from '../pages/img/ssp.png'
const Alternate2 = ({
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
}) => {
    return (
        <>
            <div class="alert" role="alert">
                <h1 style={{ fontWeight: 'bolder', display: 'flex', justifyContent: 'Center' }}>
                    {Heading}
                </h1>
            </div>

            <div class="container overflow-hidden"
            >
                <div class="row gx-5">
                    <div class="col">
                        <img src={require('../pages/img/farmdropleaf.jpg')}
                            style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block' }}
                        />
                    </div>
                    <div class="col">
                        <img src={require('../pages/img/farmdropleaf.jpg')}
                            style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block' }}
                        />
                    </div>
                </div>
            </div>

            {
                Relpos === 1 && (
                    <div class="row align-items-md-stretch">
                        <div class="col-md-6">
                            <div class="h-100 p-5 text-dark bg-white rounded-3">
                                <h1>{LeftTitle}</h1>
                                <div class="row align-items-md-stretch">
                                    {
                                        images.map((image, index) => {
                                            return (
                                                <img src={image} className='col-md-4'
                                                    style={{ width: '45%', height: '85%', margin: '6px 0px 6px 6px' }}
                                                />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="h-100 p-5 bg-white rounded-3">
                                <h6>{RightTitle}</h6>
                                <p>{Paraleft}</p>
                            </div>
                        </div>
                    </div>)}

            {
                Relpos === -1 && (
                    <div class="row align-items-md-stretch">
                        <div class="col-md-6">
                            <div class="h-100 p-5 bg-white rounded-3">
                                <h6>{RightTitle}</h6>
                                <p>{Paraleft}</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="h-100 p-5 text-dark bg-white rounded-3">
                                <h1>{LeftTitle}</h1>
                                <div class="row align-items-md-stretch">
                                    {
                                        images.map((image, index) => {
                                            return (
                                                <img src={image} className='col-md-4'
                                                    style={{ width: '45%', height: '85%', margin: '6px 0px 6px 6px' }}
                                                />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>)}
        </>
    )
}

export default Alternate2;