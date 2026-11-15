/**
 * Todo o conteúdo do site em um só lugar, em PT e EN.
 * Os textos espelham o LinkedIn e o currículo: mantenha os três iguais (datas, cargos, números).
 */
import type { Locale, Profile } from "./types";

const github = "https://github.com/tomsalescamargo";
const linkedin = "https://www.linkedin.com/in/tom-sales-camargo";
const email = "tomsalescama@gmail.com";

const pt: Profile = {
  name: "Tom Sales Soares de Camargo",
  shortName: "Tom Sales",
  role: "Desenvolvedor Backend Java Júnior",
  headline:
    "Construo microsserviços com Java e Spring Boot para sistemas de alta criticidade. Hoje trabalho no idRC, a identidade digital do Registro Civil brasileiro.",
  location: "Florianópolis, SC",
  email,
  github,
  linkedin,
  cv: "/cv/Tom-Sales-Camargo-Backend-Java-Jr.pdf",
  metrics: [
    { value: "~300 mil", label: "autenticações por dia no sistema em que trabalho" },
    { value: "2+ anos", label: "com Java em produção" },
    { value: "~7.600", label: "cartórios onde a identidade digital é válida" },
  ],
  about: [
    "Sou desenvolvedor back-end Java e tenho mais de 2 anos de experiência em produção, construindo microsserviços com Spring Boot, APIs REST e bancos relacionais para sistemas em que cada decisão técnica afeta a segurança e a disponibilidade do serviço.",
    "No idRC, a identidade digital do Registro Civil brasileiro, trabalho com autenticação e segurança de dados em nível nacional: ~300 mil autenticações por dia, integração com o gov.br e validade nos ~7.600 cartórios do país. Antes, passei 2 anos na área de inovação da Avanti, onde arquitetei integrações de e-commerce na AWS.",
    "Participo de todo o ciclo, da implementação e dos testes ao code review, deploy e monitoramento. Uso IA generativa no dia a dia, sempre revisando e testando o código gerado. Curso Sistemas de Informação na UFSC (IAA 9,08/10).",
  ],
  experiences: [
    {
      role: "Desenvolvedor Java Back-end Jr",
      company: "idRC · Operador Nacional do Registro Civil (ON-RCPN)",
      location: "Florianópolis, SC",
      employmentType: "Tempo integral",
      start: "2026-03",
      end: null,
      summary:
        "Back-end da identidade digital do Registro Civil brasileiro, integrada ao gov.br: ~15 microsserviços em Java 17 e Spring Boot 3 em Kubernetes, processando ~300 mil autenticações por dia.",
      highlights: [
        "Atuei no diagnóstico de um incidente crítico em produção, com mais de 100 mil falhas de autenticação via gov.br em um dia, correlacionando logs, métricas e traces até a causa raiz.",
        "Reduzi o tempo médio de resposta de um endpoint de alta volumetria de 600 ms para 180 ms, eliminando consultas N+1 do Hibernate com fetch join e novos índices no PostgreSQL.",
        "Implementei produtores e consumidores Apache Kafka para eventos de auditoria, com retry, idempotência e dead-letter queue (~50 mil eventos por dia).",
        "Desenvolvi fluxos de autenticação com OAuth 2.0, OpenID Connect e JWT (Spring Security, Keycloak), seguindo OWASP e LGPD.",
        "Refatorei um módulo legado com Clean Architecture e SOLID e documentei as APIs com OpenAPI (Swagger).",
        "Elevei a cobertura de testes de 55% para 85% (JUnit 5, Mockito, Testcontainers) e reduzi o pipeline de CI/CD (GitLab CI, SonarQube) de 40 para 12 minutos.",
      ],
      stack: [
        "Java 17",
        "Spring Boot",
        "Spring Security",
        "PostgreSQL",
        "Kafka",
        "Kubernetes",
        "GitLab CI",
      ],
    },
    {
      role: "Desenvolvedor Back-end Java (Estágio)",
      company: "Avanti E-commerce & Digital Marketing",
      location: "Florianópolis, SC",
      employmentType: "Estágio",
      start: "2024-03",
      end: "2026-03",
      summary:
        "Área de inovação (Labs): projetos de e-commerce de ponta a ponta, da arquitetura ao deploy na AWS, com foco em back-end Java, integração de sistemas e cloud.",
      highlights: [
        "Arquitetei e construí do zero a integração entre lojas VTEX e o TikTok Shop (catálogo, pedidos e estoque via APIs REST e webhooks), com microsserviços orientados a eventos e mais de 50 mil SKUs sincronizados.",
        "Implementei a solução na AWS com arquitetura serverless (Lambda, API Gateway, SQS, S3, RDS) e infraestrutura como código em Terraform, reduzindo o custo de infraestrutura em ~30%.",
        "Otimizei consultas SQL e índices no PostgreSQL (Spring Data JPA), reduzindo a rotina de sincronização de 12 para 3 minutos.",
        "Mantive e evoluí um sistema interno de grande porte em Java e Spring Boot, com Docker, JUnit, Mockito, CI/CD no GitHub Actions e code review em time Scrum.",
        "Trabalhei com Kotlin, RabbitMQ, MySQL, Oracle e SQL Server em outros projetos da área e prototipei soluções de IA generativa com Spring AI (LLMs e RAG).",
      ],
      stack: ["Java 17", "Spring Boot", "AWS", "Terraform", "PostgreSQL", "RabbitMQ", "Spring AI"],
    },
  ],
  projects: [
    {
      slug: "psc-challenge",
      name: "PSC Challenge",
      tagline: "Assinatura digital ICP-Brasil com OAuth 2.0 e criptografia pós-quântica",
      description:
        "Back-end que simula um Prestador de Serviço de Confiança (PSC) para assinatura digital no padrão ICP-Brasil (DOC-ICP-17.01): a aplicação solicitante nunca acessa a chave privada do usuário. Começou como desafio técnico, a partir de um esqueleto de código que evoluí até um sistema funcional e aderente à norma.",
      highlights: [
        "OAuth 2.0 (Authorization Code + PKCE) com consentimento explícito do usuário a cada operação e escopos de assinatura única e múltipla.",
        "Assinatura RAW com RSA e pós-quântica (ML-DSA/Dilithium) via BouncyCastle, com certificados X.509.",
        "Camada de segurança desacoplada: interceptors validam Bearer Tokens sem misturar segurança e regra de negócio.",
        "APIs REST em camadas, JPA/Hibernate, PostgreSQL, Jakarta Validation e transações no consentimento e na emissão de token.",
      ],
      stack: [
        "Java 21",
        "Spring Boot 4",
        "OAuth 2.0 + PKCE",
        "BouncyCastle",
        "PostgreSQL",
        "Docker",
      ],
      repo: `${github}/psc-challenge`,
      image: "psc-challenge",
      featured: true,
    },
    {
      slug: "easypay-api",
      name: "EasyPay API",
      tagline: "Carteira digital com transações atômicas e idempotência",
      description:
        "API de carteira digital para usuários comuns e lojistas, com foco em consistência de dados e segurança transacional.",
      highlights: [
        "Transferências atômicas (ACID) com @Transactional e rollback completo em qualquer falha, inclusive na autorização externa.",
        "Idempotência garantida no banco (idempotency_key), evitando transações duplicadas em retries.",
        "Regras financeiras: lojista só recebe, autotransferência e saldo negativo bloqueados, valores em BigDecimal.",
        "Senhas com BCrypt e tratamento global de erros com @RestControllerAdvice (422 para violação de regra de negócio).",
      ],
      stack: [
        "Java 17",
        "Spring Boot 3",
        "Spring Security",
        "Spring Data JPA",
        "PostgreSQL",
        "JUnit 5",
      ],
      repo: `${github}/easypay-api`,
      featured: true,
    },
    {
      slug: "prevenfire-iot",
      name: "PrevenFire IoT",
      tagline: "Microsserviços para monitoramento de temperatura em tempo real",
      description:
        "Prova de conceito de monitoramento e alerta de temperatura para ambientes sensíveis (câmaras frias, data centers), validada com um ESP32 real e projetada para vários dispositivos.",
      highlights: [
        "Control Service e Logging Service em Spring Boot, com regras como limite com tolerância e sinalização de leituras críticas.",
        "Spring Cloud Gateway (WebFlux) como ponto de entrada único para o app e o hardware.",
        "PostgreSQL com database-per-service, orquestrado com Docker Compose, e testes com JUnit 5 e Mockito.",
        "App mobile em React Native (Expo) e firmware em C para o ESP32.",
      ],
      stack: [
        "Java 17",
        "Spring Boot 3",
        "Spring Cloud Gateway",
        "PostgreSQL",
        "Docker Compose",
        "React Native",
      ],
      repo: `${github}/prevenfire-iot`,
      demo: "https://www.youtube.com/shorts/2_A5JjWgkt4",
      context: "Projeto acadêmico (UFSC)",
      featured: true,
    },
    {
      slug: "concurrent-order-engine",
      name: "Concurrent Order Engine",
      tagline:
        "Processamento concorrente de pedidos com thread pool, fila bloqueante e futures próprios",
      description:
        "Simulação de um fluxo de vendas concorrente com três padrões de paralelismo implementados à mão (sem ExecutorService): Producer-Consumer, Thread Pool e Future.",
      highlights: [
        "Thread pool próprio com fila de tarefas e encerramento gracioso (poison pill).",
        "Fila bloqueante thread-safe com semáforos e validações de pedido e pagamento em paralelo com Futures.",
      ],
      stack: ["Java 17", "Concorrência", "Maven"],
      repo: `${github}/concurrent-order-engine`,
      context: "Trabalho em grupo · Programação Paralela e Distribuída (UFSC)",
      featured: false,
    },
  ],
  skills: [
    {
      name: "Back-end",
      items: [
        "Java (17/21)",
        "Kotlin",
        "Spring Boot",
        "Spring Data JPA",
        "Hibernate",
        "APIs REST",
        "Microsserviços",
        "OpenAPI",
        "Maven",
      ],
    },
    {
      name: "Dados e mensageria",
      items: [
        "SQL",
        "PostgreSQL",
        "MySQL",
        "Oracle",
        "SQL Server",
        "Redis",
        "Apache Kafka",
        "RabbitMQ",
        "Amazon SQS",
      ],
    },
    {
      name: "Cloud e DevOps",
      items: [
        "AWS (Lambda, SQS, S3, RDS)",
        "Docker",
        "Kubernetes",
        "Terraform",
        "GitLab CI",
        "GitHub Actions",
        "Git",
        "Linux",
      ],
    },
    {
      name: "Testes e qualidade",
      items: [
        "JUnit 5",
        "Mockito",
        "Testcontainers",
        "SonarQube",
        "Clean Code",
        "SOLID",
        "Clean Architecture",
        "Code Review",
      ],
    },
    {
      name: "Segurança e observabilidade",
      items: [
        "Spring Security",
        "OAuth 2.0",
        "OpenID Connect",
        "JWT",
        "Keycloak",
        "OWASP",
        "Prometheus",
        "Grafana",
      ],
    },
    {
      name: "IA e outros",
      items: [
        "Spring AI (LLMs, RAG)",
        "GitHub Copilot",
        "Claude Code",
        "Scrum",
        "React",
        "TypeScript",
      ],
    },
  ],
  education: [
    {
      degree: "Bacharelado em Sistemas de Informação",
      school: "Universidade Federal de Santa Catarina (UFSC)",
      start: "2024-03",
      end: "2028-07",
      expected: true,
      details:
        "IAA 9,08/10 · Orientação a Objetos, Estruturas de Dados, Bancos de Dados, Engenharia de Software, Computação Distribuída e Programação Paralela.",
    },
  ],
  certifications: [
    {
      name: "AWS Academy Graduate – Cloud Architecting",
      issuer: "Amazon Web Services (AWS)",
      date: "2026-11",
      url: "https://www.credly.com/go/MxWHD6zN",
      note: "Treinamento de 60 h em arquitetura de soluções na AWS",
    },
  ],
  languages: ["Português (nativo)", "Inglês (profissional)"],
};

const en: Profile = {
  ...pt,
  role: "Junior Backend Developer (Java)",
  headline:
    "I build Java and Spring Boot microservices for mission-critical systems. Currently working on idRC, the digital identity of Brazil's Civil Registry.",
  location: "Florianópolis, Brazil",
  cv: "/cv/Tom-Sales-Camargo-Backend-Java-Developer-EN.pdf",
  metrics: [
    { value: "~300K", label: "authentications per day on the system I work on" },
    { value: "2+ years", label: "of Java in production" },
    { value: "~7,600", label: "registry offices where the digital ID is valid" },
  ],
  about: [
    "I'm a Java back-end developer with 2+ years of production experience, building Spring Boot microservices, REST APIs and relational databases for systems where every technical decision affects security and availability.",
    "At idRC, the digital identity of Brazil's Civil Registry, I work on authentication and data security at national scale: ~300K authentications per day, integration with gov.br (Brazil's federal login) and validity in ~7,600 registry offices. Before that, I spent 2 years on Avanti's innovation team, designing e-commerce integrations on AWS.",
    "I work across the whole cycle, from implementation and testing to code review, deployment and monitoring. I use generative AI daily and always review and test the generated code. I study Information Systems at UFSC (GPA 9.08/10).",
  ],
  experiences: [
    {
      ...pt.experiences[0]!,
      role: "Junior Java Back-end Developer",
      company: "idRC · Brazilian National Civil Registry Operator (ON-RCPN)",
      location: "Florianópolis, Brazil",
      employmentType: "Full-time",
      summary:
        "Back-end of the digital identity of Brazil's Civil Registry, integrated with gov.br: ~15 Java 17 / Spring Boot 3 microservices on Kubernetes, handling ~300K authentications per day.",
      highlights: [
        "Helped diagnose a critical production incident with 100K+ gov.br authentication failures in one day, correlating logs, metrics and traces to the root cause.",
        "Cut a high-traffic endpoint's average response time from 600 ms to 180 ms by removing Hibernate N+1 queries with fetch joins and new PostgreSQL indexes.",
        "Implemented Apache Kafka producers and consumers for audit events with retries, idempotency and a dead-letter queue (~50K events per day).",
        "Built authentication flows with OAuth 2.0, OpenID Connect and JWT (Spring Security, Keycloak), following OWASP and LGPD.",
        "Refactored a legacy module with Clean Architecture and SOLID and documented its APIs with OpenAPI (Swagger).",
        "Raised test coverage from 55% to 85% (JUnit 5, Mockito, Testcontainers) and cut the CI/CD pipeline (GitLab CI, SonarQube) from 40 to 12 minutes.",
      ],
    },
    {
      ...pt.experiences[1]!,
      role: "Java Back-end Developer Intern",
      location: "Florianópolis, Brazil",
      employmentType: "Internship",
      summary:
        "Innovation team (Labs): end-to-end e-commerce projects, from architecture to deployment on AWS, focused on Java back-end, systems integration and cloud.",
      highlights: [
        "Designed and built from scratch a VTEX–TikTok Shop integration (catalog, orders and inventory via REST APIs and webhooks) with event-driven microservices and 50K+ SKUs in sync.",
        "Deployed the solution as serverless on AWS (Lambda, API Gateway, SQS, S3, RDS) with Terraform as infrastructure as code, at ~30% lower infrastructure cost.",
        "Optimized SQL queries and PostgreSQL indexes (Spring Data JPA), cutting a sync job from 12 to 3 minutes.",
        "Maintained and evolved a large internal Java/Spring Boot system with Docker, JUnit, Mockito, GitHub Actions CI/CD and code reviews in a Scrum team.",
        "Worked with Kotlin, RabbitMQ, MySQL, Oracle and SQL Server on other projects and prototyped generative AI features with Spring AI (LLMs, RAG).",
      ],
    },
  ],
  projects: [
    {
      ...pt.projects[0]!,
      tagline: "ICP-Brasil digital signatures with OAuth 2.0 and post-quantum cryptography",
      description:
        "Back-end that simulates a Trust Service Provider (PSC) for digital signatures under the ICP-Brasil standard (DOC-ICP-17.01): the requesting application never touches the user's private key. It started as a technical challenge, from a code skeleton that I evolved into a working, standard-compliant system.",
      highlights: [
        "OAuth 2.0 (Authorization Code + PKCE) with explicit per-operation user consent and single- and multi-signature scopes.",
        "RAW signatures with RSA and post-quantum ML-DSA (Dilithium) via BouncyCastle, with X.509 certificates.",
        "Decoupled security layer: interceptors validate Bearer tokens without mixing security and business rules.",
        "Layered REST APIs, JPA/Hibernate, PostgreSQL, Jakarta Validation and transactional boundaries around consent and token issuance.",
      ],
    },
    {
      ...pt.projects[1]!,
      tagline: "Digital wallet with atomic transactions and idempotency",
      description:
        "Digital wallet API for regular users and merchants, focused on data consistency and transactional safety.",
      highlights: [
        "Atomic (ACID) transfers with @Transactional and full rollback on any failure, including the external authorizer.",
        "Database-enforced idempotency (idempotency_key) to prevent duplicate transactions on retries.",
        "Financial rules: merchants only receive, self-transfers and negative balances are blocked, money as BigDecimal.",
        "BCrypt-hashed passwords and global error handling with @RestControllerAdvice (422 for business rule violations).",
      ],
    },
    {
      ...pt.projects[2]!,
      tagline: "Microservices for real-time temperature monitoring",
      description:
        "Proof of concept for temperature monitoring and alerts in sensitive environments (cold rooms, data centers), validated with a real ESP32 and designed for multiple devices.",
      highlights: [
        "Spring Boot Control and Logging services, with rules such as tolerance thresholds and critical-reading flags.",
        "Spring Cloud Gateway (WebFlux) as the single entry point for the app and the hardware.",
        "PostgreSQL with database-per-service, orchestrated with Docker Compose, and JUnit 5/Mockito tests.",
        "React Native (Expo) mobile app and C firmware for the ESP32.",
      ],
      context: "Academic project (UFSC)",
    },
    {
      ...pt.projects[3]!,
      tagline:
        "Concurrent order processing with a hand-written thread pool, blocking queue and futures",
      description:
        "Simulation of a concurrent sales flow with three hand-written parallelism patterns (no ExecutorService): Producer-Consumer, Thread Pool and Future.",
      highlights: [
        "Custom thread pool with a task queue and graceful shutdown (poison pill).",
        "Thread-safe blocking queue built on semaphores, plus parallel order and payment validation with Futures.",
      ],
      stack: ["Java 17", "Concurrency", "Maven"],
      context: "Group assignment · Parallel and Distributed Programming (UFSC)",
    },
  ],
  skills: [
    {
      ...pt.skills[0]!,
      items: pt.skills[0]!.items.map((s) =>
        s === "APIs REST" ? "REST APIs" : s === "Microsserviços" ? "Microservices" : s,
      ),
    },
    { ...pt.skills[1]!, name: "Data & messaging" },
    { ...pt.skills[2]!, name: "Cloud & DevOps" },
    { ...pt.skills[3]!, name: "Testing & quality" },
    { ...pt.skills[4]!, name: "Security & observability" },
    { ...pt.skills[5]!, name: "AI & more" },
  ],
  education: [
    {
      ...pt.education[0]!,
      degree: "B.S. in Information Systems",
      school: "Federal University of Santa Catarina (UFSC)",
      details:
        "GPA 9.08/10 · Object-Oriented Programming, Data Structures, Databases, Software Engineering, Distributed Computing and Parallel Programming.",
    },
  ],
  certifications: [
    { ...pt.certifications[0]!, note: "60-hour training in solution architecture on AWS" },
  ],
  languages: ["Portuguese (native)", "English (professional working proficiency)"],
};

export const profiles: Record<Locale, Profile> = { pt, en };

export function getProfile(locale: Locale): Profile {
  return profiles[locale];
}
