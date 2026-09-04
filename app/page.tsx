"use client";

import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  Check,
  Download,
  GraduationCap,
  Languages,
  Mail,
  Menu,
  Mic2,
  Music2,
  Network,
  Phone,
  Play,
  Sparkles,
  Trophy,
  Users2,
  X,
} from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Research", href: "#research" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  { value: "97.2%", label: "Class XII" },
  { value: "03", label: "Published papers" },
  { value: "02", label: "Global quarterfinals" },
  { value: "04", label: "Languages" },
];

const experiences = [
  {
    year: "2026",
    date: "May — Jul",
    role: "Wealth & Investment Management Intern",
    company: "RKG Stratedge",
    description:
      "Hands-on exposure to wealth and investment management in a focused industry internship.",
    tags: ["Wealth management", "Investments"],
  },
  {
    year: "2024",
    date: "Jun — Aug",
    role: "Investment Intern",
    company: "Ganesh Investments",
    description:
      "Studied stock trading with an emphasis on technical analysis and practical market behaviour.",
    tags: ["Stock trading", "Technical analysis"],
  },
  {
    year: "2023—25",
    date: "Paid internship",
    role: "Accounts Assistant",
    company: "Tassels Bridal Boutique",
    description:
      "Supported the fashion brand’s accounts and helped automate finance and accounting systems.",
    tags: ["Accounting", "Automation"],
  },
];

const research = [
  {
    number: "01",
    category: "Financial Markets",
    title: "Bulls & Bears of Fundamental Analysis versus Technical Analysis",
    journal: "IJISRT · Volume 9, Issue 8",
    description:
      "A study of technical patterns and fundamental factors used in stock selection.",
  },
  {
    number: "02",
    category: "Financial Crime",
    title: "Schemes, Scandals, Swindles — A Global Journey through Financial Frauds",
    journal: "IJARESM · Volume 12, Issue 10",
    description:
      "An analysis of major financial frauds, how scams operate, and their impact on investors and markets.",
  },
  {
    number: "03",
    category: "Responsible AI",
    title: "From Bias to Balance: Addressing Bias and Fairness in AI Algorithms",
    journal: "IJARESM · Volume 12, Issue 12",
    description:
      "Research into algorithmic bias, its consequences, and the need for fair and ethical AI practices.",
  },
];

const education = [
  {
    degree: "Bachelor of Business Administration",
    school: "NMIMS, Mumbai",
    full: "Shri Vile Parle Kelavani Mandal’s Narsee Monjee Institute of Management Studies",
  },
  {
    degree: "BBA in Digital Business & Entrepreneurship",
    school: "IIM Bangalore",
    full: "Indian Institute of Management Bangalore",
  },
  {
    degree: "CBSE — Commerce with Mathematics",
    school: "Amity International School, New Delhi",
    full: "Class XII: 97.2% · Class X: 95% · IELTS: Band 7",
  },
];

const skills = [
  "Financial markets",
  "Technical analysis",
  "Business research",
  "Digital marketing",
  "Public speaking",
  "Leadership",
  "Accounts automation",
  "Adobe",
  "HTML",
  "Python",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.14 },
    );

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-38% 0px -52%", threshold: 0 },
    );

    document.querySelectorAll(".reveal").forEach((element) =>
      revealObserver.observe(element),
    );
    document.querySelectorAll("main section[id]").forEach((section) =>
      sectionObserver.observe(section),
    );

    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      document.documentElement.style.setProperty(
        "--scroll-progress",
        `${Math.min(1, Math.max(0, progress))}`,
      );
    };

    const updatePointer = (event: PointerEvent) => {
      document.documentElement.style.setProperty("--mouse-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${event.clientY}px`);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("pointermove", updatePointer, { passive: true });

    return () => {
      revealObserver.disconnect();
      sectionObserver.disconnect();
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("pointermove", updatePointer);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="pointer-light" aria-hidden="true" />
      <div className="scroll-progress" aria-hidden="true" />

      <header className="site-header">
        <a className="brand-mark" href="#top" aria-label="Vansh Thirani — home">
          <span>VT</span>
          <span className="brand-copy">Vansh Thirani</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              className={activeSection === item.href.slice(1) ? "active" : ""}
              href={item.href}
              key={item.label}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a className="nav-cta" href="mailto:vanshthirani.123@gmail.com">
          Let’s talk <ArrowUpRight size={16} />
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          {navItems.map((item, index) => (
            <a href={item.href} key={item.label} onClick={closeMenu}>
              <span>0{index + 1}</span> {item.label}
            </a>
          ))}
          <a href="mailto:vanshthirani.123@gmail.com" onClick={closeMenu}>
            <span>06</span> Let’s talk
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy">
            <div className="availability-pill hero-enter delay-1">
              <span className="status-pulse" />
              Open to high-impact opportunities
            </div>
            <p className="hero-kicker hero-enter delay-2">Business · Markets · Research</p>
            <h1 id="hero-title" className="hero-title hero-enter delay-3">
              Curious mind.
              <br />
              <span>Commercial instinct.</span>
            </h1>
            <p className="hero-intro hero-enter delay-4">
              I’m <strong>Vansh Thirani</strong> — a business student, market researcher,
              published author and youth leader turning complex ideas into clear,
              actionable thinking.
            </p>
            <div className="hero-actions hero-enter delay-5">
              <a className="button button-primary" href="#research">
                Explore my work <ArrowDown size={17} />
              </a>
              <a className="button button-ghost" href="/Vansh-Thirani-Resume.pdf" download>
                <Download size={17} /> Download résumé
              </a>
            </div>
          </div>

          <div className="hero-visual hero-enter delay-4" aria-label="Vansh Thirani profile graphic">
            <div className="orbit orbit-outer">
              <span className="orbit-label orbit-label-one">Markets</span>
              <span className="orbit-label orbit-label-two">Research</span>
            </div>
            <div className="orbit orbit-inner">
              <span className="orbit-dot" />
            </div>
            <div className="identity-core">
              <span className="identity-label">Portfolio / 2026</span>
              <strong>VT</strong>
              <p>New Delhi ↗ Mumbai ↗ Bangalore</p>
            </div>
            <div className="floating-card floating-card-top">
              <Trophy size={17} />
              <span><strong>2×</strong> Quarterfinalist</span>
            </div>
            <div className="floating-card floating-card-bottom">
              <BookOpen size={17} />
              <span><strong>3</strong> Research papers</span>
            </div>
          </div>

          <div className="hero-footer hero-enter delay-5">
            <span>Scroll to discover</span>
            <span className="scroll-line" />
            <span>01 — 08</span>
          </div>
        </section>

        <div className="ticker" aria-label="Areas of focus">
          <div className="ticker-track">
            <span>Investment research</span><i>✦</i>
            <span>Digital business</span><i>✦</i>
            <span>Entrepreneurship</span><i>✦</i>
            <span>Financial markets</span><i>✦</i>
            <span>Public leadership</span><i>✦</i>
            <span aria-hidden="true">Investment research</span><i aria-hidden="true">✦</i>
            <span aria-hidden="true">Digital business</span><i aria-hidden="true">✦</i>
            <span aria-hidden="true">Entrepreneurship</span><i aria-hidden="true">✦</i>
            <span aria-hidden="true">Financial markets</span><i aria-hidden="true">✦</i>
            <span aria-hidden="true">Public leadership</span><i aria-hidden="true">✦</i>
          </div>
        </div>

        <section className="section about-section" id="about">
          <div className="section-heading reveal">
            <p className="eyebrow"><span>01</span> Profile</p>
            <h2>Built at the intersection of <em>numbers</em> and <em>narratives.</em></h2>
          </div>

          <div className="about-layout">
            <div className="about-note reveal">
              <Sparkles size={20} />
              <p>Analytical enough to question the numbers. Creative enough to tell the story behind them.</p>
            </div>
            <div className="about-copy reveal">
              <p className="large-copy">
                My work spans investment analysis, digital business, financial systems,
                published research and international policy discussion.
              </p>
              <p>
                From studying stock-selection methods and global financial frauds to
                leading Model United Nations forums and competing in global business
                challenges, I’m most engaged when research has a real-world decision at
                the other end.
              </p>
            </div>
          </div>

          <div className="stats-grid reveal">
            {stats.map((stat) => (
              <div className="stat-card" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="section-heading split-heading reveal">
            <div>
              <p className="eyebrow"><span>02</span> Experience</p>
              <h2>Learning where the market <em>moves.</em></h2>
            </div>
            <p>Investment, trading and operational finance across three distinct business environments.</p>
          </div>

          <div className="timeline">
            {experiences.map((item, index) => (
              <article className="timeline-row reveal" key={item.company}>
                <div className="timeline-index">0{index + 1}</div>
                <div className="timeline-date"><strong>{item.year}</strong><span>{item.date}</span></div>
                <div className="timeline-content">
                  <p>{item.company}</p>
                  <h3>{item.role}</h3>
                  <span>{item.description}</span>
                  <div className="tag-row">
                    {item.tags.map((tag) => <small key={tag}>{tag}</small>)}
                  </div>
                </div>
                <ArrowUpRight className="timeline-arrow" size={24} />
              </article>
            ))}
          </div>
        </section>

        <section className="section research-section" id="research">
          <div className="section-heading split-heading reveal">
            <div>
              <p className="eyebrow"><span>03</span> Selected research</p>
              <h2>Questions worth <em>investigating.</em></h2>
            </div>
            <p>Published work across markets, financial integrity and responsible technology.</p>
          </div>

          <div className="research-grid">
            {research.map((paper) => (
              <article className="research-card reveal" key={paper.number}>
                <div className="research-topline">
                  <span>{paper.number}</span>
                  <BookOpen size={19} />
                </div>
                <p className="research-category">{paper.category}</p>
                <h3>{paper.title}</h3>
                <p className="research-description">{paper.description}</p>
                <div className="research-journal"><Check size={15} /> {paper.journal}</div>
              </article>
            ))}
          </div>

          <a
            className="documentary-card reveal"
            href="https://www.youtube.com/@VanshThirani"
            target="_blank"
            rel="noreferrer"
          >
            <div className="documentary-icon"><Play size={25} fill="currentColor" /></div>
            <div>
              <p>Directed & produced</p>
              <h3>Documentary: On Business of Exhibitions</h3>
              <span>YouTube · @VanshThirani</span>
            </div>
            <ArrowUpRight size={26} />
          </a>
        </section>

        <section className="section achievement-section" id="achievements">
          <div className="section-heading reveal">
            <p className="eyebrow"><span>04</span> Honors & leadership</p>
            <h2>Compete globally. <em>Lead locally.</em></h2>
          </div>

          <div className="achievement-grid">
            <article className="feature-achievement reveal">
              <div className="achievement-number">01</div>
              <div className="achievement-icon"><Award size={31} /></div>
              <p>University of Melbourne</p>
              <h3>Melbourne Case Study Competition</h3>
              <strong>Quarterfinalist</strong>
              <span>
                Examined the digital marketing strategy of a travel platform that
                helps customers find replacements for existing bookings.
              </span>
            </article>

            <article className="feature-achievement reveal">
              <div className="achievement-number">02</div>
              <div className="achievement-icon"><Trophy size={31} /></div>
              <p>University of Pennsylvania</p>
              <h3>Wharton Youth Investment Competition</h3>
              <strong>Quarterfinalist</strong>
              <span>
                Built a virtual $100,000 portfolio around real estate and a
                women-owned sports enterprise supporting athletes and executives.
              </span>
            </article>

            <article className="mun-card reveal">
              <div className="mun-header">
                <div className="achievement-icon"><Users2 size={31} /></div>
                <span>2017 — Present</span>
              </div>
              <p>Vincere MUN Society</p>
              <h3>President, Host & Organiser</h3>
              <strong>President · 2022—2024</strong>
              <span>
                Represented nations and led discussion on global conflicts,
                international law, fair elections, technology, healthcare and trade.
              </span>
              <div className="topic-cloud">
                <small>Israel–Palestine</small><small>Suez Crisis</small>
                <small>AI & healthcare</small><small>ICJ cases</small>
                <small>Global trade</small><small>Russia–Ukraine</small>
              </div>
            </article>
          </div>

          <div className="olympiad-strip reveal">
            <span>Also participated in</span>
            <div>
              <strong>International Economics Olympiad</strong>
              <strong>Aryabhata National Mathematics Olympiad</strong>
              <strong>SRCC Neo Economics Olympiad</strong>
              <strong>Commerce Teachers Foundation Olympiad</strong>
            </div>
          </div>
        </section>

        <section className="section education-section" id="education">
          <div className="section-heading split-heading reveal">
            <div>
              <p className="eyebrow"><span>05</span> Education</p>
              <h2>A foundation built for <em>what’s next.</em></h2>
            </div>
            <p>Business administration, digital enterprise and academic excellence.</p>
          </div>

          <div className="education-list">
            {education.map((item, index) => (
              <article className="education-row reveal" key={item.degree}>
                <span className="education-number">0{index + 1}</span>
                <div className="education-icon"><GraduationCap size={22} /></div>
                <div>
                  <p>{item.school}</p>
                  <h3>{item.degree}</h3>
                  <span>{item.full}</span>
                </div>
                <ArrowRight size={23} />
              </article>
            ))}
          </div>
        </section>

        <section className="section dimensions-section" id="beyond">
          <div className="section-heading reveal">
            <p className="eyebrow"><span>06</span> Beyond business</p>
            <h2>Discipline, expression and <em>community.</em></h2>
          </div>

          <div className="dimensions-grid">
            <article className="dimension-card reveal">
              <div className="dimension-icon"><Music2 size={25} /></div>
              <p>Music</p>
              <h3>Classical vocalist & multi-instrumentalist</h3>
              <span>
                Senior diploma in Indian classical vocal music, with certifications
                in keyboard, harmonium and tabla from Prayag Sangeet Samiti.
              </span>
              <small>Vocal music · 2012—Present</small>
            </article>
            <article className="dimension-card reveal">
              <div className="dimension-icon"><Mic2 size={25} /></div>
              <p>Stage & sport</p>
              <h3>Performer, player, competitor</h3>
              <span>
                Lead actor in school theatre and participant at inter-school and zonal
                level in tennis, cricket, table tennis, skating and badminton.
              </span>
              <small>Theatre · Team sport · Racquet sport</small>
            </article>
            <article className="dimension-card community-card reveal">
              <div className="dimension-icon"><Users2 size={25} /></div>
              <p>Community</p>
              <h3>Service designed to reach people</h3>
              <span>
                Interact Club Secretary and organiser of food fundraisers, winter
                clothing donations, shelter drives and a female health camp.
              </span>
              <small>₹30,000 raised for a female hygiene initiative</small>
            </article>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="skills-layout">
            <div className="section-heading reveal">
              <p className="eyebrow"><span>07</span> Toolkit</p>
              <h2>Skills that travel across <em>disciplines.</em></h2>
            </div>
            <div className="skills-cloud reveal">
              {skills.map((skill, index) => (
                <span key={skill} className={index % 3 === 0 ? "skill-accent" : ""}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="languages-card reveal">
            <div><Languages size={24} /><strong>Languages</strong></div>
            <ul>
              <li><span>English</span> Native proficiency</li>
              <li><span>Hindi</span> Professional proficiency</li>
              <li><span>German</span> Professional proficiency</li>
              <li><span>Sanskrit</span> Reading & writing</li>
            </ul>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-orb" aria-hidden="true" />
          <div className="contact-content reveal">
            <p className="eyebrow"><span>08</span> Contact</p>
            <h2>Let’s make the next idea <em>matter.</em></h2>
            <p>
              For internships, research collaborations and high-impact opportunities,
              my inbox is open.
            </p>
            <a className="contact-email" href="mailto:vanshthirani.123@gmail.com">
              vanshthirani.123@gmail.com <ArrowUpRight size={30} />
            </a>
          </div>
          <div className="contact-links reveal">
            <a href="tel:+918851479706"><Phone size={18} /> +91 88514 79706</a>
            <a href="https://www.linkedin.com/in/vansh-thirani" target="_blank" rel="noreferrer">
              <Network size={18} /> LinkedIn <ArrowUpRight size={15} />
            </a>
            <a href="mailto:vanshthirani.123@gmail.com"><Mail size={18} /> Email</a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand-mark" href="#top"><span>VT</span><span className="brand-copy">Vansh Thirani</span></a>
        <p>Business · Markets · Research</p>
        <p>© 2026 Vansh Thirani</p>
      </footer>
    </div>
  );
}
