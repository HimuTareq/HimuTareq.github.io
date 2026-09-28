import SectionHeading from "../ui/SectionHeading";
import { publications } from "../../data/portfolio";

export default function Publications() {
  return (
    <section className="section pt-0" id="research">
      <div className="container">
        <SectionHeading
          kicker="Research"
          title="Research Publications"
          description="Publications that reflect my analytical ability, technical writing, and research-driven mindset."
        />

        <div className="row g-4">
          {publications.map((publication) => (
            <div className="col-lg-6" key={publication.title}>
              <article className="feature-card h-100">
                <div className="icon-wrap"><i className="bi bi-file-earmark-text" /></div>
                <h5 className="card-title">{publication.title}</h5>
                <p className="text-secondary">{publication.publisher}</p>
                <a
                  className="publication-link"
                  href={publication.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Read Publication <i className="bi bi-arrow-up-right" />
                </a>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}