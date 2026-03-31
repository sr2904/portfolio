import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  nodejs,
  mongodb,
  git,
  docker,
  carrent,
  jobit,
  threejs,
  edvisingu,
  dsl,
  ds,
  aramark,
  ai,
  wial,  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Development",
    icon: web,
  },
  {
    title: "AI & LLM Integration",
    icon: mobile,
  },
  {
    title: "Cloud & DevOps",
    icon: creator,
  },
  {
    title: "API Design & Development",
    icon: web,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Java",
    icon: threejs,
  },
  {
    name: "Python",
    icon: threejs,
  },
  {
    name: "FastAPI",
    icon: threejs,
  },
  {
    name: "Spring Boot",
    icon: threejs,
  },
  {
    name: "PostgreSQL",
    icon: threejs,
  },
  {
    name: "AWS",
    icon: threejs,
  },
  {
    name: "Kubernetes",
    icon: threejs,
  },
  {
    name: "Claude API",
    icon: threejs,
  },
];

const experiences = [
  {
    title: "AI Chatbot & Automation Engineer",
    company_name: "EdVisingU Learning Academy (ASU Capstone) - Tempe, AZ",
    icon: edvisingu,
    iconBg: "#383E56",
    date: "Aug 2025 - Present",
    points: [
      "Architected and deployed a production-grade AI advisory chatbot using structured prompt engineering and controlled knowledge sources to enforce deterministic recommendation behavior.",
      "Designed and implemented end-to-end automation pipelines (lead capture, validation, and event-triggered workflows) using n8n, replacing legacy Zapier integrations to improve scalability and maintainability.",
    ],
  },
  {
    title: "VR Technology Operator",
    company_name: "Dreamscape Learn - Tempe, AZ",
    icon: dsl,
    iconBg: "#E6DEDD",
    date: "May 2025 - Present",
    points: [
      "Maintained VR pod equipment supporting 5 pods, serving 50+ users per shift, achieving 92% system uptime.",
      "Troubleshot 20+ real-time technical issues per week including hardware malfunctions, software glitches, and connectivity problems, reducing downtime by 25%.",
      "Achieved a 95% guest satisfaction rating by leveraging Unity-based VR control software and hardware diagnostics to guide immersive experiences.",
    ],
  },
  {
    title: "Backend Development Intern",
    company_name: "Data Semantics Technologies - Dubai, UAE",
    icon: ds,
    iconBg: "#383E56",
    date: "Dec 2024 - Jan 2025",
    points: [
      "Designed and optimized RESTful APIs using FastAPI and SQLAlchemy, integrating with MSSQL databases to streamline backend operations for enterprise systems.",
      "Refactored existing codebases by implementing schemas and modular functions, improving maintainability and performance.",
      "Ensured high-quality code through rigorous testing and debugging while collaborating with the team to improve backend efficiency and scalability.",
    ],
  },
  {
    title: "Peer-to-Peer Ambassador",
    company_name: "Aramark (Sun Devil Hospitality) - Tempe, AZ",
    icon: aramark,
    iconBg: "#E6DEDD",
    date: "Sep 2024 - May 2025",
    points: [
      "Engineered a Python automation script to preprocess event attendance and survey data, reducing reporting time by 30%.",
      "Led a cross-functional marketing team to execute 10+ campus events per semester, ensuring timely task completion and cohesive event delivery.",
      "Gathered client feedback via surveys and focus groups; implemented improvements that increased customer satisfaction scores by 20%.",
    ],
  },
];

const testimonials = [];

const projects = [
  {
    name: "AI Tutor Web Application",
    description:
      "Full-stack AI-powered educational platform with Flask backend and dynamic frontend supporting multi-module adaptive learning, real-time quiz evaluation, difficulty adjustment, and GPU vs CPU performance benchmarking.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Flask",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: ai,
    source_code_link: "https://github.com/sr2904/AI-Tutor-Web-Application",
  },
  {
    name: "Help System",
    description:
      "Java-based help system with authentication and encryption to manage user roles (Student, Instructor, Admin). Features structured article retrieval based on skill levels, permissions, and special access groups.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      },
      {
        name: "Encryption",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/sr2904/CSE360HelpSystemProject",
  },
  {
    name: "WIAL Global Portal",
    description:
      "Multi-role web platform for a global non-profit operating across 20+ countries. Features role-based dashboards for 5 user types and AI-powered multilingual coach search enabling cross-language discovery.",
    tags: [
      {
        name: "Full Stack",
        color: "blue-text-gradient",
      },
      {
        name: "AI Search",
        color: "green-text-gradient",
      },
      {
        name: "Multi-role",
        color: "pink-text-gradient",
      },
    ],
    image: wial,
    source_code_link: "https://github.com/2026-ASU-WiCS-Opportunity-Hack/14-quadcoders",
  },
];

export { services, technologies, experiences, testimonials, projects };