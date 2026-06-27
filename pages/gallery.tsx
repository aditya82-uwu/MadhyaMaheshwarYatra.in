import Head from "next/head";
import { useState } from "react";
import InnerBanner from "@/components/InnerBanner";

const WA_URL =
  "https://wa.me/919876543210?text=Namaste%21+I+am+interested+in+Madhyamaheshwar+Yatra+tour+packages.+Please+share+details.";

const PHOTOS = [
  { src: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=900&auto=format&fit=crop&q=80", thumb: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=500&auto=format&fit=crop&q=70", alt: "Madhyamaheshwar temple in snow", cap: "Madhyamaheshwar Temple", cat: "Temple" },
  { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&auto=format&fit=crop&q=80", thumb: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&auto=format&fit=crop&q=70", alt: "Himalayan peaks sunrise", cap: "Himalayan Peaks", cat: "Views" },
  { src: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=900&auto=format&fit=crop&q=80", thumb: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=500&auto=format&fit=crop&q=70", alt: "Alpine meadows bugyal", cap: "Bantoli Bugyal", cat: "Trek" },
  { src: "https://images.unsplash.com/photo-1612892483236-52d32a0e0ac1?w=900&auto=format&fit=crop&q=80", thumb: "https://images.unsplash.com/photo-1612892483236-52d32a0e0ac1?w=500&auto=format&fit=crop&q=70", alt: "Himalayan river valley", cap: "Kedarnath Range", cat: "Views" },
  { src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900&auto=format&fit=crop&q=80", thumb: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&auto=format&fit=crop&q=70", alt: "Himalayan homestay", cap: "Raunlenk Homestay", cat: "Stay" },
  { src: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=900&auto=format&fit=crop&q=80", thumb: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=500&auto=format&fit=crop&q=70", alt: "Mountain campsite", cap: "Bantoli Camp", cat: "Stay" },
  { src: "https://images.unsplash.com/photo-1502786129293-79981df4e689?w=900&auto=format&fit=crop&q=80", thumb: "https://images.unsplash.com/photo-1502786129293-79981df4e689?w=500&auto=format&fit=crop&q=70", alt: "Himalayan forest trail", cap: "Forest Trek Trail", cat: "Trek" },
  { src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=900&auto=format&fit=crop&q=80", thumb: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&auto=format&fit=crop&q=70", alt: "Sacred Himalayan river", cap: "Markindey River", cat: "Trek" },
  { src: "https://images.unsplash.com/photo-1531761535209-180857e963b9?w=900&auto=format&fit=crop&q=80", thumb: "https://images.unsplash.com/photo-1531761535209-180857e963b9?w=500&auto=format&fit=crop&q=70", alt: "Snowy Himalayan passes", cap: "Snow-covered Trail", cat: "Trek" },
  { src: "https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?w=900&auto=format&fit=crop&q=80", thumb: "https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?w=500&auto=format&fit=crop&q=70", alt: "Trekkers on ridge", cap: "Ridge Walk at Sunrise", cat: "Views" },
  { src: "https://images.unsplash.com/photo-1517824806704-9040b037703b?w=900&auto=format&fit=crop&q=80", thumb: "https://images.unsplash.com/photo-1517824806704-9040b037703b?w=500&auto=format&fit=crop&q=70", alt: "Traditional Indian temple", cap: "Panch Kedar Shrine", cat: "Temple" },
  { src: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=900&auto=format&fit=crop&q=80", thumb: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=500&auto=format&fit=crop&q=70", alt: "Himalayan wildflowers", cap: "Brahmakamal Flowers", cat: "Flora" },
];

const CATS = ["All", "Temple", "Trek", "Views", "Stay", "Flora"];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightbox, setLightbox] = useState<null | typeof PHOTOS[0]>(null);

  const filtered = activeFilter === "All" ? PHOTOS : PHOTOS.filter((p) => p.cat === activeFilter);

  return (
    <>
      <Head>
        <title>Gallery – Madhyamaheshwar Yatra | Panch Kedar Photos</title>
        <meta
          name="description"
          content="Browse stunning photos of Madhyamaheshwar temple, Panch Kedar trekking trails, alpine meadows, and Garhwali homestays from our yatra tours."
        />
        <link rel="canonical" href="https://madhyamaheshwaryatra.in/gallery" />
      </Head>

      <main>
        <InnerBanner
          title="Gallery"
          bgImage="https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=1600&auto=format&fit=crop&q=80"
        />

        <section style={{ padding: "var(--sp-16) 0 var(--sp-24)", background: "var(--clr-snow-white)" }}>
          <div className="container">
            {/* Section header */}
            <div style={{ textAlign: "center", marginBottom: "var(--sp-12)" }}>
              <p className="sec-label">Our Photo Gallery</p>
              <h2 className="sec-head">Moments from the Yatra</h2>
              <p className="sec-sub" style={{ marginInline: "auto" }}>
                Temples, trails, meadows, and memories — captured through the eyes of our pilgrims
                and guides. Every photo tells a story of faith and mountains.
              </p>
            </div>

            {/* Filter tabs */}
            <div style={{ display: "flex", gap: "var(--sp-2)", justifyContent: "center", flexWrap: "wrap", marginBottom: "var(--sp-10)" }}>
              {CATS.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  style={{
                    padding: "var(--sp-2) var(--sp-5)",
                    borderRadius: "var(--radius-pill)",
                    border: "1.5px solid",
                    borderColor: activeFilter === cat ? "var(--clr-forest)" : "var(--clr-snow-deep)",
                    background: activeFilter === cat ? "var(--clr-forest-deep)" : "var(--clr-snow)",
                    color: activeFilter === cat ? "var(--clr-white)" : "var(--clr-text-mid)",
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--fs-sm)",
                    fontWeight: "var(--fw-bold)",
                    cursor: "pointer",
                    transition: "all var(--t-fast)",
                    letterSpacing: "0.03em",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "var(--sp-3)",
              }}
            >
              {filtered.map((photo) => (
                <div
                  key={photo.cap}
                  className="gallery-item"
                  style={{ height: "220px", cursor: "zoom-in" }}
                  onClick={() => setLightbox(photo)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View: ${photo.cap}`}
                  onKeyDown={(e) => e.key === "Enter" && setLightbox(photo)}
                >
                  <img src={photo.thumb} alt={photo.alt} loading="lazy" />
                  <div className="gallery-cap">{photo.cap}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="section-wa-strip" style={{ paddingTop: "var(--sp-12)" }}>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer">
                📸 Share Your Yatra Photos With Us
              </a>
            </div>
          </div>
        </section>

        {/* Lightbox */}
        {lightbox && (
          <div
            onClick={() => setLightbox(null)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.92)",
              zIndex: 9000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "var(--sp-6)",
            }}
            role="dialog"
            aria-label="Photo lightbox"
          >
            <button
              onClick={() => setLightbox(null)}
              aria-label="Close lightbox"
              style={{
                position: "absolute",
                top: "var(--sp-6)",
                right: "var(--sp-6)",
                background: "rgba(255,255,255,0.10)",
                border: "none",
                borderRadius: "50%",
                width: 44,
                height: 44,
                color: "#fff",
                fontSize: "1.4rem",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ✕
            </button>
            <div
              style={{ maxWidth: 900, width: "100%", textAlign: "center" }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                style={{ maxHeight: "80vh", width: "100%", objectFit: "contain", borderRadius: "var(--radius-md)" }}
              />
              <p style={{ color: "rgba(255,255,255,0.65)", marginTop: "var(--sp-4)", fontFamily: "var(--font-display)", fontSize: "var(--fs-md)" }}>
                {lightbox.cap}
              </p>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
