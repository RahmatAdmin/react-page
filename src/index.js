import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Navbar } from './components/Navbar';
import { About } from './components/About';
import '../src/css/index.css';
import { Skill } from './components/Skill';
import { Footer } from './components/Footer';
import {Gallery} from './components/Gallery';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Navbar menu1="Home" menu2="gallery" menu3="Project" menu4="Contact"/>
     <About />
     <Skill />
     <Gallery />
     <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
