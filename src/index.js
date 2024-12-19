import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Collections } from "./pages/Collections";
import { Project } from "./pages/Project";
import '../src/css/index.css';
import { Contact } from './pages/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar menu1="Home" menu2="Gallery" menu3="Project" menu4="Contact" />
      <Routes>
        <Route path="/react-page" element={<Home />} />
        <Route path="/react-page/gallery" element={<Collections />} />
        <Route path="/react-page/project" element={<Project />} />
        <Route path="/react-page/contact" element={<Contact />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
