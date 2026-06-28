import { useState, useEffect } from "react";
import Link from "next/link";
import { WA_URL } from "@/lib/contact";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/tour-packages", label: "Tour Packages" },
  { href: "/about-us", label: "About Us" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact-us", label: "Contact Us" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav className={`site-nav${menuOpen ? " menu-open" : ""}`}>
      <div className="container nav-inner">
        <Link href="/" className="logo" onClick={() => setMenuOpen(false)}>
          <img
            src="/logo.png"
            alt="Madhyamaheshwar Yatra"
            height={60}
            style={{ height: "60px", width: "auto", display: "block" }}
          />
        </Link>

        <div className="nav-links">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
              {l.label}
            </Link>
          ))}
          <a href={WA_URL} className="nav-cta" target="_blank" rel="noopener noreferrer">
            📞 Book Now
          </a>
        </div>

        <button
          className="hamburger"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
