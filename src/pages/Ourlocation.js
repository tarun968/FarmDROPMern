import React from "react";
import Sideslider from "../modulesourloc/sideslider";
import Menu from "../menu"
import ImageSlider from "../modulesourloc/smallslider"
import SimpleSlider from "../modulesourloc/smallslider2";
import Alternate from "../modulesourloc/alterante";
import Footer from "./footer";
export default function OurLocation() {
    return (
        <div>
            <Menu>

            </Menu>
            <Sideslider>

            </Sideslider>
            <Alternate
                Heading=""
                LeftTitle="Empowered Local Food Networks For Communities Everywhere."
                RightTitle="Keeping You Connected to the Farms You Know."
                Paraleft="FarmDrop can be trusted to have your joy, health, and well-being in mind. We are your neighbors, friends, and enemies, and you’ve never wanted us closer. Accessing all the best local products online is more than just convenient; in a time of increased isolation, it keeps you safe and connects you to the food economies and relationships that sustain the fabric of community life.
Now with just a few simple clicks, you can buy all your local favorites online for curbside pickup or delivery. No commitment or membership, 100% satisfaction guaranteed, or get a refund."
                images={[]}>

            </Alternate>
            <Alternate
            Relpos={-1}
                Heading=""
                LeftTitle="
                Inspiring Communities to Eat Fresh & Nutrient Dense."
                RightTitle="
                Make Food Personal & Waste Less"
                Paraleft="Order weekly from your favorite farmers choosing from the diverse inventory they offer on the marketplace. Then each producer makes, harvests, and packs according to order, and delivers to your Market Hub Manager who packs your order, just for you. This system creates cooperation and direct connections over shorter distances and time periods, building a harvest and selection process that values the customer first. Those carrots literally have your name on them; your groceries have never been fresher or lasted longer in your fridge.

Producers deliver only what has already been sold.  You get the best of what they create - they don’t waste any labor, product, or time. This allows them to build their businesses while spending more energy doing what they love: growing, raising, and making food that sustains your shared community. And everybody wastes fewer precious resources!"
                images={[]}>

            </Alternate>

            <ImageSlider>

            </ImageSlider>
            <SimpleSlider>

            </SimpleSlider>
            <Footer>
                
            </Footer>
        </div>
    )
}