export const projectsData: Project[] = [
  {
    title: "Better Uptime Monitor",
    period: "2025",
    description:
      "Real-time website monitoring platform with intelligent health checks and instant alerting system",
    tech: [
      "Monorepo",
      "Express.js",
      "PostgreSQL",
      "Redis Streams",
      "Next.js",
      "Jest",
    ],
    highlights: [
      "Real-time event processing with Redis Streams",
      "Microservices architecture in monorepo",
      "Comprehensive Jest test coverage",
      "Scalable PostgreSQL data layer",
    ],
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "Excalidraw Clone",
    period: "March 2025",
    description:
      "Collaborative whiteboard where teams create, sketch, and brainstorm together in real-time",
    tech: [
      "Next.js",
      "TypeScript",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "WebSocket",
    ],
    highlights: [
      "Real-time multi-user collaboration",
      "Type-safe backend architecture",
      "Optimized rendering engine",
      "Prisma ORM for efficient queries",
    ],
    gradient: "from-purple-500 to-pink-600",
  },
  {
    title: "College Website",
    period: "April 2025",
    description:
      "Modern educational platform with dynamic content management and seamless student experience",
    tech: ["React", "Tailwind CSS", "Responsive Design"],
    highlights: [
      "Modern glassmorphic UI",
      "Dynamic news and events system",
      "Mobile-first responsive design",
      "Optimized Core Web Vitals",
    ],
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    title: "Second Brain",
    period: "January 2024",
    description:
      "Personal knowledge management system for organizing thoughts, notes, and ideas efficiently",
    tech: ["TypeScript", "Express.js", "React", "PostgreSQL", "Prisma ORM"],
    highlights: [
      "Type-safe full-stack application",
      "Intuitive knowledge organization",
      "Fast search and retrieval",
      "Scalable architecture",
    ],
    gradient: "from-orange-500 to-red-600",
  },
  {
    title: "Stock Price Prediction",
    period: "April 2024",
    description:
      "AI-powered stock market forecasting using deep learning for intelligent investment insights",
    tech: ["Python", "LSTM", "RNN", "Flask", "JavaScript"],
    highlights: [
      "93% prediction accuracy",
      "Advanced neural network optimization",
      "Interactive data visualization",
      "Real-time market analysis",
    ],
    gradient: "from-indigo-500 to-purple-600",
  },
];

export const skillsData: Record<string, string[]> = {
  "Languages & Runtimes": [
    "TypeScript",
    "JavaScript",
    "Python",
    "Go",
    "Rust",
    "C/C++",
    "Node.js",
    "Bun",
  ],
  "Frontend & UI": [
    "React",
    "Next.js",
    "Tailwind CSS",
    "Framer Motion",
    "HTML/CSS",
  ],
  "Backend & APIs": [
    "Express.js",
    "GraphQL",
    "WebSocket",
    "REST APIs",
    "Flask",
  ],
  "Database & Cache": ["PostgreSQL", "Prisma ORM", "Redis", "SQL"],
  "DevOps & Cloud": ["Docker", "AWS", "CI/CD", "Jenkins", "GoCD", "Git"],
  "Testing & Tools": ["Jest", "Jira", "Monorepo", "Webpack"],
};

export const experienceData: Experience[] = [
  {
    role: "Data Science & Analytics Intern",
    company: "Sofcon Pvt. Ltd.",
    period: "Oct 2023 – Nov 2023",
    description:
      "Mastered data preprocessing, feature engineering, and model deployment pipelines",
    tech: ["Python", "SQL", "Power BI"],
    color: "emerald",
  },
  {
    role: "Web Development Intern",
    company: "Oasis Infobyte",
    period: "Jul 2023 - Aug 2023",
    description:
      "Built production-ready web applications including landing pages and interactive calculators",
    tech: ["HTML", "CSS", "JavaScript", "React"],
    color: "blue",
  },
];

export const socialLinksData = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/qayamuddin-khan",
    external: true,
  },
  { name: "GitHub", url: "https://github.com/qayamuddin1k", external: true },
];

export interface Project {
  title: string;
  period: string;
  description: string;
  tech: string[];
  highlights: string[];
  gradient: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  tech: string[];
  color: string;
}
