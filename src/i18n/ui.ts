import type { Locale } from "../data/types";

export const locales: Locale[] = ["pt", "en"];

export const htmlLang: Record<Locale, string> = { pt: "pt-BR", en: "en" };
export const ogLocale: Record<Locale, string> = { pt: "pt_BR", en: "en_US" };

const ui = {
  pt: {
    "meta.title": "Tom Sales Soares de Camargo · Desenvolvedor Backend Java",
    "meta.description":
      "Desenvolvedor back-end Java (Spring Boot, microsserviços, PostgreSQL, Kafka, AWS) em Florianópolis. Experiência, projetos e currículo.",
    skip: "Pular para o conteúdo",
    "nav.label": "Navegação principal",
    "nav.about": "Sobre",
    "nav.experience": "Experiência",
    "nav.projects": "Projetos",
    "nav.skills": "Habilidades",
    "nav.contact": "Contato",
    "lang.switch": "English",
    "lang.switchLabel": "Ver o site em inglês",
    "theme.toggle": "Alternar tema claro/escuro",
    "hero.projects": "Ver projetos",
    "hero.cv": "Currículo (PDF)",
    "hero.photoAlt": "Foto de Tom Sales Soares de Camargo",
    "about.title": "Sobre",
    "experience.title": "Experiência",
    "experience.present": "atual",
    "projects.title": "Projetos",
    "projects.subtitle":
      "Código aberto no GitHub, com README, decisões técnicas e instruções para rodar.",
    "projects.code": "Código",
    "projects.demo": "Demonstração",
    "projects.more": "Outros projetos",
    "projects.imageAlt": "Prévia do projeto PSC Challenge",
    "skills.title": "Habilidades",
    "education.title": "Formação",
    "education.expected": "previsão",
    "certifications.title": "Certificados",
    "certifications.view": "Ver credencial",
    "languages.title": "Idiomas",
    "contact.title": "Contato",
    "contact.text":
      "Quer conversar sobre back-end, Java ou algum dos projetos? O caminho mais rápido é o e-mail ou o LinkedIn.",
    "contact.email": "Enviar e-mail",
    "footer.built": "Feito com Astro e publicado no GitHub Pages.",
    "footer.source": "Código-fonte",
    newTab: "(abre em nova aba)",
  },
  en: {
    "meta.title": "Tom Sales Soares de Camargo · Java Backend Developer",
    "meta.description":
      "Java back-end developer (Spring Boot, microservices, PostgreSQL, Kafka, AWS) based in Florianópolis, Brazil. Experience, projects and resume.",
    skip: "Skip to content",
    "nav.label": "Main navigation",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",
    "lang.switch": "Português",
    "lang.switchLabel": "View the site in Portuguese",
    "theme.toggle": "Toggle light/dark theme",
    "hero.projects": "See projects",
    "hero.cv": "Resume (PDF)",
    "hero.photoAlt": "Photo of Tom Sales Soares de Camargo",
    "about.title": "About",
    "experience.title": "Experience",
    "experience.present": "present",
    "projects.title": "Projects",
    "projects.subtitle":
      "Open source on GitHub, with READMEs, technical decisions and setup instructions.",
    "projects.code": "Code",
    "projects.demo": "Demo",
    "projects.more": "Other projects",
    "projects.imageAlt": "Preview of the PSC Challenge project",
    "skills.title": "Skills",
    "education.title": "Education",
    "education.expected": "expected",
    "certifications.title": "Certifications",
    "certifications.view": "View credential",
    "languages.title": "Languages",
    "contact.title": "Contact",
    "contact.text":
      "Want to talk about back-end, Java or any of these projects? Email or LinkedIn is the fastest way to reach me.",
    "contact.email": "Send an email",
    "footer.built": "Built with Astro and deployed on GitHub Pages.",
    "footer.source": "Source code",
    newTab: "(opens in a new tab)",
  },
} as const satisfies Record<Locale, Record<string, string>>;

export type UIKey = keyof (typeof ui)["pt"];

export function useTranslations(locale: Locale) {
  return (key: UIKey): string => ui[locale][key];
}

/** Caminho da página inicial de cada idioma (PT na raiz, EN em /en/). */
export function homePath(locale: Locale): string {
  return locale === "pt" ? "/" : "/en/";
}

/** "2026-03" → "mar. de 2026" / "Mar 2026". */
export function formatYearMonth(value: string, locale: Locale): string {
  const [year, month] = value.split("-").map(Number);
  const date = new Date(Date.UTC(year!, month! - 1, 1));
  return new Intl.DateTimeFormat(htmlLang[locale], {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export { ui };
