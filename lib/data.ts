export const LINKS = {
  github: "https://github.com/imadhassan1235",
  linkedin: "https://linkedin.com/in/imad-hassan-1235",
  x: "https://x.com/Imadhassan_1235",
};

export const NAV = [
  ["Home", "#top"], ["About", "#about"], ["Skills", "#skills"], ["Experience", "#experience"],
  ["Projects", "#projects"], ["AI & Automation", "#ai"], ["Education", "#education"], ["Contact", "#contact"],
] as const;

export const SKILLS: { group: string; items: string[]; note?: string }[] = [
  { group: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS"] },
  { group: "Backend", items: ["Node.js", "Express.js", "NestJS", "Python", "REST APIs"] },
  { group: "Databases & ORM", items: ["MongoDB", "MongoDB Atlas", "PostgreSQL", "Supabase", "Firebase", "Prisma"] },
  { group: "Tools", items: ["Git", "GitHub", "Figma", "Canva", "Prismic CMS", "Vercel", "VS Code", "Postman"] },
  { group: "AI (learning)", items: ["Python for AI", "AI model integration", "Prompt engineering", "AI chatbots", "AI agents", "Workflow automation", "ML fundamentals", "Computer Vision basics", "NLP concepts"] },
];

export const EXPERIENCE = [
  { kind: "Team role", title: "Developer & AI Team Member", org: "The Zyrex", when: "Company founded 01 Feb 2026",
    text: "A software and IT services company covering web and software development, AI solutions, automation, digital marketing and IT training. Company projects are team work and are not claimed as solely mine." },
  { kind: "Internship", title: "Web Development Intern", org: "TechLoSet Solutions", when: "4 months, after SMIT web training",
    text: "Practical exposure to Figma, Prismic CMS, web development workflows and a professional development environment." },
];

export const PROJECTS = [
  { name: "School ERP System", status: "Ongoing development", cat: "Full-Stack · SaaS · EdTech",
    text: "A school management platform to digitize educational administration: platform super admin, school creation, principal invitations, teacher and staff management, accountant and receptionist roles, branch-level permissions, role-based access control and school-specific data isolation.",
    stack: ["Next.js", "TypeScript", "NestJS", "PostgreSQL", "Supabase", "Prisma", "Turborepo"] },
  { name: "Taskora Business Manager", status: "Live", cat: "Business workspace",
    text: "A business management workspace built in connection with a hackathon: modern dashboard, task and workflow concept and an AI-powered workspace direction. First built with Python and Streamlit, later rebuilt in Next.js and TypeScript.",
    stack: ["Next.js", "TypeScript", "Python", "Streamlit"], href: "https://taskora-business-manager.vercel.app/workspace", cta: "Open live project" },
  { name: "Timber Business Management ERP", status: "Concept / in development", cat: "Business software",
    text: "A software concept for a timber and wood-door business: purchase, container and transport costs, inventory, production costs, sales, delivery records, and revenue and profit graphs.",
    stack: ["Business workflow", "Inventory", "Profit tracking"] },
  { name: "The Zyrex", status: "Company platform", cat: "Team project",
    text: "The company website for software, AI, automation, marketing, branding and IT training services. Presented as a company project, not as solely my work.",
    stack: ["Web", "AI services", "Automation"], href: "https://thezyrex.com/", cta: "Visit thezyrex.com" },
  { name: "This Portfolio", status: "Live", cat: "Personal",
    text: "My own website and central showcase of my work.", stack: ["Next.js", "TypeScript"], href: "https://imad-portfolio-sigma.vercel.app/", cta: "Open portfolio" },
];

export const LEARNING = ["Python ATM assignment", "PRD and SRS documentation assignment", "AI and Machine Learning exercises", "Real-world software project preparation", "Cisco Networking Academy AI modules"];

export const AI = [
  ["AI agents", "Agents that perform useful tasks."],
  ["AI integrations", "Connecting AI models with web applications and external APIs."],
  ["Business automation", "Automating repetitive business processes with intelligent workflows."],
  ["AI-powered SaaS", "Building AI-powered products and B2B automation solutions."],
] as const;

export const EDUCATION = [
  { title: "SMIT, Artificial Intelligence & Data Science", status: "Ongoing", when: "10 months",
    text: "Python, AI, Machine Learning, Deep Learning concepts, Data Science, Computer Vision, NLP concepts, machine translation and chatbots. Also Cisco Networking Academy AI modules." },
  { title: "SMIT, Web & Mobile App Development", status: "Completed", when: "1 year",
    text: "HTML, CSS, JavaScript, React.js, Next.js, Node.js, Express.js, databases, APIs and full-stack development." },
  { title: "Workers Welfare Higher Secondary School for Boys, Faisalabad", status: "Completed", when: "Intermediate", text: "" },
];
