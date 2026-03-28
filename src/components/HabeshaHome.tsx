"use client";

import type { CSSProperties } from "react";
import { useEffect } from "react";
import { initHabeshaPage } from "@/lib/habesha-init";

export default function HabeshaHome() {
  useEffect(() => {
    initHabeshaPage();
  }, []);

  return (
    <>
      <header className="navbar" id="navbar">
        <div className="container nav-inner">
          <a href="#top" className="logo">
            HABESHA
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
              <a href="#kaffee">Kaffee</a>
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
            <source src="/videos/hero.mp4" type="video/mp4" />
            <source
              src="https://videos.pexels.com/video-files/3296271/3296271-uhd_2560_1440_25fps.mp4"
              type="video/mp4"
            />
          </video>
          <div className="hero-overlay" />
          <div className="hero-content reveal visible">
            <div className="badge">◎ Schreinerstrasse 64, 8004 Zürich</div>
            <h1>Restaurant Habesha</h1>
            <div className="hero-divider" aria-hidden="true" />
            <p>Authentische Spezialitäten aus Äthiopien & Eritrea</p>
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
              data-count="500"
              data-suffix="+"
            >
              <span className="highlight-dot" />
              <strong className="stat-number">0</strong>
              <span className="stat-label">Bewertungen</span>
            </div>
            <div
              className="highlight-item animate-hidden"
              data-animate="stats-item"
              data-count="2019"
              data-suffix=""
            >
              <span className="highlight-dot" />
              <strong className="stat-number">0</strong>
              <span className="stat-label">Seit</span>
            </div>
            <div
              className="highlight-item animate-hidden"
              data-animate="stats-item"
              data-count="8004"
              data-suffix=""
            >
              <span className="highlight-dot" />
              <strong className="stat-number">0</strong>
              <span className="stat-label">Zürich, Schreinerstrasse</span>
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
              Unsere <span className="heading-italic">Spezialitäten</span>
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
                    src="https://images.unsplash.com/photo-1514516345957-556ca7b4d90a?auto=format&fit=crop&w=900&q=80"
                    alt="Zigni Gericht"
                  />
                </figure>
                <div className="menu-content">
                  <div className="menu-head">
                    <h3>Zigni</h3>
                    <span className="price">CHF 22</span>
                  </div>
                  <p>Würziges Rindfleisch-Stew.</p>
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
                    alt="Shiro Gericht"
                  />
                </figure>
                <div className="menu-content">
                  <div className="menu-head">
                    <h3>Shiro</h3>
                    <span className="price">CHF 18</span>
                  </div>
                  <p>Kichererbsenpüree mit Gewürzen.</p>
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
                    alt="Injera Kombi"
                  />
                </figure>
                <div className="menu-content">
                  <div className="menu-head">
                    <h3>Injera Kombi</h3>
                    <span className="price">CHF 24</span>
                  </div>
                  <p>Traditionelles Fladenbrot mit Beilagen.</p>
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
                    alt="Eritreischer Kaffee"
                  />
                </figure>
                <div className="menu-content">
                  <div className="menu-head">
                    <h3>Eritreischer Kaffee</h3>
                    <span className="price">CHF 6</span>
                  </div>
                  <p>Traditionelle Zeremonie.</p>
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
                    alt="Tibs Gericht"
                  />
                </figure>
                <div className="menu-content">
                  <div className="menu-head">
                    <h3>Tibs</h3>
                    <span className="price">CHF 25</span>
                  </div>
                  <p>Gebratenes Fleisch mit Gemüse.</p>
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
                    alt="Ful Gericht"
                  />
                </figure>
                <div className="menu-content">
                  <div className="menu-head">
                    <h3>Ful</h3>
                    <span className="price">CHF 16</span>
                  </div>
                  <p>Favabohnen mit Gewürzen.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section
          className="coffee-cinematic section-divider animate-hidden"
          id="kaffee"
          data-animate="coffee-cinematic"
        >
          <video
            id="coffeeVideo"
            className="coffee-video"
            loop
            playsInline
            preload="none"
            poster="/images/coffee-poster.jpg"
          >
            <source src="/videos/coffee.mp4" type="video/mp4" />
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
            <div className="coffee-label">✦ HABESHA ORIGINAL</div>
            <div className="coffee-title-wrap">
              <h2 className="coffee-title">
                <span className="coffee-word">Die</span>
                <span className="coffee-word">Kaffezeremonie</span>
              </h2>
              <div className="coffee-title-divider" />
              <p className="coffee-subtitle">Handgemacht. Traditionell. Unvergesslich.</p>
            </div>
          </div>

          <div className="coffee-play-wrap" id="coffeePlayWrap">
            <button
              type="button"
              className="coffee-play-btn"
              id="coffeePlayBtn"
              aria-label="Kaffezeremonie abspielen"
            >
              <span className="coffee-play-icon" aria-hidden="true" />
            </button>
            <p className="coffee-play-caption">Die Kaffezeremonie erleben</p>
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
          Schreinerstrasse 64 · 8004 Zürich · 076 468 88 60
        </div>

        <section
          className="team-section section-divider"
          id="ueber-uns"
          data-animate="team-section"
        >
          <div className="container">
            <h2 className="animate-hidden" data-animate="section-heading">
              Lernen Sie uns kennen
            </h2>
            <div className="team-grid">
              <article className="team-card animate-hidden" data-animate="team-card">
                <img loading="lazy" src="/inhaber.png" alt="Inhaber" />
                <h3>Tsehaye</h3>
                <p>Inhaber & Geschäftsführer</p>
              </article>
              <article className="team-card animate-hidden" data-animate="team-card">
                <img loading="lazy" src="/managerin.png" alt="Managerin" />
                <h3>Fireweyni</h3>
                <p>Managerin</p>
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
              Was unsere Gäste sagen
            </h2>
            <p className="sub">4.5★ auf Google</p>
            <div className="reviews-viewport">
              <div className="reviews-track" id="reviewsTrack">
                <article className="review-card animate-hidden" data-animate="review-left">
                  <div className="stars" aria-label="5 von 5 Sternen">
                    ★★★★★
                  </div>
                  <p>&quot;Stammkunde seit 2019. Tip Top ist das Mittagsmenü&quot;</p>
                  <strong>S. Peter</strong>
                </article>
                <article className="review-card animate-hidden" data-animate="review-center">
                  <div className="stars" aria-label="5 von 5 Sternen">
                    ★★★★★
                  </div>
                  <p>&quot;Ich habe das vegetarische Shiro gegessen, einfach sensationell!&quot;</p>
                  <strong>M. Albert</strong>
                </article>
                <article className="review-card animate-hidden" data-animate="review-right">
                  <div className="stars" aria-label="4 von 5 Sternen">
                    ★★★★☆
                  </div>
                  <p>&quot;Loved the diversity and the coffee!&quot;</p>
                  <strong>J. von Lanz</strong>
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
              Einblicke
            </h2>
            <div className="gallery-grid" id="galleryGrid">
              <div className="gallery-item animate-hidden" data-animate="gallery-item">
                <img
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80"
                  alt="Habesha Gericht 1"
                />
              </div>
              <div className="gallery-item animate-hidden" data-animate="gallery-item">
                <img
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80"
                  alt="Habesha Ambiente 2"
                />
              </div>
              <div className="gallery-item animate-hidden" data-animate="gallery-item">
                <img
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=80"
                  alt="Habesha Gericht 3"
                />
              </div>
              <div className="gallery-item animate-hidden" data-animate="gallery-item">
                <img
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?auto=format&fit=crop&w=900&q=80"
                  alt="Habesha Gericht 4"
                />
              </div>
              <div className="gallery-item animate-hidden" data-animate="gallery-item">
                <img
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=900&q=80"
                  alt="Habesha Getränk 5"
                />
              </div>
              <div className="gallery-item animate-hidden" data-animate="gallery-item">
                <img
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80"
                  alt="Habesha Gericht 6"
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
                <h3 style={{ marginBottom: 8 }}>Kontakt</h3>
                <p>
                  <strong>Adresse:</strong> Schreinerstrasse 64, 8004 Zürich
                </p>
                <p>
                  <strong>Telefon:</strong> 076 468 88 60
                </p>
                <p>
                  <strong>Email:</strong> info@restaurant-habesha.ch
                </p>
                <div className="map-wrap">
                  <iframe
                    title="Google Maps Restaurant Habesha"
                    src="https://www.google.com/maps?q=Schreinerstrasse+64,+8004+Zurich&output=embed"
                    width="100%"
                    height={220}
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <h3 style={{ marginBottom: 8 }}>Öffnungszeiten</h3>
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
              <h3>HABESHA</h3>
              <p>A Taste of East Africa</p>
            </div>
            <div>
              <h4>Navigation</h4>
              <ul>
                <li>
                  <a href="#menu">Menü</a>
                </li>
                <li>
                  <a href="#kaffee">Kaffee</a>
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
              <h4>Öffnungszeiten</h4>
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
                <li>Schreinerstrasse 64, 8004 Zürich</li>
                <li>076 468 88 60</li>
                <li>info@restaurant-habesha.ch</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            © 2026 Restaurant Habesha · Alle Rechte vorbehalten
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
        <div className="curtain-label">HABESHA</div>
        <div className="curtain-subtitle">A Taste of East Africa</div>
      </div>
    </>
  );
}
