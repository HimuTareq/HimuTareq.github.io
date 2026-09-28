import SectionHeading from "../ui/SectionHeading";
import { skills, certifications } from "../../data/portfolio";

export default function Skills() {
  return (
    <section className="section pt-0" id="skills">
      <div className="container">
        <SectionHeading
          kicker="Skills"
          title="Skills & Certifications"
          description="A practical skill set aligned with entry-level cyber security, analyst, and SOC-focused roles."
        />

        <div className="glass-card mb-4">
          {skills.map((skill) => (
            <span className="skill-badge" key={skill}>{skill}</span>
          ))}
        </div>

        <div className="row g-4">
          {certifications.map((item) => (
            <div className="col-md-4" key={item.title}>
              <article className="feature-card h-100">
                <div className="icon-wrap"><i className={`bi ${item.icon}`} /></div>
                <h5 className="card-title">{item.title}</h5>
                <p className="mb-0 text-secondary">{item.text}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}