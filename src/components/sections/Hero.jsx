import { hero, profile } from "../../data/portfolio";

export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-7">
            <div className="eyebrow">
              <i className="bi bi-shield-lock" />
              {hero.eyebrow}
            </div>

            <h1 className="hero-title">
              {hero.titleLineOne}{" "}
              <span className="accent-text">{hero.titleAccent}</span>
              <br />
              {hero.titleLineTwo}
            </h1>

            <p className="hero-subtitle">{hero.description}</p>

            <div className="hero-actions">
              <a href="#contact" className="btn-main">
                Let’s Talk <i className="bi bi-arrow-right" />
              </a>
              <a href="#about" className="btn-ghost">
                About Me <i className="bi bi-person" />
              </a>
            </div>

            <div className="hero-meta">
              <span><i className="bi bi-geo-alt" /> {profile.location}</span>
              <span><i className="bi bi-mortarboard" /> MIT Cyber Security</span>
              <span><i className="bi bi-journal-text" /> 2 Publications</span>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="hero-visual">
              <div className="profile-card">
                <div className="profile-avatar-large">
                  <img
                    src="/assets/tareq.jpeg"
                    alt={profile.name}
                    className="profile-avatar-image"
                  />
                  <h4 className="fw-bold mb-2">{profile.name}</h4>
                  <p className="mb-0 text-secondary">
                    Cyber Security Analyst · Security Learner · Research-Driven Problem Solver
                  </p>
                </div>
              </div>

              <div className="floating-badge floating-top">
                <span className="mini-label">Core Focus</span>
                <strong>Threat Detection</strong>
              </div>

              <div className="floating-badge floating-bottom">
                <span className="mini-label">Current Goal</span>
                <strong>SOC / Analyst Roles</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}