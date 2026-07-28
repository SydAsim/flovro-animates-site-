"use client";

import { useEffect, useState } from "react";

type ProjectActionsProps = {
  projectTitle: string;
  videoSrc: string;
  siteUrl: string;
};

export function ProjectActions({
  projectTitle,
  videoSrc,
  siteUrl,
}: ProjectActionsProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <span
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          marginTop: "18px",
        }}
      >
        <button
          type="button"
          className="pill-btn pill-btn--dark"
          onClick={() => setIsOpen(true)}
          style={{ border: 0, cursor: "pointer" }}
        >
          <span className="pill-btn-span">Watch video</span>
        </button>
        <a
          href={siteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="pill-btn pill-btn--glass"
          aria-label={`Visit ${projectTitle}`}
        >
          <span className="pill-btn-span">Visit site</span>
        </a>
      </span>

      {isOpen ? (
        <span
          role="dialog"
          aria-modal="true"
          aria-label={`${projectTitle} video`}
          onClick={() => setIsOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 10000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
            background: "rgba(5, 4, 25, 0.92)",
          }}
        >
          <span
            onClick={(event) => event.stopPropagation()}
            style={{
              display: "block",
              width: "min(960px, 100%)",
              padding: "18px",
              borderRadius: "20px",
              background: "#fcfcfc",
              boxShadow: "0 28px 90px rgba(0, 0, 0, 0.45)",
            }}
          >
            <video
              controls
              autoPlay
              playsInline
              preload="metadata"
              aria-label={`${projectTitle} project overview`}
              style={{
                display: "block",
                width: "100%",
                borderRadius: "12px",
                background: "#050419",
              }}
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video element.
            </video>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "16px",
                marginTop: "14px",
                color: "#050419",
              }}
            >
              <strong>{projectTitle}</strong>
              <button
                type="button"
                className="pill-btn pill-btn--dark"
                onClick={() => setIsOpen(false)}
                style={{ border: 0, cursor: "pointer" }}
              >
                <span className="pill-btn-span">Close</span>
              </button>
            </span>
          </span>
        </span>
      ) : null}
    </>
  );
}
