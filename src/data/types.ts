export type Locale = "pt" | "en";

/** Ano e mês no formato ISO "AAAA-MM". */
export type YearMonth = `${number}-${string}`;

export interface Experience {
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  employmentType: string;
  start: YearMonth;
  /** `null` = emprego atual. */
  end: YearMonth | null;
  summary: string;
  highlights: string[];
  stack: string[];
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  repo: string;
  demo?: string;
  /** Caminho em src/assets (importado pelo componente). */
  image?: "psc-challenge";
  context?: string;
  featured: boolean;
}

export interface SkillGroup {
  name: string;
  items: string[];
}

export interface Education {
  degree: string;
  school: string;
  start: YearMonth;
  end: YearMonth;
  expected: boolean;
  details: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: YearMonth;
  url: string;
  note?: string;
}

/** Fato curto sobre o Tom exibido no topo da página (ex.: "Hoje" → "Back-end no idRC"). */
export interface Fact {
  label: string;
  value: string;
}

export interface Profile {
  name: string;
  shortName: string;
  role: string;
  headline: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  cv: string;
  facts: Fact[];
  about: string[];
  experiences: Experience[];
  projects: Project[];
  skills: SkillGroup[];
  education: Education[];
  certifications: Certification[];
  languages: string[];
}
