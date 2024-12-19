import React from "react";

export function Image () {
    return (
        <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://getwallpapers.com/wallpaper/full/8/a/a/6122.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold"
      data-aos="flip-right"
      data-aos-duration="1500"
      >
        Rahmat Taupik Rinaldi
      </h1>
      <p className="mb-5"
        data-aos="flip-left"
        data-aos-duration="1500"
        >
      "Berkarya tanpa henti, belajar tanpa batas, dan berbagi tanpa pamrih."
      </p>
      <button className="btn btn-primary text-white"
       data-aos="fade-down"
      data-aos-duration="1500"
      >
        Let's join Us
      </button>
    </div>
  </div>
</div>
    );
}