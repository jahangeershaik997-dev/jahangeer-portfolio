export const RESUME_PATH = "/Shaik-Jahangeer-Resume.docx";
export const GITHUB_URL = "https://github.com/jahangeershaik997-dev/jahangeer-portfolio";
export const LINKEDIN_URL = "https://www.linkedin.com/in/jahangeer-shaik-3537422b4";
export const EMAIL = "jahangeershaik997@gmail.com";
export const PHONE_DISPLAY = "+91 90593 14625";
export const PHONE_TEL = "+919059314625";

export const profile = {
  name: "Shaik Jahangeer",
  title: "Senior Microsoft Dynamics 365 CE/CRM Developer",
  tagline:
    "7+ years of experience building, customizing and integrating enterprise Microsoft Dynamics 365 CRM solutions across cloud and on-premise environments.",
  location: "Hyderabad, India",
  company: "Starlite Infotech Limited",
  role: "MS Dynamics CRM Senior Developer",
  period: "Feb 2019 – Present",
  startYear: "2019",
};

export const heroChips = [
  "Dynamics 365",
  "C#",
  ".NET",
  "JavaScript",
  "Azure Functions",
  "Power Automate",
  "WebAPI",
  "Azure DevOps",
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Architecture", href: "#architecture" },
  { label: "Contact", href: "#contact" },
];

export const experienceHighlights = [
  "Design and build enterprise-scale Dynamics 365 CE customizations: entities, forms, views, relationships and security roles.",
  "Develop synchronous and asynchronous C#.NET plugins, custom workflows and JavaScript form logic with Business Rules.",
  "Deliver integrations through WebAPI, OData, Azure Functions and Power Automate, including API and data-processing work.",
  "Own solution management and deployments across environments with Azure DevOps, Power Platform Build Tools and Git-based CI/CD.",
  "Provide production support, troubleshooting and issue resolution, and mentor developers in an Agile/Scrum setting.",
];

export const experienceBadges = [
  "Dynamics 365 CE",
  "D365 On-Premise 9.1",
  "D365 Online",
  "C#.NET",
  "JavaScript",
  "Plugins",
  "Workflows",
  "BPF",
  "WebAPI / OData",
  "Azure Functions",
  "Power Automate",
  "SSRS",
  "Azure DevOps",
  "CI/CD",
];

export type Accent = "azure" | "teal" | "violet" | "amber";

export type Project = {
  id: string;
  name: string;
  context: string;
  teamSize: number;
  environment: string[];
  technology: string[];
  responsibilities: string[];
  accent: Accent;
};

export const projects: Project[] = [
  {
    id: "msci",
    name: "MSCI Budgeting & Forecasting",
    context:
      "Application supporting data migration, customer information management and income statement implementation for products and MSCI.",
    teamSize: 8,
    environment: ["Microsoft CRM 2016", "JavaScript"],
    technology: ["C#.NET Plugins", "Workflows", "JavaScript", "Business Rules", "Security Roles"],
    responsibilities: [
      "Customized standard entities and built relationships between entities.",
      "Configured roles, profiles and security.",
      "Created workflows and workflow-driven business logic.",
      "Developed C#.NET plugins and implemented validation rules.",
      "Implemented JavaScript and Business Rule validations.",
      "Implemented related tasks, time-triggered tasks and email alerts.",
      "Provided end-user support.",
    ],
    accent: "azure",
  },
  {
    id: "hw",
    name: "Health & Wellness (H&W)",
    context:
      "CRM application used in US Walmart pharmacy stores supporting the customer journey through dispensing and counselling, including the end-to-end order flow and reporting.",
    teamSize: 10,
    environment: ["Microsoft Dynamics 365 Cloud", "Visual Studio", "Workflows", "JavaScript"],
    technology: ["C#.NET Plugins", "JavaScript", "Workflows", "API Integration", "Ribbon Workbench", "XrmToolBox"],
    responsibilities: [
      "Analyzed requirements and communicated them to the development team.",
      "Created Office 365 users and assigned security roles.",
      "Created entities, forms, fields, relationships and Business Rules.",
      "Customized Dynamics 365 using OOB capabilities, Ribbon Workbench and XrmToolBox.",
      "Configured Outlook Client integration and duplicate detection rules.",
      "Developed C#.NET plugins, JavaScript and workflows.",
      "Worked on API integration and data processing.",
      "Managed solution export/import/deployment, ribbon customization and business processes.",
    ],
    accent: "teal",
  },
  {
    id: "unilever",
    name: "Unilever OPSO HD 0.1 and PPM",
    context: "Enterprise PPM solution used by users globally for business activities.",
    teamSize: 10,
    environment: ["Microsoft Dynamics 365"],
    technology: ["C#.NET Plugins", "WebAPI", "FetchXML", "SQL Server", "JavaScript", "Ribbon Workbench"],
    responsibilities: [
      "Requirement analysis and client interaction.",
      "Plugin development, deployment and exception handling.",
      "Solutions, workflows, entities, forms, views, dashboards, reports and charts.",
      "JavaScript validations and Business Rules.",
      "SQL queries, stored procedures and SQL functions.",
      "User administration and security roles.",
      "WebAPI, FetchXML, Ribbon Workbench and enable/display rules.",
      "Issue fixing and documentation.",
    ],
    accent: "violet",
  },
  {
    id: "sis",
    name: "SIS K-12 — Product Development",
    context:
      "Global education solution supporting school implementation registration, teacher registration, school information, student attendance, fee summary and school setup.",
    teamSize: 8,
    environment: ["Microsoft Dynamics 365", "C#", "SQL Server", "Plugins"],
    technology: ["C#.NET Plugins", "Power Apps Portal", "API Integration", "Ribbon Workbench", "Site Map", "Unit Testing"],
    responsibilities: [
      "Requirement analysis and client interaction.",
      "Plugin development, deployment and solution import/export.",
      "Dynamics 365 portals and Power Apps Portal.",
      "User administration and security roles.",
      "Ribbon Workbench: custom buttons, custom menu items, Site Map customization and ribbon interaction.",
      "Dashboards, reports and charts.",
      "C#.NET plugins and API integration.",
      "Unit testing, debugging, issue fixing and documentation.",
    ],
    accent: "amber",
  },
  {
    id: "insight-crm-ai",
    name: "InsightCRM-AI: AI Revenue Intelligence Agent",
    context:
      "An AI-powered revenue intelligence platform built on Dynamics 365 CE and Dataverse. A Copilot Studio agent answers questions over CRM data, and Azure OpenAI handles analysis and scoring.",
    teamSize: 1,
    environment: ["Dynamics 365 CE", "Dataverse", "Copilot Studio", "Azure OpenAI"],
    technology: ["Copilot Studio", "Azure OpenAI", "Dynamics 365 CE", "Dataverse", "Azure Service Bus", "C#", "MCP"],
    responsibilities: [
      "Built event-driven lead scoring: a C# plugin sends new and updated leads as JSON to an Azure Service Bus topic for AI scoring",
      "Built document-to-opportunity extraction: uploaded documents are parsed and turned into opportunity records automatically",
      "Set up a Dataverse MCP proxy so the agent can securely read and act on CRM data",
      "Built the Copilot Studio agent as the conversational layer on top of the data",
    ],
    accent: "violet",
  },
];

export type SkillCategory = { title: string; items: string[] };

export const skillCategories: SkillCategory[] = [
  {
    title: "Dynamics 365 / CRM",
    items: [
      "Dynamics 365 CE",
      "D365 Online",
      "D365 On-Premise 9.1",
      "Dynamics CRM 2013 / 2015 / 2016",
      "Plugins",
      "Workflows",
      "Business Process Flows",
      "Business Rules",
      "Custom Status/Stage Transitions",
      "Security Roles",
      "Solution Management",
    ],
  },
  {
    title: "Development",
    items: ["C#.NET", "JavaScript", "XML", "HTML", "CSS", ".NET Framework 4.0/4.2", ".NET Core"],
  },
  {
    title: "Integration",
    items: ["WebAPI", "OData", "API Integrations", "System Integrations", "Data Processing"],
  },
  {
    title: "Azure / Power Platform",
    items: ["Azure Functions", "Power Automate", "Power Apps Portal", "Dynamics 365 Portals"],
  },
  {
    title: "Database / Reporting",
    items: ["SQL Server 2008 R2", "Stored Procedures", "SQL Functions", "SSRS", "FetchXML", "Dashboards & Charts"],
  },
  {
    title: "DevOps",
    items: ["Azure DevOps", "Power Platform Build Tools", "Git", "CI/CD Pipelines"],
  },
  {
    title: "CRM Tools",
    items: ["Ribbon Workbench", "XrmToolBox", "Visual Studio", "Outlook Client Integration"],
  },
  {
    title: "Engineering Practices",
    items: ["Agile/Scrum", "SOLID Principles", "Software Design Patterns", "Unit Testing", "Integration Testing"],
  },
];

export const certification = {
  name: "PL-400: Microsoft Power Platform Developer Associate",
  issuer: "Microsoft Certified",
  image: "/pl400-certificate.jpg",
  url: "https://learn.microsoft.com/en-us/users/shaikjahangeer-5450/credentials/459c7ddee3b5ff2c",
};

export const education = {
  degree: "B.Com General",
  institution: "Siddhartha Degree and PG College",
};
