import Head from "next/head";
import Link from "next/link";
import InnerBanner from "@/components/InnerBanner";

const WA_URL =
  "https://wa.me/919876543210?text=Namaste%21+I+am+interested+in+Madhyamaheshwar+Yatra+tour+packages.+Please+share+details.";
const CALL_URL = "tel:+919876543210";

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us – Madhyamaheshwar Yatra | Local Guides from Raunlenk</title>
        <meta
          name="description"
          content="Learn about Madhyamaheshwar Yatra — your trusted local partner for Madhyamaheshwar temple and Panch Kedar pilgrimage tours. Based in Raunlenk village since 2012."
        />
        <link rel="canonical" href="https://madhyamaheshwaryatra.in/about-us" />
      </Head>

      <main>
        <InnerBanner
          title="About Us"
          bgImage="https://images.unsplash.com/photo-1545389336-cf090694435e?w=1600&auto=format&fit=crop&q=80"
        />

        {/* ── OUR STORY ──────────────────────────────────────── */}
        <section className="about-story-section">
          <div className="container story-grid">
            <div className="story-image-col">
              <img
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900&auto=format&fit=crop&q=80"
                alt="Raunlenk village homestay in Uttarakhand"
                className="story-img-main"
                loading="lazy"
              />
              <div className="story-stat">
                <span className="sn">10+</span>
                <span className="sl">Years Serving Yatris</span>
              </div>
            </div>

            <div className="story-text-col">
              <p className="sec-label">Our Story</p>
              <h1 className="sec-head">Born in the Mountains, <em>Built for Pilgrims</em></h1>
              <blockquote className="story-hindi-quote">
                &ldquo;जो भक्त सच्चे मन से मध्यमहेश्वर के दर्शन करते हैं, उन्हें भोलेनाथ की कृपा अवश्य मिलती है।&rdquo;
              </blockquote>
              <p className="story-para">
                We are a family-run pilgrimage service based in <strong>Raunlenk village</strong> — the
                last major settlement before the Madhyamaheshwar temple trek begins at Ransi. Our founder
                grew up watching devotees struggle to navigate the trail without proper support, and founded
                this service with a simple mission: make every yatra safe, affordable, and unforgettable.
              </p>
              <p className="story-para">
                Over a decade later, we have welcomed over <strong>2,000 pilgrims</strong> from across India
                and beyond. Every rupee you spend supports local families in Raunlenk, Ransi, Bantoli, and
                Ukhimath — the communities that call these sacred mountains home.
              </p>
              <p className="story-para">
                We specialize in <strong>Madhyamaheshwar Yatra</strong> and the <strong>complete Panch Kedar
                circuit</strong> — Kedarnath, Madhyamaheshwar, Tungnath, Rudranath, and Kalpeshwar. Our local
                knowledge of trail conditions, seasonal closures, and hidden viewpoints is unmatched.
              </p>
              <Link href="/tour-packages" className="btn-call">
                🗺️ Explore Our Packages
              </Link>
            </div>
          </div>
        </section>

        {/* ── OUR VALUES ─────────────────────────────────────── */}
        <section className="values-section">
          <div className="container">
            <div className="values-header">
              <p className="sec-label">Why Choose Us</p>
              <h2 className="sec-head">What Sets Us Apart</h2>
              <p className="sec-sub">
                We don&apos;t just sell tour packages — we take personal responsibility for every pilgrim
                who trusts us with their yatra.
              </p>
            </div>
            <div className="values-grid">
              {[
                {
                  icon: "🏠",
                  title: "True Local Guides",
                  desc: "Our guides are from Raunlenk village itself. They know every stone, every shortcut, every story of the trail. No third-party contractors.",
                },
                {
                  icon: "💰",
                  title: "Honest Pricing",
                  desc: "We publish clear package prices with zero hidden charges. What you book is exactly what you get — no surprises at the campsite.",
                },
                {
                  icon: "🍲",
                  title: "Home-cooked Food",
                  desc: "Nutritious, hygienic Garhwali meals made with fresh local ingredients. Hot breakfast and dinner every day of your trek.",
                },
                {
                  icon: "📞",
                  title: "Always Reachable",
                  desc: "WhatsApp and phone support 7 AM to 10 PM IST. We respond within 30 minutes and never leave a pilgrim's question unanswered.",
                },
                {
                  icon: "⛑️",
                  title: "Safety First",
                  desc: "All guides are first-aid trained. We carry oxygen cylinders above 3,000m and have emergency evacuation protocols in place.",
                },
                {
                  icon: "🌿",
                  title: "Eco-Responsible",
                  desc: "We follow strict leave-no-trace principles and actively participate in trail clean-up drives in the Madhyamaheshwar sanctuary.",
                },
              ].map((v) => (
                <div key={v.title} className="value-card">
                  <span className="value-icon">{v.icon}</span>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────── */}
        <section className="about-cta-section">
          <div className="container cta-about-inner">
            <div className="cta-about-text">
              <h2>Ready to meet us on the trail?</h2>
              <p>
                Call or WhatsApp us today to discuss your dates, group size, and budget.
                We will put together the perfect Yatra plan for you.
              </p>
            </div>
            <div className="cta-about-btns">
              <a href={CALL_URL} className="btn-call">📞 Call Now</a>
              <a href={WA_URL} className="btn-wa" target="_blank" rel="noopener noreferrer">
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
