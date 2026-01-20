export const chaiData = {
  personal: {
    name: "Charlene Epilepsia",
    email: "clepilepsia@gmail.com",
    linkPortfolio: "portfolio.com",
    linkGithub: "github.com/charmbun",
  },
  education: [
    {
      id: crypto.randomUUID(),
      school: "University of the Philippines",
      degree: "BS in Computer Engineering",
      dateGraduated: "July 2024",
      description: `magna cum laude, DOST-SEI Merit Scholar
Published undergraduate thesis on AI/computer vision and edge computing | CCTV on Steroids: The Design and Implementation of BantAI, a Robbery Prediction System for Edge Devices`,
    },
  ],
  experience: [
    {
      id: crypto.randomUUID(),
      company: "i-Bridge Systems Philippines Inc.",
      position: "Software Engineer",
      description: `Resolved critical authentication failure affecting production Vue.js Chrome Extension by re-architecting refresh token flow and implementing secure token storage paxtterns, eliminating customer-reported access issues
Migrated an Android (Java) application across three major API levels, ensuring full compliance with Google Play requirements and maintaining seamless functionality.
Conducted comprehensive security audits using automated scanning tools and manual code reviews, identifying and remediating 10 critical vulnerabilities in a production Android codebase.
Developed, maintained, and debugged C/C++ based printer driver packages on Linux and macOS to resolve performance issues, enhance printing speed, and ensure compatibility with new OS versions.	
Engineered automation workflows using Bash scripting to streamline driver packaging, reducing manual deployment time and eliminating configuration errors.
Developed comprehensive test coverage across web (Chrome Extension), mobile (Android), and system-level drivers (Chrome OS/Linux), authoring test specifications and performing manual testing to ensure production stability.`,
      dateFrom: "Sept 2024",
      dateTo: "Present",
    },
  ],
  skills: [
    {
      id: crypto.randomUUID(),
      groupName: "Languages",
      items:
        "HTML, CSS, JavaScript, TypeScript, Python, C, C++ Java, PostgreSQL, Bash",
    },
    {
      id: crypto.randomUUID(),
      groupName: "Technologies",
      items: "React, Node.js, Express, Vue.js, Docker",
    },
    {
      id: crypto.randomUUID(),
      groupName: "Tools",
      items:
        "Git, Linux, Figma, Android Studio, Postman, VS Code, Chrome DevTools",
    },
    {
      id: crypto.randomUUID(),
      groupName: "Other",
      items:
        "Responsive Web Design, Test Driven Development, RESTful API Design",
    },
  ],
  projects: [
    {
      id: crypto.randomUUID(),
      title: "Kwenta | Tech Stack",
      link: "github.com/name/project",
      description: `A comprehensive money management app designed specifically for Filipinos. Features expense tracking, budgeting tools, and financial goal setting with an intuitive interface.
A comprehensive money management app designed specifically for Filipinos. Features expense tracking, budgeting tools, and financial goal setting with an intuitive interface.
`,
    },
    {
      id: crypto.randomUUID(),
      title: "Stellr.chat | Tech Stack",
      link: "github.com/name/project",
      description: `A messaging app that transforms your conversations into beautiful star patterns, creating a unique visual universe of your communications with zodiac-based matching.`,
    },
    {
      id: crypto.randomUUID(),
      title: "Portfolio | Tech Stack",
      link: "github.com/name/project",
      description:
        "The more work experience you have, the less relevant outside-work projects tend to become.",
    },
  ],
  certificates: [
    {
      id: crypto.randomUUID(),
      name: "Japanese Language Proficiency Test N4",
      organization: "The Japan Foundation",
      dateIssued: "Feb 2026",
    },
  ],
};

export const sampleData = {
  personal: {
    name: "Jane Doe",
    email: "name@gmail.com",
    linkPortfolio: "portfolio.com",
    linkGithub: "github.com/name",
  },
  education: [
    {
      id: crypto.randomUUID(),
      school: "School",
      degree: "BS in Computer Engineering",
      dateGraduated: "June 2010",
      description: `magna cum laude
DOST-SEI Merit Scholar`,
    },
  ],
  experience: [
    {
      id: crypto.randomUUID(),
      company: "Company",
      position: "Job Title",
      description: `STAR: Situation Task Action Result
STAR: Situation Task Action Result
STAR: Situation Task Action Result`,
      dateFrom: "June 2022",
      dateTo: "Present",
    },
    {
      id: crypto.randomUUID(),
      company: "Company",
      position: "Job Title",
      description: `XYZ: Accomplished X as measured by Y by doing Z
XYZ: Accomplished X as measured by Y by doing Z
XYZ: Accomplished X as measured by Y by doing Z`,
      dateFrom: "Jan 2021",
      dateTo: "May 2022",
    },
    {
      id: crypto.randomUUID(),
      company: "Company",
      position: "Job Title",
      description: `CAR: Challenge Action Result
      CAR: Challenge Action Result
      CAR: Challenge Action Result`,
      dateFrom: "Aug 2014",
      dateTo: "Sept 2020",
    },
    {
      id: crypto.randomUUID(),
      company: "Company",
      position: "Job Title",
      description: `Start each bullet with a strong, past-tense action verb
Each bullet point should be 1–2 lines long and max 1 sentence long.
Don’t let bullets spill onto the next line with only 1–4 words on it, it’s a huge waste of space`,
      dateFrom: "June 2014",
      dateTo: "July 2014",
    },
  ],
  skills: [
    {
      id: crypto.randomUUID(),
      groupName: "CAD",
      items: "Siemens NX, CATIA V5, SolidWorks",
    },
    {
      id: crypto.randomUUID(),
      groupName: "Analysis",
      items: "Thermal Desktop, Abaqus, LS-DYNA, STAR-CCM+",
    },
  ],
  projects: [
    {
      id: crypto.randomUUID(),
      title: "Project Title",
      link: "github.com/name/project",
      description: `The more work experience you have, the less relevant outside-work projects tend to become
If you have something that really stands out, consider listing it here`,
    },
    {
      id: crypto.randomUUID(),
      title: "Project Title",
      link: "project.com",
      description: `Only list real projects, not mandatory school projects or trivial tutorial projects found online
Something that someone uses to solve a problem
Something that has users (can be just you, as long as you use it often) and is actively maintained and not just rotting in a GitHub repo, never to see a PR for the rest of its life `,
    },
  ],
  certificates: [
    {
      id: crypto.randomUUID(),
      name: "Certificate Title",
      organization: "Issuing Organization",
      dateIssued: "Feb 2024",
    },
  ],
};

export const emptyData = {
  personal: {
    name: "",
    email: "",
    linkPortfolio: "",
    linkGithub: "",
  },
  education: [
    {
      id: crypto.randomUUID(),
      school: "",
      degree: "",
      dateGraduated: "",
      description: "",
    },
  ],
  experience: [
    {
      id: crypto.randomUUID(),
      company: "",
      position: "",
      description: "",
      dateFrom: "",
      dateTo: "",
    },
  ],
  skills: [
    {
      id: crypto.randomUUID(),
      groupName: "",
      items: [],
    },
  ],
  projects: [
    {
      id: crypto.randomUUID(),
      title: "",
      link: "",
      description: "",
    },
  ],
  certificates: [
    {
      id: crypto.randomUUID(),
      name: "",
      organization: "",
      dateIssued: "",
    },
  ],
};
