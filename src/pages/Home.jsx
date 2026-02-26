import { useEffect, useRef } from "react";

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
    overflow-x: hidden;
  }

  /* NAV */
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
    display: flex;
    align-items: center;
    gap: 10px;
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
    position: relative;
    padding-bottom: 4px;
    transition: color 0.2s;
  }

  .nav-links a::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0;
    width: 0; height: 2px;
    background: var(--gold);
    transition: width 0.3s;
  }

  .nav-links a:hover { color: var(--blue); }
  .nav-links a:hover::after { width: 100%; }

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
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 4px 15px rgba(255,215,0,0.4);
  }

  .nav-cta:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255,215,0,0.6);
  }

  /* HERO */
  .hero {
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 90vh;
    padding: 0 48px;
    align-items: center;
    gap: 40px;
    position: relative;
    overflow: hidden;
  }

  .hero::before {
    content: '';
    position: absolute;
    top: -100px; right: -100px;
    width: 600px; height: 600px;
    background: radial-gradient(circle, rgba(74,144,226,0.15) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
  }

  .hero-left { position: relative; z-index: 2; }

  .admission-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: var(--gold);
    color: var(--black);
    font-family: 'Rajdhani', sans-serif;
    font-weight: 700;
    font-size: 13px;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 6px 18px;
    border-radius: 50px;
    margin-bottom: 20px;
    animation: pulse-badge 2s ease-in-out infinite;
  }

  @keyframes pulse-badge {
    0%, 100% { box-shadow: 0 0 0 0 rgba(255,215,0,0.5); }
    50% { box-shadow: 0 0 0 10px rgba(255,215,0,0); }
  }

  .hero-tagline {
    font-family: 'Nunito', sans-serif;
    font-size: 15px;
    font-weight: 700;
    color: var(--blue);
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-bottom: 12px;
  }

  .hero-headline {
    font-family: 'Caveat', cursive;
    font-size: clamp(52px, 6vw, 80px);
    color: var(--black);
    line-height: 1.05;
    margin-bottom: 8px;
  }

  .hero-headline em {
    font-style: normal;
    color: var(--blue);
    display: block;
  }

  .hero-sub {
    font-family: 'Nunito', sans-serif;
    font-size: 17px;
    color: #444;
    line-height: 1.7;
    margin: 20px 0 36px;
    max-width: 420px;
  }

  .hero-ctas {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
  }

  .btn-primary {
    background: var(--black);
    color: var(--gold);
    font-family: 'Rajdhani', sans-serif;
    font-weight: 700;
    font-size: 15px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    border: 2px solid var(--gold);
    padding: 14px 36px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.25s;
  }

  .btn-primary:hover {
    background: var(--gold);
    color: var(--black);
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  }

  .btn-secondary {
    background: transparent;
    color: var(--black);
    font-family: 'Rajdhani', sans-serif;
    font-weight: 700;
    font-size: 15px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    border: 2px solid var(--black);
    padding: 14px 36px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.25s;
  }

  .btn-secondary:hover {
    background: var(--black);
    color: var(--white);
    transform: translateY(-3px);
  }

  /* BEE MASCOT */
  .bee-mascot {
    position: absolute;
    top: 60px;
    right: 380px;
    animation: bee-float 3s ease-in-out infinite;
    cursor: pointer;
    user-select: none;
    z-index: 10;
  }

  .bee-mascot:hover {
    animation: bee-wiggle 0.5s ease-in-out infinite;
  }

  @keyframes bee-float {
    0%, 100% { transform: translateY(0px) rotate(-5deg); }
    50% { transform: translateY(-18px) rotate(5deg); }
  }

  @keyframes bee-wiggle {
    0%, 100% { transform: rotate(-10deg) scale(1.1); }
    50% { transform: rotate(10deg) scale(1.15); }
  }

  /* ROBOT */
  .hero-right {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .robot-container {
    position: relative;
    animation: robot-hover 4s ease-in-out infinite;
  }

  @keyframes robot-hover {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-12px); }
  }

  .robot-svg {
    width: 340px;
    filter: drop-shadow(0 20px 40px rgba(74,144,226,0.3));
  }

  .robot-glow {
    position: absolute;
    bottom: -20px; left: 50%;
    transform: translateX(-50%);
    width: 200px; height: 40px;
    background: radial-gradient(ellipse, rgba(74,144,226,0.4) 0%, transparent 70%);
    border-radius: 50%;
    animation: glow-pulse 4s ease-in-out infinite;
  }

  @keyframes glow-pulse {
    0%, 100% { opacity: 0.6; transform: translateX(-50%) scaleX(1); }
    50% { opacity: 1; transform: translateX(-50%) scaleX(1.2); }
  }

  /* COURSE CARD */
  .course-section {
    padding: 80px 48px;
    display: flex;
    justify-content: center;
  }

  .course-card {
    background: var(--black);
    border: 3px solid var(--gold);
    border-radius: 16px;
    padding: 48px 56px;
    max-width: 800px;
    width: 100%;
    position: relative;
    overflow: hidden;
  }

  .course-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--gold), var(--blue), var(--gold));
    animation: shimmer 3s linear infinite;
    background-size: 200% 100%;
  }

  @keyframes shimmer {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }

  .course-card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 36px;
    flex-wrap: wrap;
    gap: 16px;
  }

  .course-title {
    font-family: 'Black Han Sans', sans-serif;
    font-size: 32px;
    color: var(--gold);
    letter-spacing: 2px;
  }

  .kit-badge {
    background: var(--gold);
    color: var(--black);
    font-family: 'Rajdhani', sans-serif;
    font-weight: 700;
    font-size: 13px;
    letter-spacing: 1.5px;
    padding: 8px 20px;
    border-radius: 50px;
    text-transform: uppercase;
  }

  .course-items {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  .course-item {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 16px 20px;
    background: rgba(255,215,0,0.05);
    border: 1px solid rgba(255,215,0,0.2);
    border-radius: 10px;
    transition: all 0.25s;
    cursor: default;
  }

  .course-item:hover {
    background: rgba(255,215,0,0.12);
    border-color: var(--gold);
    transform: translateX(4px);
  }

  .course-item:last-child:nth-child(odd) {
    grid-column: 1 / -1;
  }

  .item-icon {
    width: 36px; height: 36px;
    background: var(--gold);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    font-size: 18px;
  }

  .item-text {
    font-family: 'Rajdhani', sans-serif;
    font-weight: 700;
    font-size: 17px;
    color: var(--gold);
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  /* STATS */
  .stats-section {
    display: flex;
    justify-content: center;
    gap: 0;
    padding: 0 48px 80px;
  }

  .stat-item {
    text-align: center;
    padding: 32px 48px;
    border-right: 1px solid rgba(0,0,0,0.1);
    flex: 1;
    max-width: 220px;
  }

  .stat-item:last-child { border-right: none; }

  .stat-number {
    font-family: 'Black Han Sans', sans-serif;
    font-size: 48px;
    color: var(--black);
    line-height: 1;
  }

  .stat-number span { color: var(--blue); }

  .stat-label {
    font-family: 'Nunito', sans-serif;
    font-size: 14px;
    color: #666;
    margin-top: 6px;
    font-weight: 600;
    letter-spacing: 0.5px;
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
    .hero { grid-template-columns: 1fr; padding: 40px 20px; text-align: center; }
    .hero-right { display: none; }
    .bee-mascot { right: 20px; top: 20px; }
    .hero-sub { max-width: 100%; }
    .hero-ctas { justify-content: center; }
    .course-section { padding: 60px 20px; }
    .course-card { padding: 32px 24px; }
    .course-items { grid-template-columns: 1fr; }
    .stats-section { flex-wrap: wrap; padding: 20px 20px 60px; }
    .footer { grid-template-columns: 1fr; padding: 40px 20px; }
    .footer-bottom { flex-direction: column; gap: 8px; text-align: center; }
  }
`;

const BeeSVG = () => (
  <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Body */}
    <ellipse cx="45" cy="52" rx="22" ry="26" fill="#FFD700" />
    <ellipse cx="45" cy="52" rx="22" ry="26" fill="url(#beeBodyGrad)" />
    {/* Stripes */}
    <rect x="25" y="46" width="40" height="8" rx="4" fill="#111" opacity="0.7" />
    <rect x="25" y="58" width="40" height="7" rx="3.5" fill="#111" opacity="0.7" />
    {/* Head */}
    <circle cx="45" cy="26" r="18" fill="#FFD700" />
    <circle cx="45" cy="26" r="18" fill="url(#beeHeadGrad)" />
    {/* Eyes */}
    <circle cx="38" cy="24" r="6" fill="white" />
    <circle cx="52" cy="24" r="6" fill="white" />
    <circle cx="39" cy="24" r="3.5" fill="#222" />
    <circle cx="53" cy="24" r="3.5" fill="#222" />
    <circle cx="40" cy="22.5" r="1.2" fill="white" />
    <circle cx="54" cy="22.5" r="1.2" fill="white" />
    {/* Smile */}
    <path d="M39 33 Q45 38 51 33" stroke="#111" strokeWidth="2" strokeLinecap="round" fill="none" />
    {/* Antennae */}
    <line x1="40" y1="10" x2="34" y2="3" stroke="#111" strokeWidth="2" strokeLinecap="round" />
    <circle cx="33" cy="2" r="2.5" fill="#FFD700" stroke="#111" strokeWidth="1.5" />
    <line x1="50" y1="10" x2="56" y2="3" stroke="#111" strokeWidth="2" strokeLinecap="round" />
    <circle cx="57" cy="2" r="2.5" fill="#FFD700" stroke="#111" strokeWidth="1.5" />
    {/* Wings */}
    <ellipse cx="22" cy="38" rx="14" ry="9" fill="rgba(200,230,255,0.8)" stroke="#4A90E2" strokeWidth="1.5" transform="rotate(-20 22 38)" />
    <ellipse cx="68" cy="38" rx="14" ry="9" fill="rgba(200,230,255,0.8)" stroke="#4A90E2" strokeWidth="1.5" transform="rotate(20 68 38)" />
    {/* Stinger */}
    <path d="M45 78 L43 86 L45 84 L47 86 Z" fill="#111" />
    <defs>
      <radialGradient id="beeBodyGrad" cx="40%" cy="35%">
        <stop offset="0%" stopColor="rgba(255,255,200,0.5)" />
        <stop offset="100%" stopColor="rgba(200,150,0,0.3)" />
      </radialGradient>
      <radialGradient id="beeHeadGrad" cx="40%" cy="35%">
        <stop offset="0%" stopColor="rgba(255,255,200,0.5)" />
        <stop offset="100%" stopColor="rgba(200,150,0,0.3)" />
      </radialGradient>
    </defs>
  </svg>
);

const RobotSVG = () => (
  <svg viewBox="0 0 300 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="robot-svg">
    {/* Legs */}
    <rect x="95" y="330" width="42" height="70" rx="12" fill="#1a1a2e" />
    <rect x="163" y="330" width="42" height="70" rx="12" fill="#1a1a2e" />
    <rect x="88" y="385" width="56" height="20" rx="8" fill="#0a0a1a" />
    <rect x="156" y="385" width="56" height="20" rx="8" fill="#0a0a1a" />
    {/* Body */}
    <rect x="60" y="200" width="180" height="140" rx="24" fill="#1e2a4a" />
    <rect x="60" y="200" width="180" height="140" rx="24" fill="url(#bodyGrad)" />
    {/* Chest panel */}
    <rect x="85" y="225" width="130" height="90" rx="12" fill="#0d1628" stroke="#4A90E2" strokeWidth="1.5" opacity="0.8" />
    {/* Chest lights */}
    <circle cx="110" cy="255" r="10" fill="#FFD700">
      <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
    </circle>
    <circle cx="150" cy="255" r="10" fill="#4A90E2">
      <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite" />
    </circle>
    <circle cx="190" cy="255" r="10" fill="#ff6b6b">
      <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite" />
    </circle>
    {/* Progress bar */}
    <rect x="92" y="280" width="116" height="8" rx="4" fill="#0a0a1a" />
    <rect x="92" y="280" width="80" height="8" rx="4" fill="#4A90E2">
      <animate attributeName="width" values="40;116;40" dur="4s" repeatCount="indefinite" />
    </rect>
    {/* Arms */}
    <rect x="14" y="210" width="46" height="110" rx="16" fill="#1e2a4a" />
    <rect x="240" y="210" width="46" height="110" rx="16" fill="#1e2a4a" />
    <circle cx="37" cy="330" r="18" fill="#0d1628" stroke="#4A90E2" strokeWidth="2" />
    <circle cx="263" cy="330" r="18" fill="#0d1628" stroke="#FFD700" strokeWidth="2" />
    {/* Neck */}
    <rect x="128" y="175" width="44" height="30" rx="8" fill="#162040" />
    {/* Head */}
    <rect x="55" y="70" width="190" height="115" rx="28" fill="#1e2a4a" />
    <rect x="55" y="70" width="190" height="115" rx="28" fill="url(#headGrad)" />
    {/* Head top antenna */}
    <rect x="146" y="40" width="8" height="34" rx="4" fill="#4A90E2" />
    <circle cx="150" cy="34" r="12" fill="#4A90E2">
      <animate attributeName="r" values="10;14;10" dur="2s" repeatCount="indefinite" />
      <animate attributeName="fill" values="#4A90E2;#7ab8ff;#4A90E2" dur="2s" repeatCount="indefinite" />
    </circle>
    {/* Eyes */}
    <rect x="80" y="95" width="56" height="42" rx="14" fill="#0a0a1a" />
    <rect x="164" y="95" width="56" height="42" rx="14" fill="#0a0a1a" />
    {/* Eye glow */}
    <rect x="84" y="99" width="48" height="34" rx="10" fill="#4A90E2" opacity="0.9">
      <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite" />
      <animate attributeName="fill" values="#4A90E2;#7dd3fc;#4A90E2" dur="3s" repeatCount="indefinite" />
    </rect>
    <rect x="168" y="99" width="48" height="34" rx="10" fill="#4A90E2" opacity="0.9">
      <animate attributeName="opacity" values="1;0.6;1" dur="2.5s" repeatCount="indefinite" />
      <animate attributeName="fill" values="#4A90E2;#7dd3fc;#4A90E2" dur="2.5s" repeatCount="indefinite" />
    </rect>
    {/* Eye shine */}
    <ellipse cx="104" cy="108" rx="12" ry="8" fill="white" opacity="0.25" />
    <ellipse cx="188" cy="108" rx="12" ry="8" fill="white" opacity="0.25" />
    {/* Mouth */}
    <rect x="100" y="154" width="100" height="14" rx="7" fill="#0a0a1a" />
    <rect x="103" y="156" width="40" height="10" rx="5" fill="#FFD700" opacity="0.8" />
    <defs>
      <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="rgba(74,144,226,0.2)" />
        <stop offset="100%" stopColor="rgba(0,0,0,0)" />
      </linearGradient>
      <linearGradient id="headGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="rgba(74,144,226,0.25)" />
        <stop offset="100%" stopColor="rgba(0,0,0,0)" />
      </linearGradient>
    </defs>
  </svg>
);

const courseItems = [
  { icon: "🤖", text: "Robotics and AI Training" },
  { icon: "💻", text: "Basic & Advanced Coding" },
  { icon: "🔬", text: "15+ Live Projects using Sensors" },
  { icon: "⚡", text: "Electronics Projects" },
  { icon: "📦", text: "Robotic Kit Included" },
];

const stats = [
  { number: "10", plus: true, label: "Students Enrolled" },
  { number: "15", plus: true, label: "Live Projects" },
  { number: "5", plus: false, label: "Expert Trainers" },
  { number: "100", percent: true, label: "Hands-on Learning" },
];

export default function Home() {
  return (
    <>
      <style>{styles}</style>

      {/* NAV */}
      <nav className="nav">
        <a href="#" className="nav-logo">ROBO<span>BEE</span></a>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <a href="/contact#enroll-form"><button className="nav-cta">Enroll Now</button></a>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <div className="admission-badge">
            <span>🎉</span> Admissions Open 2025
          </div>
          <p className="hero-tagline">Future Tech Education</p>
          <h1 className="hero-headline">
            Admission<br />
            <em>Started!</em>
          </h1>
          <p className="hero-sub">
            Where kids discover the magic of robotics, AI, and coding through hands-on projects and real-world engineering experience.
          </p>
          <div className="hero-ctas">
            <button className="btn-primary">Start Learning</button>
            <button className="btn-secondary">View Courses</button>
          </div>
        </div>

        <div className="bee-mascot" title="Hey there! I'm Beebot 🐝">
          <BeeSVG />
        </div>

        <div className="hero-right">
          <div className="robot-container">
            <RobotSVG />
            <div className="robot-glow" />
          </div>
        </div>
      </section>

      {/* COURSE CARD */}
      <section className="course-section">
        <div className="course-card">
          <div className="course-card-header">
            <h2 className="course-title">WHAT YOU'LL LEARN</h2>
            <span className="kit-badge">🎁 Free Kit</span>
          </div>
          <div className="course-items">
            {courseItems.map((item, i) => (
              <div className="course-item" key={i}>
                <div className="item-icon">{item.icon}</div>
                <span className="item-text">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-section">
        {stats.map((s, i) => (
          <div className="stat-item" key={i}>
            <div className="stat-number">
              {s.number}<span>{s.plus ? "+" : s.percent ? "%" : ""}</span>
            </div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </section>

      {/* FOOTER */}
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
        <div className="footer-contact-icon">📸</div>
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
          { name: "Courses", href: "" },
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
