import Link from "next/link";
import { WA_URL, CALL_URL, PHONE_DISPLAY, EMAIL } from "@/lib/contact";

export default function Footer() {
  return (
    <>
      {/* Pre-footer WhatsApp band */}
      <div className="footer-wa-band">
        <div className="container fwb-inner">
          <div className="fwb-text">
            <span className="fwb-icon">🏔️</span>
            <div>
              <strong>Ready for your Panch Kedar Yatra?</strong>
              <span>Talk to our local expert from Raunlenk — we speak Hindi &amp; English.</span>
            </div>
          </div>
          <div className="fwb-actions">
            <a href={CALL_URL} className="btn-call">📞 Call Now</a>
            <a href={WA_URL} className="btn-wa" target="_blank" rel="noopener noreferrer">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>

      <footer className="site-footer">
        <div className="container footer-body">
          <div className="footer-grid">
            {/* Col 1 — Brand */}
            <div>
              <Link href="/" className="footer-logo">
                <span className="footer-logo-hindi">मध्यमहेश्वर यात्रा</span>
                <span className="footer-logo-en">Madhyamaheshwar Yatra</span>
              </Link>
              <p className="footer-tagline">
                Your trusted local guide from Raunlenk for Madhyamaheshwar &amp; Panch Kedar
                pilgrimage treks since 2012.
              </p>
              <address className="footer-address">
                <span>📍</span>
                <span>Raunlenk Village, Ukhimath, Rudraprayag, Uttarakhand — 246469</span>
              </address>
              <div className="footer-social">
                <a href="#" className="fsoc-btn" aria-label="Facebook" target="_blank" rel="noopener noreferrer">fb</a>
                <a href="#" className="fsoc-btn" aria-label="Instagram" target="_blank" rel="noopener noreferrer">ig</a>
                <a href="#" className="fsoc-btn" aria-label="YouTube" target="_blank" rel="noopener noreferrer">yt</a>
                <a href={WA_URL} className="fsoc-btn fsoc-btn--wa" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">wa</a>
              </div>
            </div>

            {/* Col 2 — Quick Links */}
            <div>
              <p className="footer-col-title">Quick Links</p>
              <ul className="footer-links">
                <li><Link href="/">🏠 Home</Link></li>
                <li><Link href="/tour-packages">🗺️ Tour Packages</Link></li>
                <li><Link href="/about-us">👥 About Us</Link></li>
                <li><Link href="/gallery">🖼️ Gallery</Link></li>
                <li><Link href="/contact-us">📬 Contact Us</Link></li>
              </ul>
            </div>

            {/* Col 3 — Packages */}
            <div>
              <p className="footer-col-title">Our Packages</p>
              <ul className="footer-links">
                <li><Link href="/tour-packages">🕉️ Kedarnath Yatra</Link></li>
                <li><Link href="/tour-packages">⛰️ Madhyamaheshwar Trek</Link></li>
                <li><Link href="/tour-packages">🌸 Tungnath–Chandrashila</Link></li>
                <li><Link href="/tour-packages">🌿 Rudranath Trek</Link></li>
                <li><Link href="/tour-packages">🙏 Kalpeshwar Yatra</Link></li>
                <li><Link href="/tour-packages">🏔️ Full Panch Kedar Circuit</Link></li>
              </ul>
            </div>

            {/* Col 4 — Contact */}
            <div>
              <p className="footer-col-title">Get In Touch</p>
              <div className="footer-contact-list">
                <a href={WA_URL} className="fc-item fc-item--wa" target="_blank" rel="noopener noreferrer">
                  <span className="fc-icon">💬</span>
                  <div>
                    <strong>WhatsApp</strong>
                    <span>{PHONE_DISPLAY}</span>
                  </div>
                </a>
                <a href={CALL_URL} className="fc-item">
                  <span className="fc-icon">📞</span>
                  <div>
                    <strong>Call Us</strong>
                    <span>{PHONE_DISPLAY}</span>
                  </div>
                </a>
                <a href={`mailto:${EMAIL}`} className="fc-item">
                  <span className="fc-icon">✉️</span>
                  <div>
                    <strong>Email</strong>
                    <span>{EMAIL}</span>
                  </div>
                </a>
              </div>
              <div className="footer-season-badge">
                <span style={{ fontSize: "1.5rem" }}>🌨️</span>
                <div>
                  <strong>Trekking Season</strong>
                  <span>May 15 – November 15 (each year)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom-bar">
          <div className="container footer-bottom-inner">
            <p className="footer-copy" suppressHydrationWarning>
              &copy; {new Date().getFullYear()} Madhyamaheshwar Yatra, Raunlenk. All rights reserved.
            </p>
            <p className="footer-devotion">जय मध्यमहेश्वर बाबा 🙏</p>
            <ul className="footer-bottom-links">
              <li><Link href="/contact-us">Privacy Policy</Link></li>
              <li><Link href="/contact-us">Terms</Link></li>
              <li><Link href="/contact-us">Refund Policy</Link></li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Mobile floating bottom bar */}
      <div className="float-bottom-bar" role="navigation" aria-label="Mobile quick actions">
        <div className="fbb-inner">
          <a href={CALL_URL} className="fbb-btn fbb-call">📞 Call Now</a>
          <a href={WA_URL} className="fbb-btn fbb-wa" target="_blank" rel="noopener noreferrer">
            💬 WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
