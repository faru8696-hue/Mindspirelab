#!/usr/bin/env python3
"""Build script for MindSpire Lab website - generates all HTML pages"""

import os
import json

OUT = "/home/user/webapp/public"
os.makedirs(OUT, exist_ok=True)

# ─────────────────────────────────────────────────────────────────────────────
# LOGO SVG
# ─────────────────────────────────────────────────────────────────────────────
LOGO_SVG = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" fill="none">
  <defs><linearGradient id="nlg" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#a78bfa"/><stop offset="100%" stop-color="#4f46e5"/></linearGradient></defs>
  <rect width="36" height="36" rx="10" fill="url(#nlg)"/>
  <circle cx="18" cy="18" r="3" fill="white" opacity="0.95"/>
  <ellipse cx="18" cy="18" rx="10.5" ry="4" stroke="white" stroke-width="1.6" fill="none" opacity="0.9"/>
  <ellipse cx="18" cy="18" rx="10.5" ry="4" stroke="white" stroke-width="1.6" fill="none" opacity="0.9" transform="rotate(60 18 18)"/>
  <ellipse cx="18" cy="18" rx="10.5" ry="4" stroke="white" stroke-width="1.6" fill="none" opacity="0.9" transform="rotate(120 18 18)"/>
  <circle cx="28.5" cy="18" r="1.8" fill="#f59e0b"/>
</svg>'''

# ─────────────────────────────────────────────────────────────────────────────
# SHARED CSS
# ─────────────────────────────────────────────────────────────────────────────
SHARED_CSS = """
:root{--p:#6c63ff;--pd:#4f46e5;--grn:#10b981;--org:#f59e0b;--dark:#0f172a;--dark2:#1e293b;--text:#374151;--muted:#6b7280;--border:#e5e7eb;--bg:#f8fafc}
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Inter',sans-serif;color:var(--text);background:#fff;line-height:1.6}
a{text-decoration:none;color:inherit}
.container{max-width:1200px;margin:0 auto;padding:0 24px}
.tc{text-align:center}
.stag{display:inline-flex;align-items:center;gap:6px;background:rgba(108,99,255,.1);color:var(--p);border:1px solid rgba(108,99,255,.2);padding:6px 14px;border-radius:30px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:14px}
.stitle{font-size:clamp(28px,4vw,42px);font-weight:900;color:var(--dark);line-height:1.15;margin-bottom:16px}
.ssub{font-size:16px;color:var(--muted);max-width:600px;margin:0 auto 40px}
section{padding:80px 5%}
/* NAV */
.nav{position:fixed;top:0;left:0;right:0;z-index:1000;padding:14px 5%;display:flex;align-items:center;justify-content:space-between;background:rgba(255,255,255,.95);backdrop-filter:blur(12px);border-bottom:1px solid transparent;transition:all .3s}
.nav.scrolled{border-color:var(--border);box-shadow:0 2px 20px rgba(0,0,0,.06)}
.nav-logo{display:flex;align-items:center;gap:10px;font-size:18px;font-weight:900;color:var(--dark2)}
.nav-logo .logo-icon{width:36px;height:36px}
.nav-logo .logo-text{display:flex;flex-direction:column;line-height:1.1}
.nav-logo .logo-name{font-size:16px;font-weight:900;color:var(--dark)}
.nav-logo .logo-sub{font-size:10px;color:var(--muted);font-weight:500;letter-spacing:.5px}
.nav-links{display:flex;align-items:center;gap:4px}
.nav-link{padding:8px 14px;border-radius:8px;font-size:14px;font-weight:500;color:var(--text);transition:all .2s}
.nav-link:hover{background:var(--bg);color:var(--dark)}
.nav-link.active{color:var(--p);background:rgba(108,99,255,.08)}
.btn-nav{background:linear-gradient(135deg,var(--p),var(--pd));color:#fff!important;padding:9px 20px!important;border-radius:10px;font-weight:700!important;transition:all .2s!important}
.btn-nav:hover{transform:translateY(-1px);box-shadow:0 4px 15px rgba(108,99,255,.4)!important}
.btn-primary{display:inline-flex;align-items:center;gap:8px;background:linear-gradient(135deg,var(--p),var(--pd));color:#fff;padding:12px 24px;border-radius:12px;font-weight:700;font-size:15px;transition:all .2s;border:none;cursor:pointer}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 8px 25px rgba(108,99,255,.4)}
.btn-secondary{display:inline-flex;align-items:center;gap:8px;background:transparent;color:var(--p);padding:12px 24px;border-radius:12px;font-weight:700;font-size:15px;border:2px solid var(--p);transition:all .2s}
.btn-secondary:hover{background:rgba(108,99,255,.08)}
.btn-wa{display:inline-flex;align-items:center;gap:8px;background:#25d366;color:#fff;padding:12px 24px;border-radius:12px;font-weight:700;font-size:15px;transition:all .2s}
.btn-wa:hover{transform:translateY(-2px);box-shadow:0 8px 25px rgba(37,211,102,.4)}
/* Mobile nav */
.hamburger{display:none;flex-direction:column;gap:5px;cursor:pointer;padding:8px}
.hamburger span{width:22px;height:2px;background:var(--dark);border-radius:2px;transition:.3s}
.mob-menu{display:none;flex-direction:column;gap:4px;padding:12px 5%;background:rgba(255,255,255,.98);backdrop-filter:blur(12px);border-bottom:1px solid var(--border)}
.mob-menu.open{display:flex}
.mob-apchem{background:linear-gradient(135deg,var(--p),var(--pd))!important;color:#fff!important;border-radius:10px;text-align:center;margin-top:4px}
@media(max-width:768px){.nav-links{display:none}.hamburger{display:flex}}
/* HERO */
.hero{min-height:100vh;background:linear-gradient(135deg,#0f0c29 0%,#1a1252 40%,#302b63 70%,#1e1b4b 100%);display:flex;align-items:center;padding:100px 5% 60px;position:relative;overflow:hidden}
.hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 20% 50%,rgba(108,99,255,.3),transparent 60%),radial-gradient(ellipse at 80% 20%,rgba(245,158,11,.15),transparent 50%)}
.orb{position:absolute;border-radius:50%;filter:blur(80px);opacity:.25;animation:orb-f 12s ease-in-out infinite}
.orb1{width:400px;height:400px;background:#6c63ff;top:-100px;right:-100px;animation-delay:0s}
.orb2{width:300px;height:300px;background:#10b981;bottom:-80px;left:-80px;animation-delay:-5s}
.orb3{width:200px;height:200px;background:#f59e0b;top:40%;right:20%;animation-delay:-9s}
@keyframes orb-f{0%,100%{transform:translateY(0) scale(1)}50%{transform:translateY(-30px) scale(1.1)}}
.hero-grid{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;max-width:1100px;margin:0 auto;position:relative;z-index:1}
.hero-badge{display:inline-flex;align-items:center;gap:8px;background:rgba(167,139,250,.15);border:1px solid rgba(167,139,250,.3);color:#c4b5fd;padding:7px 16px;border-radius:30px;font-size:13px;font-weight:600;margin-bottom:24px;backdrop-filter:blur(10px)}
.hero h1{font-size:clamp(36px,5vw,60px);font-weight:900;color:#fff;line-height:1.1;margin-bottom:20px}
.hero h1 span{background:linear-gradient(90deg,#a78bfa,#f59e0b);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.hero-sub{font-size:17px;color:rgba(255,255,255,.65);margin-bottom:36px;line-height:1.7}
.hero-cta{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:40px}
.hero-stats{display:flex;gap:28px;flex-wrap:wrap}
.hstat{text-align:center}
.hstat-num{font-size:26px;font-weight:900;color:#fff}
.hstat-lbl{font-size:12px;color:rgba(255,255,255,.5);text-transform:uppercase;letter-spacing:.5px}
.hero-right{position:relative}
.platform-preview{background:rgba(255,255,255,.08);backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,.15);border-radius:20px;padding:28px;position:relative}
.pp-header{display:flex;align-items:center;gap:10px;margin-bottom:20px;padding-bottom:16px;border-bottom:1px solid rgba(255,255,255,.1)}
.pp-dot{width:10px;height:10px;border-radius:50%}
.pp-title{font-size:13px;font-weight:700;color:#fff;margin-left:8px}
.pp-metric{background:rgba(255,255,255,.06);border-radius:12px;padding:14px 16px;margin-bottom:10px;display:flex;align-items:center;justify-content:space-between}
.pp-metric-lbl{font-size:12px;color:rgba(255,255,255,.55)}
.pp-metric-val{font-size:18px;font-weight:800;color:#fff}
.pp-badge{background:rgba(16,185,129,.15);border:1px solid rgba(16,185,129,.3);border-radius:8px;padding:8px 14px;text-align:center;margin-top:14px}
.pp-badge-text{font-size:12px;color:#34d399;font-weight:600}
.mol{position:absolute;font-size:32px;opacity:.12;animation:mol-float linear infinite;user-select:none}
@keyframes mol-float{0%{transform:translateY(100vh) rotate(0)}100%{transform:translateY(-100px) rotate(360deg)}}
/* FEATURES */
.features-g{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:20px;margin-top:40px}
.feat-card{background:#fff;border:1px solid var(--border);border-radius:16px;padding:24px;transition:.2s}
.feat-card:hover{border-color:rgba(108,99,255,.3);box-shadow:0 4px 20px rgba(108,99,255,.1);transform:translateY(-2px)}
.feat-icon{width:48px;height:48px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:22px;margin-bottom:14px}
.feat-title{font-size:15px;font-weight:800;color:var(--dark);margin-bottom:6px}
.feat-desc{font-size:13px;color:var(--muted);line-height:1.6}
/* HOW IT WORKS */
.steps-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:24px;margin-top:40px}
.step-card{background:#fff;border:1px solid var(--border);border-radius:16px;padding:28px 24px;text-align:center;position:relative}
.step-num{width:44px;height:44px;border-radius:12px;background:linear-gradient(135deg,var(--p),var(--pd));color:#fff;font-size:18px;font-weight:900;display:flex;align-items:center;justify-content:center;margin:0 auto 14px}
.step-title{font-size:14px;font-weight:800;color:var(--dark);margin-bottom:6px}
.step-desc{font-size:13px;color:var(--muted)}
/* COURSES */
.course-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:20px;margin-top:36px}
.course-card{border-radius:16px;padding:24px;color:#fff;position:relative;overflow:hidden}
.course-badge{display:inline-block;background:rgba(255,255,255,.2);border-radius:20px;padding:4px 12px;font-size:11px;font-weight:700;margin-bottom:12px;backdrop-filter:blur(4px)}
.course-title{font-size:16px;font-weight:800;margin-bottom:6px}
.course-desc{font-size:12px;opacity:.75;line-height:1.5;margin-bottom:16px}
.course-meta{display:flex;gap:12px;font-size:11px;opacity:.75}
.course-meta span{display:flex;align-items:center;gap:4px}
/* ABOUT/TUTOR */
.about-g{display:grid;grid-template-columns:1fr 1.2fr;gap:60px;align-items:center;max-width:1000px;margin:0 auto}
.tutor-photo{width:100%;border-radius:20px;aspect-ratio:4/5;object-fit:cover}
.about-photo-wrap{position:relative}
.about-photo-wrap::after{content:'';position:absolute;inset:-8px;border-radius:24px;background:linear-gradient(135deg,var(--p),var(--pd));z-index:-1;opacity:.3}
.about-tag{display:inline-flex;align-items:center;gap:6px;background:rgba(108,99,255,.1);border:1px solid rgba(108,99,255,.2);color:var(--p);padding:6px 14px;border-radius:20px;font-size:12px;font-weight:700;margin-bottom:16px}
.about-list{list-style:none;display:flex;flex-direction:column;gap:10px;margin:20px 0}
.about-list li{display:flex;align-items:flex-start;gap:12px;font-size:14px;color:var(--text)}
.about-list li i{color:var(--grn);margin-top:2px;font-size:14px;flex-shrink:0}
/* PRICING */
.pricing-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:24px;max-width:900px;margin:40px auto 0}
.price-card{background:#fff;border:2px solid var(--border);border-radius:20px;padding:36px 32px;transition:.2s;position:relative}
.price-card.featured{border-color:var(--p);box-shadow:0 8px 40px rgba(108,99,255,.15)}
.price-popular{position:absolute;top:-14px;left:50%;transform:translateX(-50%);background:linear-gradient(135deg,var(--p),var(--pd));color:#fff;padding:5px 18px;border-radius:20px;font-size:12px;font-weight:700;white-space:nowrap}
.price-name{font-size:14px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:1px;margin-bottom:10px}
.price-amount{font-size:48px;font-weight:900;color:var(--dark);line-height:1}
.price-period{font-size:14px;color:var(--muted);margin-bottom:6px}
.price-sub{font-size:13px;color:var(--muted);margin-bottom:24px;padding-bottom:24px;border-bottom:1px solid var(--border)}
.price-features{list-style:none;display:flex;flex-direction:column;gap:10px;margin-bottom:28px}
.price-features li{display:flex;align-items:flex-start;gap:10px;font-size:14px;color:var(--text)}
.price-features li i.fa-check{color:var(--grn)}
.price-features li i.fa-times{color:#d1d5db}
.price-features li.muted{color:var(--muted)}
.price-note{font-size:12px;color:var(--muted);background:var(--bg);border-radius:8px;padding:10px 12px;margin-bottom:20px;border-left:3px solid var(--org)}
/* CONTACT */
.contact-g{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:start;max-width:1100px;margin:0 auto}
.contact-items{margin:32px 0}
.ci{display:flex;align-items:center;gap:16px;padding:16px 0;border-bottom:1px solid var(--border)}
.ci:last-child{border-bottom:none}
.ci-icon{width:48px;height:48px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0}
.ci-label{font-size:12px;color:var(--muted);font-weight:600;text-transform:uppercase;letter-spacing:.5px;margin-bottom:3px}
.ci-value{font-size:14px;font-weight:600;color:var(--dark)}
.contact-form-card{background:var(--bg);border:1px solid var(--border);border-radius:20px;padding:32px}
.form-group{margin-bottom:18px}
.form-label{font-size:13px;font-weight:600;color:var(--dark);display:block;margin-bottom:6px}
.form-input{width:100%;padding:12px 14px;border:1.5px solid var(--border);border-radius:10px;font-family:inherit;font-size:14px;background:#fff;transition:.2s;outline:none}
.form-input:focus{border-color:var(--p);box-shadow:0 0 0 3px rgba(108,99,255,.1)}
.form-select{appearance:none;background:#fff url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%236b7280' stroke-width='1.5'/%3E%3C/svg%3E") no-repeat right 12px center}
/* FOOTER */
footer{background:var(--dark2);color:#fff;padding:60px 5% 30px}
.footer-top{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:40px;margin-bottom:40px}
.footer-brand p{font-size:13px;color:rgba(255,255,255,.5);line-height:1.7;margin-top:10px;max-width:260px}
.footer-col h4{font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:rgba(255,255,255,.4);margin-bottom:14px}
.footer-col a{display:block;font-size:13px;color:rgba(255,255,255,.55);padding:3px 0;transition:.2s}
.footer-col a:hover{color:#fff}
.footer-bottom{padding-top:24px;border-top:1px solid rgba(255,255,255,.1);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px}
.footer-bottom p{font-size:12px;color:rgba(255,255,255,.35)}
.footer-socials{display:flex;gap:10px;margin-top:14px}
.fs{width:36px;height:36px;border-radius:8px;background:rgba(255,255,255,.08);display:flex;align-items:center;justify-content:center;font-size:14px;color:rgba(255,255,255,.6);transition:.2s}
.fs:hover{background:var(--p);color:#fff}
/* ANIMATIONS */
.fade-up{opacity:0;transform:translateY(30px);transition:opacity .6s ease,transform .6s ease}
.fade-up.visible{opacity:1;transform:none}
@media(max-width:768px){
  .hero-grid,.about-g,.contact-g{grid-template-columns:1fr}
  .hero-right{display:none}
  .footer-top{grid-template-columns:1fr 1fr}
  .pricing-grid{grid-template-columns:1fr}
}
"""

# ─────────────────────────────────────────────────────────────────────────────
# SHARED JAVASCRIPT
# ─────────────────────────────────────────────────────────────────────────────
SHARED_JS = """
window.addEventListener('scroll',()=>document.getElementById('nav').classList.toggle('scrolled',scrollY>40))
function toggleMob(){document.getElementById('mob-menu').classList.toggle('open')}
function closeMob(){document.getElementById('mob-menu').classList.remove('open')}
const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.15})
document.querySelectorAll('.fade-up').forEach(el=>obs.observe(el))
"""

# ─────────────────────────────────────────────────────────────────────────────
# NAV COMPONENT
# ─────────────────────────────────────────────────────────────────────────────
def nav(active=""):
    links = [("Home","/",""),("Courses","/courses",""),("About","/about",""),("Pricing","/pricing",""),("Contact","/contact","")]
    nav_links = ""
    mob_links = ""
    icons = {"Home":"🏠","Courses":"📚","About":"👋","Pricing":"💰","Contact":"📬"}
    for name, href, _ in links:
        cls = "active" if name.lower() == active.lower() else ""
        nav_links += f'<a href="{href}" class="nav-link {cls}">{name}</a>\n    '
        mob_links += f'<a href="{href}" class="nav-link" onclick="closeMob()">{icons[name]} {name}</a>\n  '
    return f"""<nav class="nav" id="nav">
  <a href="/" class="nav-logo">
    <div class="logo-icon">{LOGO_SVG}</div>
    <div class="logo-text">
      <span class="logo-name">MindSpire Lab</span>
      <span class="logo-sub">AP Chemistry</span>
    </div>
  </a>
  <div class="nav-links">
    {nav_links}
    <a href="https://apchem.mindspirelab.com" target="_blank" class="nav-link btn-nav" style="margin-left:8px"><i class="fas fa-atom"></i> AP Chem Platform</a>
  </div>
  <div class="hamburger" onclick="toggleMob()"><span></span><span></span><span></span></div>
</nav>
<div class="mob-menu" id="mob-menu">
  {mob_links}
  <a href="https://apchem.mindspirelab.com" target="_blank" class="mob-apchem nav-link">⚛️ AP Chem Platform →</a>
  <a href="https://wa.me/19162927162" target="_blank" style="background:#25d366;color:white;border-radius:10px;" class="nav-link"><i class="fab fa-whatsapp"></i> WhatsApp Us</a>
</div>"""

# ─────────────────────────────────────────────────────────────────────────────
# FOOTER COMPONENT
# ─────────────────────────────────────────────────────────────────────────────
FOOTER = f"""<footer>
  <div class="footer-top">
    <div class="footer-brand">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:4px">
        <div style="width:32px;height:32px">{LOGO_SVG}</div>
        <span style="font-size:16px;font-weight:900">MindSpire Lab</span>
      </div>
      <p>Expert AP Chemistry tutoring with a world-class interactive platform. Helping students go from confused to confident — one topic at a time.</p>
      <div class="footer-socials">
        <a href="https://wa.me/19162927162" target="_blank" class="fs" title="WhatsApp"><i class="fab fa-whatsapp"></i></a>
        <a href="mailto:faridahmohammed886@gmail.com" class="fs" title="Email"><i class="fas fa-envelope"></i></a>
        <a href="https://www.facebook.com/profile.php?id=100091274530409" target="_blank" class="fs" title="Facebook"><i class="fab fa-facebook-f"></i></a>
        <a href="https://apchem.mindspirelab.com" target="_blank" class="fs" title="AP Chem Platform"><i class="fas fa-atom"></i></a>
      </div>
    </div>
    <div class="footer-col">
      <h4>Platform</h4>
      <a href="https://apchem.mindspirelab.com/signup">Get Started Free</a>
      <a href="https://apchem.mindspirelab.com/practice">Practice Questions</a>
      <a href="https://apchem.mindspirelab.com/build-test">Build a Test</a>
      <a href="https://apchem.mindspirelab.com/lessons">Lessons</a>
    </div>
    <div class="footer-col">
      <h4>Tutoring</h4>
      <a href="/pricing">Pricing</a>
      <a href="/courses">All Units</a>
      <a href="/about">About Faridah</a>
      <a href="/contact">Book a Session</a>
    </div>
    <div class="footer-col">
      <h4>Contact</h4>
      <a href="https://wa.me/19162927162">WhatsApp</a>
      <a href="mailto:faridahmohammed886@gmail.com">Email</a>
      <a href="/contact">Contact Form</a>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© 2026 MindSpire Lab. All rights reserved.</p>
    <p style="font-size:12px;color:rgba(255,255,255,.25)">Empowering students to master AP Chemistry.</p>
  </div>
</footer>"""

# ─────────────────────────────────────────────────────────────────────────────
# PAGE TEMPLATE
# ─────────────────────────────────────────────────────────────────────────────
def page(title, desc, active, body, extra_css="", extra_js=""):
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>{title}</title>
<meta name="description" content="{desc}"/>
<link rel="icon" href="/favicon.ico" type="image/svg+xml"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
<link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet"/>
<style>
{SHARED_CSS}
{extra_css}
</style>
</head>
<body>
{nav(active)}
{body}
{FOOTER}
<script>
{SHARED_JS}
{extra_js}
</script>
</body></html>"""

print("Template built. Now building pages...")

# ─────────────────────────────────────────────────────────────────────────────
# HOME PAGE
# ─────────────────────────────────────────────────────────────────────────────
HOME_BODY = """
<section class="hero">
  <div class="orb orb1"></div><div class="orb orb2"></div><div class="orb orb3"></div>
  <div class="mol" style="left:10%;animation-duration:18s">⚛️</div>
  <div class="mol" style="left:30%;animation-duration:22s;animation-delay:-6s">⚛️</div>
  <div class="mol" style="left:65%;animation-duration:16s;animation-delay:-11s">🧪</div>
  <div class="mol" style="left:80%;animation-duration:20s;animation-delay:-3s">🔬</div>
  <div class="hero-grid">
    <div class="hero-left">
      <div class="hero-badge"><i class="fas fa-star"></i> Expert AP Chemistry Tutoring</div>
      <h1>Score a 5 on<br/><span>AP Chemistry.</span><br/>We'll get you there.</h1>
      <p class="hero-sub">Personalized 1-on-1 tutoring + an interactive platform with 500+ real AP-style questions, custom test builder, mastery tracking, and real-time feedback. From Faridah Mohammed — chemistry educator.</p>
      <div class="hero-cta">
        <a href="https://wa.me/19162927162" target="_blank" class="btn-wa"><i class="fab fa-whatsapp"></i> Book a Free Consultation</a>
        <a href="https://apchem.mindspirelab.com/signup" target="_blank" class="btn-secondary">Try Platform Free →</a>
      </div>
      <div class="hero-stats">
        <div class="hstat"><div class="hstat-num">500+</div><div class="hstat-lbl">AP Questions</div></div>
        <div class="hstat"><div class="hstat-num">9</div><div class="hstat-lbl">AP Units</div></div>
        <div class="hstat"><div class="hstat-num">100%</div><div class="hstat-lbl">Dedicated</div></div>
        <div class="hstat"><div class="hstat-num">5</div><div class="hstat-lbl">Target Score</div></div>
      </div>
    </div>
    <div class="hero-right">
      <div class="platform-preview">
        <div class="pp-header">
          <div class="pp-dot" style="background:#ef4444"></div>
          <div class="pp-dot" style="background:#f59e0b"></div>
          <div class="pp-dot" style="background:#10b981"></div>
          <div class="pp-title">AP Chem Platform — Build Your Test</div>
        </div>
        <div class="pp-metric">
          <div><div class="pp-metric-lbl">Selected Topics</div><div class="pp-metric-val">⚛️ Unit 4 + Unit 7</div></div>
          <div style="background:rgba(108,99,255,.15);padding:6px 12px;border-radius:8px;font-size:12px;color:#a78bfa;font-weight:700">Mixed</div>
        </div>
        <div class="pp-metric">
          <div><div class="pp-metric-lbl">Question Types</div><div class="pp-metric-val">MCQ + FRQ ✅</div></div>
          <div style="background:rgba(16,185,129,.15);padding:6px 12px;border-radius:8px;font-size:12px;color:#34d399;font-weight:700">Custom</div>
        </div>
        <div class="pp-metric">
          <div><div class="pp-metric-lbl">Questions</div><div class="pp-metric-val">🎯 25 Questions</div></div>
          <div style="background:rgba(245,158,11,.15);padding:6px 12px;border-radius:8px;font-size:12px;color:#f59e0b;font-weight:700">Timed</div>
        </div>
        <div class="pp-badge"><div class="pp-badge-text">⚡ PYQ 2021–2025 College Board questions included!</div></div>
      </div>
    </div>
  </div>
</section>

<!-- FEATURES -->
<section style="background:var(--bg)">
  <div class="container">
    <div class="tc fade-up">
      <div class="stag"><i class="fas fa-bolt"></i> What You Get</div>
      <h2 class="stitle">Everything you need to ace AP Chemistry</h2>
      <p class="ssub">A complete system: expert tutoring + a powerful self-study platform — built specifically for the AP Chemistry exam.</p>
    </div>
    <div class="features-g">
      <div class="feat-card fade-up">
        <div class="feat-icon" style="background:#ede9fe">⚛️</div>
        <div class="feat-title">500+ AP-Style Questions</div>
        <div class="feat-desc">MCQs & FRQs written in the exact College Board AP Chemistry format, including real PYQ from 2021–2025 exams.</div>
      </div>
      <div class="feat-card fade-up">
        <div class="feat-icon" style="background:#dcfce7">🧪</div>
        <div class="feat-title">Build Your Own Test</div>
        <div class="feat-desc">Choose topics, question types, and number of questions — like SaveMyExams. Create exactly the practice you need.</div>
      </div>
      <div class="feat-card fade-up">
        <div class="feat-icon" style="background:#fff7ed">🎯</div>
        <div class="feat-title">Mastery Tracking</div>
        <div class="feat-desc">Track your progress on every topic: Not Started → Developing → Proficient → Mastered, with real-time feedback.</div>
      </div>
      <div class="feat-card fade-up">
        <div class="feat-icon" style="background:#f0f9ff">📚</div>
        <div class="feat-title">9-Unit Lesson Library</div>
        <div class="feat-desc">Clear concise lessons for all 9 AP Chemistry units. Unit 1 is FREE for everyone — no signup needed!</div>
      </div>
      <div class="feat-card fade-up">
        <div class="feat-icon" style="background:#fdf2f8">👩‍🏫</div>
        <div class="feat-title">1-on-1 Tutoring</div>
        <div class="feat-desc">Personalized sessions with Faridah Mohammed. We tackle exactly what you struggle with, at your pace.</div>
      </div>
      <div class="feat-card fade-up">
        <div class="feat-icon" style="background:#f0fdf4">🔥</div>
        <div class="feat-title">Streaks & XP</div>
        <div class="feat-desc">Gamified learning keeps you motivated. Build daily study streaks, earn XP, level up, and climb the leaderboard.</div>
      </div>
    </div>
  </div>
</section>

<!-- HOW IT WORKS -->
<section style="background:#fff">
  <div class="container">
    <div class="tc fade-up">
      <div class="stag"><i class="fas fa-list-ol"></i> How It Works</div>
      <h2 class="stitle">Start scoring higher in 4 easy steps</h2>
    </div>
    <div class="steps-grid">
      <div class="step-card fade-up">
        <div class="step-num">1</div>
        <div style="font-size:24px;margin-bottom:8px">💬</div>
        <div class="step-title">Free Consultation</div>
        <div class="step-desc">Message Faridah on WhatsApp. Tell us where you are and what your goals are for the AP exam.</div>
      </div>
      <div class="step-card fade-up">
        <div class="step-num">2</div>
        <div style="font-size:24px;margin-bottom:8px">📋</div>
        <div class="step-title">Custom Study Plan</div>
        <div class="step-desc">Get a personalized plan targeting your weakest topics first. Access the free platform immediately.</div>
      </div>
      <div class="step-card fade-up">
        <div class="step-num">3</div>
        <div style="font-size:24px;margin-bottom:8px">🧪</div>
        <div class="step-title">Practice & Build Tests</div>
        <div class="step-desc">Use the platform daily. Build custom tests by topic, review lessons, and track your mastery progress.</div>
      </div>
      <div class="step-card fade-up">
        <div class="step-num">4</div>
        <div style="font-size:24px;margin-bottom:8px">🏆</div>
        <div class="step-title">Score a 5</div>
        <div class="step-desc">Walk into your AP exam confident and prepared. Students who follow the plan see dramatic score improvements.</div>
      </div>
    </div>
  </div>
</section>

<!-- CTA BANNER -->
<section style="background:linear-gradient(135deg,#0f0c29,#302b63);padding:60px 5%">
  <div class="container tc fade-up">
    <h2 style="font-size:36px;font-weight:900;color:#fff;margin-bottom:12px">Ready to transform your AP Chemistry grade?</h2>
    <p style="font-size:16px;color:rgba(255,255,255,.6);margin-bottom:32px">Unit 1 free for everyone. Full access with paid plan. Expert tutoring always available.</p>
    <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap">
      <a href="https://apchem.mindspirelab.com/signup" target="_blank" class="btn-primary"><i class="fas fa-rocket"></i> Start Free on the Platform</a>
      <a href="https://wa.me/19162927162" target="_blank" class="btn-wa"><i class="fab fa-whatsapp"></i> Book Tutoring Session</a>
    </div>
  </div>
</section>
"""

home_html = page("Master AP Chemistry | MindSpire Lab", 
                 "MindSpire Lab — Expert AP Chemistry tutoring with an interactive online learning platform. Ace your AP exam with personalized guidance.",
                 "Home", HOME_BODY)
with open(f"{OUT}/index.html", "w") as f:
    f.write(home_html)
print("✓ index.html")

# ─────────────────────────────────────────────────────────────────────────────
# ABOUT PAGE
# ─────────────────────────────────────────────────────────────────────────────
ABOUT_CSS = """
.tutor-photo-real{width:100%;border-radius:20px;object-fit:cover;display:block;box-shadow:0 20px 60px rgba(108,99,255,.25)}
.photo-container{position:relative;max-width:400px}
.photo-container::before{content:'';position:absolute;inset:-10px;border-radius:28px;background:linear-gradient(135deg,rgba(108,99,255,.3),rgba(79,70,229,.2));z-index:-1;filter:blur(20px)}
.photo-container::after{content:'AP Chemistry Educator';position:absolute;bottom:20px;left:50%;transform:translateX(-50%);background:rgba(108,99,255,.9);color:#fff;padding:8px 20px;border-radius:30px;font-size:13px;font-weight:700;backdrop-filter:blur(10px);white-space:nowrap}
.credentials-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:24px}
.cred-card{background:var(--bg);border:1px solid var(--border);border-radius:12px;padding:16px;display:flex;align-items:center;gap:12px}
.cred-icon{font-size:24px}
.cred-text{font-size:13px;font-weight:600;color:var(--dark)}
"""

ABOUT_BODY = """
<section style="padding:120px 5% 80px;background:var(--bg)">
  <div class="container">
    <div class="about-g">
      <div>
        <div class="photo-container">
          <img src="/images/faridah.jpg" alt="Faridah Mohammed - AP Chemistry Educator" class="tutor-photo-real"/>
        </div>
        <div class="credentials-grid" style="margin-top:28px">
          <div class="cred-card"><div class="cred-icon">🎓</div><div class="cred-text">AP Chemistry Expert</div></div>
          <div class="cred-card"><div class="cred-icon">⚛️</div><div class="cred-text">9 Units Covered</div></div>
          <div class="cred-card"><div class="cred-icon">📚</div><div class="cred-text">500+ Questions</div></div>
          <div class="cred-card"><div class="cred-icon">🏆</div><div class="cred-text">Score 5 Focused</div></div>
        </div>
      </div>
      <div>
        <div class="about-tag"><i class="fas fa-atom"></i> AP Chemistry Educator</div>
        <h1 class="stitle" style="text-align:left">Meet Faridah Mohammed</h1>
        <p style="font-size:16px;color:var(--muted);line-height:1.8;margin-bottom:20px">Hi! I'm Faridah Mohammed, an AP Chemistry educator passionate about helping students turn confusion into confidence. I know AP Chemistry is one of the hardest classes you'll take — and I built MindSpire Lab to make it manageable.</p>
        <p style="font-size:15px;color:var(--text);line-height:1.8;margin-bottom:24px">My approach combines personalized tutoring with an interactive platform — so you can study smarter every day. I've built a library of 500+ real AP-style questions based on College Board's past exams (PYQ 2021–2025), and a custom test builder so students can practice exactly what they need.</p>
        <ul class="about-list">
          <li><i class="fas fa-check-circle"></i> <span>Deep expertise in all 9 AP Chemistry units</span></li>
          <li><i class="fas fa-check-circle"></i> <span>500+ AP-style questions based on real College Board exams</span></li>
          <li><i class="fas fa-check-circle"></i> <span>Custom test builder — mix topics, types, and difficulty</span></li>
          <li><i class="fas fa-check-circle"></i> <span>Unit 1 completely free for every student, no login required</span></li>
          <li><i class="fas fa-check-circle"></i> <span>Personalized 1-on-1 tutoring via WhatsApp & video sessions</span></li>
          <li><i class="fas fa-check-circle"></i> <span>Built the MindSpire Lab platform specifically for AP Chemistry</span></li>
        </ul>
        <div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:28px">
          <a href="https://wa.me/19162927162" target="_blank" class="btn-wa"><i class="fab fa-whatsapp"></i> Message Me on WhatsApp</a>
          <a href="/contact" class="btn-secondary">Book a Session</a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Mission -->
<section style="background:white;padding:80px 5%">
  <div class="container">
    <div class="tc fade-up" style="margin-bottom:48px">
      <div class="stag"><i class="fas fa-bullseye"></i> Our Mission</div>
      <h2 class="stitle">Why MindSpire Lab Exists</h2>
      <p class="ssub">AP Chemistry doesn't have to be the hardest class you've ever taken. With the right guidance and daily practice, a 5 is achievable.</p>
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:20px;max-width:900px;margin:0 auto">
      <div class="feat-card fade-up" style="text-align:center">
        <div style="font-size:36px;margin-bottom:12px">💡</div>
        <div class="feat-title">Make Chemistry Click</div>
        <div class="feat-desc">We explain the WHY behind every concept so you actually understand, not just memorize.</div>
      </div>
      <div class="feat-card fade-up" style="text-align:center">
        <div style="font-size:36px;margin-bottom:12px">📈</div>
        <div class="feat-title">Track Real Progress</div>
        <div class="feat-desc">The platform shows you exactly where you're growing and where you still need work.</div>
      </div>
      <div class="feat-card fade-up" style="text-align:center">
        <div style="font-size:36px;margin-bottom:12px">🎯</div>
        <div class="feat-title">AP Exam Focused</div>
        <div class="feat-desc">Every question, lesson, and tip is written specifically for what College Board tests.</div>
      </div>
      <div class="feat-card fade-up" style="text-align:center">
        <div style="font-size:36px;margin-bottom:12px">🤝</div>
        <div class="feat-title">You're Not Alone</div>
        <div class="feat-desc">From WhatsApp check-ins to live sessions, support is always available when you need it.</div>
      </div>
    </div>
  </div>
</section>
"""

about_html = page("About Faridah Mohammed | MindSpire Lab",
                  "Meet Faridah Mohammed, AP Chemistry educator and founder of MindSpire Lab. Expert tutoring and 500+ AP-style practice questions.",
                  "About", ABOUT_BODY, ABOUT_CSS)
with open(f"{OUT}/about.html", "w") as f:
    f.write(about_html)
print("✓ about.html")

# ─────────────────────────────────────────────────────────────────────────────
# COURSES PAGE
# ─────────────────────────────────────────────────────────────────────────────
COURSES_BODY = """
<section style="padding:120px 5% 60px;background:linear-gradient(135deg,#0f0c29,#302b63)">
  <div class="container tc">
    <div class="stag" style="color:#c4b5fd;background:rgba(167,139,250,.15);border-color:rgba(167,139,250,.3)"><i class="fas fa-book"></i> All 9 AP Units</div>
    <h1 class="stitle" style="color:#fff;margin-bottom:16px">AP Chemistry Courses</h1>
    <p style="font-size:16px;color:rgba(255,255,255,.6);max-width:600px;margin:0 auto">All 9 units of the AP Chemistry curriculum. Unit 1 is <span style="color:#34d399;font-weight:700">FREE for everyone</span>. Units 2–9 require a paid plan.</p>
  </div>
</section>

<section style="background:var(--bg)">
  <div class="container">
    <div style="background:#fff;border:1px solid #c7d2fe;border-radius:14px;padding:20px 24px;margin-bottom:36px;display:flex;align-items:center;gap:16px;flex-wrap:wrap">
      <div style="width:40px;height:40px;background:#ede9fe;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">🔓</div>
      <div>
        <div style="font-size:15px;font-weight:800;color:#4f46e5;margin-bottom:2px">Unit 1 is FREE for everyone — no account needed!</div>
        <div style="font-size:13px;color:#6b7280">Sign up for a paid plan to unlock Units 2–9, 500+ practice questions, and the custom test builder.</div>
      </div>
      <a href="https://apchem.mindspirelab.com/signup" target="_blank" class="btn-primary" style="margin-left:auto;white-space:nowrap"><i class="fas fa-unlock"></i> Get Full Access</a>
    </div>
    <div class="course-grid">
      <!-- UNIT 1 - FREE -->
      <div class="course-card fade-up" style="background:linear-gradient(135deg,#1865f2,#1e40af)">
        <div style="position:absolute;top:16px;right:16px;background:#10b981;color:#fff;padding:3px 10px;border-radius:20px;font-size:11px;font-weight:700">FREE</div>
        <div class="course-badge">Unit 1 · Foundation</div>
        <div class="course-title">Atomic Structure &amp; Properties</div>
        <div class="course-desc">Moles, molar mass, isotopes, mass spectrometry, electron configuration, periodic trends, and photoelectron spectroscopy.</div>
        <div class="course-meta">
          <span><i class="fas fa-question-circle"></i> 55+ Questions</span>
          <span><i class="fas fa-unlock"></i> Free Access</span>
        </div>
        <a href="https://apchem.mindspirelab.com/unit/1" target="_blank" style="display:inline-block;margin-top:14px;background:rgba(255,255,255,.2);color:#fff;padding:8px 18px;border-radius:8px;font-size:13px;font-weight:700">Start Unit 1 →</a>
      </div>
      <!-- UNIT 2 -->
      <div class="course-card fade-up" style="background:linear-gradient(135deg,#43a047,#2e7d32)">
        <div style="position:absolute;top:16px;right:16px;background:rgba(255,255,255,.25);color:#fff;padding:3px 10px;border-radius:20px;font-size:11px;font-weight:700">🔒 PAID</div>
        <div class="course-badge">Unit 2 · Foundation</div>
        <div class="course-title">Molecular &amp; Ionic Bonding</div>
        <div class="course-desc">Lewis structures, formal charge, VSEPR, molecular geometry, hybridization, polarity, and ionic vs covalent bonding.</div>
        <div class="course-meta">
          <span><i class="fas fa-question-circle"></i> 50+ Questions</span>
          <span><i class="fas fa-lock"></i> Paid Plan</span>
        </div>
      </div>
      <!-- UNIT 3 -->
      <div class="course-card fade-up" style="background:linear-gradient(135deg,#8e24aa,#6a1b9a)">
        <div style="position:absolute;top:16px;right:16px;background:rgba(255,255,255,.25);color:#fff;padding:3px 10px;border-radius:20px;font-size:11px;font-weight:700">🔒 PAID</div>
        <div class="course-badge">Unit 3 · Foundation</div>
        <div class="course-title">Intermolecular Forces &amp; Properties</div>
        <div class="course-desc">IMFs, solids, liquids, gases, solutions, vapor pressure, surface tension, viscosity, and colligative properties.</div>
        <div class="course-meta">
          <span><i class="fas fa-question-circle"></i> 55+ Questions</span>
          <span><i class="fas fa-lock"></i> Paid Plan</span>
        </div>
      </div>
      <!-- UNIT 4 -->
      <div class="course-card fade-up" style="background:linear-gradient(135deg,#e53935,#b71c1c)">
        <div style="position:absolute;top:16px;right:16px;background:rgba(255,255,255,.25);color:#fff;padding:3px 10px;border-radius:20px;font-size:11px;font-weight:700">🔒 PAID</div>
        <div class="course-badge">Unit 4 · Core</div>
        <div class="course-title">Chemical Reactions</div>
        <div class="course-desc">Types of reactions, net ionic equations, oxidation states, activity series, precipitation reactions, acid-base, and redox.</div>
        <div class="course-meta">
          <span><i class="fas fa-question-circle"></i> 60+ Questions</span>
          <span><i class="fas fa-lock"></i> Paid Plan</span>
        </div>
      </div>
      <!-- UNIT 5 -->
      <div class="course-card fade-up" style="background:linear-gradient(135deg,#f57c00,#e65100)">
        <div style="position:absolute;top:16px;right:16px;background:rgba(255,255,255,.25);color:#fff;padding:3px 10px;border-radius:20px;font-size:11px;font-weight:700">🔒 PAID</div>
        <div class="course-badge">Unit 5 · Core</div>
        <div class="course-title">Kinetics</div>
        <div class="course-desc">Reaction rates, rate laws, integrated rate laws, half-life, Arrhenius equation, mechanisms, and catalysis.</div>
        <div class="course-meta">
          <span><i class="fas fa-question-circle"></i> 55+ Questions</span>
          <span><i class="fas fa-lock"></i> Paid Plan</span>
        </div>
      </div>
      <!-- UNIT 6 -->
      <div class="course-card fade-up" style="background:linear-gradient(135deg,#00838f,#006064)">
        <div style="position:absolute;top:16px;right:16px;background:rgba(255,255,255,.25);color:#fff;padding:3px 10px;border-radius:20px;font-size:11px;font-weight:700">🔒 PAID</div>
        <div class="course-badge">Unit 6 · Core</div>
        <div class="course-title">Thermodynamics</div>
        <div class="course-desc">Enthalpy, Hess's Law, calorimetry, entropy, Gibbs free energy, and thermodynamic spontaneity.</div>
        <div class="course-meta">
          <span><i class="fas fa-question-circle"></i> 55+ Questions</span>
          <span><i class="fas fa-lock"></i> Paid Plan</span>
        </div>
      </div>
      <!-- UNIT 7 -->
      <div class="course-card fade-up" style="background:linear-gradient(135deg,#37474f,#263238)">
        <div style="position:absolute;top:16px;right:16px;background:rgba(255,255,255,.25);color:#fff;padding:3px 10px;border-radius:20px;font-size:11px;font-weight:700">🔒 PAID</div>
        <div class="course-badge">Unit 7 · Advanced</div>
        <div class="course-title">Equilibrium</div>
        <div class="course-desc">Keq expressions, ICE tables, Le Chatelier's principle, solubility product Ksp, and reaction quotient Q.</div>
        <div class="course-meta">
          <span><i class="fas fa-question-circle"></i> 65+ Questions</span>
          <span><i class="fas fa-lock"></i> Paid Plan</span>
        </div>
      </div>
      <!-- UNIT 8 -->
      <div class="course-card fade-up" style="background:linear-gradient(135deg,#1565c0,#0d47a1)">
        <div style="position:absolute;top:16px;right:16px;background:rgba(255,255,255,.25);color:#fff;padding:3px 10px;border-radius:20px;font-size:11px;font-weight:700">🔒 PAID</div>
        <div class="course-badge">Unit 8 · Advanced</div>
        <div class="course-title">Acids &amp; Bases</div>
        <div class="course-desc">pH, pOH, Ka, Kb, buffer solutions, Henderson-Hasselbalch, acid-base titrations, and indicators.</div>
        <div class="course-meta">
          <span><i class="fas fa-question-circle"></i> 70+ Questions</span>
          <span><i class="fas fa-lock"></i> Paid Plan</span>
        </div>
      </div>
      <!-- UNIT 9 -->
      <div class="course-card fade-up" style="background:linear-gradient(135deg,#558b2f,#33691e)">
        <div style="position:absolute;top:16px;right:16px;background:rgba(255,255,255,.25);color:#fff;padding:3px 10px;border-radius:20px;font-size:11px;font-weight:700">🔒 PAID</div>
        <div class="course-badge">Unit 9 · Advanced</div>
        <div class="course-title">Electrochemistry</div>
        <div class="course-desc">Galvanic cells, electrolysis, standard reduction potentials, Nernst equation, and Faraday's laws.</div>
        <div class="course-meta">
          <span><i class="fas fa-question-circle"></i> 55+ Questions</span>
          <span><i class="fas fa-lock"></i> Paid Plan</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section style="background:linear-gradient(135deg,#0f0c29,#302b63);padding:60px 5%">
  <div class="container tc fade-up">
    <h2 style="font-size:32px;font-weight:900;color:#fff;margin-bottom:12px">Unlock all 9 units + 500+ questions</h2>
    <p style="font-size:15px;color:rgba(255,255,255,.6);margin-bottom:28px">Get full access with a paid plan — and build custom tests from any combination of topics.</p>
    <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap">
      <a href="/pricing" class="btn-primary"><i class="fas fa-unlock"></i> View Pricing Plans</a>
      <a href="https://wa.me/19162927162" target="_blank" class="btn-wa"><i class="fab fa-whatsapp"></i> Ask Faridah</a>
    </div>
  </div>
</section>
"""

courses_html = page("AP Chemistry Courses | MindSpire Lab",
                    "All 9 AP Chemistry units with 500+ practice questions. Unit 1 is free for everyone.",
                    "Courses", COURSES_BODY)
with open(f"{OUT}/courses.html", "w") as f:
    f.write(courses_html)
print("✓ courses.html")

# ─────────────────────────────────────────────────────────────────────────────
# PRICING PAGE
# ─────────────────────────────────────────────────────────────────────────────
PRICING_BODY = """
<section style="padding:120px 5% 80px;background:var(--bg)">
  <div class="container tc">
    <div class="stag"><i class="fas fa-tag"></i> Pricing Plans</div>
    <h1 class="stitle">Simple, transparent pricing</h1>
    <p class="ssub">Choose the plan that fits your goals. Start free with Unit 1, or unlock everything with a paid plan.</p>
    
    <div class="pricing-grid">
      <!-- FREE -->
      <div class="price-card">
        <div class="price-name">Free Forever</div>
        <div style="display:flex;align-items:baseline;gap:4px;margin-bottom:4px">
          <div class="price-amount">$0</div>
        </div>
        <div class="price-period">No credit card needed</div>
        <div class="price-sub">Perfect for getting started with AP Chemistry</div>
        <ul class="price-features">
          <li><i class="fas fa-check"></i> Unit 1: Atomic Structure &amp; Properties</li>
          <li><i class="fas fa-check"></i> 55+ Unit 1 practice questions (MCQ &amp; FRQ)</li>
          <li><i class="fas fa-check"></i> Unit 1 lessons &amp; concept guides</li>
          <li><i class="fas fa-check"></i> AP formula reference sheet</li>
          <li class="muted"><i class="fas fa-times"></i> Units 2–9 (paid only)</li>
          <li class="muted"><i class="fas fa-times"></i> Custom test builder</li>
          <li class="muted"><i class="fas fa-times"></i> Mastery tracking dashboard</li>
          <li class="muted"><i class="fas fa-times"></i> 1-on-1 tutoring sessions</li>
        </ul>
        <a href="https://apchem.mindspirelab.com/signup" target="_blank" class="btn-secondary" style="width:100%;justify-content:center">Get Started Free</a>
      </div>

      <!-- PLATFORM ONLY -->
      <div class="price-card featured">
        <div class="price-popular">⭐ Most Popular</div>
        <div class="price-name">Platform Access</div>
        <div style="display:flex;align-items:baseline;gap:4px;margin-bottom:4px">
          <div class="price-amount">$19</div>
        </div>
        <div class="price-period">per month</div>
        <div class="price-sub">Full platform for self-study students</div>
        <div class="price-note">💡 Unlock all 9 units + custom test builder. Cancel anytime.</div>
        <ul class="price-features">
          <li><i class="fas fa-check"></i> All 9 AP Chemistry units</li>
          <li><i class="fas fa-check"></i> 500+ MCQ &amp; FRQ practice questions</li>
          <li><i class="fas fa-check"></i> <strong>Custom test builder</strong> (choose topics, types, count)</li>
          <li><i class="fas fa-check"></i> PYQ 2021–2025 College Board questions</li>
          <li><i class="fas fa-check"></i> Full mastery tracking dashboard</li>
          <li><i class="fas fa-check"></i> Streaks, XP, and leaderboard</li>
          <li><i class="fas fa-check"></i> All lessons &amp; AP reference tools</li>
          <li class="muted"><i class="fas fa-times"></i> 1-on-1 tutoring sessions</li>
        </ul>
        <a href="https://wa.me/19162927162?text=Hi%20Faridah!%20I%20want%20to%20subscribe%20to%20the%20Platform%20Access%20plan" target="_blank" class="btn-primary" style="width:100%;justify-content:center"><i class="fab fa-whatsapp"></i> Get Platform Access</a>
      </div>

      <!-- TUTORING + PLATFORM -->
      <div class="price-card">
        <div class="price-name">Tutoring + Platform</div>
        <div style="display:flex;align-items:baseline;gap:4px;margin-bottom:4px">
          <div class="price-amount">$79</div>
        </div>
        <div class="price-period">per month (4 sessions)</div>
        <div class="price-sub">Best for maximum score improvement</div>
        <ul class="price-features">
          <li><i class="fas fa-check"></i> Everything in Platform Access</li>
          <li><i class="fas fa-check"></i> 4 live 1-on-1 sessions/month (60 min each)</li>
          <li><i class="fas fa-check"></i> Personalized study plan &amp; roadmap</li>
          <li><i class="fas fa-check"></i> WhatsApp support between sessions</li>
          <li><i class="fas fa-check"></i> Exam strategy &amp; FRQ coaching</li>
          <li><i class="fas fa-check"></i> Progress reports &amp; parent updates</li>
          <li><i class="fas fa-check"></i> Homework review &amp; test prep</li>
        </ul>
        <a href="https://wa.me/19162927162?text=Hi%20Faridah!%20I%20want%20to%20start%20the%20Tutoring%20%2B%20Platform%20plan" target="_blank" class="btn-wa" style="width:100%;justify-content:center"><i class="fab fa-whatsapp"></i> Book Now</a>
      </div>
    </div>
    
    <!-- FAQ -->
    <div style="max-width:700px;margin:60px auto 0;text-align:left">
      <h3 style="font-size:24px;font-weight:900;color:var(--dark);margin-bottom:24px;text-align:center">Frequently Asked Questions</h3>
      <div style="display:flex;flex-direction:column;gap:16px">
        <div style="background:var(--bg);border:1px solid var(--border);border-radius:12px;padding:20px">
          <div style="font-size:15px;font-weight:700;color:var(--dark);margin-bottom:8px">How does Unit 1 free access work?</div>
          <div style="font-size:14px;color:var(--muted)">Unit 1 (Atomic Structure &amp; Properties) is completely free — no account, no credit card, no signup required. You can access all Unit 1 lessons and practice questions right away at apchem.mindspirelab.com.</div>
        </div>
        <div style="background:var(--bg);border:1px solid var(--border);border-radius:12px;padding:20px">
          <div style="font-size:15px;font-weight:700;color:var(--dark);margin-bottom:8px">What is the custom test builder?</div>
          <div style="font-size:14px;color:var(--muted)">Like SaveMyExams, you can select which units/topics to include, choose MCQ or FRQ or both, set the number of questions, and generate a timed custom practice test. It's available on paid plans.</div>
        </div>
        <div style="background:var(--bg);border:1px solid var(--border);border-radius:12px;padding:20px">
          <div style="font-size:15px;font-weight:700;color:var(--dark);margin-bottom:8px">Are these real College Board questions?</div>
          <div style="font-size:14px;color:var(--muted)">The platform includes questions modeled directly on past AP Chemistry exams (2021–2025), written in the exact College Board style. Some actual PYQ are included as well as new questions following the same format.</div>
        </div>
        <div style="background:var(--bg);border:1px solid var(--border);border-radius:12px;padding:20px">
          <div style="font-size:15px;font-weight:700;color:var(--dark);margin-bottom:8px">How do I get my access code after paying?</div>
          <div style="font-size:14px;color:var(--muted)">After payment via WhatsApp, Faridah will send you a personal access code within 24 hours. Use this code to unlock paid content on the platform.</div>
        </div>
      </div>
    </div>
  </div>
</section>
"""

pricing_html = page("Pricing | MindSpire Lab AP Chemistry",
                    "Simple pricing for AP Chemistry tutoring and platform access. Unit 1 free, full access from $19/month.",
                    "Pricing", PRICING_BODY)
with open(f"{OUT}/pricing.html", "w") as f:
    f.write(pricing_html)
print("✓ pricing.html")

# ─────────────────────────────────────────────────────────────────────────────
# CONTACT PAGE
# ─────────────────────────────────────────────────────────────────────────────
CONTACT_BODY = """
<section style="padding:120px 5% 80px;background:var(--bg)">
  <div class="container">
    <div class="tc fade-up" style="margin-bottom:60px">
      <div class="stag"><i class="fas fa-envelope"></i> Get In Touch</div>
      <h1 class="stitle">Contact Faridah</h1>
      <p class="ssub">Ready to start? Have a question? Reach out — WhatsApp is the fastest way to get a response.</p>
    </div>
    <div class="contact-g">
      <div>
        <h3 style="font-size:20px;font-weight:800;color:var(--dark);margin-bottom:8px">Contact Information</h3>
        <p style="font-size:14px;color:var(--muted);margin-bottom:24px">I typically respond within a few hours. WhatsApp is preferred for fast responses!</p>
        <div class="contact-items">
          <div class="ci">
            <div class="ci-icon" style="background:#dcfce7;color:#16a34a"><i class="fab fa-whatsapp"></i></div>
            <div>
              <div class="ci-label">WhatsApp (Fastest)</div>
              <div class="ci-value"><a href="https://wa.me/19162927162" target="_blank" style="color:var(--p)">+1 (916) 292-7162</a></div>
            </div>
          </div>
          <div class="ci">
            <div class="ci-icon" style="background:#ede9fe;color:var(--p)"><i class="fas fa-envelope"></i></div>
            <div>
              <div class="ci-label">Email</div>
              <div class="ci-value"><a href="mailto:faridahmohammed886@gmail.com" style="color:var(--p)">faridahmohammed886@gmail.com</a></div>
            </div>
          </div>
          <div class="ci">
            <div class="ci-icon" style="background:#dbeafe;color:#2563eb"><i class="fab fa-facebook-f"></i></div>
            <div>
              <div class="ci-label">Facebook</div>
              <div class="ci-value"><a href="https://www.facebook.com/profile.php?id=100091274530409" target="_blank" style="color:var(--p)">MindSpire Lab</a></div>
            </div>
          </div>
        </div>
        <a href="https://wa.me/19162927162?text=Hi%20Faridah!%20I%27m%20interested%20in%20AP%20Chemistry%20tutoring." target="_blank" class="btn-wa" style="display:inline-flex">
          <i class="fab fa-whatsapp"></i> Message on WhatsApp Now
        </a>
      </div>
      <div>
        <div class="contact-form-card">
          <h3 style="font-size:18px;font-weight:800;color:var(--dark);margin-bottom:20px">Send a Message</h3>
          <form action="https://formspree.io/f/faridahmohammed886" method="POST">
            <div class="form-group">
              <label class="form-label">Your Name</label>
              <input type="text" name="name" class="form-input" placeholder="Enter your name" required/>
            </div>
            <div class="form-group">
              <label class="form-label">Email Address</label>
              <input type="email" name="email" class="form-input" placeholder="your@email.com" required/>
            </div>
            <div class="form-group">
              <label class="form-label">I'm interested in...</label>
              <select name="interest" class="form-input form-select">
                <option value="">Select an option</option>
                <option value="tutoring">1-on-1 Tutoring</option>
                <option value="platform">Platform Access</option>
                <option value="both">Tutoring + Platform Bundle</option>
                <option value="question">General Question</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Message</label>
              <textarea name="message" class="form-input" rows="4" placeholder="Tell me about your AP Chemistry goals..." style="resize:vertical" required></textarea>
            </div>
            <button type="submit" class="btn-primary" style="width:100%;justify-content:center"><i class="fas fa-paper-plane"></i> Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
"""

contact_html = page("Contact | MindSpire Lab AP Chemistry",
                    "Get in touch with Faridah Mohammed for AP Chemistry tutoring and platform access.",
                    "Contact", CONTACT_BODY)
with open(f"{OUT}/contact.html", "w") as f:
    f.write(contact_html)
print("✓ contact.html")

print("\n✅ All main pages built!")
