import Head from "next/head";
import { useState } from "react";
import InnerBanner from "@/components/InnerBanner";
import { WA_URL, CALL_URL, PHONE, PHONE_DISPLAY, EMAIL } from "@/lib/contact";

function BookingForm() {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", package: "", persons: "", date: "", arrive: "", message: "",
  });

  function sendToWhatsApp(e: React.FormEvent) {
    e.preventDefault();
    const text = encodeURIComponent(
      `Namaste! I would like to book a tour.\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email || "N/A"}\nPackage: ${form.package}\nPersons: ${form.persons}\nPreferred Date: ${form.date}\nArrival City: ${form.arrive || "N/A"}\nMessage: ${form.message || "N/A"}`
    );
    window.open(`https://wa.me/${PHONE.replace("+", "")}?text=${text}`, "_blank");
  }

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <div className="cf7-card">
      <div className="cf7-card-header">
        <h3>Book Your Yatra</h3>
        <p>Fill this form — we&apos;ll respond on WhatsApp within 30 minutes.</p>
      </div>
      <form onSubmit={sendToWhatsApp}>
        <div className="cf7-body">
          <div>
            <label htmlFor="cf-name">Full Name *</label>
            <input id="cf-name" type="text" placeholder="Your full name" required value={form.name} onChange={set("name")} />
          </div>
          <div>
            <label htmlFor="cf-phone">WhatsApp / Phone *</label>
            <input id="cf-phone" type="tel" placeholder="+91 XXXXX XXXXX" required value={form.phone} onChange={set("phone")} />
          </div>
          <div>
            <label htmlFor="cf-email">Email (optional)</label>
            <input id="cf-email" type="email" placeholder="you@email.com" value={form.email} onChange={set("email")} />
          </div>
          <div>
            <label htmlFor="cf-pkg">Package *</label>
            <select id="cf-pkg" required value={form.package} onChange={set("package")}>
              <option value="">Select a package</option>
              <option>Kedarnath Yatra (4N/5D) — ₹10,999</option>
              <option>Madhyamaheshwar Trek (5N/6D) — ₹11,999</option>
              <option>Tungnath–Chandrashila (3N/4D) — ₹8,999</option>
              <option>Rudranath Trek (5N/6D) — ₹10,499</option>
              <option>Kalpeshwar Yatra (2N/3D) — ₹6,999</option>
              <option>Full Panch Kedar Circuit (15N/16D) — ₹49,999</option>
              <option>Custom Package</option>
            </select>
          </div>
          <div>
            <label htmlFor="cf-persons">Number of Persons *</label>
            <select id="cf-persons" required value={form.persons} onChange={set("persons")}>
              <option value="">Select</option>
              <option>1 Person (Solo)</option>
              <option>2 Persons (Couple)</option>
              <option>3–5 Persons (Small Group)</option>
              <option>6–10 Persons (Group)</option>
              <option>10+ Persons (Large Group)</option>
            </select>
          </div>
          <div>
            <label htmlFor="cf-date">Preferred Start Date</label>
            <input id="cf-date" type="date" value={form.date} onChange={set("date")} />
          </div>
          <div>
            <label htmlFor="cf-arrive">Arrival City</label>
            <select id="cf-arrive" value={form.arrive} onChange={set("arrive")}>
              <option value="">Select your arrival city</option>
              <option>Rishikesh</option>
              <option>Haridwar</option>
              <option>Dehradun</option>
              <option>Delhi</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="cf-msg">Special Requirements</label>
            <textarea id="cf-msg" placeholder="Dietary needs, mobility concerns, specific requests..." rows={3} value={form.message} onChange={set("message")} />
          </div>
          <button type="submit" className="cf7-submit">
            💬 Send Booking Request via WhatsApp
          </button>
        </div>
        <div className="cf7-wa-fallback">
          <p>Prefer to chat directly?</p>
          <a href={WA_URL} className="btn-wa" target="_blank" rel="noopener noreferrer">
            💬 Open WhatsApp
          </a>
        </div>
      </form>
    </div>
  );
}

export default function ContactUs() {
  return (
    <>
      <Head>
        <title>Contact Us – Madhyamaheshwar Yatra | Book Your Pilgrimage</title>
        <meta
          name="description"
          content="Get in touch with Madhyamaheshwar Yatra to book your pilgrimage or inquire about Madhyamaheshwar and Panch Kedar packages. WhatsApp, call, or email us today."
        />
        <link rel="canonical" href="https://madhyamaheshwaryatra.in/contact-us" />
      </Head>

      <main>
        <InnerBanner
          title="Contact Us"
          bgImage="https://images.unsplash.com/photo-1612892483236-52d32a0e0ac1?w=1600&auto=format&fit=crop&q=75"
        />

        {/* ── CONTACT STRIP ──────────────────────────────── */}
        <div className="contact-strip-section">
          <div className="container">
            <div className="contact-strip-grid">
              <a href={CALL_URL} className="cs-item cs-item--call">
                <span className="cs-icon">📞</span>
                <div className="cs-text">
                  <strong>Call Us</strong>
                  <span>{PHONE_DISPLAY}</span>
                </div>
              </a>
              <a href={WA_URL} className="cs-item cs-item--wa" target="_blank" rel="noopener noreferrer">
                <span className="cs-icon">💬</span>
                <div className="cs-text">
                  <strong>WhatsApp</strong>
                  <span>Fastest response</span>
                </div>
              </a>
              <a href={`mailto:${EMAIL}`} className="cs-item cs-item--email">
                <span className="cs-icon">✉️</span>
                <div className="cs-text">
                  <strong>Email</strong>
                  <span>{EMAIL}</span>
                </div>
              </a>
              <div className="cs-item cs-item--location">
                <span className="cs-icon">📍</span>
                <div className="cs-text">
                  <strong>Location</strong>
                  <span>Raunlenk, Ukhimath, Rudraprayag</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── MAIN CONTACT ───────────────────────────────── */}
        <section className="contact-main-section">
          <div className="container contact-main-grid">
            <div className="contact-left">
              <p className="sec-label">Reach Out</p>
              <h2 className="sec-head">We&apos;re Here to <em>Help You Plan</em></h2>
              <p className="contact-intro-para">
                Whether you&apos;re a first-time trekker or a seasoned pilgrim planning the full Panch Kedar
                circuit, we&apos;re here to make your yatra smooth and memorable. Ask us anything — no
                question is too small.
              </p>

              <div className="contact-hours">
                <h4>📅 Our Working Hours</h4>
                <ul>
                  <li><span>Monday – Saturday</span><strong>7:00 AM – 9:00 PM IST</strong></li>
                  <li><span>Sunday</span><strong>8:00 AM – 6:00 PM IST</strong></li>
                  <li><span>WhatsApp</span><strong>Always On (reply within 30 min)</strong></li>
                  <li><span>Trekking Season</span><strong>May 15 – November 15</strong></li>
                </ul>
              </div>

              <div className="contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3459.2!2d79.2!3d30.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDMwJzAwLjAiTiA3OcKwMTInMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="240"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Raunlenk, Ukhimath location map"
                />
              </div>
            </div>

            <BookingForm />
          </div>
        </section>
      </main>
    </>
  );
}
