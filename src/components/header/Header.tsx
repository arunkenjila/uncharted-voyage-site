import React from "react";
import "./header.css";
import logo from "../../assets/uvlogo.png";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Hornbill Festival", href: "#hornbill" },
  { label: "Blogs", href: "#blogs" },
  { label: "About us", href: "#about" },
];

const Header: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  // close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768 && mobileOpen) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [mobileOpen]);
  return (
    <header className="header">
      <div className="header-logo">
        <img
          src={logo}
          alt="Uncharted Voyage Logo"
          className="contact-us-logo"
          height={70}
          width={70}
        />
      </div>
      <nav className="header-nav">
        {navLinks.map((link, idx) => (
          <a
            key={link.label}
            href={link.href}
            className={activeIdx === idx ? "active" : "inactive"}
            onClick={() => {
              setActiveIdx(idx);
              setMobileOpen(false);
            }}
          >
            {link.label}
          </a>
        ))}
        <button className="header-phone-btn">+91 98647 93676</button>
      </nav>

      {/* mobile hamburger */}
      <button
        className="header-hamburger"
        aria-label="Toggle menu"
        onClick={() => setMobileOpen((s) => !s)}
      >
        <span className={"bar" + (mobileOpen ? " open" : "")}></span>
        <span className={"bar" + (mobileOpen ? " open" : "")}></span>
        <span className={"bar" + (mobileOpen ? " open" : "")}></span>
      </button>

      {/* mobile menu overlay */}
      <div className={"mobile-menu" + (mobileOpen ? " open" : "")}>
        <div className="mobile-menu-inner">
          {navLinks.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              className={activeIdx === idx ? "active" : "inactive"}
              onClick={() => {
                setActiveIdx(idx);
                setMobileOpen(false);
              }}
            >
              {link.label}
            </a>
          ))}
          <button className="header-phone-btn mobile">+91 98647 93676</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
