import { profile } from "../../data/portfolio";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <small>
          © {new Date().getFullYear()} {profile.name}.
        </small>
      </div>
    </footer>
  );
}