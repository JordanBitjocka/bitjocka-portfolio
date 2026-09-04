/* Signal / Field Notes: dark ink canvas, warm paper panels, signal lime markers, editorial asymmetry, Space Grotesk + IBM Plex Mono, evidence-first copy. */
import {
  ArrowUpRight,
  BrainCircuit,
  Check,
  ChevronDown,
  Code2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Network,
  ShieldCheck,
  Smartphone,
  Terminal,
  ServerCog,
  X,
} from "lucide-react";
import { useState } from "react";

const projectData = [
  {
    index: "01",
    type: "Machine learning / API",
    title: "WellBot",
    description:
      "An AI-powered healthcare chatbot prototype that uses symptom inputs to return informational descriptions, severity context, and precautionary guidance. It is designed as an educational prototype, not a clinical diagnostic service.",
    stack: ["Python", "Flask", "Decision Tree"],
    image: "/manus-storage/bitjocka-wellbot_98455887.jpg",
    icon: BrainCircuit,
    accent: "lime",
    contribution: "Built the model-backed Flask prototype and symptom-guidance flow.",
    learning: "Model training, API integration, and responsible framing.",
    link: "https://github.com/JordanBitjocka/Wellbot-healthcare-chatbot",
    linkLabel: "View source on GitHub",
  },
  {
    index: "02",
    type: "Backend engineering / company project",
    title: "INTERSTATION Backend",
    description:
      "A modular Node.js backend for an INTERSTATION company project, organized around authentication, user management, categories, credentials, interests, and test-related flows.",
    stack: ["Node.js", "Express", "MongoDB", "JWT", "Mongoose", "Zod"],
    image: null,
    icon: ServerCog,
    accent: "backend",
    contribution: "Worked within a structured backend codebase with controllers, routes, models, middleware, and utilities.",
    learning: "API architecture, authentication flows, data modeling, and maintainable server organization.",
    link: null,
    linkLabel: "Private company repository",
  },
  {
    index: "03",
    type: "Web application",
    title: "School Management System",
    description:
      "A Django web application concept for organizing student enrollment, attendance tracking, grade management, and teacher–student communication in one place.",
    stack: ["Python", "Django", "HTML", "Web development"],
    image: null,
    mediaKind: "school",
    icon: Network,
    accent: "paper",
    contribution: "Developed the Django workflows for enrollment, attendance, grades, and communication.",
    learning: "Translating operational needs into clear web application flows.",
    link: null,
    linkLabel: "",
  },
  {
    index: "04",
    type: "Mobile application",
    title: "Stock Management App",
    description:
      "A Flutter mobile interface designed around stock-management workflows, with an emphasis on clear information hierarchy, usability, and practical day-to-day operations.",
    stack: ["Flutter", "Mobile UI", "UX principles"],
    image: null,
    mediaKind: "stock",
    icon: Smartphone,
    accent: "orange",
    contribution: "Designed the Flutter interface around practical stock-management tasks.",
    learning: "Mobile information hierarchy, usability, and interface clarity.",
    link: null,
    linkLabel: "",
  },
];

const skillGroups = [
  {
    number: "01",
    title: "Build",
    detail: "Programming and application development",
    items: ["Python", "Java", "HTML", "Flask", "Django", "Flutter"],
    icon: Code2,
  },
  {
    number: "02",
    title: "Model",
    detail: "Machine learning foundations",
    items: ["Model training", "Decision Trees", "SVM", "AI-driven systems"],
    icon: BrainCircuit,
  },
  {
    number: "03",
    title: "Protect",
    detail: "Security mindset and principles",
    items: ["Cybersecurity principles", "Problem solving", "Continuous learning"],
    icon: ShieldCheck,
  },
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (id: string) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand-lockup" href="#top" aria-label="Bitjocka IV home">
          <img
            className="brand-mark"
            src="/manus-storage/bitjocka-biv-mark_f09f649c.png"
            alt="BIV mark"
          />
          <span className="brand-name">BITJOCKA <em className="brand-iv">IV</em></span>
        </a>

        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
          <button onClick={() => handleNav("work")}><span>01</span> Work</button>
          <button onClick={() => handleNav("capabilities")}><span>02</span> Capabilities</button>
          <button onClick={() => handleNav("about")}><span>03</span> About</button>
          <button onClick={() => handleNav("contact")}><span>04</span> Contact</button>
        </nav>

        <div className="header-actions">
          <a className="header-email" href="mailto:bitjockajordan8@gmail.com">Let’s talk <ArrowUpRight size={15} /></a>
          <button className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow"><span className="signal-dot" /> Available for junior opportunities</p>
            <h1>Practical AI<br /><span>systems</span><br />and secure backends.</h1>
            <p className="hero-intro">Computer Science and Engineering graduate building machine-learning prototypes, web and mobile applications, and structured backend services while developing a cybersecurity practice.</p>
            <div className="hero-ctas">
              <button className="button button-primary" onClick={() => handleNav("work")}>Inspect the work <ArrowUpRight size={17} /></button>
              <button className="button button-quiet" onClick={() => handleNav("contact")}>Start a conversation <span>↗</span></button>
            </div>
          </div>

          <div className="hero-visual" aria-label="Abstract network illustration">
            <img src="/manus-storage/bitjocka-hero-signal_9fbd2f04.jpg" alt="Abstract lime signal moving through a technical network" />
            <div className="hero-visual-overlay">
              <div className="system-readout"><span className="readout-line" /> system / learning in public</div>
              <div className="hero-code">01<br /><span>ML</span><br />SEC</div>
              <div className="hero-artifact-notes"><span>artifact / portfolio-01</span><span>model → api → interface</span><span>inspection / documented</span></div>
            </div>
            <div className="hero-caption"><span>CAM / 001</span><span>Douala, CM</span></div>
          </div>

          <div className="hero-side-note"><span>Scroll to inspect</span><ChevronDown size={16} /></div>
        </section>

        <section className="signal-strip" aria-label="Profile highlights">
          <span className="signal-strip-label">Profile / 00</span>
          <div className="strip-item"><Check size={15} /> Computer Science & Engineering</div>
          <div className="strip-item"><Check size={15} /> English + French</div>
          <div className="strip-item"><Check size={15} /> Douala, Cameroon</div>
        </section>

        <section className="section-block work-section" id="work">
          <div className="section-rail">
            <span className="section-index">01</span>
            <span className="vertical-label">Selected work</span>
          </div>
          <div className="section-content">
            <div className="section-heading-row">
              <div>
                <p className="eyebrow">Projects / evidence</p>
                <h2>Small systems,<br /><i>serious intent.</i></h2>
              </div>
              <p className="section-note">A selection of academic and internship-led work. More implementation details and links can be added as the project archive grows.</p>
            </div>

            <div className="project-list">
              {projectData.map((project) => {
                const Icon = project.icon;
                return (
                  <article className={`project-card project-${project.accent}`} key={project.index}>
                        <div className="project-media">
                      {project.image ? <img src={project.image} alt={`${project.title} abstract project visual`} /> : <div className={`project-media-code project-media-${project.mediaKind ?? "backend"}`}><Terminal size={42} /><span>{project.mediaKind === "school" ? "DJANGO / FLOW" : project.mediaKind === "stock" ? "FLUTTER / UI" : "NODE / API"}</span><small>{project.mediaKind === "school" ? "ENROLL · ATTEND · GRADE" : project.mediaKind === "stock" ? "INVENTORY · SCAN · TRACK" : "AUTH · DATA · ROUTES"}</small></div>}
                      <div className="project-media-label"><Icon size={17} /><span>{project.type}</span></div>
                    </div>
                    <div className="project-info">
                      <div className="project-meta"><span>Project / {project.index}</span><span>{project.link ? "Public source" : project.accent === "backend" ? "Private company" : "Prototype"}</span></div>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <div className="project-proof">
                        <div><span>Contribution</span><strong>{project.contribution}</strong></div>
                        <div><span>Learning signal</span><strong>{project.learning}</strong></div>
                      </div>
                      <div className="project-technologies"><span className="technology-label">Technologies</span><div className="tag-list">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
                      {project.link ? <a className="project-link" href={project.link} target="_blank" rel="noreferrer"><span>{project.linkLabel}</span><ArrowUpRight size={16} /></a> : <div className="project-link"><span>Details available on request</span><ArrowUpRight size={16} /></div>}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-block capability-section" id="capabilities">
          <div className="section-rail dark-rail">
            <span className="section-index">02</span>
            <span className="vertical-label">Capabilities</span>
          </div>
          <div className="section-content">
            <div className="section-heading-row capabilities-heading">
              <div>
                <p className="eyebrow">Current toolkit</p>
                <h2>Learn fast.<br /><i>Build carefully.</i></h2>
              </div>
              <p className="section-note">A grounded technical foundation with room to grow. I value clear reasoning, useful interfaces, and the discipline to keep learning.</p>
            </div>
            <div className="skill-grid">
              {skillGroups.map((group) => {
                const Icon = group.icon;
                return (
                  <article className="skill-card" key={group.number}>
                    <div className="skill-topline"><span>{group.number}</span><Icon size={20} /></div>
                    <h3>{group.title}</h3>
                    <p>{group.detail}</p>
                    <ul>{group.items.map((item) => <li key={item}><span className="mini-signal" />{item}</li>)}</ul>
                  </article>
                );
              })}
            </div>
            <div className="skill-footnote"><Terminal size={16} /><span>Currently seeking a team where strong fundamentals can compound into real-world expertise.</span></div>
          </div>
        </section>

        <section className="section-block about-section" id="about">
          <div className="section-rail">
            <span className="section-index">03</span>
            <span className="vertical-label">About / context</span>
          </div>
          <div className="section-content about-layout">
            <div className="about-statement">
              <p className="eyebrow">A practical point of view</p>
              <blockquote>“The best way to understand a system is to build a small version, test its edges, and keep asking better questions.”</blockquote>
            </div>
            <div className="about-details">
              <p>I’m Bitjocka IV, a Computer Science and Engineering graduate based in Douala, Cameroon. My work so far has moved between web and mobile development, machine-learning prototypes, and a growing interest in cybersecurity.</p>
              <p>I’m looking for an entry-level opportunity where I can contribute with discipline, learn from experienced practitioners, and turn technical curiosity into dependable work.</p>
              <div className="about-facts">
                <div><span>Education</span><strong>BSc — Computer Science & Engineering</strong></div>
                <div><span>Languages</span><strong>English / French — Fluent</strong></div>
                <div><span>Interests</span><strong>AI research, technology, sports & fitness</strong></div>
              </div>
            </div>
          </div>
        </section>

        <section className="experience-section">
          <div className="experience-inner">
            <div className="experience-heading"><p className="eyebrow">Experience / 04</p><h2>Where I’ve<br /><i>put it to work.</i></h2></div>
            <div className="experience-list">
              <article className="experience-item"><span className="experience-number">01</span><div><p className="experience-date">Internship · website development</p><h3>MIND UP Digital</h3><p>Computer Management — contributed to website development using modern web technologies and gained practical experience building web applications.</p><div className="experience-evidence"><span>Signal</span><strong>Web application delivery</strong></div></div><ArrowUpRight size={20} /></article>
              <article className="experience-item"><span className="experience-number">02</span><div><p className="experience-date">Internship · mobile development</p><h3>IWOMI Technologies</h3><p>Computer Management — contributed to mobile application work with attention to user experience, functionality, and application performance.</p><div className="experience-evidence"><span>Signal</span><strong>Mobile product support</strong></div></div><ArrowUpRight size={20} /></article>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-orbit orbit-one" /><div className="contact-orbit orbit-two" />
          <div className="contact-inner">
            <p className="eyebrow"><span className="signal-dot" /> Contact / open</p>
            <h2>Let’s make the<br /><i>next system</i> useful.</h2>
            <p>I’m open to junior machine-learning, AI development, and cybersecurity trainee opportunities, internships, and conversations with teams building thoughtfully.</p>
            <a className="contact-email" href="mailto:bitjockajordan8@gmail.com">bitjockajordan8@gmail.com <ArrowUpRight size={20} /></a>
            <div className="contact-meta"><span><MapPin size={15} /> Logbessou, Douala, Cameroon</span><span><Mail size={15} /> +237 694 096 494</span></div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand"><img src="/manus-storage/bitjocka-biv-mark_f09f649c.png" alt="BIV mark" /><span>BITJOCKA IV</span></div>
        <p>Built with curiosity. Documented with intent.</p>
        <div className="footer-links"><a href="https://github.com/JordanBitjocka" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a><a href="mailto:bitjockajordan8@gmail.com" aria-label="Email"><Mail size={17} /></a><a href="#top" aria-label="Back to top"><ArrowUpRight size={17} /></a></div>
      </footer>
    </div>
  );
}
