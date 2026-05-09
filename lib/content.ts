export interface ServiceItem {
  slug: string
  number: string
  title: string
  short: string
  description: string
  tags: string[]
  image: string
  image2: string
  highlights: string[]
}

export const services: ServiceItem[] = [
  {
    slug: 'web-development',
    number: '01',
    title: 'Web Development',
    short: 'Fast, accessible websites and web apps built to production standards.',
    description:
      'Full-stack web development using React, Next.js, TypeScript and Node.js. From marketing sites to complex data-driven platforms — pixel-perfect, performant and scalable. Every project is built with Core Web Vitals in mind and shipped with automated accessibility checks.',
    tags: ['React', 'Next.js', 'TypeScript', 'Node.js'],
    // VS Code editor with React/JS syntax highlighting
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=1400&q=85',
    // Web dev workspace — multiple screens
    image2: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1400&q=85',
    highlights: [
      'Responsive, accessible UI built with React & Next.js',
      'Server-side rendering (SSR) and static generation (SSG)',
      'REST & GraphQL API development',
      'Third-party integrations and CMS connections',
      'Performance optimisation — 90+ Lighthouse scores',
      'SEO-ready markup and structured data',
      'Full TypeScript codebase with strict mode',
      'Automated CI/CD deployment pipeline included',
    ],
  },
  {
    slug: 'web-applications',
    number: '02',
    title: 'Web Applications & SaaS',
    short: 'Multi-tenant SaaS, dashboards and internal tools that teams actually use.',
    description:
      'End-to-end SaaS product engineering — auth, billing, role-based access, real-time features, and admin dashboards. We take your product from a Figma file to a live, scalable application with onboarding flows and subscription management built in from day one.',
    tags: ['SaaS', 'Dashboards', 'PostgreSQL', 'REST/GraphQL'],
    // App UI dashboard on laptop — dark interface
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1400&q=85',
    // Business analytics charts on screen
    image2: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1400&q=85',
    highlights: [
      'Multi-tenant architecture with complete data isolation',
      'Authentication & authorisation (OAuth, JWT, SSO)',
      'Subscription billing via Stripe',
      'Role-based access control (RBAC)',
      'Real-time features with WebSockets or SSE',
      'Admin dashboard and user management',
      'Audit logging and activity history',
      'Scalable PostgreSQL / Supabase database design',
    ],
  },
  {
    slug: 'software-development',
    number: '03',
    title: 'Custom Software Development',
    short: 'Bespoke software built around your exact business logic.',
    description:
      'Enterprise software, workflow automation, integrations and API platforms. We map your processes into clean, maintainable code — on time and on budget. Whether you are replacing a legacy system or building something net-new, we deliver documented, testable software your team can own.',
    tags: ['Python', 'Go', 'Microservices', 'API'],
    // Green cascading code (terminal / Matrix-style)
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1400&q=85',
    // Developers collaborating at workstations
    image2: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=1400&q=85',
    highlights: [
      'Requirements analysis and technical scoping',
      'Microservice or monolith — right-sized for your scale',
      'Python, Go, Node.js or Java backends',
      'RESTful and GraphQL API design (OpenAPI spec included)',
      'Legacy system migration and data transformation',
      'Workflow and business-process automation',
      'Third-party ERP / CRM / payment integrations',
      'Full documentation and knowledge transfer',
    ],
  },
  {
    slug: 'devops-cloud',
    number: '04',
    title: 'DevOps & Cloud Infrastructure',
    short: 'Infrastructure that ships fast, scales without drama, and never wakes you up at 3 AM.',
    description:
      'AWS and GCP environments built to production standards from the start — containerised workloads, auto-scaling, observability and zero-downtime deployments via CI/CD. We use infrastructure-as-code (Terraform) so your entire environment is version-controlled and reproducible.',
    tags: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
    // Rows of server racks in a data centre
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1400&q=85',
    // Circuit board / hardware macro
    image2: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85',
    highlights: [
      'AWS / GCP architecture design and implementation',
      'Docker containerisation and Kubernetes orchestration',
      'Terraform infrastructure-as-code (IaC)',
      'GitHub Actions / GitLab CI/CD pipelines',
      'Zero-downtime blue/green and canary deployments',
      'Centralised logging, metrics and alerting (Grafana, Datadog)',
      'Auto-scaling groups and cost optimisation',
      'Disaster recovery planning and runbook documentation',
    ],
  },
  {
    slug: 'ai-ml-solutions',
    number: '05',
    title: 'AI & Machine Learning',
    short: 'Practical AI that solves real problems — not a demo that collects dust.',
    description:
      'LLM integrations, RAG pipelines, computer vision, predictive models and ML-powered APIs. We productionise AI features alongside your existing stack — with proper evaluation frameworks, monitoring and fallback handling so the system stays reliable in production.',
    tags: ['LLMs', 'PyTorch', 'RAG', 'OpenAI'],
    // Humanoid robot / AI concept
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1400&q=85',
    // AI / deep learning chip visualisation
    image2: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1400&q=85',
    highlights: [
      'LLM integration (OpenAI, Anthropic, open-source models)',
      'Retrieval-Augmented Generation (RAG) pipelines',
      'Fine-tuning and prompt engineering',
      'Computer vision and image classification',
      'Predictive analytics and anomaly detection',
      'ML model serving via FastAPI / Triton',
      'Model monitoring, drift detection and retraining',
      'Evaluation frameworks and quality benchmarking',
    ],
  },
  {
    slug: 'mobile-apps',
    number: '06',
    title: 'Mobile App Development',
    short: 'Cross-platform mobile apps with native-quality feel.',
    description:
      'React Native and Flutter apps for iOS and Android — shared codebase, native performance. From MVP to App Store launch in weeks, not months. We handle design, development, testing and submission, and set up over-the-air update pipelines so you can ship fixes without waiting for app store review.',
    tags: ['React Native', 'Flutter', 'iOS', 'Android'],
    // iPhone flat lay showing app interface
    image: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&w=1400&q=85',
    // Person using smartphone app outdoors
    image2: 'https://images.unsplash.com/photo-1575909812264-6902b55846ad?auto=format&fit=crop&w=1400&q=85',
    highlights: [
      'React Native or Flutter — we recommend based on your needs',
      'Single codebase for iOS and Android',
      'Native device API access (camera, GPS, biometrics)',
      'Offline-first architecture with local data sync',
      'In-app purchases and subscription management',
      'Push notifications via FCM / APNs',
      'Over-the-air (OTA) update pipeline',
      'App Store and Play Store submission handled',
    ],
  },
  {
    slug: 'ui-ux-design',
    number: '07',
    title: 'UI/UX Design & Prototyping',
    short: 'Design that reduces friction, builds trust and converts.',
    description:
      'User research, information architecture, Figma prototypes and design systems. Every screen is tested with real users before a single line of code is written. We deliver a living design system — not a static file — so your engineering team can build consistently at speed.',
    tags: ['Figma', 'Design Systems', 'Prototyping', 'Research'],
    // Figma UI components on a monitor
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1400&q=85',
    // UX wireframe sketches on whiteboard / paper
    image2: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?auto=format&fit=crop&w=1400&q=85',
    highlights: [
      'User research, interviews and journey mapping',
      'Information architecture and user flows',
      'Low-fidelity wireframes for rapid iteration',
      'High-fidelity Figma prototypes with interactions',
      'Component-based design system (tokens, variants)',
      'Usability testing and iteration cycles',
      'Handoff-ready specs with developer annotations',
      'Accessibility audit to WCAG 2.1 AA standard',
    ],
  },
  {
    slug: 'qa-security',
    number: '08',
    title: 'QA, Testing & Security',
    short: 'Ship with confidence — automated test suites and security audits included.',
    description:
      'End-to-end test automation (Playwright, Cypress), load testing, penetration testing and OWASP-aligned security reviews. Quality and security are not afterthoughts — we embed them at every layer so you go live knowing exactly what is in your codebase.',
    tags: ['Playwright', 'Cypress', 'Pen Testing', 'OWASP'],
    // Cybersecurity — padlock on digital background
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=1400&q=85',
    // Dark terminal — penetration testing / ethical hacking
    image2: 'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?auto=format&fit=crop&w=1400&q=85',
    highlights: [
      'Automated E2E test suite (Playwright or Cypress)',
      'Unit and integration testing with full coverage reports',
      'Load and stress testing to verify scale headroom',
      'OWASP Top 10 penetration testing',
      'Dependency vulnerability scanning (Snyk / Dependabot)',
      'Secure code review and static analysis',
      'GDPR and data-privacy compliance review',
      'Security findings report with remediation guidance',
    ],
  },
  {
    slug: 'maintenance',
    number: '09',
    title: 'Maintenance & Support',
    short:
      'Ongoing monitoring, updates, and incident response so production systems stay stable after launch.',
    description:
      'Structured retainers for production systems: health monitoring, dependency and security patching, performance tuning, backups and restore drills, and documented change windows. We align to your uptime expectations with clear SLAs, ticketing, and regular review calls so technical debt stays visible and manageable.',
    tags: ['SLA', 'Monitoring', 'Patching', 'Runbooks'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=85',
    image2: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=85',
    highlights: [
      'Uptime and error monitoring with alerting (PagerDuty, Opsgenie, email)',
      'Scheduled dependency, runtime, and security patch cycles',
      'Incident triage, root-cause notes, and post-incident summaries',
      'Database backups, retention checks, and restore verification',
      'Performance reviews (Core Web Vitals, API latency, cost)',
      'Runbooks and on-call handover aligned to your team',
      'Small feature fixes and refinements within agreed scope',
      'Monthly or quarterly engineering review reports',
    ],
  },
]

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return services.find((s) => s.slug === slug)
}
