import { StaticImageData } from "next/image";

import {
  AirwatchImage,
  F1SoftImage,
  KMCImage,
  KrispCallImage,
  LibraryImage,
  SkygazeImage,
  TodoImage,
  VIPSImage,
  VITImage,
  VueBitsImage,
} from "@/assets";

export interface IProjectData {
  LIVE_PREVIEW?: string;
  GITHUB?: string;
  DESCRIPTION: string[];
  NOTE?: string;
  TECH_STACK: string[];
  IMAGE?: StaticImageData;
  VIDEO?: string;
}

export const DATA = {
  HEADER: {
    NAME: "Aanand Rimal",
    AGE: "24",
    PRONOUN: "he/him",
    HEADLINE:
      "Passionate about building high-performance and scalable web applications.",
    RESUME:
      "https://drive.google.com/file/d/1O2m8h5Gz1JK7pu9_LIMbWQ3Ec6IjEVvo/view?usp=sharing",
    EMAIL: "mailto:aanandrimalo@gmail.com",
    GITHUB: "https://github.com/AanandRimal",
    LINKEDIN: "https://www.linkedin.com/in/aanand-rimal/",
  },

  ABOUT_ME: {
    INTRO:
      "Hey! I'm a full-stack developer who loves building efficient, scalable, and intuitive applications. I thrive on solving complex problems, optimizing performance, and creating seamless user experiences.",
    EXPERTISE:
      "My expertise lies in Next.js, TypeScript, Node.js, and Cloud technologies, and I enjoy working across the stack to bring ideas to life.",
  },

  EXPERIENCE: {
    KrispCall: {
      WEBSITE: "https://krispcall.com/",
      POSITION: "Associate Frontend Engineer",
      LOCATION: "Remote, Singapore",
      DURATION: "Aug, 2025 - Present",
      DESCRIPTION: [
        "Developed the frontend for Communication Detail Report (CDR) module using React and GraphQL, implementing dynamic timezone-based rendering, advanced filtering, pagination, export functionality, and role-based access control.",
        "Led frontend development of KrispCall Support Portal, engineering GraphQL-powered Workspace and User Management modules for feature control, number and member management, subscription lifecycle actions, and advanced user administration.",
        "Spearheaded the portal's transition from V2 to V3, implementing the new design system, resolving critical frontend issues, and ensuring seamless integration across modules.",
      ],
      TECH_STACK: [
        "React.js",
        "GraphQL",
        "TypeScript",
        "JavaScript",
        "Material UI",
        "Git & Github",
      ],
      LOGO: KrispCallImage,
    },
    "KrispCall (Founder Associate)": {
      WEBSITE: "https://krispcall.com/",
      POSITION: "Founder Associate",
      LOCATION: "Remote, Singapore",
      DURATION: "Feb, 2024 - Jul, 2025",
      DESCRIPTION: [
        "Designed and implemented unified design system for KrispCall V3 application with customized Ant Design components, reducing frontend development time by 30% and eliminating UI inconsistencies.",
        "Developed Mayahold HRIS System with core HR modules including onboarding, offboarding, employee directory, candidate requisition, and interview pipeline, enabling complete in-house automation of HR workflows.",
        "Led proof-of-concept for AI Voice Agent integration using Retell AI APIs, designing multi-step agent creation flow and knowledge base setup, strengthening KrispCall's competitive positioning in AI-powered communication.",
        "Introduced free tools feature which attracted 400K monthly new viewers and contributed to free toll-free number lookup functionality.",
        "Refactored legacy V2 codebase to transition to V3, improving code maintainability and accelerating feature rollout by 20%.",
      ],
      TECH_STACK: [
        "React.js",
        "Django",
        "Ant Design",
        "Zustand",
        "Supabase",
        "JWT Authentication",
        "Retell AI APIs",
        "TypeScript",
        "JavaScript",
        "Git & Github",
      ],
      LOGO: KrispCallImage,
    },
    "F1Soft International": {
      WEBSITE: "https://f1soft.com/",
      POSITION: "Web Development Intern",
      LOCATION: "Onsite, Nepal",
      DURATION: "Jun, 2023 - Aug, 2023",
      DESCRIPTION: [
        "Developed full-stack task management application using MERN stack, focusing on building RESTful APIs and implementing JWT-based authentication.",
        "Created and managed tasks with categorization and prioritization filters, designing responsive interfaces using Material UI.",
        "Gained hands-on experience in full-stack development, database management, and responsive web design principles.",
      ],
      TECH_STACK: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Material UI",
        "JWT Authentication",
        "JavaScript",
        "Git & Github",
      ],
      LOGO: F1SoftImage,
    },
  },

  PROJECTS: {
    "Summarify-Utube.AI": {
      LIVE_PREVIEW: "https://summarify-utube.ai",
      DESCRIPTION: [
        "Summarify-YT.ai extracts transcripts from YouTube videos, generates multilingual summaries, and enables users to ask questions answered using a Neo4j-powered knowledge graph. It features voice input, customizable summary styles, dark/light mode, and a smooth modern UI."
      ],
      TECH_STACK: [
        "FastAPI",
        "Groq LLM",
        "Neo4j",
        "Python",
        "Tailwind CSS",
        "JavaScript"
      ],
      VIDEO: "/Youtube-Summarizer.mp4",
    },
    "Text2Comic.ai – AI Text-to-Comic Generator": {
      SLUG: "vue-bits",
      LIVE_PREVIEW: "https://vue-bits.dev/",
      GITHUB: "https://github.com/DavidHDev/vue-bits",
      DESCRIPTION: [
        "Text2Comic.ai transforms any plain text into a comic strip automatically.It converts user text into character-dialogue pairs, generates comic-style scenes using AI image models, overlays speech bubbles, and exports the final comic as a multi-panel PDF — all fully automated."
      ],
      TECH_STACK: [
        "Flask",
        "GPT-3.5 Turbo",
        "Stable Diffusion",
        "OpenCV",
        "Pillow",
        "Python"
      ],
      VIDEO: "/Text2Comic.AI.mp4",
    },
    "CareerPilot-AI": {
      LIVE_PREVIEW: "https://btech.library.vips.edu/",
      DESCRIPTION: [
        "CareerPilot AI analyzes uploaded resumes, generates ATS scores, identifies skill gaps, and provides personalized improvements. It also offers AI-generated cover letters, cold emails, interview preparation, and a context-aware career coach powered by Gemini and LangChain."
      ],
      TECH_STACK: [
        "Flask",
        "Next.js 15",
        "React 19",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "Google Gemini 2.5 Flash",
        "LangChain",
        "spaCy",
        "scikit-learn"
      ],
      VIDEO: "/CareerPilotAi Video.mp4",
    },
    "Skygaze India": {
      LIVE_PREVIEW: "https://www.skygazeindia.com/",
      DESCRIPTION: [
        "Integrated the Razorpay payment gateway to enable secure and seamless transactions",
        "Built a high-performance UI using Next.js and TypeScript, optimizing user experience and system efficiency.",
      ],
      TECH_STACK: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Razorpay",
        "Firebase",
        "GCP",
      ],
      IMAGE: SkygazeImage,
    },
    "AirWatch PWA": {
      LIVE_PREVIEW: "https://airwatch-pwa-app.vercel.app/",
      GITHUB: "https://github.com/Utkarsh-Singhal-26/airwatch-pwa-app",
      DESCRIPTION: [
        "Built a fully responsive, offline-capable Progressive Web App (PWA) using Next.js 15 to monitor air quality in real-time.",
        "Integrated Firebase Cloud Messaging for push notifications and AI-powered smart insights using Groq SDK.",
        "Implemented interactive charts with Recharts and Google Maps for detailed visualizations.",
        "Designed a beautiful UI using TailwindCSS, ShadCN UI, and Lucide Icons with strong TypeScript typing and scalable architecture.",
      ],
      TECH_STACK: [
        "Next.js",
        "ShadCN UI",
        "Tailwind CSS",
        "TypeScript",
        "Firebase",
        "Recharts",
        "Google Maps API",
        "Groq SDK",
        "PWA",
      ],
      IMAGE: AirwatchImage,
    },
    "ToDo Extension with Chrome Storage API": {
      LIVE_PREVIEW: "https://todo-extension-webapp.vercel.app/",
      GITHUB: "https://github.com/Utkarsh-Singhal-26/todo-extension",
      DESCRIPTION: [
        "Developed and launched a Chrome extension for task management using Chrome Storage API.",
        "Implemented user-friendly interface to enhance productivity and task tracking.",
        "Designed responsive layout ensuring seamless experience across different screen sizes and browsers.",
        "Integrated message broadcasting for real-time updates and synchronization",
      ],
      NOTE: "Note: The extension is not published on the Chrome Web Store.",
      TECH_STACK: [
        "TypeScript",
        "React.js",
        "Tailwind CSS",
        "Borwser Extension",
        "Chrome Storage API",
        "Message Broadcasting",
      ],
      IMAGE: TodoImage,
    },
  },

  BLOGS: {
    "ORMs & ODMs: Choosing the Right Tool for Your Database Needs": {
      DATE: "March 24, 2025",
      TIME: "4",
      LINK: "https://www.linkedin.com/in/aanand-rimal/",
      DESCRIPTION:
        "Object-Relational Mappers (ORMs) and Object-Document Mappers (ODMs) play a crucial role in modern application development by abstracting database interactions and simplifying data management. Whether you're working with relational databases like PostgreSQL and MySQL or NoSQL databases like MongoDB, selecting the right ORM or ODM can significantly impact performance, scalability, and maintainability.",
    },
   
  },

  EDUCATION: {
    "VIT Vellore": {
      INSTITUTION: "VIT Vellore, India",
      DEGREE: "Bachelor of Technology",
      MAJOR: "Computer Science and Engineering",
      DURATION: "2020 - 2024",
      LOCATION: "Vellore, India",
      LOGO: VITImage,
    },
    "Kathmandu Model College": {
      INSTITUTION: "Kathmandu Model College",
      MAJOR: "High School PCM",
      DURATION: "2017-2019",
      LOCATION: "Nepal",
      LOGO: KMCImage,
    },
  },

  ACHIEVEMENTS: {
    "VIT Full-Ride Scholarship": {
      TITLE: "VIT Full-Ride Scholarship",
      DESCRIPTION: "Awarded prestigious full-ride scholarship from Nepal to pursue B.Tech in Computer Science Engineering at VIT Vellore, one of India's premier technical institutions.",
      YEAR: "2020",
      CATEGORY: "Academic Excellence",
    },
  },

  SKILLS: {
    Languages: ["JavaScript", "TypeScript", "HTML", "CSS", "Node.js"],
    Frameworks: [
      "React.js",
      "Next.js",
      "Vue.js",
      "Astro",
      "Express.js",
      "React Native",
      "Expo",
      "Electron",
      "PWA",
    ],
    Libraries: [
      "React Query",
      "Tailwind CSS",
      "ShadCN UI",
      "Ant Design",
      "Styled Components",
      "Material UI",
    ],
    "Database & Backend": [
      "MongoDB",
      "Redis",
      "Contentful",
      "Firebase",
      "GraphQL",
      "JWT",
      "Auth.js",
      "Clerk",
    ],
    "Cloud & Deployment": [
      "Google Cloud Platform (GCP)",
      "Amazon Web Services (AWS)",
      "Vercel",
    ],
    "Tools & Platforms": [
      "Git",
      "GitHub",
      "Postman",
      "Docker",
      "Visual Studio Code",
      "Prettier",
      "Sentry",
    ],
    "Package Managers & Build Tools": ["NPM", "PNPM", "Yarn", "Bun", "Vite"],
  },
};
