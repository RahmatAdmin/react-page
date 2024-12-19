import React from "react";
import unavailable from "../img/no-results.png"

export function Work () {
    return (
    <div className="w-full h-full mt-20 flex justify-center items-center">
        <img data-aos="flip-right" data-aos-duration="1500" src={unavailable} alt="" />
    </div>
    )
}