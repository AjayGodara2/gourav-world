const projectsData = [
{
  id: "ai-triage",
  title: "AI Triage Bot",
  status: "completed",
  statusLabel: "COMPLETED",

  description:
    "AI Triage Bot is an AI-powered conversational healthcare assistant designed to analyze symptoms and patient information and provide preliminary, risk-oriented health insights. Instead of requiring users to navigate a traditional form, the system uses a conversational workflow to collect symptoms and relevant patient attributes such as age and gender, then processes that information through an AI/ML analysis pipeline.",

  category: "AI / Healthcare",
  type: "AI / ML Project",
  completedDate: null,

  features: [
    "Conversational symptom collection",
    "Analysis of patient attributes including age and gender",
    "Historical healthcare dataset integration",
    "Symptom-pattern and disease analysis",
    "AI/ML-based health risk assessment",
    "Automated processing of patient information",
    "Chat-based interface for interactive analysis",
  ],

  techStack: [
    "Python",
    "JavaScript",
    "FastAPI",
    "AI / ML",
    "Healthcare Dataset",
    "Google Colab",
    "ngrok",
  ],

  screenshots: ["/assets/projects/ai-triage.png"],

  github: "",
  liveDemo: "",
  documentation: "",
},

{
  id: "memorytrail",
  title: "MemoryTrail",
  status: "completed",
  statusLabel: "COMPLETED",

  description:
    "MemoryTrail is a full-stack travel memory journal built to help users capture and organize the experiences behind their trips. Users can create trips and preserve individual memories using photos, locations, dates, and personal notes, turning scattered travel moments into an organized digital journal.",

  category: "Full Stack / Travel",
  type: "Full Stack Web Application",
  completedDate: null,

  features: [
    "Create and organize travel trips",
    "Store photos, locations, dates, and personal notes",
    "Trip and memory CRUD operations",
    "Image upload functionality",
    "Search and filtering",
    "Pagination for travel data",
    "Trip statistics",
    "Geolocation-based memory handling",
    "JWT-based authentication",
    "bcrypt password hashing",
    "User ownership validation",
  ],

  techStack: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT",
    "REST APIs",
    "bcrypt",
  ],

  screenshots: ["/assets/projects/memorytrail.png"],

  github: "",
  liveDemo: "",
  documentation: "",
},

{
  id: "seek",
  title: "SEEK",
  status: "progress",
  statusLabel: "IN PROGRESS",

  description:
    "SEEK is an ongoing social-impact platform developed as part of the broader Voluntree concept. It is designed to make NGOs and social organizations easier to discover, understand, and connect with. The platform provides organizations with structured profiles, branch management, galleries, verification, and administrative tools, while users can explore a searchable directory of organizations and causes. The current development phase focuses on building the core NGO ecosystem, with future phases planned to expand into volunteering, events, campaigns, donations, reviews, and other community-driven social-impact features.",

  category: "Social Impact / NGO",
  type: "Full-Stack Web Platform",
  completedDate: null,

  features: [
    "NGO and organization registration",
    "Organization onboarding and profile management",
    "Public NGO directory",
    "Search and filtering for organizations",
    "Organization categories and causes",
    "Headquarters and location information",
    "Multiple branch management",
    "Organization image galleries",
    "NGO verification workflow",
    "Verification document submission",
    "Organization dashboard and statistics",
    "Role-based access control",
    "Secure authentication and authorization",
    "Foundation for future volunteering and social-impact features",
  ],

  techStack: [
    "Next.js",
    "TypeScript",
    "MongoDB",
    "Mongoose",
    "Zod",
    "JWT",
    "bcrypt",
    "Tailwind CSS",
    "shadcn/ui",
  ],

  screenshots: ["/assets/projects/seek.png"],
  github: "",
  liveDemo: "",
  documentation: "",
},

{
  id: "gouravs-world",
  title: "Gourav's World",
  status: "progress",
  statusLabel: "IN PROGRESS",

  description:
    "Gourav's World is an interactive 3D portfolio built as an explorable game-like environment. Instead of presenting a traditional portfolio page, the project turns the portfolio into a world where visitors can physically explore different areas and interact with buildings to discover projects, achievements, information, and other sections.",

  category: "Interactive 3D",
  type: "Creative Portfolio",
  completedDate: null,

  features: [
    "Explorable 3D portfolio environment",
    "Third-person character movement",
    "Mouse-controlled camera",
    "Interactive portfolio buildings",
    "Custom Blender walkable paths",
    "Teleportation between disconnected paths",
    "Interactive project panels",
    "Interactive achievements and certificate viewer",
    "Minecraft-inspired environment",
    "Physics-based player system",
  ],

  techStack: [
    "React",
    "Three.js",
    "React Three Fiber",
    "React Three Drei",
    "Rapier Physics",
    "Blender",
  ],

  screenshots: ["/assets/projects/gouravs-world.png"],

  github: "",
  liveDemo: "",
  documentation: "",
},
];

export default projectsData;