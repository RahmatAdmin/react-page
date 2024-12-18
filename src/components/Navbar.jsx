import React from "react"; // import module react
// import "./css/navbar.css"  // import file css jika eksternal
// import logo from '../components/img/logo.jpg'; // import asset jika ada

export function Navbar({ menu1, menu2, menu3, menu4 }) {
  // membuat expresi di luar return
  const username = 'Rahmat Taupik Rinaldi';

  // membuat components didalam return dengan semantic html
  return (
    <nav
    className="fixed top-0 left-0 w-full bg-primary z-50"
  >
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>{menu1}</a>
              </li>
              <li>
                <a>{menu2}</a>
              </li>
              <li>
                <a>{menu3}</a>
              </li>
              <li>
                <a>{menu4}</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">{username}</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <li>
                <a>{menu1}</a>
              </li>
              <li>
                <a>{menu2}</a>
              </li>
              <li>
                <a>{menu3}</a>
              </li>
              <li>
                <a>{menu4}</a>
              </li>
          </ul>
        </div>
        <div className="navbar-end">
            <button className="btn text-white btn-primary">
            <svg class="h-6 w-6 text-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />  <path d="M7 12h14l-3 -3m0 6l3 -3" /></svg>
              Login Admin
              </button>
        </div>
      </div>
    </nav>
  );
}
