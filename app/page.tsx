import type { Metadata } from "next";
import { AnimationRuntime } from "./AnimationRuntime";

export const metadata: Metadata = {
  title: "Vectr | The New Standard in Staffing",
  description:
    "AI-driven speed and expert curation for industrial staffing in high-consequence environments.",
};

const logoPaths = [
  "M9.69877 11.9986H9.49841L4.39929 0H0L5.703 13.4208C6.36614 14.9841 7.90123 15.9972 9.59718 15.9972C11.2959 15.9972 12.8282 14.9841 13.4914 13.4208L19.1972 0H14.7979L9.69877 11.9986Z",
  "M19.4286 3.99859V11.9986C19.4286 14.2081 21.2205 15.9972 23.4272 15.9972H35.4257V12.3965H23.4272V9.79753H33.8257V6.19683H23.4272V3.59788H35.4257V0H23.4272C21.2176 0 19.4286 1.79189 19.4286 3.99859Z",
  "M44.3598 3.99859H47.5598C49.0384 3.99859 50.328 4.80282 51.0194 5.99929H55.3058C54.4169 2.54815 51.2846 0 47.5598 0H44.3598C39.9407 0 36.3598 3.58095 36.3598 8C36.3598 12.419 39.9407 16 44.3598 16H47.5598C51.2875 16 54.4198 13.4519 55.3058 10.0007H51.0194C50.328 11.1944 49.0384 12.0014 47.5598 12.0014H44.3598C42.1503 12.0014 40.3612 10.2095 40.3612 8.00282C40.3612 5.79612 42.1531 4.00423 44.3598 4.00423V3.99859Z",
  "M56.0395 0V3.60071H62.0388V15.9972H66.0374V3.60071H72.0367V0H56.0395Z",
  "M92.5968 5.39824C92.5968 2.41552 90.1785 0 87.1986 0H77.4011C75.1915 0 73.4025 1.79189 73.4025 3.99859V15.9972H77.4011V10.7965H84.0409L88.2003 15.9972H92.5996L88.3414 10.6751C90.7739 10.1503 92.5996 7.98871 92.5996 5.39824H92.5968ZM88.5982 5.39824C88.5982 6.39153 87.7912 7.19859 86.7979 7.19859H77.3982V3.59788H86.7979C87.7912 3.59788 88.5982 4.40494 88.5982 5.39824Z",
];

function VectrLogo({
  light = false,
  className = "logo",
}: {
  light?: boolean;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 93 16"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {logoPaths.map((path) => (
        <path key={path} d={path} fill={light ? "#FCFCFC" : "#050419"} />
      ))}
    </svg>
  );
}

const steps = [
  {
    title: "Activation, simplified",
    description: (
      <>
        One call triggers mobilization.
        <br /> Your requirements: craft, count, and start date route directly to
        our verified crews. No hand-offs. No escalations. Just boots on the
        ground in minutes.
      </>
    ),
  },
  {
    title: "Cleared to count",
    description:
      "Our team handles all screening and verification before dispatch. Compliance, background, certifications, and fitness-for-duty — we enforce a zero-fail model to guarantee every worker clears the gate on Day 1.",
  },
  {
    title: "Proven field match",
    description:
      "We don't just provide available workers. We deploy proven crews. By filtering for past performance, role fit, and reliability, we deliver teams engineered for endurance — ensuring your project stays fully manned from first break to completion.",
  },
  {
    title: "Seamless arrival",
    description:
      'We manage the "last mile" of mobilization. Every crew arrives site-ready with finalized reporting details. With real-time arrival monitoring and active coordination, we ensure your shift starts on time, even when field conditions shift.',
  },
];

const features = [
  {
    icon: "/icons/features/rapid-activation.svg",
    title: "Rapid Activation",
    description:
      "We believe speed is a skill. Our platform uses machine learning to turn staffing into instant logistics, deploying a precisely matched workforce the moment demand strikes.",
  },
  {
    icon: "/icons/features/rigorous-selection.svg",
    title: "Rigorous Selection",
    description:
      "Geography is a core metric. Our engine uses AI to find and contact qualified talent within defined radii, securing top local contractors first, filtered for cost and skill.",
  },
  {
    icon: "/icons/features/verified.svg",
    title: "100% Verified Before Arrival",
    description:
      "We use a Zero-Trust verification model with secure API integrations to run automated background checks and drug testing, blocking dispatch access until fully cleared.",
  },
  {
    icon: "/icons/features/controlled-outcomes.svg",
    title: "Controlled Outcomes",
    description:
      "We guarantee controlled outcomes by managing staffing's biggest variables—cost and compliance—prioritizing local mobilization and automating safety for every dispatch.",
  },
];

const faqs = [
  {
    question: "How fast can crews be mobilized?",
    answer:
      "We move at the speed of your schedule. Our platform maintains a deep network of verified industrial craft, eliminating the weeks wasted in traditional hiring cycles. One call activates our mobilization engine to source and deploy precision-matched crews in hours, not days, ensuring your most critical paths remain fully manned.",
  },
  {
    question: "How do you handle compliance & background checks?",
    answer:
      "We use a Zero-Fail Compliance model. Before a worker is even cleared for dispatch, our system automates the verification of background checks, drug testing (FFD), and site-specific certifications including nuclear grade requirements. We block access to the gate for anyone who isn't 100% cleared, ensuring your badging office has zero headaches on Day 1.",
  },
  {
    question: "What is the coverage during outages?",
    answer:
      'We provide 24/7 active coordination to match the 24/7 nature of an outage. Our coverage spans the full range of outage craft: from general laborers and painters to specialized repairs and schedulers. More importantly, we manage the "last mile" of arrival, monitoring deployments in real-time to ensure your night and day shifts remain fully manned, even when field conditions shift.',
  },
  {
    question: "How does Vectr differ from traditional staffing vendors?",
    answer:
      "Traditional vendors are reactive; Vectr is an operational engine. While legacy agencies rely on manual resumes and 'available' warm bodies, we use intelligent workflows and expert curation to deliver field-validated precision. We don't just find people who are looking for work; we deploy proven crews that are engineered for the high-tempo grind of a critical path environment.",
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
        className="loader__logo"
      >
        <defs>
          <mask id="arrow-mask">
            <path
              className="arrow-mask-line"
              d="M14 14L47 47M14 82L47 49M0 48H56"
              stroke="white"
              strokeWidth="16"
            />
          </mask>
        </defs>
        <path
          mask="url(#arrow-mask)"
          d="M54 42a8 8 0 0 1 0 12L20 88 8 76l20-20H0V40h29L8 20 20 8l34 34Z"
          fill="#0F32DC"
        />
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
          <a href="https://www.vectrfl.com/industries">Our Industries</a>
          <a href="https://www.vectrfl.com/our-mission">Our Mission</a>
        </nav>
        <div className="header__logo">
          <a href="/" className="header__logo_link" aria-label="Vectr Home">
            <VectrLogo />
          </a>
        </div>
        <nav className="header__nav-right" aria-label="Actions">
          <div className="header__ctas">
            <Pill href="https://www.vectrfl.com/apply" variant="glass">
              Apply
            </Pill>
            <Pill href="https://www.vectrfl.com/request-crew">
              Request Crews
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
              <a href="/" className="mobile-nav__logo" aria-label="Vectr Home">
                <VectrLogo />
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
                <a href="https://www.vectrfl.com/industries">Our Industries</a>
              </li>
              <li className="mobile-nav__item">
                <a href="https://www.vectrfl.com/our-mission">Our Mission</a>
              </li>
            </ul>
            <div className="mobile-nav__ctas">
              <div className="mncta">
                <Pill href="https://www.vectrfl.com/apply" variant="glass">
                  Apply
                </Pill>
              </div>
              <div className="mncta">
                <Pill href="https://www.vectrfl.com/request-crew">
                  Request Crews
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
                  <span>in Staffing</span>
                </h1>
                <p className="hero__subtitle">
                  <span>
                    AI driven speed. Expert curation.
                    <br className="sp" />
                  </span>
                  <span>
                    We mobilize verified crews to protect your schedule and your
                    bottom line in high-consequence environments.
                  </span>
                </p>
              </div>
              <div className="hero__scroll-btn">
                <span>
                  <span className="hsbtn-in">
                    scroll to discover our process
                  </span>
                </span>
              </div>
            </section>

            <div className="hero-spacer" />

            <section className="flow">
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

            <section className="features">
              <div className="features__sticky">
                <h2 className="features__title">
                  Designed for today&apos;s operations,
                  <br className="pc" /> beyond legacy staffing workflows.
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
                      alt="Workers in safety vests coordinating at industrial site"
                      width="800"
                      height="400"
                    />
                  </picture>
                </div>
                <div className="standards__content">
                  <h2 className="standards__title">
                    <span>Nuclear-grade </span>
                    <span>standards across </span>
                    <span>every site.</span>
                  </h2>
                  <p className="standards__description">
                    Modeled on nuclear-grade environments, our process enforces
                    badge compliance, protected timelines and zero-error
                    tolerance.
                  </p>
                  <div className="flx">
                    <Pill
                      href="https://www.vectrfl.com/industries"
                      variant="dark"
                    >
                      Explore our industries
                    </Pill>
                  </div>
                </div>
              </div>
            </section>

            <section className="faq">
              <div className="faq__container">
                <div className="faq__left">
                  <h2 className="faq__title">
                    How we work and how we deliver industrial-grade staffing.
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

            <section className="cta-section">
              <h2 className="cta-section__title">
                <span>Staff your outage with fast response, </span>
                <span>and crews you can rely on.</span>
              </h2>
              <div className="flx">
                <Pill
                  href="https://www.vectrfl.com/request-crew"
                  variant="light"
                >
                  Request Crews
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
            ["Our Industries", "industries"],
            ["Our Mission", "our-mission"],
            ["Apply", "apply"],
          ].map(([label, route]) => (
            <a
              href={`https://www.vectrfl.com/${route}`}
              className="footer-nav-btn"
              key={route}
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
          <VectrLogo light className="logo footer__logo" />
          <div className="footer__meta">
            <p className="footer__copyright">© 2026 Vectr, Inc.</p>
            <a
              href="https://www.vectrfl.com/privacy"
              className="footer__privacy"
            >
              Privacy Policy
            </a>
            <a
              href="https://www.vectrfl.com/terms"
              className="footer__privacy"
            >
              ToS
            </a>
            <a
              href="https://utsubo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__credit"
            >
              Made by Utsubo
            </a>
          </div>
        </div>
      </footer>

      <Loader />

      <AnimationRuntime />
    </>
  );
}
