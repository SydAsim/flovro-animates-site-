"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "VaultShield",
    category: "Digital product",
    description:
      "A focused product experience shaped around clarity, confidence, and deliberate interaction.",
    href: "https://vaultshielddsad.vercel.app/",
    accent: "#4667ff",
    accentTwo: "#7ce7ff",
    code: "VS",
  },
  {
    title: "Agency Site",
    category: "Creative platform",
    description:
      "An expressive agency presence with responsive structure, clear messaging, and purposeful motion.",
    href: "https://agency-site-chi-bice.vercel.app/",
    accent: "#f55bcb",
    accentTwo: "#755cff",
    code: "AS",
  },
  {
    title: "Logoipsum",
    category: "Brand experience",
    description:
      "A bold brand presentation built around typography, visual rhythm, and direct calls to action.",
    href: "https://logoipsum-9u1i.vercel.app/",
    accent: "#ffb54c",
    accentTwo: "#ff5f6d",
    code: "LI",
  },
  {
    title: "Orlando Dental Care",
    category: "Healthcare website",
    description:
      "A modern dental experience that makes services easy to understand and appointments easy to reach.",
    href: "https://orlando-dental-care-one.vercel.app/",
    accent: "#54d4c8",
    accentTwo: "#83a8ff",
    code: "OD",
  },
  {
    title: "Lumors",
    category: "Immersive website",
    description:
      "An atmospheric digital showcase balancing visual storytelling with a clean, responsive interface.",
    href: "https://lumors.vercel.app/",
    accent: "#d7ff69",
    accentTwo: "#48d7a0",
    code: "LU",
  },
  {
    title: "Terraelix",
    category: "Editorial experience",
    description:
      "A refined landing experience with layered content, tactile motion, and strong visual hierarchy.",
    href: "https://terraelix-two.vercel.app/",
    accent: "#d98b5f",
    accentTwo: "#89b582",
    code: "TE",
  },
  {
    title: "Animated Gold",
    category: "Motion showcase",
    description:
      "A motion-first web experiment using depth, pacing, and polished transitions to guide attention.",
    href: "https://animated-gold.vercel.app/",
    accent: "#ffd35a",
    accentTwo: "#ff8a3d",
    code: "AG",
  },
  {
    title: "Orbis Bay",
    category: "Premium website",
    description:
      "A composed, responsive experience with immersive presentation and a premium visual finish.",
    href: "https://orbis-bay-tau.vercel.app/",
    accent: "#5cb8ff",
    accentTwo: "#805bff",
    code: "OB",
  },
] as const;

type ProjectStyle = CSSProperties & {
  "--project-accent": string;
  "--project-accent-two": string;
};

export function ProjectsShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const chapters = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    let animationFrame = 0;

    const updateActiveProject = () => {
      animationFrame = 0;
      const target = window.innerHeight * 0.5;
      let nextIndex = 0;
      let nearest = Number.POSITIVE_INFINITY;

      chapters.current.forEach((chapter, index) => {
        if (!chapter) return;
        const bounds = chapter.getBoundingClientRect();
        const distance = Math.abs(bounds.top + bounds.height / 2 - target);

        if (distance < nearest) {
          nearest = distance;
          nextIndex = index;
        }
      });

      if (nextIndex !== activeIndexRef.current) {
        activeIndexRef.current = nextIndex;
        setActiveIndex(nextIndex);
      }
    };

    const requestUpdate = () => {
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(updateActiveProject);
      }
    };

    updateActiveProject();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section
      className="project-showcase"
      id="projects"
      aria-labelledby="projects-title"
    >
      <div className="project-showcase__intro">
        <p className="project-showcase__eyebrow">Selected work · 2026</p>
        <h2 id="projects-title">Eight ideas, built to move.</h2>
        <p className="project-showcase__lede">
          A collection of digital products and web experiences by Flovro.
          Scroll through the deck, then open any project live.
        </p>
      </div>

      <div className="project-showcase__experience">
        <div className="project-showcase__stage">
          <div className="project-showcase__stage-copy" aria-live="polite">
            <span>{String(activeIndex + 1).padStart(2, "0")}</span>
            <span>{projects[activeIndex].category}</span>
          </div>

          <div className="project-showcase__scene">
            <div className="project-showcase__orbit project-showcase__orbit--one" />
            <div className="project-showcase__orbit project-showcase__orbit--two" />

            {projects.map((project, index) => {
              const offset = index - activeIndex;
              const distance = Math.abs(offset);
              const style: ProjectStyle = {
                "--project-accent": project.accent,
                "--project-accent-two": project.accentTwo,
                transform: `translate3d(${offset * 64}%, ${distance * 28}px, ${
                  distance * -180
                }px) rotateY(${offset * -11}deg) scale(${
                  1 - Math.min(distance * 0.065, 0.24)
                })`,
                opacity: distance > 3 ? 0 : 1 - Math.min(distance * 0.24, 0.72),
                zIndex: projects.length - distance,
              };

              return (
                <article
                  className={`project-card ${
                    offset === 0 ? "project-card--active" : ""
                  }`}
                  style={style}
                  aria-hidden={offset !== 0}
                  key={project.href}
                >
                  <div className="project-card__chrome">
                    <span />
                    <span />
                    <span />
                    <p>flovro / {project.title.toLowerCase().replaceAll(" ", "-")}</p>
                  </div>
                  <div className="project-card__visual">
                    <span className="project-card__glow" />
                    <span className="project-card__grid" />
                    <span className="project-card__code">{project.code}</span>
                    <span className="project-card__wordmark">{project.title}</span>
                  </div>
                  <div className="project-card__footer">
                    <div>
                      <p>{project.category}</p>
                      <h3>{project.title}</h3>
                    </div>
                    {offset === 0 ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Visit ${project.title} live site`}
                      >
                        Visit live site
                        <span aria-hidden="true">↗</span>
                      </a>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>

          <div className="project-showcase__progress" aria-hidden="true">
            <span
              style={{
                transform: `scaleX(${(activeIndex + 1) / projects.length})`,
              }}
            />
          </div>
        </div>

        <div className="project-showcase__chapters">
          {projects.map((project, index) => (
            <article
              className={`project-chapter ${
                index === activeIndex ? "project-chapter--active" : ""
              }`}
              ref={(element) => {
                chapters.current[index] = element;
              }}
              key={project.href}
            >
              <p className="project-chapter__number">
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(projects.length).padStart(2, "0")}
              </p>
              <p className="project-chapter__category">{project.category}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.href} target="_blank" rel="noreferrer">
                Visit project <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
