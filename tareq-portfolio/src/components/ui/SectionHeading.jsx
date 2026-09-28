export default function SectionHeading({ kicker, title, description }) {
  return (
    <div className="section-heading">
      {kicker && <div className="section-kicker">{kicker}</div>}
      {title && <h2 className="section-title">{title}</h2>}
      {description && <p className="section-subtitle">{description}</p>}
    </div>
  );
}