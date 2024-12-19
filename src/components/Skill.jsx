import React from "react";
import '../css/basic.css';
import html from '../img/html.png';
import css from '../img/css.png';
import js from '../img/js.png';
import express from '../img/express.png';
import node from '../img/node.png';
import mongo from '../img/mongo.png';
import laravel from '../img/laravel.png';
import laragon from '../img/laragon.png';
import ubuntu from '../img/ubuntu.png';

export function Skill() {
    return (
        <div className="app">
        {/* Header Section */}
        <header className="bg-dark text-white p-6 text-center">
          <h1 className="text-4xl font-bold mb-2" data-aos="flip-right" data-aos-duration="1500">Web Development Tools</h1>
          <p className="text-lg" data-aos="flip-left" data-aos-duration="1500">Explore the latest technologies and tools used in web development.</p>
        </header>
  
        {/* About Section with Running Text on the Left and Gallery on the Right */}
        <section className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 py-6">
          {/* Left side: Running Text */}
          <div className="flex flex-col justify-center p-4 space-y-4">
            {/* Running Text */}
            <div className="overflow-hidden">
            <header>
                <h1 data-aos="fade-down" data-aos-duration="1500">
                    Fullstack Web 
                </h1>
                <p>
                    {/* teks */}
                </p>
            </header>
                <div 
                    className="loop-slider" 
                    style={{ '--duration': '15951ms', '--direction': 'normal' }}
                >
                    <div className="inner">
                        <div className="tag"><span>#</span> HTML</div>
                        <div className="tag"><span>#</span> CSS</div>
                        <div className="tag"><span>#</span> JavaScript</div>
                        <div className="tag"><span>#</span> Vscode</div>
                        <div className="tag"><span>#</span> Tailwinds</div>
                        <div className="tag"><span>#</span> Framework</div>
                        <div className="tag"><span>#</span> Laravel</div>
                        <div className="tag"><span>#</span> Express</div>
                        <div className="tag"><span>#</span> React</div>
                        <div className="tag"><span>#</span> Node</div>
                    </div>
                </div>
                <div 
                    className="loop-slider" 
                    style={{ '--duration': '19260ms', '--direction': 'reverse' }}
                >
                    <div className="inner">
                        <div className="tag"><span>#</span> Library</div>
                        <div className="tag"><span>#</span> React</div>
                        <div className="tag"><span>#</span> UUID</div>
                        <div className="tag"><span>#</span> Fillament</div>
                        <div className="tag"><span>#</span> Spatie</div>
                        <div className="tag"><span>#</span> Database</div>
                        <div className="tag"><span>#</span> MongoDB</div>
                        <div className="tag"><span>#</span> Mysql</div>
                        <div className="tag"><span>#</span> No Sql</div>
                        <div className="tag"><span>#</span> Postgress</div>
                    </div>
                </div>
                <div 
                    className="loop-slider" 
                    style={{ '--duration': '10449ms', '--direction': 'normal' }}
                >
                    <div className="inner">
                        <div className="tag"><span>#</span> Web Server</div>
                        <div className="tag"><span>#</span> Apache</div>
                        <div className="tag"><span>#</span> Nginx</div>
                        <div className="tag"><span>#</span> Ngrok</div>
                        <div className="tag"><span>#</span> Xampp</div>
                        <div className="tag"><span>#</span> HTML</div>
                        <div className="tag"><span>#</span> CSS</div>
                        <div className="tag"><span>#</span> JavaScript</div>
                        <div className="tag"><span>#</span> Vscode</div>
                        <div className="tag"><span>#</span> Tailwinds</div>
                    </div>
                </div>
                <div 
                    className="loop-slider" 
                    style={{ '--duration': '16638ms', '--direction': 'reverse' }}
                >
                    <div className="inner">
                        <div className="tag"><span>#</span> Library</div>
                        <div className="tag"><span>#</span> React</div>
                        <div className="tag"><span>#</span> UUID</div>
                        <div className="tag"><span>#</span> Fillament</div>
                        <div className="tag"><span>#</span> Spatie</div>
                        <div className="tag"><span>#</span> Database</div>
                        <div className="tag"><span>#</span> MongoDB</div>
                        <div className="tag"><span>#</span> Mysql</div>
                        <div className="tag"><span>#</span> No Sql</div>
                        <div className="tag"><span>#</span> Postgress</div>
                    </div>
                </div>
                <div 
                    className="loop-slider" 
                    style={{ '--duration': '15936ms', '--direction': 'normal' }}
                >
                    <div className="inner">
                        <div className="tag"><span>#</span> Library</div>
                        <div className="tag"><span>#</span> React</div>
                        <div className="tag"><span>#</span> UUID</div>
                        <div className="tag"><span>#</span> Fillament</div>
                        <div className="tag"><span>#</span> Spatie</div>
                        <div className="tag"><span>#</span> Database</div>
                        <div className="tag"><span>#</span> MongoDB</div>
                        <div className="tag"><span>#</span> Mysql</div>
                        <div className="tag"><span>#</span> No Sql</div>
                        <div className="tag"><span>#</span> Postgress</div>
                    </div>
                </div>
                </div>
        
            {/* Additional Information */}
            <p className="text-lg text-white-700 text-justify">
              Web development is an ever-evolving field, with new tools and frameworks emerging regularly. Stay up-to-date with the latest advancements and make sure you're using the best technologies to create modern and responsive websites.
            </p>
          </div>
  
          {/* Right side: Photo Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <div className="relative">
              <img data-aos="flip-right" data-aos-duration="1500"
                src={html}
                alt="Photo 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative">
              <img data-aos="flip-right" data-aos-duration="1500"
                src={css}
                alt="Photo 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative">
              <img data-aos="flip-right" data-aos-duration="1500"
                src={js}
                alt="Photo 3"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative">
              <img data-aos="flip-right" data-aos-duration="1500"
                src={express}
                alt="Photo 4"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative">
              <img data-aos="flip-right" data-aos-duration="1500"
                src={node}
                alt="Photo 5"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative">
              <img data-aos="flip-right" data-aos-duration="1500"
                src={mongo}
                alt="Photo 6"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative">
              <img data-aos="flip-right" data-aos-duration="1500"
                src={laravel}
                alt="Photo 7"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative">
              <img data-aos="flip-right" data-aos-duration="1500"
                src={laragon}
                alt="Photo 8"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative">
              <img data-aos="flip-right" data-aos-duration="1500"
                src={ubuntu}
                alt="Photo 9"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      </div>
    );
  };
  

