export const profileData = {
  name: "Jimmy Fleck",
  legalName: "James Fleck",
  headline: "Product Manager & AI Builder",
  subheadline: "Strategic product leader and former IBM consultant with a track record of launching AI-driven solutions and driving digital transformation for large organizations.",
  location: "Denver, CO / Boston, MA",
  email: "jimmyfleck3@gmail.com",
  linkedin: "https://www.linkedin.com/in/james-fleck/",
  github: "https://github.com/jfleck25",
  aboutHeading: "A little about me:",
  aboutBio: [
    "I am a product leader fluent in both business strategy and engineering constraints. I specialize in tackling complex, data-heavy problems to build scalable products that users trust.",
    "By combining enterprise rigor with startup execution, I translate technical complexity into intuitive, high-impact user experiences.",
    "My background spans leading product and GTM at an early-stage AI startup (Gritly), advising government agencies on process automation at IBM Consulting, and holding an MBA with honors from Northwestern's Kellogg School of Management.",
    "When I'm not building software or tinkering with AI tools, you'll find me dialing in espresso shots, exploring regional cuisine, or traveling."
  ],
  educationBadges: [
    { title: "Kellogg MBA", sub: "Finance & Healthcare" },
    { title: "IBM Consulting", sub: "Strategy & Automation" },
    { title: "Gritly", sub: "COO & Product Lead" },
    { title: "W&L Alumni", sub: "BS Cum Laude" }
  ]
};

export const majorProjects = [
  {
    id: "gritly",
    title: "Gritly",
    subtitle: "AI-Enhanced CRM for Veteran Advocates",
    description: "Led product, operations and go-to-market of Gritly, a startup building an AI-enhanced CRM for Veteran's advocates. I conducted customer interviews, mapped user journeys, and worked with engineering and design in building the platform. I also developed GTM strategy and built a sales toolkit for launch.",
    tags: ["Product Leadership", "AI & CRM", "Customer Discovery", "GTM Strategy"],
    link: "https://www.linkedin.com/company/gritlytech/posts/?feedView=all",
    linkLabel: "Company Updates",
    image: "/images/project-gritly.png",
    featured: true
  },
  {
    id: "my-anchor",
    title: "My Anchor",
    subtitle: "Personalized AI Voice News Briefings",
    description: "Delivers 90 minutes of news analysis in under 15 minutes. I designed and built the full product end-to-end: a Flask backend with Gmail OAuth, Gemini-based news analysis, and Google Cloud TTS; a React/Tailwind frontend; and PostgreSQL-backed user settings and shareable briefings. This MVP turns newsletter inboxes into personalized voice briefings, with custom personas, source prioritization, and keyword filtering.",
    tags: ["Full-Stack", "Gemini AI", "Google Cloud TTS", "Flask / React", "PostgreSQL"],
    link: "https://my-anchor-app.onrender.com/",
    linkLabel: "Live Web App",
    image: "/images/project-my-anchor.png",
    featured: true
  },
  {
    id: "va-foia",
    title: "VA Privacy Act / FOIA Platform",
    subtitle: "Enterprise Government AI Redaction & Automation",
    description: "Reduced FOIA/privacy act request backlog from 5 years to 1 month. I conducted voice‑of‑customer interviews and wrote user stories that guided improvements to an AI redaction tool’s processing speed. I coordinated engineering, design, and business analysis teams using agile practices to deliver updates efficiently. Additionally, I conducted workflow timing analysis, establishing performance benchmarks, identifying bottlenecks, and driving customer success. Platform handled automation of FOIA/Privacy Act claims and the interpretation and advanced analysis of Veteran/claimant communications or data via robotic process automation (RPA), optical character recognition (OCR), natural language processing (NLP) and artificial intelligence (AI).",
    tags: ["IBM Consulting", "Enterprise AI", "NLP & OCR", "Agile Product Management", "RPA"],
    link: "https://www.ibm.com/contracts/federal/va-viccs-contract-overview",
    linkLabel: "Contract Overview",
    image: "/images/project-va-foia.png",
    featured: true
  }
];

export const sideProjects = [
  {
    title: "Espresso Dialing Tool",
    year: "2026",
    category: "Specialty Coffee",
    description: "Interactive dialing-in calculator and ratio tracker for dialing espresso variables (dose, yield, grind size, and extraction time).",
    link: "https://github.com/jfleck25/v0-coffee-dialer-website",
    type: "GitHub"
  },
  {
    title: "Law Partner Preference Tracker / Analyzer",
    year: "2026",
    category: "Workflow & Data",
    description: "Analytics tool designed to track, organize, and analyze attorney and partner preferences for matters and assignments.",
    link: "https://github.com/jfleck25/partner-preferences-tracker",
    type: "GitHub"
  },
  {
    title: "Pornstar Martini Tracker",
    year: "2026",
    category: "Lifestyle / Web App",
    description: "Interactive rating and cocktail log app built to catalog, score, and rank variations of the Pornstar Martini.",
    link: "https://pornstarmartini.lovable.app/",
    type: "Web App"
  },
  {
    title: "Billables Calculator",
    year: "2025",
    category: "Productivity & Finance",
    description: "Dedicated calculation suite for legal and consulting professionals to track billable targets, pace, and time conversions.",
    link: "https://billablesapp.com/",
    type: "Live App"
  }
];

export const experienceTimeline = [
  {
    period: "2024 — 2025",
    role: "COO & Product Leader",
    organization: "Gritly",
    type: "Full-Time",
    bullets: [
      "Spearheaded the launch of an AI-driven product for Veteran's advocates.",
      "Managed end-to-end development from initial user research to prototype design.",
      "Responsible for go-to-market strategy, product positioning, and sales toolkit."
    ]
  },
  {
    period: "2023 — 2025",
    role: "MBA Candidate (Finance & Healthcare)",
    organization: "Kellogg School of Management",
    type: "Education",
    bullets: [
      "Certificate in the Business of Healthcare; Major in Finance.",
      "Dean’s List (Fall 2023, Winter 2024, Spring 2024, Spring 2025).",
      "Leadership: Healthcare Club, Economics & Business Society, Charity Auction Ball, Cork N' Screw.",
      "Internship at Integra Global Advisors (Spring 2025): Produced 20-page report on university spinout startup investing and supported 3 VC fund due diligences, interviewing partners and reviewing data rooms."
    ]
  },
  {
    period: "2022 — 2023",
    role: "Technology Consultant (Strategy & AI)",
    organization: "IBM Consulting",
    type: "Consulting",
    bullets: [
      "Advised government clients on optimizing complex business processes through automation and AI.",
      "Led work related to technology management, organizational operations, and financial management.",
      "Leveraged technology for time-saving task management overhauls and budgeting improvements."
    ]
  },
  {
    period: "2021 — 2022",
    role: "Business Analyst",
    organization: "IBM Consulting",
    type: "Consulting",
    bullets: [
      "Facilitated development of AI redaction software by conducting voice-of-customer interviews and translating insights into actionable user stories.",
      "Served as a bridge between engineering, design, and business teams to ensure technical solutions met critical business needs."
    ]
  },
  {
    period: "2020 — 2021",
    role: "Business Analyst",
    organization: "JF Partners",
    type: "Full-Time",
    bullets: [
      "Designed and managed data analytics programs to evaluate thousands of real estate listings, directly informing acquisition targets and property bids.",
      "Developed construction budgets and operational plans to navigate supply chain disruptions during the pandemic."
    ]
  },
  {
    period: "2018",
    role: "Healthcare Policy Intern",
    organization: "Zimmer Biomet",
    type: "Internship",
    bullets: [
      "Analyzed global regulatory and trade policies to provide executive teams with strategic updates on the evolving healthcare landscape.",
      "Compared state-level health data laws to identify opportunities for improving patient access to care."
    ]
  },
  {
    period: "2018",
    role: "Healthcare Policy Intern",
    organization: "The McManus Group",
    type: "Internship",
    bullets: [
      "Advocated for healthcare clients by monitoring drug pipelines and analyzing clinical trial policy developments for the FDA.",
      "Authored policy memos that informed Fortune 500 life sciences companies on critical regulatory shifts in the industry."
    ]
  },
  {
    period: "2020 — Present",
    role: "Community Service & Impact",
    organization: "Community Leadership",
    type: "Leadership",
    bullets: [
      "Recruited IBM employees to deliver groceries for 30 low-income seniors.",
      "Organized charity walk for IBM team resulting in over 500 hours walked to support Wounded Warrior Project.",
      "Created digital auction platform for the 2025 Kellogg Charity Auction Ball."
    ]
  },
  {
    period: "2017 — 2020",
    role: "General Chair",
    organization: "Washington and Lee Mock Convention",
    type: "Leadership",
    bullets: [
      "Directed record-setting $1M budget for the quadrennial political convention.",
      "Secured major national speakers including Trevor Noah.",
      "Provided free admission for low-income students; achieved 98% student body attendance."
    ]
  },
  {
    period: "2016 — 2020",
    role: "BS in Business Administration & Global Politics",
    organization: "Washington and Lee University",
    type: "Education",
    bullets: [
      "Graduated Cum Laude with dual majors in Business Administration and Global Politics.",
      "Inducted into Omicron Delta Kappa (ODK National Leadership Honor Society)."
    ]
  }
];
