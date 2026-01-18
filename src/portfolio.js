/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

/* Splash Screen */
const splashScreen = {
  enabled: false,
  animation: splashAnimation,
  duration: 2000
};

/* Illustration */
const illustration = {
  animated: true
};

/* Greeting */
const greeting = {
  username: "Tran Thi Ngoc Anh",
  title: "Hi, I'm Anh 👋",
  subTitle: emoji(
    "Business-oriented Product Owner & Business Analyst with 6+ years of experience delivering ERP & SaaS platforms across Logistics, Telecom, and Accounting domains."
  ),
  resumeLink: "https://drive.google.com/file/d/1kVezxnoBUwEFfsrU4cPr0XchYGzDNOQX/view?usp=sharing",
  displayGreeting: true
};

/* Social Media */
const socialMediaLinks = {
  github: "",
  linkedin: "https://linkedin.com/in/tran-ngocanh",
  gmail: "anhthingoctran129@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  display: true
};

/* Skills */
const skillsSection = {
  title: "Core Expertise",
  subTitle: "Product Ownership, Business Analysis, ERP/SaaS delivery, and data-informed decision making",
  skills: [
    emoji("⚡ Product vision, roadmap planning, backlog prioritization"),
    emoji("⚡ User stories, acceptance criteria (INVEST, Gherkin), stakeholder management"),
    emoji("⚡ ERP & SaaS domains: Logistics, Telecom, Accounting"),
    emoji("⚡ API-first systems, integrations, and data workflows"),
    emoji("⚡ Agile delivery, UAT leadership, cross-team collaboration"),
    emoji("⚡ A picture is worth a thousand words: Simplifying logic with UML & BPMN workflows")
  ],
  softwareSkills: [
    { skillName: "Jira", fontAwesomeClassname: "fab fa-jira" },
    { skillName: "Confluence", fontAwesomeClassname: "fab fa-confluence" },
    { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "PostgreSQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "GraphQL", fontAwesomeClassname: "fas fa-project-diagram" },
    { skillName: "Figma", fontAwesomeClassname: "fab fa-figma" }
  ],
  display: false
};

/* Education */
const educationInfo = {
  display: false,
  schools: []
};

/* Tech Stack (KEEP EVEN IF UNUSED) */
const techStack = {
  viewSkillBars: false,
  experience: [],
  displayCodersrank: false
};

/* Work Experience */
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Proxy Product Owner",
      company: "CyberLogitec Vietnam",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "Mar 2024 – Present",
      desc:
        "Owned product roadmap and delivery for Facility Management modules in logistics ERP."
    },
    {
      role: "Senior Business Analyst",
      company: "FPT Software Vietnam",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "Apr 2023 – Mar 2024",
      desc:
        "Delivered ride-hailing and payment integration platforms for ComfortDelGro."
    }
  ]
};

/* Open Source */
const openSource = {
  showGithubProfile: "false",
  display: false
};

/* Big Projects */
const bigProjects = {
  title: "",
  subtitle: "",
  projects: [],
  display: false
};

/* Achievements */
const achievementSection = {
  title: emoji("Certifications 🏆"),
  subtitle: "Professional credentials",
  achievementsCards: [],
  display: false
};

/* Blogs */
const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

/* Talks (THIS WAS YOUR ERROR SOURCE) */
const talkSection = {
  title: "Talks",
  subtitle: "",
  talks: [],
  display: false
};

/* Podcast */
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",
  podcast: [],
  display: false
};

/* Resume */
const resumeSection = {
  title: "Resume",
  subtitle: "Download my resume",
  display: false
};

/* Contact */
const contactInfo = {
  title: emoji("Let’s Connect ☎️"),
  subtitle: "Open to discussions around Product Ownership, Product Management, ERP/SaaS strategy, and industry insights.",
  email_address: "anhthingoctran129@gmail.com"
};

/* Twitter */
const twitterDetails = {
  userName: "",
  display: false
};

/* Hire Status */
const isHireable = true;

/* EXPORTS — DO NOT CHANGE */
export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
