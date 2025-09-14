import React from "react";
import "./header.css";
import logo from "../../assets/react.svg";

import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Hornbill Festival", href: "#hornbill" },
  { label: "Blogs", href: "#blogs" },
  { label: "About us", href: "#about" },
];

const Header: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  return (
    <header className="header">
      <div className="header-logo">
        <img
          src={logo}
          alt="Uncharted Voyage Logo"
          className="contact-us-logo"
          height={40}
          width={40}
        />
      </div>
      <nav className="header-nav">
        {navLinks.map((link, idx) => (
          <a
            key={link.label}
            href={link.href}
            className={activeIdx === idx ? "active" : "inactive"}
            onClick={() => setActiveIdx(idx)}
          >
            {link.label}
          </a>
        ))}
        <button className="header-phone-btn">+91 98647 93676</button>
      </nav>
    </header>
  );
};

export default Header;
