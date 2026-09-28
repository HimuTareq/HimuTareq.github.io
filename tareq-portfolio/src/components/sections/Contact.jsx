import { profile } from "../../data/portfolio";

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact-card">
          <div className="row g-4 align-items-center">
            <div className="col-lg-7">
              <div className="section-kicker">Contact</div>
              <h2 className="section-title text-white">Let’s Work Together</h2>
              <p className="mb-0">
                I am seeking opportunities in cyber security, internships, analyst pathways, and roles where I can apply my training,
                research background, and practical problem-solving ability.
              </p>
            </div>

            <div className="col-lg-5">
              <div className="contact-item">
                <i className="bi bi-envelope" />
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </div>

              <div className="contact-item">
                <i className="bi bi-telephone" />
                <a href={`tel:${profile.phone.replaceAll(" ", "")}`}>{profile.phone}</a>
              </div>

              <div className="contact-item mb-0">
                <i className="bi bi-geo-alt" />
                <span>{profile.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}