import { useEffect, useState } from "react";
import {
  FaLocationDot,
  FaGraduationCap,
  FaCopy,
  FaCheck,
  FaArrowDown,
  FaCode,
  FaChevronDown,
} from "react-icons/fa6";
import { profile, skills, links } from "./config";
import Particles from "./components/Particles";
import Avatar from "./components/Avatar";
import SocialLink from "./components/SocialLink";

export default function App() {
  const [copied, setCopied] = useState(false);
  const [showSkills, setShowSkills] = useState(false);

  // Lumina din fundal urmărește cursorul
  useEffect(() => {
    const root = document.documentElement;
    const onMove = (e) => {
      root.style.setProperty("--mx", `${e.clientX}px`);
      root.style.setProperty("--my", `${e.clientY}px`);
      root.dataset.pointer = "";
    };
    const onLeave = () => delete root.dataset.pointer;
    window.addEventListener("pointermove", onMove);
    document.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 1800);
    return () => clearTimeout(t);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <main className="page">
      <div className="bg" aria-hidden="true" />
      <div className="cursor-glow" aria-hidden="true" />
      <Particles />

      <article className="card">
        <header className="header reveal" style={{ "--d": "80ms" }}>
          <Avatar src={profile.photo} name={profile.name} online={Boolean(profile.status)} />
          <div>
            <h1 className="name">{profile.name}</h1>
            <p className="title">{profile.title}</p>
          </div>
        </header>

        <div className="meta reveal" style={{ "--d": "160ms" }}>
          <span className="meta-item">
            <FaLocationDot /> {profile.location}
          </span>
          {profile.occupation && (
            <span className="meta-item">
              <FaGraduationCap /> {profile.occupation}
            </span>
          )}
          {profile.status && (
            <span className="meta-item">
              <span className="dot" /> {profile.status}
            </span>
          )}
        </div>

        {profile.bio && (
          <p className="bio reveal" style={{ "--d": "220ms" }}>{profile.bio}</p>
        )}

        {skills.length > 0 && (
          <section className="section reveal" style={{ "--d": "280ms" }}>
            <button
              type="button"
              className="expand-btn"
              aria-expanded={showSkills}
              aria-controls="skills"
              onClick={() => setShowSkills((v) => !v)}
            >
              <span className="expand-label">
                <FaCode /> Expertiză
              </span>
              <span className="expand-meta">
                {skills.length} tehnologii
                <FaChevronDown className="expand-icon" />
              </span>
            </button>

            <div id="skills" className={`collapse ${showSkills ? "is-open" : ""}`} inert={!showSkills}>
              <div className="collapse-inner">
                <ul className="skills">
                  {skills.map(({ name, icon: Icon, color }, i) => (
                    <li key={name} className="skill" style={{ "--c": color, "--i": i }}>
                      <Icon className="skill-icon" />
                      <span>{name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        <section className="section reveal" style={{ "--d": "340ms" }}>
          <h2 className="section-title">Contact</h2>
          <div className="email">
            <a href={`mailto:${profile.email}`} className="email-link">
              {profile.email}
            </a>
            <button
              type="button"
              className={`copy-btn ${copied ? "is-copied" : ""}`}
              onClick={copyEmail}
              aria-live="polite"
            >
              {copied ? <FaCheck /> : <FaCopy />}
              {copied ? "Copiat" : "Copiază"}
            </button>
          </div>
          {profile.cv && (
            <a className="cv-btn" href={profile.cv} download>
              <FaArrowDown /> Descarcă CV
            </a>
          )}
        </section>

        <section className="section reveal" style={{ "--d": "400ms" }}>
          <h2 className="section-title">Linkuri</h2>
          <ul className="links">
            {links.map((link) => (
              <li key={link.name}>
                <SocialLink link={link} />
              </li>
            ))}
          </ul>
        </section>

        <footer className="footer reveal" style={{ "--d": "460ms" }}>
          © {new Date().getFullYear()} {profile.name} · făcut cu <span className="heart">♥</span> și Claude
        </footer>
      </article>
    </main>
  );
}
