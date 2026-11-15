/**
 * Verificações do HTML gerado (rode depois de `npm run build`).
 * Pega regressões de SEO e acessibilidade que o TypeScript não vê.
 */
import { existsSync, readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const pages = { pt: "dist/index.html", en: "dist/en/index.html" } as const;
const built = existsSync(pages.pt);

describe.skipIf(!built)("built HTML", () => {
  for (const [locale, file] of Object.entries(pages)) {
    const html = built ? readFileSync(file, "utf8") : "";

    describe(locale, () => {
      it("declares the document language", () => {
        expect(html).toMatch(locale === "pt" ? /<html lang="pt-BR"/ : /<html lang="en"/);
      });

      it("has title, description, canonical and Open Graph image", () => {
        expect(html).toMatch(/<title>[^<]{20,70}<\/title>/);
        expect(html).toMatch(/<meta name="description" content="[^"]{70,170}"/);
        expect(html).toMatch(/<link rel="canonical" href="https:\/\/tomsalescamargo\.github\.io\//);
        expect(html).toMatch(/<meta property="og:image" content="https:\/\/[^"]+og-image\.png"/);
      });

      it("has exactly one h1", () => {
        expect(html.match(/<h1[\s>]/g)).toHaveLength(1);
      });

      it("gives every image an alt attribute", () => {
        const images = html.match(/<img\b[^>]*>/g) ?? [];
        expect(images.length).toBeGreaterThan(0);
        for (const img of images) expect(img).toMatch(/\salt="[^"]+"/);
      });

      it("only links to in-page anchors that exist", () => {
        const anchors = [...html.matchAll(/href="#([\w-]+)"/g)].map((m) => m[1]);
        for (const id of anchors) expect(html).toContain(`id="${id}"`);
      });

      it("ships valid JSON-LD", () => {
        const match = html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s);
        expect(match).not.toBeNull();
        const data = JSON.parse(match![1]!);
        expect(data["@type"]).toBe("Person");
        expect(data.sameAs).toContain("https://github.com/tomsalescamargo");
      });
    });
  }
});
