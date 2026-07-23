import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the complete Vectr homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Vectr \| The New Standard in Staffing<\/title>/i);
  assert.match(html, /The New Standard/);
  assert.match(html, /Activation, simplified/);
  assert.match(html, /Nuclear-grade[\s\S]{0,200}standards across/);
  assert.match(html, /How we work and how we deliver industrial-grade staffing/);
  assert.match(html, /Staff your outage with fast response/);
  assert.match(html, /<div id="app"><\/div>/i);
  assert.match(html, /AnimationRuntime-[^"]+\.js/);
});

test("ships the 3D runtime and responsive scene assets", async () => {
  const page = await readFile(
    new URL("../app/page.tsx", import.meta.url),
    "utf8",
  );
  const layout = await readFile(
    new URL("../app/layout.tsx", import.meta.url),
    "utf8",
  );

  assert.match(page, /data-taxi-view="home"/);
  assert.match(page, /data-step=\{index \+ 1\}/);
  assert.match(page, /features\.map/);
  assert.match(page, /faqs\.map/);
  assert.match(layout, /apply\.B-bC7KCE\.css/);

  await Promise.all([
    access(new URL("../public/glb/nuclear_staffing_noHumans.glb", import.meta.url)),
    access(
      new URL(
        "../public/glb/nuclear_staffing_noHumans_mobile.glb",
        import.meta.url,
      ),
    ),
    access(new URL("../public/glb/workers.glb", import.meta.url)),
    access(
      new URL(
        "../public/_astro/CommonScripts.astro_astro_type_script_index_0_lang.CZTi642d.js",
        import.meta.url,
      ),
    ),
    access(new URL("../public/og.png", import.meta.url)),
  ]);
});
