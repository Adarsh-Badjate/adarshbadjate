export const siteConfig = {
  name: "Adarsh Badjate",
  email: "badjate.aadarsh@gmail.com",
  location: "Pune, India",
  availability: "Open to consulting",
  mode: "Remote",
  tagline:
    "Freelance data engineer for teams that need pipelines, automation and AI agents that just work.",
  intro:
    "Hi, I'm Adarsh. I help startups and small teams turn scattered data into reliable pipelines, dashboards and LLM-powered workflows \u2014 without hiring a full data team. Day job: GTM Engineer at Fello; before that, healthcare data engineering at 99.8% reliability.",
  felloUrl: "https://fello.ai",
  ctaHeading: "Have a data project in mind?",
  ctaBody:
    "Tell me what's broken or missing. I'll reply within a day with an honest take on scope, timeline and whether I'm the right person for it.",
};

export const stats = [
  { value: "2+", label: "years in data" },
  { value: "99.8%", label: "pipeline reliability, 7 live apps" },
  { value: "100k", label: "teams resolved & scraped" },
  { value: "6\u00d7", label: "Dataiku certified" },
];

export const services = [
  {
    num: "01",
    title: "Data pipelines & ETL",
    body: "Move data from your apps, APIs and spreadsheets into a warehouse you can trust \u2014 BigQuery, Postgres, Supabase \u2014 with monitoring so you know when something breaks.",
    fit: "reports are built by hand every week.",
  },
  {
    num: "02",
    title: "AI agents & LLM workflows",
    body: "Extraction, enrichment and monitoring agents built on Gemini or OpenAI, wrapped in proper state tracking, retries and validation so they run unattended.",
    fit: "you have text or web data a human currently reads.",
  },
  {
    num: "03",
    title: "Web scraping at scale",
    body: "Resolve, scrape and structure tens of thousands of sources with dedup and resumable pipelines \u2014 clean output, not a folder of HTML.",
    fit: "you need lead or market data nobody sells.",
  },
  {
    num: "04",
    title: "Dashboards & GTM data",
    body: "Looker Studio dashboards, marketing database cleanup, segmentation and lead-quality scoring your sales and marketing team will actually open.",
    fit: "your CRM is full but nobody trusts it.",
  },
];

export const cases = [
  {
    company: "Fello",
    year: "2026",
    metric: "100k",
    title: "Real-estate team scraper pipeline",
    body: "Resolve ~100k team names to websites, scrape them, and extract team members with Gemini. Per-stage state tracking and dedup schemas mean a failed batch resumes instead of restarting.",
    tags: ["Python", "Serper", "Gemini", "Postgres"],
  },
  {
    company: "Avegen",
    year: "2025\u201326",
    metric: "99.8%",
    title: "Pipeline reliability across 7 live healthcare apps",
    body: "GA4/Firebase \u2192 BigQuery pipelines and an S3 \u2192 DynamoDB data platform powering analytics for seven production apps \u2014 built to fail loudly and recover quietly.",
    tags: ["BigQuery", "GA4", "S3", "DynamoDB"],
  },
  {
    company: "v4c.ai",
    year: "2024",
    metric: "90%",
    title: "Alteryx \u2192 Dataiku migration accelerator",
    body: "Teams were hand-porting workflows one by one. I built an accelerator with 10+ reusable components so most of the translation happened automatically. Won a Lamaris Award.",
    tags: ["Dataiku", "Python", "Migration"],
  },
  {
    company: "Fello",
    year: "2026",
    metric: "0 deletes",
    title: "ETL config tool for team data",
    body: "Supabase-backed app with fuzzy search (pg_trgm), Jina Reader scraping in an Edge Function, and a state machine that flags missing agents rather than deleting them.",
    tags: ["Supabase", "pg_trgm", "Edge Functions"],
  },
  {
    company: "Avegen",
    year: "2023\u201324",
    metric: "3 \u2192 1",
    title: "One dashboard for company performance",
    body: "BigQuery, DataMart and Google Analytics lived in separate tabs. I unified them into a live Looker Studio dashboard with scripts that keep it fresh on their own.",
    tags: ["Looker Studio", "SQL", "Pandas"],
  },
  {
    company: "Side project",
    year: "2026",
    metric: "Daily",
    title: "ShipScore \u2014 commit ledger dashboard",
    body: "A GitHub commit-activity dashboard styled like a paper ledger. Built to visualize my streak and make consistent shipping a habit rather than a resolution.",
    tags: ["GitHub API", "Dashboard"],
  },
];

export const agents = [
  {
    kind: "Extraction agent",
    title: "Team-member extraction at 100k scale",
    body: "Gemini reads scraped real-estate sites and returns structured team rosters \u2014 names, roles, contacts \u2014 validated against a schema before anything lands in the database.",
    flow: "Serper \u2192 scrape \u2192 Gemini \u2192 validate \u2192 dedup \u2192 Postgres",
  },
  {
    kind: "Stateful update agent",
    title: "Self-healing team records",
    body: "A state machine re-scrapes teams via Jina Reader, diffs against known agents, and flags disappearances for review instead of silently deleting them.",
    flow: "schedule \u2192 Jina \u2192 diff \u2192 flag \u2192 human review",
  },
  {
    kind: "Monitoring agent",
    title: "Hiring-update watcher",
    body: "Polls team pages on a schedule, diffs content, and notifies when a team posts hiring news \u2014 so outreach happens the week it matters.",
    flow: "poll \u2192 fetch \u2192 diff \u2192 notify",
  },
  {
    kind: "Agentic systems",
    title: "Enterprise agents in Dataiku",
    body: "At v4c.ai, delivered agentic workflows alongside classification and NLP use cases \u2014 LLM steps orchestrated inside governed, auditable pipelines.",
    flow: "trigger \u2192 plan \u2192 tool calls \u2192 audit log",
  },
];

export const roles = [
  {
    dates: "Apr 2026 \u2013 Now",
    title: "GTM Engineer",
    company: "Fello",
    meta: "Remote \u00b7 Marketing database, GTM workflows, lead quality & segmentation",
  },
  {
    dates: "Feb 2025 \u2013 Apr 2026",
    title: "Data Engineer",
    company: "Avegen Health",
    meta: "Pune \u00b7 Analytics platforms for 7 healthcare apps, 99.8% pipeline reliability",
  },
  {
    dates: "Jul 2024 \u2013 Feb 2025",
    title: "Associate Data Scientist",
    company: "v4c.ai",
    meta: "Scottsdale, USA \u00b7 Migration accelerator, Lamaris Award",
  },
  {
    dates: "Dec 2023 \u2013 Jul 2024",
    title: "Data Analyst Intern",
    company: "Avegen Health",
    meta: "GA4 / BigQuery / PostgreSQL pipelines, DataMart automation",
  },
];

export const education = {
  dates: "2020 \u2013 2023",
  school: "MIT World Peace University",
  location: "Pune, Maharashtra",
};

export const stack = [
  {
    group: "Languages & data",
    items: [
      "Python",
      "SQL",
      "Pandas",
      "PostgreSQL",
      "BigQuery",
      "Supabase",
      "DynamoDB",
      "S3",
    ],
  },
  {
    group: "Pipelines & automation",
    items: [
      "Jenkins",
      "Cron",
      "Edge Functions",
      "Linux",
      "Git",
      "Bitbucket",
      "Jira",
    ],
  },
  {
    group: "Analytics & AI",
    items: [
      "Dataiku",
      "Looker Studio",
      "GA4",
      "Firebase",
      "Gemini",
      "NLP",
      "Agentic systems",
    ],
  },
];

export const certs = [
  { name: "Dataiku \u00b7 Generative AI Practitioner", date: "Dec 2024" },
  { name: "Dataiku \u00b7 MLOps Practitioner", date: "Oct 2024" },
  { name: "Dataiku \u00b7 Advanced Designer", date: "Sep 2024" },
  { name: "Dataiku \u00b7 Developer", date: "Sep 2024" },
  { name: "Dataiku \u00b7 ML Practitioner", date: "Aug 2024" },
  { name: "Dataiku \u00b7 Core Designer", date: "Aug 2024" },
  { name: "edX \u00b7 Introduction to Linux", date: "May 2023" },
  { name: "edX \u00b7 Python Basics for Data Science", date: "Oct 2021" },
];
