import type { Metadata } from "next";
import { AnimationRuntime } from "./AnimationRuntime";
import { ProjectActions } from "./ProjectActions";

export const metadata: Metadata = {
  title: "Flovro | AI Voice Agents, Automation & Web Development",
  description:
    "Flovro builds AI voice agents, intelligent automations, animated websites, and full-stack products that help businesses grow.",
};

function FlovroLogo({
  light = false,
  className = "logo",
}: {
  light?: boolean;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 144 24"
      fill="none"
      className={className}
      role="img"
      aria-label="Flovro"
    >
      {[
        "M0 7H5V17H0Z",
        "M9 2H14V22H9Z",
        "M18 5H23V19H18Z",
        "M32 4H45V7H36V10H44V13H36V20H32Z",
        "M49 4H53V17H61V20H49Z",
        "M65 4H79V20H65ZM69 7V17H75V7Z",
        "M83 4H87L91 15L95 4H99L93 20H89Z",
        "M103 4H112C116 4 118 6 118 10C118 12.5 116.8 14.2 114.6 15L119 20H114L110.5 15.5H107V20H103ZM107 7V12.5H111.5C113.2 12.5 114 11.5 114 9.75C114 7.9 113.1 7 111.5 7Z",
        "M123 4H137V20H123ZM127 7V17H133V7Z",
      ].map((path) => (
        <path
          key={path}
          d={path}
          fill={light ? "#FCFCFC" : "#050419"}
          fillRule="evenodd"
        />
      ))}
    </svg>
  );
}

const steps = [
  {
    title: "MediLink AI",
    description: (
      <>
        A multi-agent healthcare triage platform that coordinates patient
        intake, medical intelligence, logistics, and doctor-led decisions.
        <ProjectActions
          projectTitle="MediLink AI"
          videoSrc="/projects/medilink-ai.mp4"
          siteUrl="https://github.com/SydAsim/Medi-link-AI"
        />
      </>
    ),
  },
  {
    title: "YouTube Clone",
    description: (
      <>
        A full-stack video platform built with React, Node.js, Express, MongoDB,
        Cloudinary, and secure JWT authentication.
        <ProjectActions
          projectTitle="YouTube Clone"
          videoSrc="/projects/youtube-clone.mp4"
          siteUrl="https://github.com/SydAsim/Youtube-clone"
        />
      </>
    ),
  },
  {
    title: "Orlando Dental Care",
    description: (
      <>
        A modern dental web experience designed to turn patient interest into
        appointment requests through clear messaging and polished interactions.
        <ProjectActions
          projectTitle="Orlando Dental Care"
          videoSrc="/projects/orlando-dental.mp4"
          siteUrl="https://github.com/SydAsim/orlando-dental-care-v2"
        />
      </>
    ),
  },
  {
    title: "VisaGuard AI",
    description: (
      <>
        An AI-assisted social-risk analysis product that helps review digital
        signals and organize evidence for clearer visa-readiness decisions.
        <ProjectActions
          projectTitle="VisaGuard AI"
          videoSrc="/projects/visaguard-ai.mp4"
          siteUrl="https://github.com/SydAsim/Visaguardai_Upwork"
        />
      </>
    ),
  },
];

const features = [
  {
    icon: "/icons/features/rapid-activation.svg",
    title: "AI Voice Agents",
    description:
      "Inbound and outbound AI calling agents for lead qualification, customer support, booking, reminders, collections, and after-hours coverage.",
  },
  {
    icon: "/icons/features/rigorous-selection.svg",
    title: "Workflow Automation",
    description:
      "Reliable n8n workflows that connect CRMs, calendars, email, WhatsApp, databases, APIs, and the tools your team already uses.",
  },
  {
    icon: "/icons/features/verified.svg",
    title: "Animated Web Experiences",
    description:
      "Modern, responsive websites with purposeful motion, strong visual storytelling, and clear conversion paths for growing businesses.",
  },
  {
    icon: "/icons/features/controlled-outcomes.svg",
    title: "Full-Stack Products",
    description:
      "Custom web applications built with practical architecture, secure integrations, scalable backends, and business-ready user experiences.",
  },
];

const faqs = [
  {
    question: "What can Flovro automate?",
    answer:
      "Flovro automates customer calls, lead qualification, appointment booking, reminders, follow-ups, support, CRM updates, dispatch, collections, internal hand-offs, reporting, and other repetitive business workflows.",
  },
  {
    question: "Can Flovro connect with our current tools?",
    answer:
      "Yes. We can integrate voice agents and automations with CRMs, calendars, Google Sheets, email, WhatsApp, databases, payment tools, and most platforms that provide an API or webhook.",
  },
  {
    question: "Does Flovro work with one specific industry?",
    answer:
      "No. Flovro works across industries, including home services, healthcare, dental, real estate, e-commerce, professional services, and growing teams with repeatable customer or operational workflows.",
  },
  {
    question: "Can you build both the automation and the website?",
    answer:
      "Yes. Flovro can design the customer-facing website or web application, build the backend workflow, connect the required tools, and add an AI voice or messaging layer as one complete system.",
  },
];

function Pill({
  href,
  children,
  variant = "dark",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "dark" | "glass" | "light";
}) {
  return (
    <a href={href} className={`pill-btn pill-btn--${variant}`}>
      <span className="pill-btn-span">{children}</span>
    </a>
  );
}

function Loader() {
  return (
    <div id="loader" className="flx-center" aria-hidden="true">
      <svg
        className="loader__ellipse loader__ellipse--outer"
        viewBox="0 0 1500 800"
      >
        <ellipse
          className="loader__draw loader__draw--outer"
          cx="750"
          cy="400"
          rx="749"
          ry="399"
        />
      </svg>
      <svg
        className="loader__ellipse loader__ellipse--inner"
        viewBox="0 0 800 800"
      >
        <ellipse
          className="loader__draw loader__draw--inner"
          cx="400"
          cy="400"
          rx="399"
          ry="399"
        />
      </svg>
      <svg
        width="96"
        height="96"
        viewBox="0 0 96 96"
        fill="none"
        className="loader__logo loader__logo--runtime"
      >
        <defs>
          <mask id="arrow-mask">
            <path
              className="arrow-mask-line"
              d="M22 29V67M48 15V81M74 23V73"
              stroke="white"
              strokeWidth="14"
              strokeLinecap="round"
            />
          </mask>
        </defs>
        <g mask="url(#arrow-mask)" fill="#0F32DC">
          <rect x="15" y="28" width="14" height="40" rx="7" />
          <rect x="41" y="14" width="14" height="68" rx="7" />
          <rect x="67" y="22" width="14" height="52" rx="7" />
        </g>
        <rect id="cube_01" x="40" y="0" width="16" height="16" fill="#0F32DC" />
        <rect
          id="cube_02"
          x="68"
          y="12"
          width="16"
          height="16"
          transform="rotate(45 76 20)"
          fill="#0F32DC"
        />
        <rect id="cube_03" x="80" y="40" width="16" height="16" fill="#0F32DC" />
        <rect
          id="cube_04"
          x="68"
          y="68"
          width="16"
          height="16"
          transform="rotate(45 76 76)"
          fill="#0F32DC"
        />
        <rect id="cube_05" x="40" y="80" width="16" height="16" fill="#0F32DC" />
      </svg>
      <FlovroLogo className="loader__brand" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <div className="transition-pages" />
      <div className="mobile-nav__overlay" />

      <header>
        <nav className="header__nav-left" aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
        </nav>
        <div className="header__logo">
          <a href="/" className="header__logo_link" aria-label="Flovro Home">
            <FlovroLogo />
          </a>
        </div>
        <nav className="header__nav-right" aria-label="Actions">
          <div className="header__ctas">
            <Pill href="#projects" variant="glass">
              Our Work
            </Pill>
            <Pill href="mailto:syedasim2021@gmail.com?subject=Flovro%20project%20inquiry">
              Start a Project
            </Pill>
          </div>
          <button
            className="menu-btn"
            type="button"
            aria-label="Toggle menu"
            aria-expanded="false"
          >
            <span className="menu-btn__icon">
              <span className="menu-btn__line menu-btn__line--1" />
              <span className="menu-btn__line menu-btn__line--2" />
              <span className="menu-btn__line menu-btn__line--3" />
            </span>
          </button>
        </nav>

        <nav className="mobile-nav" aria-label="Mobile navigation">
          <div className="mobile-nav__panel-bg" />
          <div className="mobile-nav__panel">
            <div className="mobile-nav__header">
              <a href="/" className="mobile-nav__logo" aria-label="Flovro Home">
                <FlovroLogo />
              </a>
              <button
                className="mobile-nav__close"
                type="button"
                aria-label="Close menu"
              >
                <span />
                <span />
              </button>
            </div>
            <ul className="mobile-nav__list">
              <li className="mobile-nav__item">
                <a href="#services">Services</a>
              </li>
              <li className="mobile-nav__item">
                <a href="#projects">Projects</a>
              </li>
            </ul>
            <div className="mobile-nav__ctas">
              <div className="mncta">
                <Pill href="#projects" variant="glass">
                  Our Work
                </Pill>
              </div>
              <div className="mncta">
                <Pill href="mailto:syedasim2021@gmail.com?subject=Flovro%20project%20inquiry">
                  Start a Project
                </Pill>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main data-taxi>
        <div data-taxi-view="home">
          <div className="top">
            <section className="hero">
              <div className="hero__content">
                <h1 className="hero__title">
                  <span>The New Standard </span>
                  <span>in Business Automation</span>
                </h1>
                <p className="hero__subtitle">
                  <span>
                    AI voice agents. Intelligent workflows.
                    <br className="sp" />
                  </span>
                  <span>
                    We build connected systems and animated digital experiences
                    that help businesses respond faster, work smarter, and grow.
                  </span>
                </p>
              </div>
              <div className="hero__scroll-btn">
                <span>
                  <span className="hsbtn-in">
                    scroll to explore selected projects
                  </span>
                </span>
              </div>
            </section>

            <div className="hero-spacer" />

            <section className="flow" id="projects" aria-label="Selected projects">
              <div className="flow__wrapper">
                <div className="flow__steps">
                  {steps.map((step, index) => (
                    <div
                      className="flow__step"
                      data-step={index + 1}
                      key={step.title}
                    >
                      <div className="flow__header">
                        <div className="flow__number">
                          <span>{String(index + 1).padStart(2, "0")}</span>
                        </div>
                        <h3 className="flow__title">{step.title}</h3>
                      </div>
                      <div className="flow__body">
                        <div className="flow__body-inner">
                          <div className="flow__track">
                            <div className="flow__track-bar">
                              <div className="flow__track-fill" />
                            </div>
                          </div>
                          <p className="flow__description">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="services-section" id="services">
              <div className="features__sticky">
                <h2 className="features__title">
                  Built for modern businesses,
                  <br className="pc" /> beyond disconnected tools and manual work.
                </h2>
                <div className="features__grid">
                  {features.map((feature) => (
                    <article className="feature-item" key={feature.title}>
                      <div className="feature-item__content">
                        <div className="feature-item__icon">
                          <img
                            src={feature.icon}
                            alt={`${feature.title} icon`}
                            width="96"
                            height="96"
                          />
                        </div>
                        <div className="feature-item__text">
                          <h3 className="feature-item__title">
                            {feature.title}
                          </h3>
                          <p className="feature-item__description">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section className="standards">
              <div className="standards__container">
                <div className="standards__image">
                  <picture>
                    <source
                      srcSet="/_astro/apply-door.CA6YLUcA_Z1Wri67.avif"
                      type="image/avif"
                    />
                    <source
                      srcSet="/_astro/apply-door.CA6YLUcA_Z1X0VFN.webp"
                      type="image/webp"
                    />
                    <img
                      src="/_astro/apply-door.CA6YLUcA_Z12L5fE.png"
                      alt="A coordinated team working through a complex operation"
                      width="800"
                      height="400"
                    />
                  </picture>
                </div>
                <div className="standards__content">
                  <h2 className="standards__title">
                    <span>Business-ready </span>
                    <span>systems across </span>
                    <span>every touchpoint.</span>
                  </h2>
                  <p className="standards__description">
                    From the first customer call to the final CRM update, we
                    design every interaction to be clear, dependable, and ready
                    to scale.
                  </p>
                  <div className="flx">
                    <Pill href="#projects" variant="dark">
                      Explore our projects
                    </Pill>
                  </div>
                </div>
              </div>
            </section>

            <section className="faq">
              <div className="faq__container">
                <div className="faq__left">
                  <h2 className="faq__title">
                    How Flovro turns business friction into connected,
                    intelligent systems.
                  </h2>
                </div>
                <div className="faq_split_bar" />
                <div className="faq__right">
                  {faqs.map((faq, index) => (
                    <div
                      className={`faq-item ${
                        index === 0 ? "faq-item--open" : ""
                      }`}
                      key={faq.question}
                    >
                      <button
                        className="faq-item__header"
                        type="button"
                        aria-expanded={index === 0}
                      >
                        <span className="faq-item__question">
                          {faq.question}
                        </span>
                        <span className="faq-item__icon">
                          <img src="/icons/chevron-down.svg" alt="" />
                        </span>
                      </button>
                      <div className="faq-item__content">
                        <p className="faq-item__answer">{faq.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="cta-section" id="contact">
              <h2 className="cta-section__title">
                <span>Respond faster, automate the repetitive, </span>
                <span>and build a business ready to scale.</span>
              </h2>
              <div className="flx">
                <Pill
                  href="mailto:syedasim2021@gmail.com?subject=Flovro%20discovery%20call"
                  variant="light"
                >
                  Book a Discovery Call
                </Pill>
              </div>
            </section>
          </div>
          <div id="app" />
        </div>
      </main>

      <footer className="footer">
        <nav className="footer-nav" aria-label="Footer navigation">
          {[
            ["Services", "#services"],
            ["Projects", "#projects"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              href={href}
              className="footer-nav-btn"
              key={href}
            >
              <span className="footer-nav-btn__bg" />
              <span className="footer-nav-btn__label">{label}</span>
              <span className="footer-nav-btn__arrows">
                <img
                  src="/_astro/arrow-right.BfejkNdO.svg"
                  alt=""
                  className="footer-nav-btn__arrow footer-nav-btn__arrow--current"
                />
                <img
                  src="/_astro/arrow-right.BfejkNdO.svg"
                  alt=""
                  className="footer-nav-btn__arrow footer-nav-btn__arrow--next"
                />
              </span>
            </a>
          ))}
        </nav>
        <div className="footer__bottom">
          <FlovroLogo light className="logo footer__logo" />
          <div className="footer__meta">
            <p className="footer__copyright">© 2026 Flovro.</p>
            <a
              href="mailto:syedasim2021@gmail.com"
              className="footer__privacy"
            >
              Contact
            </a>
            <p className="footer__credit">AI · Automation · Web</p>
          </div>
        </div>
      </footer>

      <Loader />

      <AnimationRuntime />
    </>
  );
}
