import SectionHeading from "../ui/SectionHeading";
import { about } from "../../data/portfolio";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHeading kicker="About" />

        <div className="row g-4 align-items-stretch">
          <div className="col-lg-6">
            <div className="about-panel">
              <h2 className="section-title mb-3">{about.title}</h2>
              {about.paragraphs.map((paragraph) => (
                <p className="about-text" key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about-grid">
              {about.cards.map((card) => (
                <article className="about-card" key={card.title}>
                  <div className="icon-wrap"><i className={`bi ${card.icon}`} /></div>
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text mb-0">{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}