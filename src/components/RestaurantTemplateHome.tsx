"use client";

import type { CSSProperties } from "react";
import { useEffect } from "react";
import { initRestaurantTemplatePage } from "@/lib/restaurant-template-init";

const HERO_VIDEO =
  "https://videos.pexels.com/video-files/3296271/3296271-uhd_2560_1440_25fps.mp4";
const FEATURE_VIDEO =
  "https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4";

export default function RestaurantTemplateHome() {
  useEffect(() => {
    initRestaurantTemplatePage();
  }, []);

  return (
    <>
      <header className="navbar" id="navbar">
        <div className="container nav-inner">
          <a href="#top" className="logo">
            MUSTER
          </a>
          <button
            className="menu-toggle"
            id="menuToggle"
            type="button"
            aria-label="Menü öffnen"
          >
            <span />
            <span />
            <span />
          </button>
          <ul className="nav-links" id="navLinks">
            <li>
              <a href="#menu">Menü</a>
            </li>
            <li>
              <a href="#erlebnis">Erlebnis</a>
            </li>
            <li>
              <a href="#ueber-uns">Über uns</a>
            </li>
            <li>
              <a href="#reservierung">Reservierung</a>
            </li>
            <li>
              <a href="#kontakt">Kontakt</a>
            </li>
          </ul>
        </div>
      </header>

      <main id="top">
        <section className="hero" data-animate="hero">
          <video
            className="hero-video-bg"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            poster="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80"
          >
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>
          <div className="hero-overlay" />
          <div className="hero-content reveal visible">
            <div className="badge">◎ Musterstrasse 1, 8000 Musterstadt</div>
            <h1>Restaurant Vorlage</h1>
            <div className="hero-divider" aria-hidden="true" />
            <p>Beispieltext: Ihr Claim oder Küchenrichtung — hier anpassen.</p>
            <div className="hero-actions">
              <a href="#menu" className="btn btn-outline">
                Speisekarte
              </a>
              <a href="#reservierung" className="btn btn-filled">
                Tisch reservieren
              </a>
            </div>
          </div>
          <a
            href="#highlights"
            className="scroll-arrow"
            id="scrollArrow"
            aria-label="Nach unten scrollen"
          >
            <span className="scroll-chevron" />
          </a>
        </section>

        <div
          className="highlights section-divider"
          id="highlights"
          data-animate="stats-section"
        >
          <div className="container highlights-inner">
            <div
              className="highlight-item animate-hidden"
              data-animate="stats-item"
              data-count="100"
              data-suffix="+"
            >
              <span className="highlight-dot" />
              <strong className="stat-number">0</strong>
              <span className="stat-label">Beispiel-Bewertungen</span>
            </div>
            <div
              className="highlight-item animate-hidden"
              data-animate="stats-item"
              data-count="2020"
              data-suffix=""
            >
              <span className="highlight-dot" />
              <strong className="stat-number">0</strong>
              <span className="stat-label">Seit (Musterjahr)</span>
            </div>
            <div
              className="highlight-item animate-hidden"
              data-animate="stats-item"
              data-count="8000"
              data-suffix=""
            >
              <span className="highlight-dot" />
              <strong className="stat-number">0</strong>
              <span className="stat-label">PLZ / Standort (Muster)</span>
            </div>
          </div>
        </div>

        <section
          className="menu-section section-divider"
          id="menu"
          data-animate="menu-section"
        >
          <div className="container">
            <h2 className="animate-hidden" data-animate="menu-heading">
              Unsere <span className="heading-italic">Muster-Gerichte</span>
            </h2>
            <div className="tabs" role="tablist" aria-label="Menüfilter">
              <button
                className="tab-btn active animate-hidden"
                data-animate="menu-tab"
                data-filter="alle"
                type="button"
              >
                Alle
              </button>
              <button
                className="tab-btn animate-hidden"
                data-animate="menu-tab"
                data-filter="fleisch"
                type="button"
              >
                Fleisch
              </button>
              <button
                className="tab-btn animate-hidden"
                data-animate="menu-tab"
                data-filter="vegetarisch"
                type="button"
              >
                Vegetarisch
              </button>
              <button
                className="tab-btn animate-hidden"
                data-animate="menu-tab"
                data-filter="getraenke"
                type="button"
              >
                Getränke
              </button>
            </div>

            <div className="menu-grid" id="menuGrid">
              <article
                className="menu-card animate-hidden"
                data-animate="menu-card"
                data-category="fleisch"
              >
                <figure>
                  <img
                    loading="lazy"
                    src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80"
                    alt="Mustergericht Fleisch"
                  />
                </figure>
                <div className="menu-content">
                  <div className="menu-head">
                    <h3>Mustergericht A</h3>
                    <span className="price">CHF 00</span>
                  </div>
                  <p>Kurzbeschreibung Platzhalter — Text ersetzen.</p>
                </div>
              </article>
              <article
                className="menu-card animate-hidden"
                data-animate="menu-card"
                data-category="vegetarisch"
              >
                <figure>
                  <img
                    loading="lazy"
                    src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80"
                    alt="Mustergericht vegetarisch"
                  />
                </figure>
                <div className="menu-content">
                  <div className="menu-head">
                    <h3>Mustergericht B</h3>
                    <span className="price">CHF 00</span>
                  </div>
                  <p>Kurzbeschreibung Platzhalter — Text ersetzen.</p>
                </div>
              </article>
              <article
                className="menu-card animate-hidden"
                data-animate="menu-card"
                data-category="alle"
              >
                <figure>
                  <img
                    loading="lazy"
                    src="https://images.unsplash.com/photo-1608039790184-a7f7d53f0f5f?auto=format&fit=crop&w=900&q=80"
                    alt="Mustergericht Kombi"
                  />
                </figure>
                <div className="menu-content">
                  <div className="menu-head">
                    <h3>Mustergericht C</h3>
                    <span className="price">CHF 00</span>
                  </div>
                  <p>Kurzbeschreibung Platzhalter — Text ersetzen.</p>
                </div>
              </article>
              <article
                className="menu-card animate-hidden"
                data-animate="menu-card"
                data-category="getraenke"
              >
                <figure>
                  <img
                    loading="lazy"
                    src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80"
                    alt="Mustergetränk"
                  />
                </figure>
                <div className="menu-content">
                  <div className="menu-head">
                    <h3>Mustergetränk</h3>
                    <span className="price">CHF 00</span>
                  </div>
                  <p>Kurzbeschreibung Platzhalter — Text ersetzen.</p>
                </div>
              </article>
              <article
                className="menu-card animate-hidden"
                data-animate="menu-card"
                data-category="fleisch"
              >
                <figure>
                  <img
                    loading="lazy"
                    src="https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&w=900&q=80"
                    alt="Mustergericht Fleisch 2"
                  />
                </figure>
                <div className="menu-content">
                  <div className="menu-head">
                    <h3>Mustergericht D</h3>
                    <span className="price">CHF 00</span>
                  </div>
                  <p>Kurzbeschreibung Platzhalter — Text ersetzen.</p>
                </div>
              </article>
              <article
                className="menu-card animate-hidden"
                data-animate="menu-card"
                data-category="vegetarisch"
              >
                <figure>
                  <img
                    loading="lazy"
                    src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80"
                    alt="Mustergericht vegetarisch 2"
                  />
                </figure>
                <div className="menu-content">
                  <div className="menu-head">
                    <h3>Mustergericht E</h3>
                    <span className="price">CHF 00</span>
                  </div>
                  <p>Kurzbeschreibung Platzhalter — Text ersetzen.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section
          className="coffee-cinematic section-divider animate-hidden"
          id="erlebnis"
          data-animate="coffee-cinematic"
        >
          <video
            id="coffeeVideo"
            className="coffee-video"
            loop
            playsInline
            preload="none"
            poster="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80"
          >
            <source src={FEATURE_VIDEO} type="video/mp4" />
          </video>
          <div className="coffee-video-overlay" />

          <div className="coffee-particles" aria-hidden="true">
            <span
              className="coffee-particle"
              style={{ "--x": "8%", "--delay": "0s" } as CSSProperties}
            />
            <span
              className="coffee-particle"
              style={{ "--x": "18%", "--delay": "0.6s" } as CSSProperties}
            />
            <span
              className="coffee-particle"
              style={{ "--x": "29%", "--delay": "1.2s" } as CSSProperties}
            />
            <span
              className="coffee-particle"
              style={{ "--x": "41%", "--delay": "0.9s" } as CSSProperties}
            />
            <span
              className="coffee-particle"
              style={{ "--x": "56%", "--delay": "1.8s" } as CSSProperties}
            />
            <span
              className="coffee-particle"
              style={{ "--x": "68%", "--delay": "0.4s" } as CSSProperties}
            />
            <span
              className="coffee-particle"
              style={{ "--x": "82%", "--delay": "1.4s" } as CSSProperties}
            />
            <span
              className="coffee-particle"
              style={{ "--x": "92%", "--delay": "0.2s" } as CSSProperties}
            />
          </div>

          <div className="coffee-overlay-content" id="coffeeOverlay">
            <div className="coffee-label">✦ MUSTER-VIDEO</div>
            <div className="coffee-title-wrap">
              <h2 className="coffee-title">
                <span className="coffee-word">Ihr</span>
                <span className="coffee-word">Highlight</span>
              </h2>
              <div className="coffee-title-divider" />
              <p className="coffee-subtitle">Stock-Video als Platzhalter — eigenes Material einbinden.</p>
            </div>
          </div>

          <div className="coffee-play-wrap" id="coffeePlayWrap">
            <button
              type="button"
              className="coffee-play-btn"
              id="coffeePlayBtn"
              aria-label="Muster-Video abspielen"
            >
              <span className="coffee-play-icon" aria-hidden="true" />
            </button>
            <p className="coffee-play-caption">Muster-Video ansehen</p>
          </div>

          <div className="coffee-spinner" id="coffeeSpinner" aria-hidden="true" />

          <div className="coffee-controls" id="coffeeControls" aria-label="Video-Steuerung">
            <button type="button" className="coffee-control-btn" id="coffeePlayPause" aria-label="Play/Pause">
              ▶
            </button>
            <div
              className="coffee-progress"
              id="coffeeProgress"
              role="slider"
              aria-label="Video-Fortschritt"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={0}
            >
              <div className="coffee-progress-track">
                <div className="coffee-progress-fill" id="coffeeProgressFill">
                  <span className="coffee-progress-thumb" />
                </div>
              </div>
            </div>
            <span className="coffee-time" id="coffeeTime">
              0:00 / 0:00
            </span>
            <button type="button" className="coffee-control-btn" id="coffeeMuteBtn" aria-label="Ton an/aus">
              🔊
            </button>
            <button type="button" className="coffee-control-btn" id="coffeeFullscreenBtn" aria-label="Vollbild">
              ⛶
            </button>
          </div>
        </section>

        <div className="coffee-divider-band">
          Musterstrasse 1 · 8000 Musterstadt · +41 00 000 00 00
        </div>

        <section
          className="team-section section-divider"
          id="ueber-uns"
          data-animate="team-section"
        >
          <div className="container">
            <h2 className="animate-hidden" data-animate="section-heading">
              Das Team (Muster)
            </h2>
            <div className="team-grid">
              <article className="team-card animate-hidden" data-animate="team-card">
                <img
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80"
                  alt="Musterporträt Team 1"
                />
                <h3>Vorname Nachname</h3>
                <p>Funktion / Rolle (Platzhalter)</p>
              </article>
              <article className="team-card animate-hidden" data-animate="team-card">
                <img
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80"
                  alt="Musterporträt Team 2"
                />
                <h3>Vorname Nachname</h3>
                <p>Funktion / Rolle (Platzhalter)</p>
              </article>
            </div>
          </div>
        </section>

        <section
          className="reviews section-divider"
          id="bewertungen"
          data-animate="reviews-section"
        >
          <div className="container">
            <h2 className="animate-hidden" data-animate="reviews-heading">
              Beispiel-Bewertungen
            </h2>
            <p className="sub">Muster · keine echten Google-Daten</p>
            <div className="reviews-viewport">
              <div className="reviews-track" id="reviewsTrack">
                <article className="review-card animate-hidden" data-animate="review-left">
                  <div className="stars" aria-label="5 von 5 Sternen">
                    ★★★★★
                  </div>
                  <p>&quot;Kurzer Beispieltext für eine positive Bewertung.&quot;</p>
                  <strong>M. Muster</strong>
                </article>
                <article className="review-card animate-hidden" data-animate="review-center">
                  <div className="stars" aria-label="5 von 5 Sternen">
                    ★★★★★
                  </div>
                  <p>&quot;Weiterer Platzhalter — hier echte Zitate einfügen.&quot;</p>
                  <strong>A. Beispiel</strong>
                </article>
                <article className="review-card animate-hidden" data-animate="review-right">
                  <div className="stars" aria-label="4 von 5 Sternen">
                    ★★★★☆
                  </div>
                  <p>&quot;Neutraler Mustertext mit vier Sternen.&quot;</p>
                  <strong>K. Vorlage</strong>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section
          className="gallery section-divider"
          id="galerie"
          data-animate="gallery-section"
        >
          <div className="container">
            <h2 className="animate-hidden" data-animate="section-heading">
              Galerie (Musterbilder)
            </h2>
            <div className="gallery-grid" id="galleryGrid">
              <div className="gallery-item animate-hidden" data-animate="gallery-item">
                <img
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80"
                  alt="Muster Galerie 1"
                />
              </div>
              <div className="gallery-item animate-hidden" data-animate="gallery-item">
                <img
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80"
                  alt="Muster Galerie 2"
                />
              </div>
              <div className="gallery-item animate-hidden" data-animate="gallery-item">
                <img
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=80"
                  alt="Muster Galerie 3"
                />
              </div>
              <div className="gallery-item animate-hidden" data-animate="gallery-item">
                <img
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?auto=format&fit=crop&w=900&q=80"
                  alt="Muster Galerie 4"
                />
              </div>
              <div className="gallery-item animate-hidden" data-animate="gallery-item">
                <img
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=900&q=80"
                  alt="Muster Galerie 5"
                />
              </div>
              <div className="gallery-item animate-hidden" data-animate="gallery-item">
                <img
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80"
                  alt="Muster Galerie 6"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          className="reservation-section section-divider"
          id="reservierung"
          data-animate="contact-section"
        >
          <div className="container">
            <h2 className="animate-hidden" data-animate="section-heading">
              Reservierung & Kontakt
            </h2>
            <div className="reservation-wrap">
              <div className="card animate-hidden" data-animate="contact-form">
                <form id="reservationForm">
                  <div className="grid">
                    <div>
                      <label htmlFor="name">Name</label>
                      <input id="name" name="name" type="text" required />
                    </div>
                    <div>
                      <label htmlFor="email">Email</label>
                      <input id="email" name="email" type="email" required />
                    </div>
                  </div>
                  <div className="grid">
                    <div>
                      <label htmlFor="telefon">Telefon</label>
                      <input id="telefon" name="telefon" type="tel" required />
                    </div>
                    <div>
                      <label htmlFor="personen">Personenanzahl</label>
                      <select id="personen" name="personen" required defaultValue="">
                        <option value="">Bitte wählen</option>
                        <option>1 Person</option>
                        <option>2 Personen</option>
                        <option>3 Personen</option>
                        <option>4 Personen</option>
                        <option>5 Personen</option>
                        <option>6+ Personen</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid">
                    <div>
                      <label htmlFor="datum">Datum</label>
                      <input id="datum" name="datum" type="date" required />
                    </div>
                    <div>
                      <label htmlFor="uhrzeit">Uhrzeit</label>
                      <input id="uhrzeit" name="uhrzeit" type="time" required />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="nachricht">Nachricht</label>
                    <textarea
                      id="nachricht"
                      name="nachricht"
                      placeholder="Besondere Wünsche, Allergien oder Fragen"
                    />
                  </div>
                  <button type="submit" className="btn btn-filled" style={{ marginTop: 14 }}>
                    Reservierung senden
                  </button>
                  <p className="success-message" id="successMessage">
                    Vielen Dank! Ihre Anfrage wurde erfolgreich gesendet. Wir melden uns in Kürze.
                  </p>
                </form>
              </div>

              <div className="card contact-info animate-hidden" id="kontakt" data-animate="contact-map">
                <h3 style={{ marginBottom: 8 }}>Kontakt (Muster)</h3>
                <p>
                  <strong>Adresse:</strong> Musterstrasse 1, 8000 Musterstadt
                </p>
                <p>
                  <strong>Telefon:</strong> +41 00 000 00 00
                </p>
                <p>
                  <strong>Email:</strong> kontakt@example.com
                </p>
                <div className="map-wrap">
                  <iframe
                    title="Karte Platzhalter Musterstrasse"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=8.52%2C47.36%2C8.55%2C47.39&amp;layer=mapnik"
                    width="100%"
                    height={220}
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <h3 style={{ marginBottom: 8 }}>Öffnungszeiten (Muster)</h3>
                <table className="hours-table" aria-label="Öffnungszeiten">
                  <tbody>
                    <tr>
                      <td>Montag - Donnerstag</td>
                      <td>11:30 - 22:00</td>
                    </tr>
                    <tr>
                      <td>Freitag</td>
                      <td>11:30 - 23:00</td>
                    </tr>
                    <tr>
                      <td>Samstag</td>
                      <td>12:00 - 23:00</td>
                    </tr>
                    <tr>
                      <td>Sonntag</td>
                      <td>12:00 - 21:00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-divider">
        <div className="container">
          <div className="footer-top">
            <div>
              <h3>MUSTER</h3>
              <p>Restaurant-Website Vorlage</p>
            </div>
            <div>
              <h4>Navigation</h4>
              <ul>
                <li>
                  <a href="#menu">Menü</a>
                </li>
                <li>
                  <a href="#erlebnis">Erlebnis</a>
                </li>
                <li>
                  <a href="#ueber-uns">Über uns</a>
                </li>
                <li>
                  <a href="#reservierung">Reservierung</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Öffnungszeiten (Muster)</h4>
              <ul>
                <li>Mo-Do: 11:30 - 22:00</li>
                <li>Fr: 11:30 - 23:00</li>
                <li>Sa: 12:00 - 23:00</li>
                <li>So: 12:00 - 21:00</li>
              </ul>
            </div>
            <div>
              <h4>Kontakt</h4>
              <ul>
                <li>Musterstrasse 1, 8000 Musterstadt</li>
                <li>+41 00 000 00 00</li>
                <li>kontakt@example.com</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            © 2026 Restaurant-Vorlage (Muster) · Alle Rechte vorbehalten
          </div>
        </div>
      </footer>

      <button className="to-top" id="toTop" type="button" aria-label="Nach oben">
        ↑
      </button>

      <div className="lightbox" id="lightbox" aria-hidden="true">
        <img src="" alt="Vergrößertes Bild" id="lightboxImg" />
      </div>

      <div className="curtain" id="pageCurtain" aria-hidden="true">
        <div className="curtain-label">MUSTER</div>
        <div className="curtain-subtitle">Restaurant-Website Vorlage</div>
      </div>
    </>
  );
}
