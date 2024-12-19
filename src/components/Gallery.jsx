import React from "react";
import "../css/gallery.css";
import picture1 from "../img/picture1.jpeg";
import picture2 from "../img/picture2.jpeg";
import picture3 from "../img/picture3.jpeg";
import picture4 from "../img/picture4.jpeg";
import picture5 from "../img/picture5.jpeg";
import picture6 from "../img/picture6.jpeg";
import picture7 from "../img/picture7.jpeg";
import picture8 from "../img/picture8.jpeg";
import picture9 from "../img/picture9.jpeg";
import picture10 from "../img/picture10.jpeg";
import picture11 from "../img/picture11.jpeg";
import picture12 from "../img/picture12.jpeg";
import picture13 from "../img/picture13.jpeg";
import picture14 from "../img/picture14.jpeg";
import picture15 from "../img/picture15.jpeg";


export function Gallery() {

    const pictures = [
        {src: picture1},
        {src: picture2},
        {src: picture3},
        {src: picture4},
        {src: picture5},
        {src: picture6},
        {src: picture7},
        {src: picture8},
        {src: picture9},
        {src: picture10},
        {src: picture11},
        {src: picture12},
        {src: picture13},
        {src: picture14},
        {src: picture15}
    ];

    return (
        <div id="gallery" className="container mx-auto p-4 mt-16">
          <h1 className="text-2xl font-bold mb-4">Gallery</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {pictures.map((picture, index) => (
              <div
                key={index}
                className="relative group overflow-hidden hover:scale-105 transition-transform"
              >
                <img 
                data-aos="flip-right"
                data-aos-duration="1500"
                src={picture.src}
                className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">
                    {picture.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}
