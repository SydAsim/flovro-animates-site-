"use client";

import { useEffect } from "react";

const runtimeSrc =
  "/_astro/CommonScripts.astro_astro_type_script_index_0_lang.CZTi642d.js";

export function AnimationRuntime() {
  useEffect(() => {
    const root = document.documentElement;
    const loader = document.getElementById("loader");
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const params = new URLSearchParams(window.location.search);
    const allowCinematicRuntime = params.has("cinematic");
    const useLiteRuntime =
      !allowCinematicRuntime ||
      reducedMotion ||
      coarsePointer ||
      window.innerWidth < 1024;

    let hideLoaderTimer: number | undefined;
    let runtimeTimer: number | undefined;
    let idleCallbackId: number | undefined;

    const releasePage = () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
      loader?.classList.add("hide");
      hideLoaderTimer = window.setTimeout(() => {
        if (loader) {
          loader.style.display = "none";
        }
      }, 500);
    };

    const activateLiteRuntime = () => {
      root.classList.remove("runtime-loaded");
      root.classList.add("runtime-lite");
      document.querySelector("header")?.classList.add("show");
      document.querySelector(".hero")?.classList.add("show");
      document
        .querySelectorAll<HTMLElement>("#app canvas, body > canvas")
        .forEach((canvas) => {
          canvas.style.display = "none";
        });
      releasePage();
    };

    const handleRuntimeError = (event: ErrorEvent) => {
      const source = `${event.filename ?? ""} ${event.message ?? ""}`;
      if (
        source.includes("/_astro/") ||
        source.includes("WebGPU") ||
        source.includes("VERTEX")
      ) {
        activateLiteRuntime();
      }
    };

    const handleAnchorClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const link = (event.target as Element | null)?.closest<HTMLAnchorElement>(
        'a[href^="#"]',
      );
      const targetId = link?.getAttribute("href")?.slice(1);
      const target = targetId ? document.getElementById(targetId) : null;

      if (!link || !target) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      target.scrollIntoView({
        behavior: reducedMotion ? "auto" : "smooth",
        block: "start",
      });
      window.history.replaceState(null, "", `#${targetId}`);
    };

    document.addEventListener("click", handleAnchorClick, true);
    window.addEventListener("error", handleRuntimeError);

    if (useLiteRuntime) {
      runtimeTimer = window.setTimeout(activateLiteRuntime, 120);
      return () => {
        document.removeEventListener("click", handleAnchorClick, true);
        window.removeEventListener("error", handleRuntimeError);
        window.clearTimeout(runtimeTimer);
        window.clearTimeout(hideLoaderTimer);
        root.classList.remove("runtime-lite");
      };
    }

    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${runtimeSrc}"]`,
    );

    if (existing) {
      root.classList.add("runtime-loaded");
      runtimeTimer = window.setTimeout(releasePage, 900);
      return () => {
        document.removeEventListener("click", handleAnchorClick, true);
        window.removeEventListener("error", handleRuntimeError);
        window.clearTimeout(runtimeTimer);
        window.clearTimeout(hideLoaderTimer);
      };
    }

    const script = document.createElement("script");
    script.type = "module";
    script.src = runtimeSrc;
    script.dataset.vectrRuntime = "true";
    script.addEventListener(
      "load",
      () => {
        root.classList.add("runtime-loaded");
      },
      { once: true },
    );
    script.addEventListener(
      "error",
      () => {
        activateLiteRuntime();
      },
      { once: true },
    );

    const loadRuntime = () => {
      document.body.appendChild(script);
    };

    if ("requestIdleCallback" in window) {
      idleCallbackId = window.requestIdleCallback(loadRuntime, {
        timeout: 650,
      });
    } else {
      runtimeTimer = window.setTimeout(loadRuntime, 200);
    }

    const safetyTimer = window.setTimeout(releasePage, 1800);

    return () => {
      document.removeEventListener("click", handleAnchorClick, true);
      window.removeEventListener("error", handleRuntimeError);
      if (
        idleCallbackId !== undefined &&
        "cancelIdleCallback" in window
      ) {
        window.cancelIdleCallback(idleCallbackId);
      }
      window.clearTimeout(runtimeTimer);
      window.clearTimeout(hideLoaderTimer);
      window.clearTimeout(safetyTimer);
      root.classList.remove("runtime-loaded", "runtime-lite");
      script.remove();
    };
  }, []);

  return null;
}
