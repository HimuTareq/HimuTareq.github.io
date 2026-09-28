import SectionHeading from "../ui/SectionHeading";
import { experience, education } from "../../data/portfolio";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHeading
          kicker="Journey"
          title="Experience & Education"
          description="My path reflects a combination of technical education, practical work discipline, and a transition into cyber security."
        />

        <div className="row g-4 mb-4">
          {experience.map((item) => (
            <div className="col-lg-6" key={item.role}>
              <article className="timeline-card h-100">
                <div className="timeline-meta mb-2">{item.date}</div>
                <h4 className="card-title mb-1">{item.role}</h4>
                <div className="text-secondary fw-semibold mb-3">{item.company}</div>
                <ul className="mb-0 text-secondary">
                  {item.points.map((point) => <li className="mb-2" key={point}>{point}</li>)}
                </ul>
              </article>
            </div>
          ))}
        </div>

        <div className="row g-4">
          {education.map((item) => (
            <div className="col-lg-6" key={item.title}>
              <article className="timeline-card h-100">
                <div className="timeline-meta mb-2">{item.year}</div>
                <h4 className="card-title mb-1">{item.title}</h4>
                <div className="text-secondary fw-semibold mb-3">{item.institution}</div>
                <p className="mb-0 text-secondary">{item.description}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}