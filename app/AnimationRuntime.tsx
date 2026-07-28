"use client";

import { useEffect } from "react";

const runtimeSrc =
  "/_astro/CommonScripts.astro_astro_type_script_index_0_lang.CZTi642d.js";

export function AnimationRuntime() {
  useEffect(() => {
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${runtimeSrc}"]`,
    );

    if (existing) {
      return;
    }

    const script = document.createElement("script");
    script.type = "module";
    script.src = runtimeSrc;
    script.dataset.vectrRuntime = "true";
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return null;
}
