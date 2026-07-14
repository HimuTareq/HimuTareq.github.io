<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="description" content="Md Tareq Rahman - Cyber Security Analyst / Security Analyst / SOC Analyst portfolio website based in Sydney, Australia." />
  <meta name="keywords" content="Md Tareq Rahman, Cyber Security Analyst, SOC Analyst, Security Analyst, Sydney, Portfolio, Wazuh, Wireshark, Cybersecurity" />
  <meta name="author" content="Md Tareq Rahman" />
  <title>Md Tareq Rahman | Cyber Security Portfolio</title>

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />

  <style>
    :root {
      --bg: #050b16;
      --bg-soft: #091225;
      --surface: #0b1730;
      --surface-2: #0d1c38;
      --text: #f8fbff;
      --muted: #9db0cc;
      --accent: #38bdf8;
      --accent-2: #2563eb;
      --border: rgba(56, 189, 248, 0.22);
      --nav-bg: rgba(5, 11, 22, 0.94);
      --footer-bg: #071122;
      --shadow: 0 20px 50px rgba(2, 8, 23, 0.35);
    }

    body.light-theme {
      --bg: #f5f7fb;
      --bg-soft: #eef2ff;
      --surface: #ffffff;
      --surface-2: #ffffff;
      --text: #0f172a;
      --muted: #64748b;
      --accent: #2563eb;
      --accent-2: #0ea5e9;
      --border: rgba(37, 99, 235, 0.18);
      --nav-bg: rgba(255, 255, 255, 0.95);
      --footer-bg: #eef2ff;
      --shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
    }

    * {
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      margin: 0;
      font-family: 'Inter', sans-serif;
      color: var(--text);
      background:
        radial-gradient(circle at top left, rgba(37, 99, 235, 0.16), transparent 24%),
        radial-gradient(circle at top right, rgba(14, 165, 233, 0.12), transparent 20%),
        linear-gradient(180deg, var(--bg) 0%, #040913 100%);
      line-height: 1.55;
      transition: background 0.3s ease, color 0.3s ease;
    }

    body.light-theme {
      background: linear-gradient(180deg, var(--bg) 0%, #eef4ff 100%);
    }

    a {
      text-decoration: none;
    }

    img {
      max-width: 100%;
      display: block;
    }

    .section-padding {
      padding: 110px 0;
    }

    .section-title {
      font-size: clamp(2rem, 3vw, 2.85rem);
      font-weight: 800;
      margin-bottom: 14px;
      letter-spacing: -0.03em;
      color: var(--text);
    }

    .section-subtitle {
      max-width: 760px;
      color: var(--muted);
      margin-bottom: 50px;
      font-size: 1.02rem;
    }

    .eyebrow {
      display: inline-block;
      color: var(--accent);
      font-size: 0.95rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      margin-bottom: 18px;
    }

    .navbar {
      background: var(--nav-bg);
      border-top: 4px solid var(--accent-2);
      border-bottom: 1px solid var(--border);
      padding-top: 18px;
      padding-bottom: 18px;
      backdrop-filter: blur(12px);
      transition: background 0.3s ease, border-color 0.3s ease;
    }

    .navbar-brand {
      font-size: 2.1rem;
      font-weight: 800;
      letter-spacing: -0.04em;
      color: var(--text) !important;
    }

    .navbar-brand span {
      color: var(--accent);
    }

    .nav-link {
      color: var(--text) !important;
      font-weight: 500;
      margin-left: 12px;
      margin-right: 12px;
      font-size: 1.02rem;
      opacity: 0.92;
    }

    .nav-link:hover,
    .nav-link:focus,
    .nav-link.active {
      color: var(--accent) !important;
      text-decoration: underline;
      text-decoration-thickness: 3px;
      text-underline-offset: 8px;
    }

    .theme-toggle {
      width: 46px;
      height: 46px;
      border-radius: 50%;
      border: 1px solid var(--border);
      background: rgba(255,255,255,0.04);
      color: var(--text);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin-left: 14px;
      font-size: 1.15rem;
      transition: transform 0.25s ease, background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
    }

    .theme-toggle:hover {
      transform: translateY(-2px);
      background: rgba(56, 189, 248, 0.12);
      color: var(--accent);
      border-color: rgba(56, 189, 248, 0.32);
    }

    .btn-main,
    .btn-outline-custom {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 14px;
      padding: 12px 20px;
      font-weight: 600;
      border: 1px solid var(--border);
      transition: all 0.25s ease;
    }

    .btn-main {
      background: linear-gradient(135deg, var(--accent), var(--accent-2));
      color: #fff;
      box-shadow: 0 10px 24px rgba(37, 99, 235, 0.22);
    }

    .btn-main:hover {
      color: #fff;
      transform: translateY(-2px);
    }

    .btn-outline-custom {
      background: transparent;
      color: var(--text);
    }

    .btn-outline-custom:hover {
      color: var(--accent);
      border-color: var(--accent);
      background: rgba(56, 189, 248, 0.06);
    }

    .hero {
      min-height: auto;
      padding-top: 170px;
      padding-bottom: 110px;
      background: transparent;
    }

    .hero h1 {
      font-size: clamp(3.3rem, 8vw, 5.4rem);
      line-height: 0.94;
      font-weight: 800;
      letter-spacing: -0.05em;
      margin-bottom: 24px;
      color: var(--text);
    }

    .hero .accent {
      color: inherit;
    }

    .hero p.lead {
      font-size: 1.06rem;
      color: var(--muted);
      max-width: 690px;
      margin-bottom: 24px;
      line-height: 1.5;
    }

    .hero-meta {
      display: none;
    }

    .hero-social {
      display: flex;
      gap: 10px;
      margin-top: 18px;
    }

    .hero-social a {
      width: 42px;
      height: 42px;
      border-radius: 8px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: transparent;
      color: var(--text);
      font-size: 2rem;
      transition: transform 0.2s ease, color 0.2s ease;
    }

    .hero-social a:hover {
      transform: translateY(-2px);
      color: var(--accent);
    }

    .hero-visual {
      background: transparent;
      border: none;
      padding: 0;
      box-shadow: none;
      display: flex;
      justify-content: center;
    }

    .profile-frame {
      width: min(100%, 420px);
      aspect-ratio: 0.78 / 1;
      min-height: 0;
      border-radius: 46% 54% 52% 48% / 38% 33% 67% 62%;
      overflow: hidden;
      background: var(--surface);
      border: 4px solid var(--accent);
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      box-shadow: var(--shadow);
    }

    .profile-frame::after {
      display: none;
    }

    .hero-stats {
      display: none;
    }

    .about-section {
      background: transparent;
      border-top: 1px solid var(--border);
      padding-top: 110px;
    }

    .about-image-wrap {
      border-radius: 22px;
      overflow: hidden;
      background: var(--surface);
      border: 1px solid var(--border);
      min-height: 520px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: var(--shadow);
      height: 100%;
    }

    .about-row {
      align-items: stretch !important;
    }

    .about-copy {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
    }

    .about-copy h3 {
      font-size: clamp(2rem, 3.4vw, 3rem);
      font-weight: 800;
      line-height: 1.15;
      margin-bottom: 24px;
      letter-spacing: -0.04em;
      color: var(--text);
    }

    .about-copy p {
      color: var(--muted);
      margin-bottom: 24px;
      font-size: 1.06rem;
      line-height: 1.6;
    }

    .about-list {
      list-style: none;
      padding: 0;
      margin: 20px 0 0;
      display: none;
    }

    .card-custom,
    .glass-card {
      height: 100%;
      padding: 28px;
      border-radius: 24px;
      background: linear-gradient(180deg, rgba(9, 18, 37, 0.92), rgba(6, 14, 29, 0.92));
      border: 1px solid var(--border);
      box-shadow: var(--shadow);
      color: var(--text);
    }

    body.light-theme .card-custom,
    body.light-theme .glass-card {
      background: rgba(255,255,255,0.7);
    }

    .card-custom i.icon {
      width: 56px;
      height: 56px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 1.4rem;
      border-radius: 16px;
      margin-bottom: 16px;
      background: rgba(56, 189, 248, 0.1);
      color: var(--accent);
    }

    .card-custom h3,
    .card-custom h4 {
      font-weight: 700;
      margin-bottom: 14px;
      color: var(--text);
    }

    .card-custom p,
    .card-custom li,
    .timeline-item p,
    .contact-item span,
    .contact-form .form-control::placeholder {
      color: var(--muted);
    }

    .skill-pill {
      display: inline-block;
      padding: 10px 14px;
      border-radius: 999px;
      background: rgba(56, 189, 248, 0.08);
      border: 1px solid rgba(56, 189, 248, 0.14);
      margin: 0 8px 10px 0;
      color: #b8d8ff;
      font-size: 0.95rem;
      font-weight: 500;
    }

    body.light-theme .skill-pill {
      color: #26405a;
    }

    .timeline-item {
      position: relative;
      padding-left: 26px;
      margin-bottom: 22px;
    }

    .timeline-item::before {
      content: "";
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: var(--accent);
      position: absolute;
      left: 0;
      top: 8px;
      box-shadow: none;
    }

    .timeline-item h5 {
      margin-bottom: 6px;
      font-weight: 700;
      color: var(--text);
    }

    .timeline-item small {
      color: var(--accent);
      font-weight: 600;
    }

    .project-card .project-tags span {
      display: inline-block;
      margin-right: 8px;
      margin-bottom: 8px;
      padding: 8px 12px;
      border-radius: 999px;
      background: rgba(56, 189, 248, 0.08);
      color: #b8d8ff;
      border: 1px solid rgba(56, 189, 248, 0.14);
      font-size: 0.88rem;
    }

    body.light-theme .project-card .project-tags span {
      color: #26405a;
    }

    .info-card-grid {
      display: grid;
      grid-template-columns: repeat(12, minmax(0, 1fr));
      gap: 36px;
      margin-top: 10px;
    }

    .info-card {
      grid-column: span 4;
      background:
        radial-gradient(circle at top left, rgba(37, 99, 235, 0.14), transparent 32%),
        linear-gradient(180deg, #07142b 0%, #071022 100%);
      border: 1px solid rgba(96, 165, 250, 0.14);
      border-radius: 34px;
      padding: 36px 34px 32px;
      min-height: 460px;
      height: 100%;
      position: relative;
      overflow: hidden;
      box-shadow: inset 0 0 0 1px rgba(255,255,255,0.02);
      transition: transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;
    }

    body.light-theme .info-card {
      background:
        radial-gradient(circle at top left, rgba(37, 99, 235, 0.12), transparent 32%),
        linear-gradient(180deg, #ffffff 0%, #eef4ff 100%);
      box-shadow: var(--shadow);
    }

    .info-card::before {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, rgba(14, 165, 233, 0.08), transparent 58%);
      opacity: 0.9;
      pointer-events: none;
    }

    .info-card::after {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: 34px;
      padding: 1px;
      background: linear-gradient(180deg, rgba(96, 165, 250, 0.18), rgba(37, 99, 235, 0.03));
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      pointer-events: none;
    }

    .info-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 22px 50px rgba(2, 8, 23, 0.30);
      border-color: rgba(96, 165, 250, 0.28);
    }

    .info-card-icon {
      width: 84px;
      height: 84px;
      border-radius: 24px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 28px;
      background: linear-gradient(180deg, rgba(37, 99, 235, 0.14), rgba(14, 165, 233, 0.08));
      border: 1px solid rgba(96, 165, 250, 0.16);
      color: #4cc3ff;
      font-size: 2rem;
      position: relative;
      z-index: 1;
      transition: transform 0.35s ease, border-color 0.35s ease, background 0.35s ease;
    }

    .info-card:hover .info-card-icon {
      transform: translateY(-4px);
      border-color: rgba(96, 165, 250, 0.28);
      background: linear-gradient(180deg, rgba(37, 99, 235, 0.20), rgba(14, 165, 233, 0.12));
    }

    .info-card h4 {
      font-size: clamp(1.9rem, 2.8vw, 2.25rem);
      font-weight: 800;
      margin-bottom: 22px;
      line-height: 1.12;
      letter-spacing: -0.04em;
      color: #ffffff;
      position: relative;
      z-index: 1;
      max-width: 260px;
    }

    body.light-theme .info-card h4 {
      color: #0f172a;
    }

    .info-card p {
      margin: 0;
      color: #a9bad1;
      font-size: 1.02rem;
      line-height: 1.7;
      position: relative;
      z-index: 1;
      max-width: 255px;
    }

    body.light-theme .info-card p {
      color: #64748b;
    }

    .cert-card,
    .publication-card {
      background: linear-gradient(180deg, rgba(9, 18, 37, 0.96), rgba(6, 14, 29, 0.96));
      border: 1px solid var(--border);
      border-radius: 24px;
      overflow: hidden;
      height: 100%;
      box-shadow: var(--shadow);
    }

    body.light-theme .cert-card,
    body.light-theme .publication-card {
      background: #ffffff;
    }

    .cert-preview {
      min-height: 230px;
      background: linear-gradient(135deg, rgba(37, 99, 235, 0.18), rgba(14, 165, 233, 0.06));
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid rgba(255,255,255,0.06);
      text-align: center;
      padding: 24px;
    }

    body.light-theme .cert-preview {
      border-bottom: 1px solid rgba(0,0,0,0.06);
    }

    .cert-preview i {
      font-size: 3.2rem;
      color: var(--accent);
      margin-bottom: 14px;
      display: block;
    }

    .cert-body {
      padding: 24px;
    }

    .cert-body h4,
    .publication-card h4,
    .publication-item h5 {
      color: var(--text);
    }

    .cert-body h4 {
      font-size: 1.22rem;
      font-weight: 700;
      margin-bottom: 10px;
    }

    .cert-body p {
      color: var(--muted);
      margin-bottom: 16px;
    }

    .cert-actions {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }

    .cert-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      border-radius: 999px;
      padding: 10px 16px;
      font-weight: 600;
      font-size: 0.95rem;
      border: 1px solid rgba(56, 189, 248, 0.18);
      color: var(--accent);
      background: rgba(56, 189, 248, 0.06);
    }

    .cert-btn:hover {
      color: #fff;
      background: var(--accent);
      border-color: var(--accent);
    }

    .publication-card {
      padding: 28px;
    }

    .publication-item + .publication-item {
      margin-top: 24px;
      padding-top: 24px;
      border-top: 1px solid rgba(255,255,255,0.08);
    }

    body.light-theme .publication-item + .publication-item {
      border-top: 1px solid rgba(0,0,0,0.08);
    }

    .publication-item h5 {
      font-size: 1.1rem;
      font-weight: 700;
      margin-bottom: 8px;
      line-height: 1.45;
    }

    .publication-meta {
      color: var(--accent);
      font-weight: 600;
      margin-bottom: 10px;
      display: block;
    }

    .publication-item p {
      color: var(--muted);
      margin-bottom: 14px;
    }

    .publication-link {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      color: #38bdf8;
      font-weight: 600;
      font-size: 0.95rem;
      transition: transform 0.2s ease, color 0.2s ease;
    }

    .publication-link i {
      transition: transform 0.2s ease;
    }

    .publication-link:hover {
      color: #7dd3fc;
      transform: translateY(-1px);
    }

    .publication-link:hover i {
      transform: translate(2px, -2px);
    }

    .contact-item {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 16px 18px;
      border: 1px solid var(--border);
      border-radius: 18px;
      background: rgba(9, 18, 37, 0.72);
      margin-bottom: 14px;
      color: var(--text);
      box-shadow: var(--shadow);
    }

    body.light-theme .contact-item {
      background: rgba(255,255,255,0.75);
    }

    .contact-item i {
      font-size: 1.25rem;
      color: var(--accent);
    }

    .contact-form-compact {
      max-width: 520px;
      margin-left: auto;
      background: linear-gradient(180deg, rgba(7, 20, 43, 0.95), rgba(7, 16, 34, 0.92));
      border: 1px solid var(--border);
      border-radius: 22px;
      padding: 24px;
      box-shadow: var(--shadow);
    }

    body.light-theme .contact-form-compact {
      background: rgba(255,255,255,0.92);
    }

    .contact-form-compact h4 {
      font-size: 1.2rem;
      margin-bottom: 8px;
      color: var(--text);
    }

    .contact-form-compact .form-note {
      color: var(--muted);
      font-size: 0.92rem;
      margin-bottom: 18px;
      line-height: 1.5;
    }

    .contact-form .form-control {
      background: rgba(255,255,255,0.04);
      border: 1px solid var(--border);
      color: var(--text);
      padding: 12px 14px;
      border-radius: 12px;
      font-size: 0.95rem;
    }

    .contact-form textarea.form-control {
      min-height: 120px;
      resize: vertical;
    }

    body.light-theme .contact-form .form-control:focus {
      background: #fff;
    }

    .contact-form .btn-main {
      width: 100%;
      padding: 12px 18px;
      border-radius: 12px;
    }

    .footer {
      border-top: 1px solid var(--border);
      padding: 30px 0;
      color: var(--muted);
      background: var(--footer-bg);
    }

    .floating-ai {
      position: fixed;
      right: 22px;
      bottom: 22px;
      z-index: 1050;
    }

    .floating-ai a {
      width: 62px;
      height: 62px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: var(--accent);
      color: #fff;
      font-size: 1.5rem;
      box-shadow: 0 10px 25px rgba(37, 99, 235, 0.25);
      transition: transform 0.25s ease;
    }

    .floating-ai a:hover {
      transform: translateY(-3px) scale(1.03);
      color: #fff;
    }

    .floating-ai .tooltip-text {
      position: absolute;
      right: 72px;
      bottom: 10px;
      white-space: nowrap;
      background: var(--surface);
      color: var(--text);
      padding: 10px 14px;
      border-radius: 12px;
      border: 1px solid var(--border);
      font-size: 0.92rem;
      opacity: 0;
      pointer-events: none;
      transform: translateY(8px);
      transition: all 0.2s ease;
    }

    .floating-ai:hover .tooltip-text {
      opacity: 1;
      transform: translateY(0);
    }

    .tawk-mobile-note {
      display: none;
    }

    .chat-widget {
      position: fixed;
      right: 22px;
      bottom: 96px;
      width: min(380px, calc(100vw - 28px));
      background: linear-gradient(180deg, rgba(9, 18, 37, 0.98), rgba(6, 14, 29, 0.98));
      border: 1px solid var(--border);
      border-radius: 22px;
      box-shadow: var(--shadow);
      overflow: hidden;
      z-index: 1049;
      opacity: 0;
      visibility: hidden;
      transform: translateY(16px) scale(0.98);
      transition: all 0.25s ease;
    }

    body.light-theme .chat-widget {
      background: rgba(255,255,255,0.98);
    }

    .chat-widget.is-open {
      opacity: 1;
      visibility: visible;
      transform: translateY(0) scale(1);
    }

    .chat-header {
      padding: 16px 18px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      border-bottom: 1px solid var(--border);
      background: linear-gradient(135deg, rgba(56, 189, 248, 0.14), rgba(37, 99, 235, 0.10));
    }

    .chat-header h5 {
      margin: 0;
      font-size: 1rem;
      color: var(--text);
    }

    .chat-header p {
      margin: 2px 0 0;
      font-size: 0.82rem;
      color: var(--muted);
    }

    .chat-close {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 1px solid var(--border);
      background: transparent;
      color: var(--text);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    .chat-body {
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      max-height: 320px;
      overflow-y: auto;
    }

    .chat-bubble {
      max-width: 86%;
      padding: 12px 14px;
      border-radius: 16px;
      font-size: 0.95rem;
      line-height: 1.5;
      word-break: break-word;
    }

    .chat-bubble.bot {
      background: rgba(56, 189, 248, 0.10);
      border: 1px solid rgba(56, 189, 248, 0.14);
      color: var(--text);
      align-self: flex-start;
    }

    .chat-bubble.user {
      background: linear-gradient(135deg, var(--accent), var(--accent-2));
      color: #fff;
      align-self: flex-end;
    }

    .chat-quick-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      padding: 0 16px 14px;
    }

    .chat-chip {
      border: 1px solid var(--border);
      background: rgba(255,255,255,0.04);
      color: var(--text);
      padding: 8px 12px;
      border-radius: 999px;
      font-size: 0.85rem;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .chat-chip:hover {
      background: rgba(56, 189, 248, 0.10);
      color: var(--accent);
    }

    .chat-form-box {
      padding: 14px 16px 16px;
      border-top: 1px solid var(--border);
      display: flex;
      gap: 10px;
    }

    .chat-input {
      flex: 1;
      border: 1px solid var(--border);
      border-radius: 14px;
      background: rgba(255,255,255,0.04);
      color: var(--text);
      padding: 12px 14px;
      font-size: 0.92rem;
      outline: none;
    }

    body.light-theme .chat-input {
      background: rgba(255,255,255,0.88);
    }

    .chat-send {
      border: none;
      border-radius: 14px;
      padding: 0 16px;
      background: linear-gradient(135deg, var(--accent), var(--accent-2));
      color: #fff;
      font-weight: 600;
      cursor: pointer;
    }

    @media (max-width: 767.98px) {
      .chat-widget {
        right: 14px;
        bottom: 78px;
        width: calc(100vw - 28px);
      }

      .floating-ai {
        right: 14px;
        bottom: 14px;
      }

      .floating-ai a {
        width: 56px;
        height: 56px;
        font-size: 1.35rem;
      }

      .floating-ai .tooltip-text {
        display: none;
      }

      .tawk-mobile-note {
        display: block;
        font-size: 0.88rem;
        color: var(--muted);
        margin-top: 12px;
      }

      iframe[title*="chat"],
      iframe[title*="Chat"],
      iframe[title*="Tawk"],
      iframe[src*="tawk.to"] {
        max-width: calc(100vw - 28px) !important;
        width: min(380px, calc(100vw - 28px)) !important;
        right: 14px !important;
        left: auto !important;
        bottom: 14px !important;
        border-radius: 18px !important;
      }
    }

    @media (max-width: 991.98px) {
      .info-card {
        grid-column: span 6;
        min-height: 400px;
      }

      .navbar-brand {
        font-size: 1.8rem;
      }

      .hero {
        padding-top: 145px;
        padding-bottom: 80px;
      }

      .profile-frame {
        max-width: 360px;
        margin: 0 auto;
      }

      .about-image-wrap {
        min-height: 360px;
      }
    }

    @media (max-width: 575.98px) {
      .info-card-grid {
        grid-template-columns: 1fr;
        gap: 20px;
      }

      .info-card {
        grid-column: auto;
        min-height: auto;
        padding: 28px 24px;
        border-radius: 28px;
      }

      .info-card-icon {
        width: 72px;
        height: 72px;
        border-radius: 20px;
        margin-bottom: 22px;
      }

      .info-card h4 {
        font-size: 1.9rem;
        max-width: none;
      }

      .info-card p {
        max-width: none;
      }

      .section-padding {
        padding: 78px 0;
      }

      .navbar-brand {
        font-size: 1.5rem;
      }

      .hero h1 {
        font-size: 3rem;
      }
    }
  </style>
</head>
<body>
  <nav class="navbar navbar-expand-lg fixed-top navbar-dark">
    <div class="container">
      <a class="navbar-brand" href="#home">Tareq<span>.</span></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="mainNav">
        <ul class="navbar-nav ms-auto align-items-lg-center">
          <li class="nav-item"><a class="nav-link" href="#home">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
          <li class="nav-item"><a class="nav-link" href="#skills">Skills</a></li>
          <li class="nav-item"><a class="nav-link" href="#experience">Experience</a></li>
          <li class="nav-item"><a class="nav-link" href="#projects">Projects</a></li>
          <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
          <li class="nav-item ms-lg-2 mt-3 mt-lg-0 d-flex align-items-center">
            <button class="theme-toggle" id="themeToggle" type="button" aria-label="Toggle light and dark theme" title="Toggle theme">
              <i class="bi bi-sun-fill" id="themeToggleIcon"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <main>
    <section class="hero" id="home">
      <div class="container">
        <div class="row align-items-center g-5">
          <div class="col-lg-7">
            <h1>
              Cyber Security<br />
              Engineer
            </h1>
            <p class="lead">
              Hi, My name is Md Tareq Rahman, a Sydney based aspiring Cyber Security Analyst / Security Analyst / SOC Analyst. I am building hands-on skills in monitoring, defensive security, log analysis, and practical problem solving while preparing for entry-level cybersecurity opportunities.
            </p>
            <div class="hero-social">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
              <a href="mailto:mdtareqrahman1995@gmail.com" aria-label="Email"><i class="bi bi-envelope"></i></a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class="bi bi-github"></i></a>
            </div>
          </div>

          <div class="col-lg-5">
            <div class="hero-visual">
              <div class="profile-frame">
                <img src="tareq-hero.jpg" alt="Md Tareq Rahman" class="img-fluid w-100 h-100" style="object-fit: cover;">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding about-section" id="about">
      <div class="container">
        <div class="row g-5 about-row">
          <div class="col-lg-5">
            <div class="about-image-wrap">
              <img src="tareq-about.jpg" alt="Md Tareq Rahman" class="img-fluid w-100 h-100" style="object-fit: cover;">
            </div>
          </div>
          <div class="col-lg-7">
            <div class="about-copy">
              <span class="eyebrow">About</span>
              <h3>A self taught with a lot of interest in Cyber Security</h3>
              <p>
                Hi, I am Tareq, located in Sydney, Australia. My interest has always been in Cyber Security. I want to ensure that security remains a top priority in our rapidly developing digital world and I would like to contribute to a more secure environment through practical defensive work.
              </p>
              <p>
                I like to keep myself relevant by learning cybersecurity tools, improving my technical knowledge, and following current security developments. I am currently completing my Master of Information Technology in Cyber Security and want to continue improving myself within the Cyber Security field in order to become a strong Security Analyst or SOC Analyst. I always keep a close eye on new security issues and like to challenge myself by learning through labs, analysis, and practical problem solving.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding pt-0" id="skills">
      <div class="container">
        <span class="eyebrow">Skills & Certifications</span>
        <h2 class="section-title">A practical foundation for analyst roles</h2>
        <p class="section-subtitle">
          This section highlights the technical areas I am building, the tools I am learning, and the certifications that support my cybersecurity career path.
        </p>

        <div class="info-card-grid mb-5">
          <div class="info-card">
            <div class="info-card-icon">
              <i class="bi bi-shield-check"></i>
            </div>
            <h4>Google Cybersecurity Certificate</h4>
            <p>Hands-on learning across Linux, MySQL, Python, and practical security workflows.</p>
          </div>

          <div class="info-card">
            <div class="info-card-icon">
              <i class="bi bi-file-earmark-code"></i>
            </div>
            <h4>Security+ Preparation</h4>
            <p>Currently strengthening core defensive security knowledge for analyst and SOC pathways.</p>
          </div>

          <div class="info-card">
            <div class="info-card-icon">
              <i class="bi bi-cpu"></i>
            </div>
            <h4>Research & Technical Analysis</h4>
            <p>Built a strong analytical foundation through AI, IoT, and structured problem-solving projects.</p>
          </div>
        </div>

        <span class="eyebrow">Certification Section</span>
        <div class="row g-4 align-items-stretch">
          <div class="col-lg-6">
            <div class="cert-card">
              <div class="cert-preview">
                <img src="certificate-placeholder.jpg" alt="Certificate preview" class="img-fluid" style="border-radius:14px; cursor:pointer;" data-bs-toggle="modal" data-bs-target="#certModal" />
              </div>
              <div class="cert-body">
                <h4>Google Cybersecurity Certificate</h4>
                <p>
                  A core certification that supports my cybersecurity foundation, including security concepts, risk, monitoring, and analyst-oriented skills.
                </p>
                <div class="cert-actions">
                  <a href="#" class="cert-btn"><i class="bi bi-image"></i> Add Certificate Image</a>
                  <button type="button" class="cert-btn" onclick="alert('Add your real certificate URL here first.');"><i class="bi bi-box-arrow-up-right"></i> View Certificate</button>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="cert-card">
              <div class="cert-preview">
                <img src="certificate-placeholder.jpg" alt="Certificate preview" class="img-fluid" style="border-radius:14px; cursor:pointer;" data-bs-toggle="modal" data-bs-target="#certModal" />
              </div>
              <div class="cert-body">
                <h4>CompTIA Security+ (Planned)</h4>
                <p>
                  Reserved section for a future certification. You can replace this block with the real certificate or keep it as a roadmap item.
                </p>
                <div class="cert-actions">
                  <a href="#" class="cert-btn"><i class="bi bi-image"></i> Add Certificate Image</a>
                  <button type="button" class="cert-btn" onclick="alert('Add your real certificate URL here first.');"><i class="bi bi-box-arrow-up-right"></i> View Certificate</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding" id="experience">
      <div class="container">
        <div class="row g-4 align-items-stretch">
          <div class="col-lg-6">
            <div class="publication-card h-100">
              <span class="eyebrow">Research Publications</span>
              <h4 class="mb-4">Published academic work</h4>

              <div class="publication-item">
                <h5>Classification of Breast Cancer Cell Images using Multiple Convolution Neural Network Architectures</h5>
                <span class="publication-meta">IJACSA • 2021</span>
                <p>
                  Research publication focused on image classification using multiple CNN architectures, demonstrating analytical thinking, experimentation, and technical investigation.
                </p>
                <a href="https://thesai.org/Downloads/Volume12No9/Paper_34-Classification_of_Breast_Cancer_Cell_Images.pdf" target="_blank" rel="noopener noreferrer" class="publication-link" onclick="window.open('https://thesai.org/Downloads/Volume12No9/Paper_34-Classification_of_Breast_Cancer_Cell_Images.pdf','_blank'); return false;">Read Publication <i class="bi bi-arrow-up-right"></i></a>
              </div>

              <div class="publication-item">
                <h5>IoT-Based Smart Automated Agriculture and Real-Time Monitoring System</h5>
                <span class="publication-meta">IEEE • 2021</span>
                <p>
                  Research work centered on automation and real-time monitoring, reflecting systems thinking, implementation skills, and applied engineering problem solving.
                </p>
                <a href="https://ieeexplore.ieee.org/document/9591855/" target="_blank" rel="noopener noreferrer" class="publication-link" onclick="window.open('https://ieeexplore.ieee.org/document/9591855/','_blank'); return false;">Read Publication <i class="bi bi-arrow-up-right"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="card-custom h-100">
              <span class="eyebrow">Experience & Education</span>
              <h4 class="mb-4">Professional background</h4>
              <div class="timeline-item">
                <h5>Traffic Controller</h5>
                <small>Sydney, NSW • 2024 — Present</small>
                <p class="mb-0">
                  Applied quick decision-making under pressure, maintained accurate operational logs, and coordinated clearly with teams to reduce risks and support safe operations.
                </p>
              </div>
              <div class="timeline-item">
                <h5>Master of Information Technology (Cyber Security)</h5>
                <small>Victorian Institute of Technology, Sydney • Graduating 2026</small>
                <p class="mb-0">
                  Focused on cybersecurity learning, technical foundations, and industry preparation for analyst roles.
                </p>
              </div>
              <div class="timeline-item mb-0">
                <h5>Bachelor of Computer Science and Engineering</h5>
                <small>Daffodil International University • Graduated 2022</small>
                <p class="mb-0">
                  Built core computing, systems, and problem-solving skills that support technical security work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding pt-0" id="projects">
      <div class="container">
        <h2 class="section-title">Featured Work</h2>
        <p class="section-subtitle">
          These project cards are structured so you can quickly replace them with your real GitHub projects, labs, screenshots, and writeups.
        </p>

        <div class="row g-4">
          <div class="col-md-6 col-xl-4">
            <div class="card-custom project-card h-100">
              <i class="bi bi-search-heart icon"></i>
              <h4>SOC / Detection Lab</h4>
              <p>
                Add your blue-team or monitoring lab here. Example: alert monitoring, log review, suspicious activity analysis, or a home SOC setup.
              </p>
              <div class="project-tags">
                <span>Logs</span>
                <span>Detection</span>
                <span>Monitoring</span>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-xl-4">
            <div class="card-custom project-card h-100">
              <i class="bi bi-bug icon"></i>
              <h4>Security Research / Analysis</h4>
              <p>
                Add a security write-up, phishing analysis, threat scenario review, or security case study to demonstrate your analyst mindset.
              </p>
              <div class="project-tags">
                <span>Analysis</span>
                <span>Threats</span>
                <span>Research</span>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-xl-4">
            <div class="card-custom project-card h-100">
              <i class="bi bi-github icon"></i>
              <h4>GitHub Portfolio Project</h4>
              <p>
                Showcase your scripts, labs, documentation, or automation work here. Replace this section with links to repositories and screenshots.
              </p>
              <div class="project-tags">
                <span>GitHub</span>
                <span>Scripts</span>
                <span>Documentation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding" id="contact">
      <div class="container">
        <div class="row g-4 align-items-stretch">
          <div class="col-lg-5">
            <h2 class="section-title">Let's Connect</h2>
            <p class="section-subtitle">
              Open to internship and analyst opportunities. You can connect with me by email, LinkedIn, GitHub, or a live chat widget.
            </p>

            <a class="contact-item" href="mailto:mdtareqrahman1995@gmail.com">
              <i class="bi bi-envelope"></i>
              <div>
                <strong>Email</strong>
                <span>mdtareqrahman1995@gmail.com</span>
              </div>
            </a>

            <a class="contact-item" href="tel:+61451893458">
              <i class="bi bi-telephone"></i>
              <div>
                <strong>Phone</strong>
                <span>0451 893 458</span>
              </div>
            </a>

            <a class="contact-item" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <i class="bi bi-linkedin"></i>
              <div>
                <strong>LinkedIn</strong>
                <span>Replace with your LinkedIn profile URL</span>
              </div>
            </a>

            <a class="contact-item" href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <i class="bi bi-github"></i>
              <div>
                <strong>GitHub</strong>
                <span>Replace with your GitHub profile URL</span>
              </div>
            </a>
          </div>

          <div class="col-lg-7 d-flex align-items-start justify-content-lg-end">
            <div class="contact-form-compact w-100">
              <h4 class="fw-bold">Quick Message</h4>
              <p class="form-note">
                A simple contact form layout you can connect later to Formspree, Netlify Forms, or EmailJS.
              </p>
              <p class="tawk-mobile-note">
                Live chat is adjusted for mobile so it stays inside the screen like the layout you showed.
              </p>
              <form class="contact-form" action="#" method="post" novalidate>
                <div class="row g-3">
                  <div class="col-md-6">
                    <input type="text" class="form-control" placeholder="Your Name" aria-label="Your Name" />
                  </div>
                  <div class="col-md-6">
                    <input type="email" class="form-control" placeholder="Your Email" aria-label="Your Email" />
                  </div>
                  <div class="col-12">
                    <input type="text" class="form-control" placeholder="Subject" aria-label="Subject" />
                  </div>
                  <div class="col-12">
                    <textarea class="form-control" rows="4" placeholder="Write your message" aria-label="Message"></textarea>
                  </div>
                  <div class="col-12">
                    <button type="submit" class="btn-main">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container text-center">
      <p class="mb-0">© 2026 Md Tareq Rahman. All rights reserved.</p>
    </div>
  </footer>

  <div class="floating-ai">
    <a href="#" id="chatToggle" aria-label="Open live chat">
      <i class="bi bi-robot"></i>
    </a>
  </div>

  <div class="chat-widget" id="chatWidget" aria-live="polite" aria-label="Chat widget">
    <div class="chat-header">
      <div>
        <h5>Portfolio Assistant</h5>
        <p>Ask about skills, projects, publications, or contact</p>
      </div>
      <button class="chat-close" id="chatClose" type="button" aria-label="Close chat">
        <i class="bi bi-x-lg"></i>
      </button>
    </div>
    <div class="chat-body" id="chatMessages">
      <div class="chat-bubble bot">Hi, I’m Tareq’s portfolio assistant. Ask me about skills, certifications, projects, publications, or how to contact him.</div>
    </div>
    <div class="chat-quick-actions">
      <button class="chat-chip" type="button" data-message="Show me certifications">Certifications</button>
      <button class="chat-chip" type="button" data-message="Show me publications">Publications</button>
      <button class="chat-chip" type="button" data-message="Show me projects">Projects</button>
      <button class="chat-chip" type="button" data-message="How can I contact Tareq?">Contact</button>
    </div>
    <form class="chat-form-box" id="chatForm">
      <input class="chat-input" id="chatInput" type="text" placeholder="Type a message..." aria-label="Type a message" />
      <button class="chat-send" type="submit">Send</button>
    </form>
  </div>

  <div class="modal fade" id="certModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content" style="background: transparent; border: none;">
        <div class="modal-body p-0 text-center">
          <img src="certificate-placeholder.jpg" class="img-fluid rounded-4" alt="Certificate Full View">
        </div>
      </div>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
  <script>
    (function () {
      const body = document.body;
      const toggleBtn = document.getElementById('themeToggle');
      const toggleIcon = document.getElementById('themeToggleIcon');
      const storageKey = 'tareq-portfolio-theme';
      const chatToggle = document.getElementById('chatToggle');
      const chatWidget = document.getElementById('chatWidget');
      const chatClose = document.getElementById('chatClose');
      const chatForm = document.getElementById('chatForm');
      const chatInput = document.getElementById('chatInput');
      const chatMessages = document.getElementById('chatMessages');
      const quickChips = document.querySelectorAll('.chat-chip');

      function applyTheme(theme) {
        const isLight = theme === 'light';
        body.classList.toggle('light-theme', isLight);
        if (toggleIcon) {
          toggleIcon.className = isLight ? 'bi bi-moon-stars-fill' : 'bi bi-sun-fill';
        }
      }

      function addMessage(text, sender) {
        if (!chatMessages) return;
        const message = document.createElement('div');
        message.className = 'chat-bubble ' + sender;
        message.textContent = text;
        chatMessages.appendChild(message);
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }

      function getBotReply(input) {
        const text = input.toLowerCase();
        if (text.includes('cert')) return 'Tareq has completed the Google Cybersecurity Certificate and is also preparing for CompTIA Security+.';
        if (text.includes('publication') || text.includes('research')) return 'Tareq has publications in IJACSA and IEEE, including work on breast cancer image classification and IoT-based smart agriculture monitoring.';
        if (text.includes('project')) return 'Featured work includes a SOC or detection lab, security research and analysis, and GitHub-based technical portfolio work.';
        if (text.includes('contact') || text.includes('email') || text.includes('phone')) return 'You can contact Tareq by email at mdtareqrahman1995@gmail.com or phone at 0451 893 458.';
        if (text.includes('skill')) return 'Tareq is building skills in Linux, Python, MySQL, defensive security, security monitoring, and analyst-focused problem solving.';
        if (text.includes('experience') || text.includes('education')) return 'Tareq is completing a Master of Information Technology in Cyber Security and has prior experience as a Traffic Controller, along with a Bachelor of Computer Science and Engineering.';
        return 'Thanks for your message. This is a built-in portfolio chatbot that can be customized with more detailed responses later.';
      }

      function toggleChat(forceState) {
        if (!chatWidget) return;
        const shouldOpen = typeof forceState === 'boolean' ? forceState : !chatWidget.classList.contains('is-open');
        chatWidget.classList.toggle('is-open', shouldOpen);
        if (shouldOpen && chatInput) {
          setTimeout(function () { chatInput.focus(); }, 120);
        }
      }

      const savedTheme = localStorage.getItem(storageKey);
      applyTheme(savedTheme === 'light' ? 'light' : 'dark');

      if (toggleBtn) {
        toggleBtn.addEventListener('click', function () {
          const nextTheme = body.classList.contains('light-theme') ? 'dark' : 'light';
          applyTheme(nextTheme);
          localStorage.setItem(storageKey, nextTheme);
        });
      }

      if (chatToggle) {
        chatToggle.addEventListener('click', function (e) {
          e.preventDefault();
          toggleChat();
        });
      }

      if (chatClose) {
        chatClose.addEventListener('click', function () {
          toggleChat(false);
        });
      }

      quickChips.forEach(function (chip) {
        chip.addEventListener('click', function () {
          const prompt = chip.getAttribute('data-message') || '';
          addMessage(prompt, 'user');
          setTimeout(function () { addMessage(getBotReply(prompt), 'bot'); }, 320);
          toggleChat(true);
        });
      });

      if (chatForm) {
        chatForm.addEventListener('submit', function (e) {
          e.preventDefault();
          const value = chatInput ? chatInput.value.trim() : '';
          if (!value) return;
          addMessage(value, 'user');
          if (chatInput) chatInput.value = '';
          setTimeout(function () { addMessage(getBotReply(value), 'bot'); }, 360);
        });
      }
    })();
  </script>
</body>
</html>
