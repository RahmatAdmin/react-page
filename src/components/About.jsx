import React from "react";
import animasi from "../img/animasi.png";
import '../javascript/aos.js';
import computer from "../img/computer.png";

export function About() {
  
  return (
    <section className="container mt-16 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 my-5">
      {/* Text Section */}

      <div  data-aos="fade-down" data-aos-duration="1500" className="flex flex-col justify-center">
        <h1 data-aos="fade-right" data-aos-duration="1500" className="text-3xl font-bold mb-4 p-4">Rahmat Taufik Rinaldi</h1>
        <p data-aos="fade-down" data-aos-duration="1500" className="text-justify p-4">
          <p className="text-justify">
          Saya adalah seorang Full Stack Web Developer yang memiliki keahlian dalam membangun dan
           mengembangkan aplikasi web dari sisi frontend hingga backend. 
          Dengan pengalaman dalam berbagai teknologi modern, 
          saya mampu menciptakan solusi web yang responsif, efisien, dan sesuai dengan kebutuhan klien.
          </p>
            
          <p>
           <img src={computer} alt="" srcset="" />
          </p>

          <p>
          Saya juga terbiasa bekerja dengan tim lintas fungsi untuk memastikan keberhasilan proyek, termasuk designer, QA tester, dan manajer proyek.
           Dengan kemampuan komunikasi yang baik, 
          saya selalu berusaha menjembatani kebutuhan teknis dan bisnis agar proyek selesai tepat waktu.
          </p>
        </p>
        <div className="mt-4 flex gap-4">
          <button  data-aos="flip-left" data-aos-duration="1500" className="btn btn-primary">
          <svg class="h-6 w-6 text-white-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg>
            Contact Me
            </button>
          <button  data-aos="flip-left" data-aos-duration="1500" className="btn btn-accent">
          <svg class="h-6 w-6 text-white-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="5 7 10 12 5 17" />  <line x1="13" y1="17" x2="19" y2="17" /></svg>
            View Project
            </button>
        </div>
      </div>

      {/* Image Section */}
      <div data-aos="fade-up" data-aos-duration="1500" className="flex flex-col items-center">
        <img
          src={animasi}
          alt="Gambar"
          className="rounded-lg w-full lg:w-3/4"
        />
        <p className="text-center mt-4 text-lg">Web Development</p>
        <div className="mt-3 flex gap-2 flex-wrap justify-center">
          <button data-aos="flip-right" className="btn btn-primary">
          <svg class="h-6 w-6 text-white-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg>
            LinkedIn
            </button>
          <button data-aos="flip-right" data-aos-duration="1500" className="btn btn-neutral">
          <svg class="h-6 w-6 text-whit-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" /></svg>
            GitHub
            </button>
          <button data-aos="flip-right" data-aos-duration="1500" className="btn btn-info">
          <svg class="h-6 w-6 text-white-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg>
            Facebook
            </button>
          <button data-aos="flip-right" data-aos-duration="1500" className="btn btn-secondary">
          <svg class="h-6 w-6 text-white-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="4" width="16" height="16" rx="4" />  <circle cx="12" cy="12" r="3" />  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" /></svg>
            Instagram
            </button>
        </div>
      </div>
    </section>
  );
}
