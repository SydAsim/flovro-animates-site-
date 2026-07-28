"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import { ProjectActions } from "./ProjectActions";

const projects = [
  {
    title: "MediLink AI",
    eyebrow: "Multi-agent healthcare",
    description:
      "A coordinated patient-triage system that connects intake, clinical intelligence, logistics, and doctor-led decisions.",
    image: "/projects/medilink-placeholder.webp",
    video: "/projects/medilink-ai.mp4",
    url: "https://github.com/SydAsim/Medi-link-AI",
    tags: ["AI agents", "Healthcare", "Automation"],
    accent: "#46d6ff",
  },
  {
    title: "YouTube Clone",
    eyebrow: "Full-stack platform",
    description:
      "A secure video platform with uploads, cloud media, authentication, discovery, and a modern responsive viewing experience.",
    image: "/projects/youtube-placeholder.webp",
    video: "/projects/youtube-clone.mp4",
    url: "https://github.com/SydAsim/Youtube-clone",
    tags: ["React", "Node.js", "MongoDB"],
    accent: "#ff476f",
  },
  {
    title: "Orlando Dental Care",
    eyebrow: "Conversion-focused website",
    description:
      "A polished patient experience that turns service discovery into clear, confident appointment requests.",
    image: "/projects/dental-placeholder.webp",
    video: "/projects/orlando-dental.mp4",
    url: "https://github.com/SydAsim/orlando-dental-care-v2",
    tags: ["UX strategy", "Web design", "Conversion"],
    accent: "#73f0d2",
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
    accent: "#a98cff",
  },
];

export function ProjectsShowcase() {
  const [activeProject, setActiveProject] = useState(0);
  const panelsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const panels = panelsRef.current?.querySelectorAll<HTMLElement>(
      "[data-project-index]",
    );

    if (!panels?.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveProject(
            Number((visible.target as HTMLElement).dataset.projectIndex ?? 0),
          );
        }
      },
      {
        rootMargin: "-24% 0px -46% 0px",
        threshold: [0.15, 0.35, 0.6],
      },
    );

    panels.forEach((panel) => observer.observe(panel));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="projects-showcase" id="projects">
      <div className="projects-showcase__signal" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <header className="projects-showcase__header">
        <p className="projects-showcase__eyebrow">Selected work / 2025—2026</p>
        <h2>
          Systems that move
          <br /> businesses forward.
        </h2>
        <p className="projects-showcase__intro">
          AI, automation, and digital products designed as one connected
          experience.
        </p>
      </header>

      <div className="projects-showcase__scroll">
        <div className="projects-showcase__media" aria-hidden="true">
          <div className="projects-showcase__frame">
            {projects.map((project, index) => (
              <img
                key={project.title}
                src={project.image}
                alt=""
                width="1200"
                height="800"
                loading="lazy"
                decoding="async"
                className={
                  index === activeProject
                    ? "projects-showcase__image is-active"
                    : "projects-showcase__image"
                }
              />
            ))}
            <div className="projects-showcase__frame-meta">
              <span>FLOVRO / PROJECT SIGNAL</span>
              <span>
                {String(activeProject + 1).padStart(2, "0")} /{" "}
                {String(projects.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>

        <div className="projects-showcase__panels" ref={panelsRef}>
          {projects.map((project, index) => (
            <article
              className={
                index === activeProject
                  ? "project-panel is-active"
                  : "project-panel"
              }
              data-project-index={index}
              key={project.title}
              onFocus={() => setActiveProject(index)}
              onMouseEnter={() => setActiveProject(index)}
              style={{ "--project-accent": project.accent } as CSSProperties}
              tabIndex={0}
            >
              <img
                src={project.image}
                alt={`${project.title} placeholder preview`}
                width="1200"
                height="800"
                loading="lazy"
                decoding="async"
                className="project-panel__mobile-image"
              />
              <div className="project-panel__topline">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{project.eyebrow}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul aria-label={`${project.title} technologies`}>
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <ProjectActions
                projectTitle={project.title}
                videoSrc={project.video}
                siteUrl={project.url}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
