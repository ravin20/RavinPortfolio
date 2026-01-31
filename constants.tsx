import React from "react";
import {
  Database,
  Server,
  Cpu,
  Terminal,
  Monitor,
  Globe,
  Camera,
  ShieldCheck,
  Settings,
} from "lucide-react";

export const USER_DATA = {
  name: "Ravin Muhammed",
  age: 23,
  location: "Sulaymaniyah, Iraq",
  email: "ravinmuhamad5@gmail.com",
  phone: "0776 692 2611",
  github: "https://github.com/ravin20",
  bio: "I am an IT professional with deep roots in database systems and backend development. With a background in IT support and server-side technologies, I bridge the gap between technical infrastructure and software excellence. Currently pursuing a Bachelor of Database, ranking in the top 5 of my class.",
  headline:
    "Crafting robust backend architectures & intelligent database solutions.",
};

export const PROJECTS = [
  {
    title: "Database Management System",
    description:
      "High-performance database structuring and optimization tool developed during my academic years focusing on relational efficiency and Oracle optimization.",
    tags: ["SQL", "Oracle", "Database"],
    link: "https://github.com/ravin20",
    featured: true,
  },
  {
    title: "Laravel Backend Systems",
    description:
      "Scalable API architectures built with Laravel featuring secure authentication and complex business logic.",
    tags: ["PHP", "Laravel", "MySQL"],
    link: "https://github.com/ravin20",
    featured: false,
  },
  {
    title: "IT Support Infrastructure",
    description:
      "Enterprise-grade documentation and network configurations for managing office systems and troubleshooting distributed networks.",
    tags: ["CCTV", "Linux", "Support"],
    link: "https://github.com/ravin20",
    featured: false,
  },
  {
    title: "Data Integrity Suite",
    description:
      "Specialized tools for ensuring data precision and automated validation within SQL environments.",
    tags: ["SQL", "Data Security"],
    link: "https://github.com/ravin20",
    featured: false,
  },
];

export const SKILLS = [
  {
    name: "Database Design",
    icon: <Database className="w-5 h-5" />,
    category: "database",
  },
  {
    name: "Oracle & SQL",
    icon: <Terminal className="w-5 h-5" />,
    category: "database",
  },
  {
    name: "Laravel",
    icon: <Server className="w-5 h-5" />,
    category: "backend",
  },
  {
    name: "PHP Development",
    icon: <Globe className="w-5 h-5" />,
    category: "backend",
  },
  {
    name: "System Admin",
    icon: <Monitor className="w-5 h-5" />,
    category: "os",
  },
  {
    name: "Linux Systems",
    icon: <Settings className="w-5 h-5" />,
    category: "os",
  },
  { name: "IT Support", icon: <Cpu className="w-5 h-5" />, category: "tools" },
  { name: "CCTV", icon: <Camera className="w-5 h-5" />, category: "tools" },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Database",
    institution: "Sulaymaniyah Polytechnic University",
    period: "2021 — 2025",
    rank: "Class Rank: 5th",
  },
];

export const EXPERIENCE = [
  {
    role: "Data Entry Specialist",
    company: "Sazgar Company",
    period: "2022 — 2023",
    description:
      "Managed large datasets with high precision, ensuring data integrity and contributing to operational efficiency.",
  },
  {
    role: "IT Support Intern",
    company: "Power Petrol",
    period: "Summer Internship",
    description:
      "Assisted in troubleshooting hardware/software issues and managing network connectivity across company branches.",
  },
];
