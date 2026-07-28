"use client";

import { useEffect } from "react";

const runtimeSrc =
  "/_astro/CommonScripts.astro_astro_type_script_index_0_lang.CZTi642d.js";

export function AnimationRuntime() {
  useEffect(() => {
    const root = document.documentElement;
    const loader = document.getElementById("loader");
    let interfaceReady = false;

    const revealInterface = () => {
      if (interfaceReady) {
        return;
      }

      interfaceReady = true;
      root.classList.add("flovro-interface-ready");
      document.querySelector("header")?.classList.add("show");
      document.querySelector(".hero")?.classList.add("show");
      document.body.style.overflow = "";
      loader?.classList.add("hide");
    };

    const loaderObserver = loader
      ? new MutationObserver(() => {
          if (loader.classList.contains("hide")) {
            revealInterface();
          }
        })
      : null;

    loaderObserver?.observe(loader!, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // The 3D runtime controls the cinematic entrance. This guard only prevents
    // a slow GPU or model load from leaving visitors on an empty blue screen.
    const revealFallback = window.setTimeout(revealInterface, 3800);

    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${runtimeSrc}"]`,
    );

    if (existing) {
      existing.addEventListener("error", revealInterface, { once: true });

      return () => {
        window.clearTimeout(revealFallback);
        loaderObserver?.disconnect();
        existing.removeEventListener("error", revealInterface);
      };
    }

    const script = document.createElement("script");
    script.type = "module";
    script.src = runtimeSrc;
    script.dataset.vectrRuntime = "true";
    script.addEventListener("error", revealInterface, { once: true });
    document.body.appendChild(script);

    return () => {
      window.clearTimeout(revealFallback);
      loaderObserver?.disconnect();
      script.removeEventListener("error", revealInterface);
      script.remove();
    };
  }, []);

  return null;
}
