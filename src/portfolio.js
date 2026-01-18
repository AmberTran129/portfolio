const isHireable = true;

/* Personal Portfolio Configuration */

const greeting = {
  title: "Hi, I'm Anh 👋",
  subtitle:
    "Business-oriented Product Owner & Business Analyst with 6+ years of experience delivering SaaS and ERP platforms across logistics, telecom, and accounting domains.",
  resumeLink: "", // Optional: add Google Drive CV link
};

const socialMediaLinks = {
  linkedin: "https://linkedin.com/in/tran-ngocanh",
  gmail: "anhthingoctran129@gmail.com",
};

const contactInfo = {
  title: "Contact Me ☎️",
  subtitle: "Happy to share Product Manager insights",
  number: "+84 358 270 404",
  email_address: "anhthingoctran129@gmail.com",
};

const skillsSection = {
  title: "Core Skills",
  subTitle:
    "Product Management, Business Analysis, ERP / SaaS, Agile Delivery, and Data Integration",
  skills: [
    "⚡ Product vision, roadmap, backlog grooming & prioritization",
    "⚡ User story creation (INVEST, Gherkin), stakeholder management",
    "⚡ ERP & SaaS domains: CRM, Accounting, Inventory, Logistics, Telecom",
    "⚡ API & integration analysis (REST / GraphQL)",
    "⚡ Agile delivery: Sprint planning, review, retrospective",
    "⚡ UAT leadership, functional training, and client support",
  ],

  softwareSkills: [
    { skillName: "Jira", iconName: "simple-icons:jira" },
    { skillName: "Confluence", iconName: "simple-icons:confluence" },
    { skillName: "PostgreSQL", iconName: "simple-icons:postgresql" },
    { skillName: "MongoDB", iconName: "simple-icons:mongodb" },
    { skillName: "GraphQL", iconName: "simple-icons:graphql" },
    { skillName: "AWS", iconName: "simple-icons:amazonaws" },
    { skillName: "Figma", iconName: "simple-icons:figma" },
  ],
};

const workExperiences = {
  title: "Professional Experience",
  experience: [
    {
      role: "Proxy Product Owner",
      company: "CyberLogitec Vietnam",
      companylogo: "img/icons/common/cyberlogitec.png",
      date: "Mar 2024 – Present",
      desc:
        "Owned product vision and roadmap for Facility Management modules within a logistics ERP ecosystem.",
      descBullets: [
        "Defined product roadmap and user journey mapping across Procurement, Facility, and AP modules",
        "Translated business needs into epics, user stories, and acceptance criteria",
        "Led Agile ceremonies and prioritized backlog aligned with commercial impact",
        "Co-designed UI/UX in Figma and resolved integration blockers, improving efficiency by 30%",
        "Delivered Milestones 1 & 2 with 100% on-time delivery and positive UAT feedback",
      ],
    },
    {
      role: "Business Analyst",
      company: "CyberLogitec Vietnam",
      companylogo: "img/icons/common/cyberlogitec.png",
      date: "Jan 2024 – May 2024",
      desc:
        "Delivered accounting modules for freight-forwarding SaaS systems.",
      descBullets: [
        "Analyzed legacy AR/AP/DC and Bank Reconciliation systems",
        "Gathered accounting requirements and translated into FRDs and user stories",
        "Collaborated with BI teams to deliver analytics dashboards",
        "Led UAT testing, prepared test cases and user guidelines",
      ],
    },
    {
      role: "Senior Business Analyst",
      company: "FPT Software Vietnam",
      companylogo: "img/icons/common/fpt.png",
      date: "Apr 2023 – Mar 2024",
      desc:
        "Worked on NextGen ride-hailing platform for ComfortDelGro.",
      descBullets: [
        "Developed roadmaps for loyalty systems and payment API integrations",
        "Led SIT/UAT across 5 sub-projects (Driver, Pax, OpenAPI, IVR/SMS)",
        "Validated geolocation pipelines for real-time accuracy",
        "Improved onboarding UX contributing to higher post-launch retention",
      ],
    },
    {
      role: "Business Analyst / Product Owner",
      company: "Infodation Vietnam",
      companylogo: "img/icons/common/infodation.png",
      date: "Nov 2020 – Mar 2023",
      desc:
        "Delivered telecom SaaS platforms for European clients.",
      descBullets: [
        "Managed 100+ features across Availability and Address Management modules",
        "Delivered API portals (REST & GraphQL) for Active Operators",
        "Completed penetration testing for ISO certification",
        "Mentored junior BAs, increasing team velocity by 15%",
      ],
    },
  ],
};

const educationInfo = {
  title: "Education",
  schools: [
    {
      schoolName: "Nha Trang University",
      logo: "img/icons/common/ntu.png",
      subHeader: "Bachelor of Management Information Systems (MIS)",
      duration: "2016 – 2020",
      desc:
        "Awarded Merit Scholarships (2018–2020). Strong foundation in systems analysis, databases, and business web design.",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Professional Scrum Product Owner II",
      subtitle: "SCRUM.org",
      date: "Jan 2024",
    },
    {
      title: "Full Business Analysis Study Guide (21 PDUs)",
      subtitle: "IIBA",
      date: "Oct 2023",
    },
    {
      title: "Cybersecurity Foundations",
      subtitle: "Coursera",
      date: "Mar 2023",
    },
    {
      title: "ASEAN Data Science Explorers",
      subtitle: "SAP",
      date: "Aug 2022",
    },
  ],
};

const openSource = {
  githubUserName: "AmberTran129",
  showGithubProfile: "false", // set "true" if you want GitHub section visible
};

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  workExperiences,
  educationInfo,
  certifications,
  contactInfo,
  openSource,
  isHireable,
};


