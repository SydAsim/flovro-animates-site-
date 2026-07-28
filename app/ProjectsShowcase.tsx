"use client";

import type { CSSProperties, KeyboardEvent } from "react";
import { useState } from "react";
import { ProjectActions } from "./ProjectActions";

const projects = [
  {
    title: "MediLink AI",
    eyebrow: "Multi-agent healthcare",
    description:
      "A coordinated patient-triage system connecting intake, clinical intelligence, logistics, and doctor-led decisions.",
    image: "/projects/medilink-placeholder.webp",
    video: "/projects/medilink-ai.mp4",
    url: "https://github.com/SydAsim/Medi-link-AI",
    tags: ["AI agents", "Healthcare", "Automation"],
    accent: "#8dff52",
  },
  {
    title: "YouTube Clone",
    eyebrow: "Full-stack platform",
    description:
      "A secure video platform with uploads, cloud media, authentication, discovery, and a responsive viewing experience.",
    image: "/projects/youtube-placeholder.webp",
    video: "/projects/youtube-clone.mp4",
    url: "https://github.com/SydAsim/Youtube-clone",
    tags: ["React", "Node.js", "MongoDB"],
    accent: "#ff536f",
  },
  {
    title: "Orlando Dental",
    eyebrow: "Conversion-focused website",
    description:
      "A polished patient journey that turns service discovery into clear, confident appointment requests.",
    image: "/projects/dental-placeholder.webp",
    video: "/projects/orlando-dental.mp4",
    url: "https://github.com/SydAsim/orlando-dental-care-v2",
    tags: ["UX strategy", "Web design", "Conversion"],
    accent: "#57e7d1",
  },
  {
    title: "VisaGuard AI",
    eyebrow: "Risk-intelligence product",
    description:
      "An AI-assisted product that organizes digital signals and supporting evidence for clearer visa-readiness decisions.",
    image: "/projects/visaguard-placeholder.webp",
    video: "/projects/visaguard-ai.mp4",
    url: "https://github.com/SydAsim/Visaguardai_Upwork",
    tags: ["AI analysis", "MERN", "Decision support"],
    accent: "#b28cff",
  },
];

function circularOffset(index: number, active: number) {
  let offset = index - active;
  const midpoint = projects.length / 2;

  if (offset > midpoint) offset -= projects.length;
  if (offset < -midpoint) offset += projects.length;

  return offset;
}

export function ProjectsShowcase() {
  const [activeProject, setActiveProject] = useState(0);
  const active = projects[activeProject];

  const move = (direction: number) => {
    setActiveProject(
      (current) => (current + direction + projects.length) % projects.length,
    );
  };

  const handleKeyboard = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      move(-1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      move(1);
    }
  };

  return (
    <section
      className="projects-showcase"
      id="projects"
      aria-labelledby="projects-title"
      onKeyDown={handleKeyboard}
    >
      <div className="projects-showcase__ambient" aria-hidden="true">
        <span />
        <span />
      </div>

      <header className="projects-showcase__header">
        <p className="projects-showcase__eyebrow">Selected work / 2025—2026</p>
        <h2 id="projects-title">
          Projects in
          <br /> motion.
        </h2>
        <p>
          Explore AI, automation, and digital products built as connected
          business experiences.
        </p>
      </header>

      <div
        className="project-orbit"
        role="region"
        aria-label="Flovro project carousel"
        aria-roledescription="carousel"
      >
        <div className="project-orbit__stage">
          <span className="project-orbit__beam" aria-hidden="true" />
          {projects.map((project, index) => {
            const offset = circularOffset(index, activeProject);
            const distance = Math.abs(offset);
            const style = {
              "--card-offset": offset,
              "--card-distance": distance,
              "--card-lift": `${distance * 34}px`,
              "--card-accent": project.accent,
              zIndex: projects.length - distance,
            } as CSSProperties;

            return (
              <button
                className={
                  index === activeProject
                    ? "project-orbit__card is-active"
                    : "project-orbit__card"
                }
                type="button"
                aria-label={`Show ${project.title}`}
                aria-pressed={index === activeProject}
                onClick={() => setActiveProject(index)}
                style={style}
                key={project.title}
              >
                <img
                  src={project.image}
                  alt=""
                  width="1200"
                  height="800"
                  loading="lazy"
                  decoding="async"
                />
                <span className="project-orbit__shade" />
                <span className="project-orbit__card-copy">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{project.title}</strong>
                </span>
              </button>
            );
          })}
        </div>

        <div className="project-orbit__controls">
          <button
            type="button"
            onClick={() => move(-1)}
            aria-label="Previous project"
          >
            <span aria-hidden="true">←</span>
          </button>
          <p aria-live="polite">
            {String(activeProject + 1).padStart(2, "0")}
            <span> / {String(projects.length).padStart(2, "0")}</span>
          </p>
          <button
            type="button"
            onClick={() => move(1)}
            aria-label="Next project"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <article
        className="project-orbit__detail"
        style={{ "--card-accent": active.accent } as CSSProperties}
      >
        <div>
          <p>{active.eyebrow}</p>
          <h3>{active.title}</h3>
        </div>
        <div className="project-orbit__summary">
          <p>{active.description}</p>
          <ul aria-label={`${active.title} technologies`}>
            {active.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <ProjectActions
            projectTitle={active.title}
            videoSrc={active.video}
            siteUrl={active.url}
          />
        </div>
      </article>
    </section>
  );
}
