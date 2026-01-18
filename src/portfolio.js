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
  resumeLink: "",
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
  title: "Core Skills",
  subTitle: "Product Management • Business Analysis • ERP / SaaS",
  skills: [
    emoji("⚡ Product roadmap, backlog grooming & prioritization"),
    emoji("⚡ User stories & acceptance criteria (INVEST, Gherkin)"),
    emoji("⚡ ERP/SaaS: Accounting, CRM, Inventory, Logistics"),
    emoji("⚡ API & integration analysis (REST / GraphQL)"),
    emoji("⚡ Agile delivery & UAT leadership")
  ],
  softwareSkills: [],
  display: true
};

/* Education */
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Nha Trang University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Bachelor of Management Information Systems (MIS)",
      duration: "2016 – 2020",
      desc: "Merit Scholarships (2018–2020). Strong foundation in systems analysis and business web design.",
      descBullets: []
    }
  ]
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
  title: emoji("Contact Me ☎️"),
  subtitle: "Open to Product Owner / Business Analyst opportunities",
  number: "",
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
