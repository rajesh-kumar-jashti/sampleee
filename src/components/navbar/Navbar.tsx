import React from 'react'
import Search from '../../../public/icons/Search.svg';
import Link from 'next/link';
import Image from 'next/image';
import './navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar__container">
        <div className="navbar__left">
          <div className="navbar__logo">
            <Link href="/" style={{ textDecoration: "none" }}><h1>LOGO</h1></Link>
          </div>
        </div>
        <div className="navbar__right">
          <div className="navbar__search">
            <Image src={Search} alt="Search icon" />
            <input type="text" placeholder="Search" aria-label="Search" />
          </div>

          <div className="navbar__actions">
            <button className="navbar__btn navbar__btn--login">Login</button>
            <button className="navbar__btn navbar__btn--signup">Sign Up</button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar
