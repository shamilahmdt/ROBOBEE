import { useState } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Black+Han+Sans&family=Rajdhani:wght@600;700&family=Nunito:wght@400;600;700&display=swap');

  :root {
    --gold: #FFD700;
    --black: #000000;
    --blue: #4A90E2;
    --white: #ffffff;
    --bg-start: #daeeff;
    --bg-end: #eef6ff;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    font-family: 'Nunito', sans-serif;
    background: linear-gradient(160deg, var(--bg-start) 0%, var(--bg-end) 100%);
    min-height: 100vh;
  }

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 48px;
    background: rgba(255,255,255,0.6);
    backdrop-filter: blur(12px);
    border-bottom: 2px solid rgba(255,215,0,0.3);
    position: sticky;
    top: 0;
    z-index: 100;
  }

  .nav-logo {
    font-family: 'Black Han Sans', sans-serif;
    font-size: 28px;
    color: var(--black);
    letter-spacing: 2px;
    text-decoration: none;
  }

  .nav-logo span { color: var(--gold); }

  .nav-links {
    display: flex;
    gap: 32px;
    list-style: none;
  }

  .nav-links a {
    font-family: 'Rajdhani', sans-serif;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: var(--black);
    text-decoration: none;
    transition: color 0.2s;
  }

  .nav-links a:hover { color: var(--blue); }

  .nav-cta {
    background: var(--gold);
    color: var(--black);
    font-family: 'Rajdhani', sans-serif;
    font-weight: 700;
    font-size: 15px;
    letter-spacing: 1px;
    border: none;
    padding: 10px 28px;
    border-radius: 50px;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(255,215,0,0.4);
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .nav-cta:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255,215,0,0.6);
  }

  /* CONTACT HERO */
  .contact-hero {
    text-align: center;
    padding: 80px 48px 60px;
    position: relative;
  }

  .contact-hero::before {
    content: '';
    position: absolute;
    top: 0; left: 50%; transform: translateX(-50%);
    width: 700px; height: 350px;
    background: radial-gradient(ellipse, rgba(74,144,226,0.15) 0%, transparent 70%);
    pointer-events: none;
  }

  .contact-pill {
    display: inline-block;
    background: var(--black);
    color: var(--gold);
    font-family: 'Rajdhani', sans-serif;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 3px;
    text-transform: uppercase;
    padding: 8px 24px;
    border-radius: 50px;
    margin-bottom: 24px;
  }

  .contact-title {
    font-family: 'Caveat', cursive;
    font-size: clamp(48px, 6vw, 78px);
    color: var(--black);
    margin-bottom: 16px;
    position: relative;
    z-index: 1;
  }

  .contact-title span { color: var(--blue); }

  .contact-subtitle {
    font-family: 'Nunito', sans-serif;
    font-size: 17px;
    color: #555;
    max-width: 520px;
    margin: 0 auto;
    line-height: 1.7;
    position: relative;
    z-index: 1;
  }

  /* MAIN CONTACT LAYOUT */
  .contact-main {
    display: grid;
    grid-template-columns: 1fr 1.4fr;
    gap: 40px;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 48px 80px;
    align-items: start;
  }

  /* INFO PANEL */
  .info-panel {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .info-card {
    background: var(--black);
    border: 2px solid rgba(255,215,0,0.25);
    border-radius: 16px;
    padding: 28px 24px;
    display: flex;
    align-items: flex-start;
    gap: 18px;
    transition: border-color 0.3s, transform 0.3s;
  }

  .info-card:hover {
    border-color: var(--gold);
    transform: translateX(6px);
  }

  .info-icon {
    width: 52px; height: 52px;
    border-radius: 12px;
    background: var(--gold);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    flex-shrink: 0;
  }

  .info-content {}

  .info-label {
    font-family: 'Rajdhani', sans-serif;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: #666;
    margin-bottom: 4px;
  }

  .info-value {
    font-family: 'Black Han Sans', sans-serif;
    font-size: 20px;
    color: var(--gold);
    letter-spacing: 0.5px;
  }

  .info-desc {
    font-family: 'Nunito', sans-serif;
    font-size: 13px;
    color: #777;
    margin-top: 4px;
  }

  /* SOCIAL ROW */
  .social-card {
    background: linear-gradient(135deg, #4A90E2, #1a65c0);
    border-radius: 16px;
    padding: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }

  .social-info {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .social-ig-icon {
    width: 52px; height: 52px;
    background: rgba(255,255,255,0.2);
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
  }

  .social-label {
    font-family: 'Rajdhani', sans-serif;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: rgba(255,255,255,0.6);
    margin-bottom: 4px;
  }

  .social-handle {
    font-family: 'Black Han Sans', sans-serif;
    font-size: 22px;
    color: var(--white);
    letter-spacing: 1px;
  }

  .social-follow-btn {
    background: var(--white);
    color: var(--blue);
    font-family: 'Rajdhani', sans-serif;
    font-weight: 700;
    font-size: 13px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    border: none;
    padding: 10px 22px;
    border-radius: 50px;
    cursor: pointer;
    transition: transform 0.2s;
    white-space: nowrap;
  }

  .social-follow-btn:hover { transform: scale(1.05); }

  /* FORM */
  .form-panel {
    background: white;
    border-radius: 20px;
    padding: 48px 40px;
    box-shadow: 0 8px 40px rgba(0,0,0,0.08);
    border: 2px solid rgba(255,215,0,0.2);
  }

  .form-title {
    font-family: 'Black Han Sans', sans-serif;
    font-size: 26px;
    color: var(--black);
    letter-spacing: 1px;
    margin-bottom: 8px;
  }

  .form-title span { color: var(--blue); }

  .form-sub {
    font-family: 'Nunito', sans-serif;
    font-size: 14px;
    color: #888;
    margin-bottom: 32px;
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 16px;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 16px;
  }

  .form-group.half { margin-bottom: 0; }

  .form-label {
    font-family: 'Rajdhani', sans-serif;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #444;
  }

  .form-input, .form-select, .form-textarea {
    width: 100%;
    padding: 14px 18px;
    border: 2px solid #e8e8e8;
    border-radius: 10px;
    font-family: 'Nunito', sans-serif;
    font-size: 15px;
    color: var(--black);
    background: #fafafa;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
  }

  .form-input:focus, .form-select:focus, .form-textarea:focus {
    border-color: var(--gold);
    box-shadow: 0 0 0 3px rgba(255,215,0,0.15);
    background: white;
  }

  .form-textarea {
    resize: vertical;
    min-height: 120px;
  }

  .form-select {
    appearance: none;
    cursor: pointer;
  }

  .course-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 24px;
  }

  .chip {
    padding: 8px 18px;
    border: 2px solid #e8e8e8;
    border-radius: 50px;
    font-family: 'Rajdhani', sans-serif;
    font-weight: 700;
    font-size: 13px;
    letter-spacing: 0.5px;
    cursor: pointer;
    transition: all 0.2s;
    background: white;
    color: #666;
  }

  .chip.active {
    background: var(--black);
    color: var(--gold);
    border-color: var(--black);
  }

  .chip:hover:not(.active) {
    border-color: var(--gold);
    color: var(--black);
  }

  .form-submit {
    width: 100%;
    background: var(--black);
    color: var(--gold);
    font-family: 'Rajdhani', sans-serif;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 2px;
    text-transform: uppercase;
    border: 2px solid var(--gold);
    padding: 18px;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.25s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .form-submit:hover {
    background: var(--gold);
    color: var(--black);
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(255,215,0,0.4);
  }

  .success-banner {
    background: linear-gradient(135deg, #22c55e, #16a34a);
    color: white;
    border-radius: 12px;
    padding: 20px 24px;
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 24px;
    font-family: 'Nunito', sans-serif;
    font-size: 15px;
    font-weight: 700;
    animation: slideIn 0.4s ease;
  }

  @keyframes slideIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* MAP PLACEHOLDER */
  .map-section {
    padding: 0 48px 80px;
    max-width: 1100px;
    margin: 0 auto;
  }

  .map-placeholder {
    background: var(--black);
    border: 2px solid rgba(255,215,0,0.2);
    border-radius: 20px;
    height: 220px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 12px;
    position: relative;
    overflow: hidden;
  }

  .map-placeholder::before {
    content: '';
    position: absolute;
    inset: 0;
    background: 
      radial-gradient(circle at 30% 50%, rgba(74,144,226,0.1) 0%, transparent 50%),
      radial-gradient(circle at 70% 50%, rgba(255,215,0,0.08) 0%, transparent 50%);
  }

  .map-label {
    font-family: 'Black Han Sans', sans-serif;
    font-size: 20px;
    color: var(--gold);
    letter-spacing: 2px;
    position: relative;
  }

  .map-sub {
    font-family: 'Nunito', sans-serif;
    font-size: 14px;
    color: #666;
    position: relative;
  }

  /* FOOTER */
  .footer {
          background: var(--black);
          color: var(--white);
          padding: 48px;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 32px;
          align-items: start;
        }

        .footer-brand {
          font-family: 'Black Han Sans', sans-serif;
          font-size: 32px;
          color: var(--gold);
          letter-spacing: 2px;
          margin-bottom: 12px;
        }

        .footer-tagline {
          font-family: 'Nunito', sans-serif;
          font-size: 14px;
          color: #888;
          line-height: 1.6;
        }

        .footer-heading {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 20px;
        }

        .footer-contact-item {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 14px;
          font-family: 'Nunito', sans-serif;
          font-size: 15px;
          color: #ccc;
        }

        .footer-contact-icon {
          width: 32px;
          height: 32px;
          background: rgba(255, 215, 0, 0.15);
          border: 1px solid rgba(255, 215, 0, 0.3);
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .footer-link {
          text-decoration: none; /* remove underline */
          color: inherit;        /* inherit parent text color */
          transition: color 0.2s, transform 0.2s; /* smooth hover */
        }

        .footer-link:hover {
          color: var(--gold);
          transform: scale(1.05);
        }

        .footer-bottom {
          grid-column: 1 / -1;
          border-top: 1px solid #222;
          padding-top: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: 'Nunito', sans-serif;
          font-size: 13px;
          color: #555;
        }

  @media (max-width: 768px) {
    .nav { padding: 14px 20px; }
    .nav-links { display: none; }
    .contact-hero { padding: 60px 20px 40px; }
    .contact-main { grid-template-columns: 1fr; padding: 0 20px 60px; }
    .form-row { grid-template-columns: 1fr; }
    .form-panel { padding: 32px 20px; }
    .map-section { padding: 0 20px 60px; }
    .footer { grid-template-columns: 1fr; padding: 40px 20px; }
    .footer-bottom { flex-direction: column; gap: 8px; }
  }
`;

const chips = ["Robotics & AI", "Basic Coding", "Advanced Coding", "Electronics", "Full Program"];

export default function Contact() {
  const [activeChip, setActiveChip] = useState("Full Program");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", age: "", message: "" });

const handleSubmit = (e) => {
  e.preventDefault();

  const phoneNumber = "919746347070"; // Without + symbol

  const message = `
📌 New Enrollment - Robobee

👤 Parent Name: ${form.name}
📞 Phone: ${form.phone}
📧 Email: ${form.email || "Not provided"}
🎂 Child Age: ${form.age}
📚 Interested In: ${activeChip || "Not selected"}

📝 Message:
${form.message || "No message"}
  `;

  const encodedMessage = encodeURIComponent(message);

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(whatsappURL, "_blank");

  setSubmitted(true);
};

  return (
    <>
      <style>{styles}</style>

      <nav className="nav">
        <a href="/" className="nav-logo">ROBO<span>BEE</span></a>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <a href="/contact#enroll-form"><button className="nav-cta">Enroll Now</button></a>
      </nav>

      <section className="contact-hero">
        <div className="contact-pill">Get In Touch</div>
        <h1 className="contact-title">Let's <span>Connect</span><br />& Get Started</h1>
        <p className="contact-subtitle">
          Ready to launch your child's engineering journey? Reach out and we'll guide you through the enrollment process.
        </p>
      </section>

      <div className="contact-main">
        {/* LEFT: Info Panel */}
        <div className="info-panel">
          <div className="info-card">
            <div className="info-icon">📞</div>
            <div className="info-content">
              <a href="tel:9746347070" className="footer-link">
                <div className="info-label">Call Us</div>
                <div className="info-value">9746347070</div>
                <div className="info-desc">Mon–Sat, 9 AM – 6 PM</div>
              </a>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">📍</div>
            <div className="info-content">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Kottakkal+Collegepadi"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >          
                <div className="info-label">Visit Us</div>
                <div className="info-value">Kottakkal</div>
                <div className="info-desc">Collegepadi, Malappuram District, Kerala</div>
              </a>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">🕐</div>
            <div className="info-content">
              <div className="info-label">Batch Timings</div>
              <div className="info-value">Flexible</div>
              <div className="info-desc">Morning & evening batches available for all age groups</div>
            </div>
          </div>

          <div className="social-card">
            <div className="social-info">
              <div className="social-ig-icon">📸</div>
              <div>
                <div className="social-label">Follow Us</div>
                <div className="social-handle">@ROBO_BEE
                </div>
              </div>
            </div>
            <button className="social-follow-btn">
                <a  href="https://www.instagram.com/ro_bobee?igsh=MWIxZGxwMmhubjRwMw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                  >
                    FOLLOW
                </a>
            </button>
          </div>
        </div>

        {/* RIGHT: Form */}
        <div id="enroll-form" className="form-panel">
          <div className="form-title">Enroll Your <span>Child</span></div>
          <p className="form-sub">Fill out the form and we'll get back to you within 24 hours.</p>

          {submitted && (
            <div className="success-banner">
              ✅ Submitted! We'll contact you very soon. Welcome to Robobee!
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group half">
                <label className="form-label">Parent / Guardian Name</label>
                <input
                  className="form-input"
                  type="text"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={e => setForm({...form, name: e.target.value})}
                  required
                />
              </div>
              <div className="form-group half">
                <label className="form-label">Phone Number</label>
                <input
                  className="form-input"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={form.phone}
                  onChange={e => setForm({...form, phone: e.target.value})}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group half">
                <label className="form-label">Email (Optional)</label>
                <input
                  className="form-input"
                  type="email"
                  placeholder="you@email.com"
                  value={form.email}
                  onChange={e => setForm({...form, email: e.target.value})}
                />
              </div>
              <div className="form-group half">
                <label className="form-label">Child's Age</label>
                <select
                  className="form-select"
                  value={form.age}
                  onChange={e => setForm({...form, age: e.target.value})}
                  required
                >
                  <option value="">Select age</option>
                  {["7–9 years", "10–12 years", "13–15 years", "16–18 years"].map(a => (
                    <option key={a} value={a}>{a}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Interested In</label>
              <div className="course-chips">
                {chips.map(c => (
                  <div
                    key={c}
                    className={`chip ${activeChip === c ? "active" : ""}`}
                    onClick={() => setActiveChip(c)}
                  >{c}</div>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Message (Optional)</label>
              <textarea
                className="form-textarea"
                placeholder="Any questions or special requirements..."
                value={form.message}
                onChange={e => setForm({...form, message: e.target.value})}
              />
            </div>

            <button type="submit" className="form-submit">
              <span>🚀</span> Submit Enrollment
            </button>
          </form>
        </div>
      </div>

      <div className="map-section">
        <div className="map-placeholder">
          <div style={{ fontSize: 48 }}>📍</div>
          <div className="map-label">KOTTAKKAL, COLLEGEPADI</div>
          <div className="map-sub">Malappuram District, Kerala — Visit us for a free demo class!</div>
        </div>
      </div>

      <footer className="footer">
        <div>
          <div className="footer-brand">ROBOBEE</div>
          <p className="footer-tagline">Empowering the next generation of engineers, one circuit at a time.</p>
        </div>
    <div>
      <div className="footer-heading">Contact Us</div>

      <div className="footer-contact-item">
        <div className="footer-contact-icon">📞</div>
        <a href="tel:9746347070" className="footer-link">
          9746347070
        </a>
      </div>

      <div className="footer-contact-item">
        <div className="footer-contact-icon">📍</div>
        <a
          href="https://www.google.com/maps/search/?api=1&query=Kottakkal+Collegepadi"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          Kottakkal, Collegepadi
        </a>
      </div>

      <div className="footer-contact-item">
      <div div className="footer-contact-icon">📸</div>
        <a
          href="https://www.instagram.com/ro_bobee?igsh=MWIxZGxwMmhubjRwMw=="
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          @ROBO_BEE
        </a>
      </div>
    </div>
<div>
  <div className="footer-heading">Quick Links</div>
  {[
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Courses", href: "/" },
    { name: "Contact", href: "/contact" }
  ].map(link => (
    <div className="footer-contact-item" key={link.name}>
      <div className="footer-contact-icon">→</div>
      <a href={link.href} className="footer-link">
        {link.name}
      </a>
    </div>
  ))}
</div>
        <div className="footer-bottom">
          <span>© 2025 Robobee. All rights reserved.</span>
          <span>Made with ⚡ for young engineers</span>
        </div>
      </footer>
    </>
  );
}
