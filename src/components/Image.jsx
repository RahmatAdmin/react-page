import React from "react";
import background from '../img/bg.jpg';

export function Image () {
    return (
        <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://wallpapers.com/images/hd/dark-gradient-f28kcnkpm1rg5of0.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold"
      >
        Rahmat Taupik Rinaldi
      </h1>
      <p className="mb-5">
      "Berkarya tanpa henti, belajar tanpa batas, dan berbagi tanpa pamrih."
      </p>
      <button className="btn btn-primary text-white">
        Let's join Us
      </button>
    </div>
  </div>
</div>
    );
}