import {
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaCode,
  FaPaperPlane,
} from "react-icons/fa";

import {
  SiVercel,
  SiNetlify,
  SiRender,
  SiCloudinary,
  SiNpm,
  SiFigma,
  SiGithubactions,
} from "react-icons/si";

export const skills = {
  frontend: [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
  ],

  backend: [
    "Python",
    "Django",
    "REST API",
  ],

  database: [
    "SQL",
    "MySQL",
  ],

  programming: [
    "Python",
    "JavaScript",
  ],
};

export const tools = [
  {
    name: "Git",
    description: "Version Control",
    icon: FaGitAlt,
  },
  {
    name: "GitHub",
    description: "Code Hosting",
    icon: FaGithub,
  },
  {
    name: "VS Code",
    description: "Code Editor",
    icon: FaCode,
  },
  {
    name: "Postman",
    description: "API Testing",
    icon: FaPaperPlane,
  },
  {
    name: "Linux",
    description: "Development Environment",
    icon: FaLinux,
  },
  {
    name: "npm",
    description: "Package Management",
    icon: SiNpm,
  },
  {
    name: "Figma",
    description: "UI Design",
    icon: SiFigma,
  },
  {
    name: "GitHub Actions",
    description: "CI/CD",
    icon: SiGithubactions,
  },
  {
    name: "Vercel",
    description: "Deployment",
    icon: SiVercel,
  },
  {
    name: "Netlify",
    description: "Deployment",
    icon: SiNetlify,
  },
  {
    name: "Render",
    description: "Cloud Deployment",
    icon: SiRender,
  },
  {
    name: "Cloudinary",
    description: "Media Management",
    icon: SiCloudinary,
  },
];