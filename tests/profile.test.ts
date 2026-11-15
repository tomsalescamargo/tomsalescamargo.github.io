import { existsSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { profiles } from "../src/data/profile";
import { formatYearMonth, ui } from "../src/i18n/ui";

const { pt, en } = profiles;
const yearMonth = /^\d{4}-(0[1-9]|1[0-2])$/;

describe("profile data", () => {
  it("has the same structure in Portuguese and English", () => {
    expect(en.experiences).toHaveLength(pt.experiences.length);
    expect(en.projects.map((p) => p.slug)).toEqual(pt.projects.map((p) => p.slug));
    expect(en.skills).toHaveLength(pt.skills.length);
    expect(en.facts).toHaveLength(pt.facts.length);
  });

  it("keeps dates, links and highlight counts identical across languages", () => {
    pt.experiences.forEach((job, i) => {
      const other = en.experiences[i]!;
      expect([other.start, other.end]).toEqual([job.start, job.end]);
      expect(other.highlights).toHaveLength(job.highlights.length);
    });
    pt.projects.forEach((project, i) => {
      const other = en.projects[i]!;
      expect([other.repo, other.demo]).toEqual([project.repo, project.demo]);
      expect(other.highlights).toHaveLength(project.highlights.length);
    });
  });

  it("uses valid YYYY-MM dates with end after start and a single current job", () => {
    for (const job of pt.experiences) {
      expect(job.start).toMatch(yearMonth);
      if (job.end) {
        expect(job.end).toMatch(yearMonth);
        expect(job.end >= job.start).toBe(true);
      }
    }
    expect(pt.experiences.filter((job) => job.end === null)).toHaveLength(1);
  });

  it("lists experiences from newest to oldest", () => {
    const starts = pt.experiences.map((job) => job.start);
    expect([...starts].sort().reverse()).toEqual(starts);
  });

  it("links every project to a repository of the owner", () => {
    for (const project of pt.projects) {
      expect(project.repo).toMatch(/^https:\/\/github\.com\/tomsalescamargo\/[\w.-]+$/);
      expect(project.stack.length).toBeGreaterThan(0);
    }
  });

  it("points to resume PDFs that exist in public/", () => {
    for (const profile of [pt, en]) {
      expect(existsSync(`public${profile.cv}`)).toBe(true);
    }
  });
});

describe("i18n", () => {
  it("has the same UI keys in both languages", () => {
    expect(Object.keys(ui.en).sort()).toEqual(Object.keys(ui.pt).sort());
  });

  it("formats year-month per locale", () => {
    expect(formatYearMonth("2026-03", "pt")).toBe("mar. de 2026");
    expect(formatYearMonth("2026-03", "en")).toBe("Mar 2026");
  });
});
