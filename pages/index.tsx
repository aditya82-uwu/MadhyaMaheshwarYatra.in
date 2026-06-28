import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { WA_URL, CALL_URL, PHONE, EMAIL } from "@/lib/contact";

function ContactForm() {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", package: "", persons: "", date: "", message: "",
  });

  function sendToWhatsApp(e: React.FormEvent) {
    e.preventDefault();
    const text = encodeURIComponent(
      `Namaste! I would like to book a tour.\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email || "N/A"}\nPackage: ${form.package}\nPersons: ${form.persons}\nDate: ${form.date}\nMessage: ${form.message || "N/A"}`
    );
    window.open(`https://wa.me/${PHONE.replace("+", "")}?text=${text}`, "_blank");
  }

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <form onSubmit={sendToWhatsApp} className="contact-form">
      <h3>Plan Your Yatra</h3>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="hf-name">Full Name *</label>
          <input id="hf-name" type="text" placeholder="Your name" required value={form.name} onChange={set("name")} />
        </div>
        <div className="form-group">
          <label htmlFor="hf-phone">Phone / WhatsApp *</label>
          <input id="hf-phone" type="tel" placeholder="+91 XXXXX XXXXX" required value={form.phone} onChange={set("phone")} />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="hf-email">Email (optional)</label>
        <input id="hf-email" type="email" placeholder="you@email.com" value={form.email} onChange={set("email")} />
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="hf-pkg">Package *</label>
          <select id="hf-pkg" required value={form.package} onChange={set("package")}>
            <option value="">Select a package</option>
            <option>Kedarnath Yatra (4N/5D)</option>
            <option>Madhyamaheshwar Trek (5N/6D)</option>
            <option>Tungnath–Chandrashila (3N/4D)</option>
            <option>Rudranath Trek (5N/6D)</option>
            <option>Kalpeshwar Yatra (2N/3D)</option>
            <option>Full Panch Kedar Circuit (15N/16D)</option>
            <option>Custom Package</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="hf-persons">Persons *</label>
          <select id="hf-persons" required value={form.persons} onChange={set("persons")}>
            <option value="">Select</option>
            <option>1 Person</option>
            <option>2 Persons</option>
            <option>3–5 Persons</option>
            <option>6–10 Persons</option>
            <option>10+ Persons</option>
          </select>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="hf-date">Preferred Start Date</label>
        <input id="hf-date" type="date" value={form.date} onChange={set("date")} />
      </div>
      <div className="form-group">
        <label htmlFor="hf-msg">Special Requests</label>
        <textarea id="hf-msg" placeholder="Any special requirements, dietary needs, etc." rows={3} value={form.message} onChange={set("message")} />
      </div>
      <button type="submit" className="btn-submit">💬 Send via WhatsApp</button>
    </form>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Madhyamaheshwar Yatra – Temple Tour &amp; Panch Kedar Packages</title>
        <meta
          name="description"
          content="Book Madhyamaheshwar temple yatra and Panch Kedar pilgrimage tour packages from Raunlenk. Expert local guides, comfortable stays, and memorable spiritual journeys in Uttarakhand."
        />
        <meta name="keywords" content="Madhyamaheshwar yatra, Panch Kedar tour, Madhyamaheshwar temple, Uttarakhand pilgrimage, Panch Kedar packages" />
        <link rel="canonical" href="https://madhyamaheshwaryatra.in/" />
      </Head>

      <main>
        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="hero">
          <div className="hero-bg" aria-hidden="true" />
          <div className="hero-overlay" aria-hidden="true" />
          <div className="hero-accent" aria-hidden="true" />
          <div className="container hero-content">
            <span className="hero-badge">Panch Kedar &bull; Uttarakhand</span>
            <h1 className="hero-hindi">जय मध्यमहेश्वर बाबा</h1>
            <p className="hero-hindi-sub">पंच केदार का दिव्य धाम</p>
            <p className="hero-en-sub">Sacred Himalayan Pilgrimage Since 2012</p>
            <div className="hero-btns">
              <Link href="/tour-packages" className="btn-call">🗺️ View Packages</Link>
              <a href={WA_URL} className="btn-wa" target="_blank" rel="noopener noreferrer">
                💬 Plan My Yatra
              </a>
            </div>
          </div>
          <div className="hero-scroll" aria-hidden="true">
            <span>scroll</span>
            <span>↓</span>
          </div>
        </section>

        {/* ── QUICK BAR (mobile sticky) ──────────────────────── */}
        <div className="quick-bar" aria-hidden="true">
          <div className="container quick-bar-inner">
            <a href={CALL_URL} className="qb-item">
              <span className="qb-icon">📞</span>
              <span>Call</span>
            </a>
            <a href={WA_URL} className="qb-item wa-item" target="_blank" rel="noopener noreferrer">
              <span className="qb-icon">💬</span>
              <span>WhatsApp</span>
            </a>
            <Link href="/tour-packages" className="qb-item">
              <span className="qb-icon">🗺️</span>
              <span>Packages</span>
            </Link>
            <Link href="/gallery" className="qb-item">
              <span className="qb-icon">📸</span>
              <span>Gallery</span>
            </Link>
          </div>
        </div>

        {/* ── WHY VISIT ─────────────────────────────────────── */}
        <section className="why-section">
          <div className="container">
            <div className="why-header">
              <p className="sec-label">Why Madhyamaheshwar</p>
              <h2 className="sec-head">A Temple Unlike Any Other</h2>
              <p className="sec-sub">
                Nestled at 3,497m, Madhyamaheshwar is one of the five sacred Panch Kedar shrines
                where Lord Shiva&apos;s navel (nabhi) is worshipped. The trek is as divine as the destination.
              </p>
            </div>
            <div className="why-grid">
              {[
                { icon: "🕉️", title: "Panch Kedar Shrine", desc: "One of the five sacred Shiva temples forming the Panch Kedar circuit in Uttarakhand." },
                { icon: "🏔️", title: "3,497m Altitude", desc: "High-altitude meadows, panoramic views of Kedarnath, Chaukhamba, and Neelkanth peaks." },
                { icon: "🌿", title: "Pristine Bugyals", desc: "Trek through the famous Bantoli and Kharchkund alpine meadows — some of Uttarakhand's most beautiful." },
                { icon: "🏡", title: "Local Homestays", desc: "Stay with traditional Garhwali families in Raunlenk and Ransi for an authentic experience." },
                { icon: "🙏", title: "Spiritual Journey", desc: "The temple opens each May 15 with ancient rituals — timing your visit right is part of the magic." },
              ].map((c) => (
                <div key={c.title} className="why-card">
                  <span className="why-icon">{c.icon}</span>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TREK ROUTE ─────────────────────────────────────── */}
        <section className="trek-section">
          <div className="container trek-inner">
            <div>
              <div className="trek-header">
                <p className="sec-label">Trek Itinerary</p>
                <h2 className="sec-head">Raunlenk to Madhyamaheshwar</h2>
                <p className="sec-sub">
                  A classic 4-day circuit from our base village through dense forest, alpine meadows,
                  and sacred glacial streams.
                </p>
              </div>
              <div className="route-list">
                {[
                  { icon: "🚌", day: "Day 1", place: "Rishikesh → Raunlenk", detail: "Drive ~6–7 hrs via Ukhimath", highlight: false },
                  { icon: "⛺", day: "Day 2", place: "Ransi → Bantoli", detail: "Trek 9 km • 5–6 hrs", highlight: false },
                  { icon: "🕉️", day: "Day 3", place: "Bantoli → Madhyamaheshwar Temple", detail: "Trek 6 km • 4–5 hrs", highlight: true },
                  { icon: "🌅", day: "Day 4", place: "Buda Madhyamaheshwar → Return", detail: "Optional peak visit + descent", highlight: false },
                ].map((r) => (
                  <div key={r.day} className={`route-item${r.highlight ? " highlight" : ""}`}>
                    <div className="route-dot">{r.icon}</div>
                    <div className="route-info">
                      <strong>{r.day}: {r.place}</strong>
                      <span>{r.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="section-wa-strip">
                <a href={WA_URL} target="_blank" rel="noopener noreferrer">
                  📋 Get Full Itinerary on WhatsApp
                </a>
              </div>
            </div>
            <div className="trek-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&auto=format&fit=crop&q=80"
                alt="Madhyamaheshwar trek trail through Himalayan meadows"
                loading="lazy"
              />
              <div className="trek-img-badge">
                ⛰️ 3,497m<br />
                <span style={{ fontWeight: 400, fontSize: "0.85em" }}>Madhyamaheshwar Temple</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── HOMESTAY ──────────────────────────────────────── */}
        <section className="homestay-section">
          <div className="container">
            <div className="homestay-header">
              <p className="sec-label">Where You Stay</p>
              <h2 className="sec-head">Raunlenk Homestays &amp; Camps</h2>
              <p className="sec-sub">
                Comfortable, clean, and warm — our partner homestays in Raunlenk and Ransi offer
                genuine Garhwali hospitality with hot meals and cozy beds.
              </p>
            </div>
            <div className="homestay-grid">
              {[
                {
                  tag: "Base Camp",
                  title: "Raunlenk Homestay",
                  img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&auto=format&fit=crop&q=75",
                  amenities: ["Hot Meals", "Clean Rooms", "Warm Blankets", "WiFi (limited)", "Attached Bath", "Mountain View"],
                },
                {
                  tag: "Transit Camp",
                  title: "Bantoli Tent Camp",
                  img: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&auto=format&fit=crop&q=75",
                  amenities: ["Swiss Tents", "Sleeping Bags", "Bonfire", "Hot Water", "Garhwali Dinner", "Stargazing"],
                },
              ].map((h) => (
                <div key={h.title} className="hs-card">
                  <div className="hs-img-wrap">
                    <img src={h.img} alt={h.title} loading="lazy" />
                    <span className="hs-tag">{h.tag}</span>
                  </div>
                  <div className="hs-body">
                    <h3>{h.title}</h3>
                    <div className="hs-amenities">
                      {h.amenities.map((a) => <span key={a} className="amenity">{a}</span>)}
                    </div>
                  </div>
                  <div className="hs-footer">
                    <a href={CALL_URL} className="btn-call">📞 Call</a>
                    <a href={WA_URL} className="btn-wa" target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── GALLERY STRIP ─────────────────────────────────── */}
        <section className="gallery-section">
          <div className="container">
            <div className="gallery-header">
              <p className="sec-label">Photo Gallery</p>
              <h2 className="sec-head">Through the Lens of Yatra</h2>
            </div>
            <div className="gallery-grid">
              {[
                { src: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&auto=format&fit=crop&q=80", alt: "Madhyamaheshwar temple in snow", cap: "Madhyamaheshwar Temple" },
                { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop&q=75", alt: "Trek trail through Himalayan forest", cap: "Trek Trail" },
                { src: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=600&auto=format&fit=crop&q=75", alt: "Alpine meadows bugyal", cap: "Bantoli Bugyal" },
                { src: "https://images.unsplash.com/photo-1612892483236-52d32a0e0ac1?w=600&auto=format&fit=crop&q=75", alt: "Himalayan peaks sunrise", cap: "Chaukhamba Views" },
                { src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&auto=format&fit=crop&q=75", alt: "Garhwali homestay", cap: "Raunlenk Homestay" },
              ].map((g) => (
                <div key={g.cap} className="gallery-item">
                  <img src={g.src} alt={g.alt} loading="lazy" />
                  <div className="gallery-cap">{g.cap}</div>
                </div>
              ))}
            </div>
            <div className="section-wa-strip">
              <Link href="/gallery">📷 View Full Gallery</Link>
            </div>
          </div>
        </section>

        {/* ── EXPERIENCE ─────────────────────────────────────── */}
        <section className="experience-section">
          <div className="container exp-inner">
            <div className="exp-image">
              <img
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900&auto=format&fit=crop&q=80"
                alt="Local Garhwali guide leading trekkers"
                loading="lazy"
              />
            </div>
            <div className="exp-content">
              <p className="sec-label">The Raunlenk Way</p>
              <h2 className="sec-head">Local Knowledge, Genuine Care</h2>
              <p className="sec-sub">
                रौनलेंक, राँसी से मध्यमहेश्वर तक – हम आपका सफर आसान और यादगार बनाते हैं।
                We have been guiding pilgrims from this village for over a decade.
              </p>
              <div className="exp-grid">
                {[
                  { icon: "🗺️", title: "Local Expert Guides", desc: "Born and raised near the temple" },
                  { icon: "🍲", title: "Home-cooked Meals", desc: "Traditional Garhwali dal-rice-sabzi" },
                  { icon: "🚐", title: "Door-to-Door Transfer", desc: "Pickup from Rishikesh/Haridwar" },
                  { icon: "⛑️", title: "Safety First", desc: "First-aid trained, satellite phone" },
                  { icon: "📞", title: "24/7 Support", desc: "Always reachable on WhatsApp" },
                  { icon: "💰", title: "Best Price Guarantee", desc: "No hidden charges, ever" },
                ].map((e) => (
                  <div key={e.title} className="exp-item">
                    <span className="exp-icon">{e.icon}</span>
                    <div>
                      <strong>{e.title}</strong>
                      <span>{e.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              <a href={WA_URL} className="btn-wa" target="_blank" rel="noopener noreferrer">
                💬 Ask Us Anything
              </a>
            </div>
          </div>
        </section>

        {/* ── SERVICES ──────────────────────────────────────── */}
        <section className="services-section">
          <div className="container">
            <div className="services-header">
              <p className="sec-label">What We Offer</p>
              <h2 className="sec-head">Complete Yatra Services</h2>
              <p className="sec-sub">
                From the moment you book till you return home, we handle everything so you can
                focus purely on the spiritual journey.
              </p>
            </div>
            <div className="srv-grid">
              {[
                { icon: "🚐", title: "Transport & Pickup", desc: "AC vehicle pickup from Rishikesh/Haridwar to Raunlenk and return drop." },
                { icon: "🏡", title: "Accommodation", desc: "Comfortable homestays and camps with meals included throughout the trek." },
                { icon: "🧭", title: "Expert Guide", desc: "Licensed local guides fluent in Hindi, basic English, and the trail's every secret." },
                { icon: "🍽️", title: "All Meals", desc: "Breakfast, lunch, and dinner — wholesome Garhwali food from our homestay kitchens." },
                { icon: "📋", title: "Permits & Passes", desc: "We handle all forest entry permits, KMVN registrations, and route passes." },
                { icon: "🏥", title: "Medical Support", desc: "First-aid kit, oxygen cylinder at high altitude, and emergency evacuation contacts." },
              ].map((s) => (
                <div key={s.title} className="srv-card">
                  <span className="srv-icon">{s.icon}</span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="section-wa-strip">
              <a href={WA_URL} target="_blank" rel="noopener noreferrer">
                💬 Get a Custom Quote
              </a>
            </div>
          </div>
        </section>

        {/* ── ABOUT RAUNLENK ───────────────────────────────── */}
        <section className="about-section">
          <div className="container about-inner">
            <div className="about-image-col">
              <img
                src="https://images.unsplash.com/photo-1545389336-cf090694435e?w=900&auto=format&fit=crop&q=80"
                alt="Raunlenk village with Himalayan backdrop"
                loading="lazy"
              />
              <div className="about-stat-box">
                <span className="stat-n">10+</span>
                <span className="stat-l">Years of Service</span>
              </div>
            </div>
            <div className="about-text">
              <p className="sec-label">About Us</p>
              <h2 className="sec-head">From Raunlenk, with Devotion</h2>
              <blockquote className="about-hindi">
                &ldquo;जो भक्त सच्चे मन से मध्यमहेश्वर के दर्शन करते हैं, उन्हें भोलेनाथ की कृपा अवश्य मिलती है।&rdquo;
              </blockquote>
              <p>
                We are a family-run travel group based in Raunlenk village — the gateway to
                Madhyamaheshwar temple. Our founder grew up watching pilgrims struggle to navigate
                the trail, and started this service to make every yatra safe, comfortable, and truly
                memorable.
              </p>
              <p>
                Over a decade later, we have guided over 2,000 pilgrims from across India and abroad.
                Every trek with us supports local families in Raunlenk, Ransi, and Ukhimath.
              </p>
              <Link href="/about-us" className="btn-call">
                Read Our Story →
              </Link>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ─────────────────────────────────── */}
        <section className="testimonials-section">
          <div className="container">
            <div className="testi-header">
              <p className="sec-label">Pilgrim Reviews</p>
              <h2 className="sec-head">What Yatris Say</h2>
            </div>
            <div className="testi-grid">
              {[
                {
                  stars: "★★★★★",
                  text: "Absolutely divine experience! The team from Raunlenk took such good care of us throughout the trek. Food was excellent and our guide knew every story about the temple. Will come again for the full Panch Kedar circuit.",
                  name: "Priya Sharma",
                  from: "Delhi",
                },
                {
                  stars: "★★★★★",
                  text: "I had been wanting to do Madhyamaheshwar for 10 years. Finally did it with this team and it exceeded every expectation. The homestay was so warm and welcoming. Highly recommend for families!",
                  name: "Rajesh Patel",
                  from: "Ahmedabad",
                },
                {
                  stars: "★★★★★",
                  text: "As a solo female traveler I was nervous, but the team made me feel completely safe. WhatsApp support was prompt, the guide was professional, and the views from the temple are something I will never forget.",
                  name: "Meera Nair",
                  from: "Bangalore",
                },
              ].map((t) => (
                <div key={t.name} className="testi-card">
                  <span className="testi-quote" aria-hidden="true">&ldquo;</span>
                  <div className="testi-stars">{t.stars}</div>
                  <p className="testi-text">&ldquo;{t.text}&rdquo;</p>
                  <div className="testi-author">
                    <div className="testi-avatar">🙏</div>
                    <div className="testi-info">
                      <strong>{t.name}</strong>
                      <span>{t.from}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT STRIP ──────────────────────────────── */}
        <section className="contact-section">
          <div className="container contact-inner">
            <div className="contact-info">
              <p className="sec-label">Contact Us</p>
              <h2 className="sec-head">Start Your Yatra Today</h2>
              <p className="sec-sub">
                Have questions? Reach us on WhatsApp, phone, or email. We usually reply within
                30 minutes during daytime hours (IST).
              </p>
              <div className="contact-methods">
                <a href={WA_URL} className="cm-item" target="_blank" rel="noopener noreferrer">
                  <div className="cm-icon">💬</div>
                  <div className="cm-text">
                    <strong>WhatsApp (Fastest)</strong>
                    <span>+91 98765 43210</span>
                  </div>
                </a>
                <a href={CALL_URL} className="cm-item">
                  <div className="cm-icon">📞</div>
                  <div className="cm-text">
                    <strong>Call Us</strong>
                    <span>+91 98765 43210</span>
                  </div>
                </a>
                <div className="cm-item">
                  <div className="cm-icon">✉️</div>
                  <div className="cm-text">
                    <strong>Email</strong>
                    <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                  </div>
                </div>
                <div className="cm-item">
                  <div className="cm-icon">📍</div>
                  <div className="cm-text">
                    <strong>Our Location</strong>
                    <span>Raunlenk, Ukhimath, Rudraprayag, Uttarakhand</span>
                  </div>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
    </>
  );
}
