import Head from "next/head";
import { useState } from "react";
import InnerBanner from "@/components/InnerBanner";
import Link from "next/link";

const WA_BASE = "https://wa.me/919876543210?text=";

function bookMsg(pkg: string) {
  return WA_BASE + encodeURIComponent(`Namaste! I want to book the ${pkg}. Please share availability and details.`);
}

const packages = [
  {
    id: "kedarnath",
    name: "Kedarnath Yatra",
    part: "1st Kedar — Stomach (Udara)",
    altitude: "3,583m",
    price: 10999,
    oldPrice: 13999,
    duration: "4N / 5D",
    featured: false,
    features: ["Gaurikund – Kedarnath trek", "Helicopter option available", "Temple darshan priority", "Rishikesh pickup & drop", "All meals included"],
  },
  {
    id: "madhyamaheshwar",
    name: "Madhyamaheshwar Trek",
    part: "2nd Kedar — Navel (Nabhi)",
    altitude: "3,497m",
    price: 11999,
    oldPrice: 14999,
    duration: "5N / 6D",
    featured: true,
    features: ["Ransi – Bantoli – Temple route", "Stay at our Raunlenk homestay", "Buda Madhyamaheshwar viewpoint", "Alpine bugyal walks", "Expert local guide"],
  },
  {
    id: "tungnath",
    name: "Tungnath – Chandrashila",
    part: "3rd Kedar — Arms (Bahu)",
    altitude: "3,680m",
    price: 8999,
    oldPrice: 11999,
    duration: "3N / 4D",
    featured: false,
    features: ["Highest Shiva temple in world", "Chandrashila sunrise trek", "Chopta — mini Switzerland", "Easy moderate difficulty", "All meals & stay"],
  },
  {
    id: "rudranath",
    name: "Rudranath Trek",
    part: "4th Kedar — Face (Mukha)",
    altitude: "2,286m",
    price: 10499,
    oldPrice: 13499,
    duration: "5N / 6D",
    featured: false,
    features: ["Sagar – Panar – Pithwara route", "Dense rhododendron forests", "Vaitarni Kund & Narad Kund", "Anusuiya Mata temple visit", "Challenging & rewarding"],
  },
  {
    id: "kalpeshwar",
    name: "Kalpeshwar Yatra",
    part: "5th Kedar — Hair (Jata)",
    altitude: "2,134m",
    price: 6999,
    oldPrice: 8999,
    duration: "2N / 3D",
    featured: false,
    features: ["Only year-round Kedar temple", "Urgam Valley scenic drive", "Short easy trek 2 km", "Perfect for elderly & families", "Budget-friendly package"],
  },
];

const itinerary = [
  {
    day: "Day 1",
    title: "Rishikesh / Haridwar → Raunlenk",
    route: "Drive via Devprayag – Srinagar – Rudraprayag – Ukhimath",
    steps: [
      { icon: "🚐", title: "Early morning pickup", desc: "Departure from Rishikesh/Haridwar at 5–6 AM in an AC vehicle." },
      { icon: "🏔️", title: "Scenic mountain drive", desc: "Pass through Devprayag (confluence of Alaknanda & Bhagirathi), Srinagar, Rudraprayag." },
      { icon: "🍽️", title: "Lunch at Ukhimath", desc: "Stop at Ukhimath for lunch at a local dhaba — try the dal tadka." },
      { icon: "🏡", title: "Check-in at Raunlenk", desc: "Arrive by afternoon. Check in to our homestay, evening tea, and guide briefing." },
    ],
    meta: ["Distance: 215 km", "Travel: 6–7 hrs", "Altitude: 1,380m"],
  },
  {
    day: "Day 2",
    title: "Raunlenk → Ransi → Bantoli",
    route: "Trek 9 km | 5–6 hrs | Ascent ~1,200m",
    steps: [
      { icon: "🌅", title: "Early breakfast at homestay", desc: "Aloo parathas, chai, and packed lunch prepared by our host family." },
      { icon: "🥾", title: "Trek begins at Ransi (1,800m)", desc: "Short drive to Ransi forest gate. Register permits and begin trek through dense oak and rhododendron forest." },
      { icon: "⛺", title: "Bantoli camp (3,000m)", desc: "Reach the beautiful alpine campsite by late afternoon. Bonfire, hot dinner, stargazing." },
    ],
    meta: ["Trek: 9 km", "Duration: 5–6 hrs", "Altitude gain: ~1,200m"],
  },
  {
    day: "Day 3",
    title: "Bantoli → Madhyamaheshwar Temple",
    route: "Trek 6 km | 4–5 hrs | Ascent ~500m",
    steps: [
      { icon: "🌄", title: "Sunrise over Himalayan peaks", desc: "Wake up to stunning views of Chaukhamba, Kedarnath, and Neelkanth from the bugyal." },
      { icon: "🌸", title: "Trek through Kharchkund bugyal", desc: "Walk across vast alpine meadows carpeted with Brahmakamal and other Himalayan flowers." },
      { icon: "🕉️", title: "Darshan at Madhyamaheshwar", desc: "Arrive at the temple (3,497m). Perform puja, take blessings of Bhole Baba's navel form (nabhi)." },
      { icon: "⛺", title: "Camp near temple", desc: "Overnight at tent camp near the temple. Clear skies offer incredible stargazing." },
    ],
    meta: ["Trek: 6 km", "Duration: 4–5 hrs", "Max altitude: 3,497m"],
  },
  {
    day: "Day 4",
    title: "Buda Madhyamaheshwar → Return Trek",
    route: "Optional 2 km climb + full descent to Ransi",
    steps: [
      { icon: "🏔️", title: "Optional: Buda Madhyamaheshwar (3,890m)", desc: "Early morning hike to Buda MM for panoramic views of Kedarnath and the Himalayan range. 2 km, 2 hrs." },
      { icon: "🥾", title: "Descent to Ransi", desc: "Begin descent after breakfast. Total 15 km trek back to Ransi via Bantoli. Knees workout!" },
      { icon: "🚐", title: "Drive back to Raunlenk", desc: "Short drive to Raunlenk. Hot shower, dinner, and rest at homestay." },
    ],
    meta: ["Optional trek: 2 km extra", "Descent: 15 km", "Duration: 7–8 hrs"],
  },
];

const included = [
  "✅ Pickup & drop from Rishikesh/Haridwar",
  "✅ AC vehicle for all road transfers",
  "✅ All accommodation (homestay + tents)",
  "✅ All meals (breakfast, lunch, dinner)",
  "✅ Certified local guide throughout",
  "✅ Forest entry permits & KMVN registration",
  "✅ First-aid kit + oxygen cylinder at altitude",
  "✅ Sleeping bags & trekking poles on request",
];

const excluded = [
  "❌ Personal travel insurance",
  "❌ Helicopter rides (optional add-on)",
  "❌ Temple donation and puja items",
  "❌ Alcohol and aerated beverages",
  "❌ Porter charges (₹800/day — optional)",
  "❌ Any meals not mentioned in itinerary",
  "❌ GST (5% extra on base package price)",
  "❌ Any cost due to natural calamity or road block",
];

type AccordionProps = { items: typeof itinerary };

function ItineraryAccordion({ items }: AccordionProps) {
  const [openDay, setOpenDay] = useState<number | null>(0);
  return (
    <div className="itinerary-wrap">
      {items.map((item, i) => (
        <div key={item.day} className={`itin-item${openDay === i ? " is-open" : ""}`}>
          <button
            className="itin-toggle"
            onClick={() => setOpenDay(openDay === i ? null : i)}
            aria-expanded={openDay === i}
          >
            <div className="itin-toggle-left">
              <span className="itin-day-badge">{item.day}</span>
              <div>
                <strong>{item.title}</strong>
                <span>{item.route}</span>
              </div>
            </div>
            <span className="itin-arrow">▼</span>
          </button>

          {openDay === i && (
            <div className="itin-body">
              <div className="itin-body-inner">
                <div className="itin-timeline">
                  {item.steps.map((s) => (
                    <div key={s.title} className="itin-step">
                      <div className="it-dot">{s.icon}</div>
                      <div>
                        <strong>{s.title}</strong>
                        <p>{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="itin-meta-row">
                  {item.meta.map((m) => <span key={m}>{m}</span>)}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

const departureDates: Record<string, { label: string; status: "avail" | "few" | "full" | "last" }[]> = {
  May: [
    { label: "May 15", status: "avail" },
    { label: "May 22", status: "avail" },
    { label: "May 29", status: "avail" },
  ],
  June: [
    { label: "Jun 5", status: "avail" },
    { label: "Jun 12", status: "few", },
    { label: "Jun 19", status: "avail" },
    { label: "Jun 26", status: "avail" },
  ],
  July: [
    { label: "Jul 3", status: "avail" },
    { label: "Jul 10", status: "avail" },
    { label: "Jul 17", status: "few" },
    { label: "Jul 24", status: "full" },
    { label: "Jul 31", status: "avail" },
  ],
  August: [
    { label: "Aug 7", status: "avail" },
    { label: "Aug 14", status: "last" },
    { label: "Aug 21", status: "avail" },
    { label: "Aug 28", status: "avail" },
  ],
  September: [
    { label: "Sep 4", status: "avail" },
    { label: "Sep 11", status: "few" },
    { label: "Sep 18", status: "avail" },
    { label: "Sep 25", status: "avail" },
  ],
  October: [
    { label: "Oct 2", status: "avail" },
    { label: "Oct 9", status: "avail" },
    { label: "Oct 16", status: "few" },
    { label: "Oct 23", status: "avail" },
  ],
};

export default function TourPackages() {
  return (
    <>
      <Head>
        <title>Panch Kedar Tour Packages – Madhyamaheshwar Yatra | Best Prices 2025</title>
        <meta
          name="description"
          content="Book Madhyamaheshwar temple tour packages and full Panch Kedar circuit from Raunlenk. All-inclusive packages with expert local guides, homestay &amp; meals from ₹6,999."
        />
        <meta name="keywords" content="Madhyamaheshwar tour package, Panch Kedar package, Kedarnath tour, Uttarakhand yatra packages, Tungnath package, Rudranath trek" />
        <link rel="canonical" href="https://madhyamaheshwaryatra.in/tour-packages" />
      </Head>

      <main>
        <InnerBanner
          title="Tour Packages"
          bgImage="https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=1600&auto=format&fit=crop&q=80"
        />

        {/* ── STATS STRIP ──────────────────────────────────── */}
        <div className="pkg-stats-strip">
          <div className="container">
            <div className="pkg-stats-grid">
              {[
                { icon: "🏔️", stat: "5 Temples", sub: "All Panch Kedar" },
                { icon: "🙏", stat: "2,000+", sub: "Happy Pilgrims" },
                { icon: "📅", stat: "Since 2012", sub: "Trusted Service" },
                { icon: "💰", stat: "From ₹6,999", sub: "All Inclusive" },
                { icon: "⭐", stat: "4.9 / 5", sub: "Average Rating" },
              ].map((s) => (
                <div key={s.stat} className="pkg-stat">
                  <span className="ps-icon">{s.icon}</span>
                  <div>
                    <strong>{s.stat}</strong>
                    <span>{s.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── PACKAGE CARDS ──────────────────────────────── */}
        <section className="pkg-cards-section">
          <div className="container">
            <div className="pkg-cards-header">
              <p className="sec-label">Our Packages</p>
              <h2 className="sec-head">Choose Your Sacred Journey</h2>
              <p className="sec-sub">
                All packages are all-inclusive — transport, accommodation, meals, guide, and permits.
                Prices are per person and include GST.
              </p>
            </div>

            {/* Combo Card — Full Circuit */}
            <div className="combo-card">
              <div className="combo-left">
                <span className="combo-badge">⭐ Best Value</span>
                <h3 className="combo-title">Complete Panch Kedar Circuit</h3>
                <p className="combo-subtitle">
                  All five sacred Shiva temples in one epic 15-night journey — the ultimate Himalayan
                  pilgrimage experience.
                </p>
                <div className="combo-temples">
                  {["Kedarnath", "Madhyamaheshwar", "Tungnath", "Rudranath", "Kalpeshwar"].map((t) => (
                    <span key={t} className="combo-temple-pill">{t}</span>
                  ))}
                </div>
              </div>
              <div className="combo-right">
                <ul className="combo-features">
                  <li>✅ 15 Nights / 16 Days complete circuit</li>
                  <li>✅ All transport, meals &amp; accommodation</li>
                  <li>✅ Dedicated guide for full journey</li>
                  <li>✅ All permits &amp; registrations handled</li>
                  <li>✅ Private group option available</li>
                  <li>✅ Save ₹10,000+ vs booking individually</li>
                </ul>
                <div className="combo-price-row">
                  <div className="combo-price-stack">
                    <span className="combo-price-label">Per Person (all-inclusive)</span>
                    <div className="combo-price-main">
                      <span className="pkg-price-old">₹59,999</span>
                      <span className="pkg-price-new">₹49,999</span>
                    </div>
                    <span className="pkg-price-per">Incl. all taxes • Min 2 persons</span>
                  </div>
                  <a
                    href={bookMsg("Full Panch Kedar Circuit (15N/16D) — ₹49,999")}
                    className="btn-wa combo-book-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    💬 Book This Package
                  </a>
                </div>
              </div>
            </div>

            {/* Individual Package Cards */}
            <div className="ind-cards-grid">
              {packages.map((pkg) => (
                <div key={pkg.id} className={`ind-card${pkg.featured ? " ind-card--featured" : ""}`}>
                  <div className="ind-card-top">
                    {pkg.featured
                      ? <span className="ind-popular-badge">⭐ Most Popular</span>
                      : <div className="ind-card-top-spacer" />
                    }
                    <p className="ind-temple-name">{pkg.name}</p>
                    <p className="ind-shrine-part">{pkg.part}</p>
                    <span className="ind-altitude">⛰️ {pkg.altitude}</span>
                  </div>
                  <div className="ind-card-mid">
                    <ul className="ind-feat-list">
                      {pkg.features.map((f) => (
                        <li key={f}>✓ {f}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="ind-card-foot">
                    <div className="ind-price-row">
                      <span className="pkg-price-old">₹{pkg.oldPrice.toLocaleString()}</span>
                      <span className="pkg-price-new">₹{pkg.price.toLocaleString()}</span>
                      <span className="pkg-price-per">/ person</span>
                    </div>
                    <span style={{ fontSize: "var(--fs-xs)", color: "var(--clr-text-muted)" }}>
                      {pkg.duration} • All inclusive
                    </span>
                    <a
                      href={bookMsg(`${pkg.name} (${pkg.duration}) — ₹${pkg.price.toLocaleString()}`)}
                      className="btn-wa ind-book-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      💬 Book Now
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <p className="pkg-note">
              💡 All prices are per person based on double sharing. Solo traveller surcharge of ₹1,500 applies.
              Group discounts available for 6+ persons. <Link href="/contact-us">Contact us</Link> for custom quotes.
            </p>
          </div>
        </section>

        {/* ── ITINERARY ──────────────────────────────────── */}
        <section className="itinerary-section">
          <div className="container">
            <div className="itinerary-header">
              <p className="sec-label">Day by Day</p>
              <h2 className="sec-head">Madhyamaheshwar Itinerary</h2>
              <p className="sec-sub">
                A detailed look at what to expect on our flagship 5-night Madhyamaheshwar trek.
                Click each day to expand.
              </p>
            </div>
            <ItineraryAccordion items={itinerary} />
          </div>
        </section>

        {/* ── INCLUSIONS / EXCLUSIONS ─────────────────────── */}
        <section className="inc-exc-section">
          <div className="container">
            <div className="inc-exc-header">
              <p className="sec-label">Package Details</p>
              <h2 className="sec-head">What&apos;s Included &amp; What&apos;s Not</h2>
            </div>
            <div className="inc-exc-grid">
              <div className="inc-card">
                <div className="inc-card-head">
                  <h3>Inclusions</h3>
                </div>
                <ul>
                  {included.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
              <div className="exc-card">
                <div className="exc-card-head">
                  <h3>Exclusions</h3>
                </div>
                <ul>
                  {excluded.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── DEPARTURE DATES ──────────────────────────────── */}
        <section className="dates-section">
          <div className="container">
            <div className="dates-header">
              <p className="sec-label">Season 2025</p>
              <h2 className="sec-head">Available Departure Dates</h2>
              <p className="sec-sub">
                Madhyamaheshwar temple opens on May 15 and closes around November 15 each year.
                Book early — slots fill up fast!
              </p>
            </div>

            <div className="dates-legend">
              <span><span className="leg-dot leg-dot--avail" />Available</span>
              <span><span className="leg-dot leg-dot--few" />Few Spots Left</span>
              <span><span className="leg-dot leg-dot--full" />Fully Booked</span>
            </div>

            <div className="dates-grid">
              {Object.entries(departureDates).map(([month, dates]) => (
                <div key={month} className="month-block">
                  <div className="month-name">{month} 2025</div>
                  <div className="date-tags">
                    {dates.map((d) => (
                      <span
                        key={d.label}
                        className={`date-tag date-tag--${d.status}`}
                      >
                        {d.label}
                        {d.status === "few" && <em>· few left</em>}
                        {d.status === "full" && <em>· full</em>}
                        {d.status === "last" && <em>· last seats</em>}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="section-wa-strip">
              <a
                href={bookMsg("Madhyamaheshwar Trek")}
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 Check Availability on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
