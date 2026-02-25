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

  /* ABOUT HERO */
  .about-hero {
    position: relative;
    padding: 100px 48px 80px;
    text-align: center;
    overflow: hidden;
  }

  .about-hero::before {
    content: '';
    position: absolute;
    top: 0; left: 50%; transform: translateX(-50%);
    width: 800px; height: 400px;
    background: radial-gradient(ellipse, rgba(74,144,226,0.15) 0%, transparent 70%);
    pointer-events: none;
  }

  .about-pill {
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

  .about-title {
    font-family: 'Caveat', cursive;
    font-size: clamp(48px, 6vw, 80px);
    color: var(--black);
    margin-bottom: 20px;
    position: relative;
    z-index: 1;
  }

  .about-title span { color: var(--blue); }

  .about-desc {
    font-family: 'Nunito', sans-serif;
    font-size: 18px;
    color: #444;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.8;
    position: relative;
    z-index: 1;
  }

  /* MISSION */
  .mission-section {
    padding: 60px 48px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
  }

  .mission-visual {
    background: var(--black);
    border: 2px solid var(--gold);
    border-radius: 20px;
    padding: 48px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: relative;
    overflow: hidden;
  }

  .mission-visual::before {
    content: '{ }';
    position: absolute;
    bottom: -20px; right: -10px;
    font-size: 140px;
    font-family: 'Black Han Sans', sans-serif;
    color: rgba(255,215,0,0.05);
    line-height: 1;
  }

  .mission-stat {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .mission-stat-num {
    font-family: 'Black Han Sans', sans-serif;
    font-size: 42px;
    color: var(--gold);
    line-height: 1;
  }

  .mission-stat-label {
    font-family: 'Nunito', sans-serif;
    font-size: 14px;
    color: #888;
    line-height: 1.4;
  }

  .mission-divider {
    height: 1px;
    background: rgba(255,215,0,0.2);
  }

  .mission-content h2 {
    font-family: 'Black Han Sans', sans-serif;
    font-size: 36px;
    color: var(--black);
    margin-bottom: 20px;
    letter-spacing: 1px;
  }

  .mission-content h2 span { color: var(--blue); }

  .mission-content p {
    font-family: 'Nunito', sans-serif;
    font-size: 16px;
    color: #555;
    line-height: 1.8;
    margin-bottom: 16px;
  }

  /* VALUES */
  .values-section {
    padding: 60px 48px;
    max-width: 1100px;
    margin: 0 auto;
  }

  .section-label {
    font-family: 'Rajdhani', sans-serif;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--blue);
    margin-bottom: 12px;
  }

  .section-title {
    font-family: 'Black Han Sans', sans-serif;
    font-size: 36px;
    color: var(--black);
    margin-bottom: 40px;
    letter-spacing: 1px;
  }

  .values-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  .value-card {
    background: white;
    border-radius: 16px;
    padding: 36px 28px;
    border: 2px solid transparent;
    transition: all 0.3s;
    box-shadow: 0 4px 20px rgba(0,0,0,0.06);
    position: relative;
    overflow: hidden;
  }

  .value-card::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0;
    width: 0; height: 3px;
    background: var(--gold);
    transition: width 0.3s;
  }

  .value-card:hover {
    border-color: rgba(255,215,0,0.4);
    transform: translateY(-6px);
    box-shadow: 0 12px 40px rgba(0,0,0,0.12);
  }

  .value-card:hover::after { width: 100%; }

  .value-icon {
    width: 56px; height: 56px;
    background: var(--gold);
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    margin-bottom: 20px;
  }

  .value-title {
    font-family: 'Black Han Sans', sans-serif;
    font-size: 20px;
    color: var(--black);
    margin-bottom: 10px;
    letter-spacing: 0.5px;
  }

  .value-desc {
    font-family: 'Nunito', sans-serif;
    font-size: 14px;
    color: #666;
    line-height: 1.7;
  }

  /* TEAM */
  .team-section {
    padding: 60px 48px;
    max-width: 1100px;
    margin: 0 auto;
  }

  .team-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
  }

  .team-card {
    background: var(--black);
    border-radius: 16px;
    padding: 36px 24px;
    text-align: center;
    border: 2px solid rgba(255,215,0,0.2);
    transition: all 0.3s;
  }

  .team-card:hover {
    border-color: var(--gold);
    transform: translateY(-6px);
  }

  .team-avatar {
    width: 80px; height: 80px;
    border-radius: 50%;
    background: linear-gradient(135deg, #4A90E2, #FFD700);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    margin: 0 auto 16px;
    border: 3px solid rgba(255,215,0,0.4);
  }

  .team-name {
    font-family: 'Black Han Sans', sans-serif;
    font-size: 18px;
    color: var(--gold);
    letter-spacing: 1px;
    margin-bottom: 6px;
  }

  .team-role {
    font-family: 'Rajdhani', sans-serif;
    font-weight: 600;
    font-size: 13px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #666;
  }

  /* FOOTER */
  .footer {
    background: var(--black);
    color: var(--white);
    padding: 48px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;
    margin-top: 60px;
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
    width: 32px; height: 32px;
    background: rgba(255,215,0,0.15);
    border: 1px solid rgba(255,215,0,0.3);
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .footer-bottom {
    grid-column: 1 / -1;
    border-top: 1px solid #222;
    padding-top: 24px;
    display: flex;
    justify-content: space-between;
    font-family: 'Nunito', sans-serif;
    font-size: 13px;
    color: #555;
  }

  @media (max-width: 768px) {
    .nav { padding: 14px 20px; }
    .nav-links { display: none; }
    .about-hero { padding: 60px 20px; }
    .mission-section { grid-template-columns: 1fr; padding: 40px 20px; }
    .values-grid { grid-template-columns: 1fr; }
    .team-grid { grid-template-columns: 1fr 1fr; }
    .values-section, .team-section { padding: 40px 20px; }
    .footer { grid-template-columns: 1fr; padding: 40px 20px; }
    .footer-bottom { flex-direction: column; gap: 8px; }
  }
`;

const values = [
  { icon: "🚀", title: "Innovation First", desc: "We teach kids to think like engineers — breaking problems apart and building creative, working solutions." },
  { icon: "🤝", title: "Hands-On Learning", desc: "Every concept is taught through real hardware, real sensors, and real projects that students take home." },
  { icon: "💡", title: "Future-Ready Skills", desc: "Robotics, AI, and coding are the literacy of tomorrow. We give kids the tools they need today." },
  { icon: "🎯", title: "Goal-Oriented", desc: "Students build a portfolio of 15+ live projects, giving them concrete evidence of their skills." },
  { icon: "🌟", title: "Expert Mentorship", desc: "Our trainers combine industry experience with a passion for making complex ideas simple and fun." },
  { icon: "🎁", title: "Kit Included", desc: "Every student receives a complete robotic kit — no extra purchases needed. Just bring your curiosity." },
];

const team = [
  { emoji: "👨‍🔬", name: "Arjun Nair", role: "Lead Robotics Trainer" },
  { emoji: "👩‍💻", name: "Priya Menon", role: "AI & Coding Instructor" },
  { emoji: "👨‍🏫", name: "Rahul Das", role: "Electronics Expert" },
];

export default function About() {
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
        <button className="nav-cta">Enroll Now</button>
      </nav>

      <section className="about-hero">
        <div className="about-pill">Our Story</div>
        <h1 className="about-title">We Build <span>Tomorrow's</span><br />Engineers Today</h1>
        <p className="about-desc">
          Robobee was born from a simple belief — every child has the spark of an inventor. We just need to light the fuse.
        </p>
      </section>

      <div className="mission-section">
        <div className="mission-visual">
          <div className="mission-stat">
            <div className="mission-stat-num">200+</div>
            <div className="mission-stat-label">Students have graduated<br />from our programs</div>
          </div>
          <div className="mission-divider" />
          <div className="mission-stat">
            <div className="mission-stat-num">15+</div>
            <div className="mission-stat-label">Real-world projects<br />built per student</div>
          </div>
          <div className="mission-divider" />
          <div className="mission-stat">
            <div className="mission-stat-num">3+</div>
            <div className="mission-stat-label">Years of excellence<br />in tech education</div>
          </div>
        </div>
        <div className="mission-content">
          <h2>Our <span>Mission</span></h2>
          <p>
            Robobee is Kottakkal's premier destination for young minds eager to explore robotics, artificial intelligence, and electronics. Located in Collegepadi, we've built a community where curiosity is celebrated and every student leaves with real, working projects.
          </p>
          <p>
            We believe learning is most powerful when it's tactile. That's why every lesson at Robobee involves real hardware, live sensors, and projects students actually build with their own hands. No boring lectures — just doing.
          </p>
          <p>
            From complete beginners to aspiring engineers, we've designed programs that scale with every learner. And because every student gets a Robotic Kit included, the learning doesn't stop when class does.
          </p>
        </div>
      </div>

      <div className="values-section">
        <p className="section-label">What drives us</p>
        <h2 className="section-title">Our Core Values</h2>
        <div className="values-grid">
          {values.map((v, i) => (
            <div className="value-card" key={i}>
              <div className="value-icon">{v.icon}</div>
              <div className="value-title">{v.title}</div>
              <p className="value-desc">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="team-section">
        <p className="section-label">The people behind the magic</p>
        <h2 className="section-title">Meet Our Team</h2>
        <div className="team-grid">
          {team.map((t, i) => (
            <div className="team-card" key={i}>
              <div className="team-avatar">{t.emoji}</div>
              <div className="team-name">{t.name}</div>
              <div className="team-role">{t.role}</div>
            </div>
          ))}
        </div>
      </div>

      <footer className="footer">
        <div>
          <div className="footer-brand">ROBOBEE</div>
          <p className="footer-tagline">Empowering the next generation of engineers, one circuit at a time.</p>
        </div>
        <div>
          <div className="footer-heading">Contact Us</div>
          <div className="footer-contact-item"><div className="footer-contact-icon">📞</div>9746347070</div>
          <div className="footer-contact-item"><div className="footer-contact-icon">📍</div>Kottakkal, Collegepadi</div>
          <div className="footer-contact-item"><div className="footer-contact-icon">📸</div>@ROBO_BEE</div>
        </div>
        <div>
          <div className="footer-heading">Navigate</div>
          {["Home", "About Us", "Courses", "Contact"].map(link => (
            <div className="footer-contact-item" key={link}><div className="footer-contact-icon">→</div>{link}</div>
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
