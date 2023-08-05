import {
  EducationType,
  ExperienceType,
  FeedbackType,
  GreetingsType,
  ProjectType,
  SEODataType,
  SkillBarsType,
  SkillsSectionType,
  SocialLinksType,
} from "./types/sections";
import emoji from "react-easy-emoji";

export const greetings: GreetingsType = {
  name: "Ahmad Sofanati",
  title: "Hi all, I'm Ahmad",
  description:
    "I am a dedicated and experienced Full Stack web developer with a passion for creating exceptional web applications. With expertise in Next.js, Prisma, tRPC, and Tailwind, I have successfully developed and deployed various web applications.",
  resumeLink:
    "https://docs.google.com/document/d/1_4RIfbyt4FFHW_bNplnoINQr01neTu7XDeeUlT_2O_k/edit?usp=sharing",
};

export const openSource = {
  githubUserName: "1hanzla100",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: "https://1hanzla100.github.io/",
  linkedin: "https://www.linkedin.com/in/1hanzla100/",
  github: "https://github.com/1hanzla100",
  instagram: "https://www.instagram.com/__hanzla100",
  facebook: "https://www.facebook.com/1hanzla100",
  twitter: "https://twitter.com/1hanzla100",
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: {
    title: "Full Stack Development",
    lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
    skills: [
      "⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js",
      "⚡ Building responsive static websites using Next.js",
      "⚡ Building RESTful APIs in Django & Django REST Framework",
    ],
    softwareSkills: [
      {
        skillName: "Nextjs",
        iconifyTag: "vscode-icons:file-type-light-next",
      },
      {
        skillName: "Prisma",
        iconifyTag: "vscode-icons:file-type-light-prisma",
      },
      {
        skillName: "tRPC",
        iconifyTag: "simple-icons:trpc",
      },
      {
        skillName: "HTML-5",
        iconifyTag: "vscode-icons:file-type-html",
      },
      {
        skillName: "Tailwind Css",
        iconifyTag: "vscode-icons:file-type-tailwind",
      },

      {
        skillName: "NPM",
        iconifyTag: "logos:npm-icon",
      },
    ],
  },
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "90", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "70",
  },
  {
    Stack: "Programming",
    progressPercentage: "60",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "SVU University",
    subHeader: "Information Technology Engineering ",
    duration: "September 2020 - April 2025",
    desc: "Participated in the research of XXX and published 3 papers.",
    grade: "Grade A",
    descBullets: [
      "Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Frontend Developer",
    company: "Duseca Software",
    companyLogo: "/img/icons/common/dusecaSoftware.jpg",
    date: "Apr 2022 – Jun 2022",
    desc: "I worked as frontend web developer to design web based admin dashboards for mulitple apps using Django, Bootstrap, jQuery, Chart.js and some other libraries.",
  },
  {
    role: "API Engineer",
    company: "Duseca Software",
    companyLogo: "/img/icons/common/dusecaSoftware.jpg",
    date: "Jan 2022 – Mar 2022",
    desc: "I worked as API Engineer on a Kale App. Kale is a community platform for the creation of social reviews based on verified transactions. I built Fully Optimized and High Performance RESTful APIs using Django, DjangoRESTFramework, PostgresSQL, JWT Authentication, AWS, Integrated Plaid APIs for Fetching Bank Transactions, Integrated Sentry for monitoring Django Server and deployed the API on Heroku Server.",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: "Full Stack Developer",
    company: "Bleed-AI",
    companyLogo: "/img/icons/common/bleedAI.jpg",
    date: "Sept 2021 - Oct 2021",
    desc: "Worked as django web developer to create a website in which I integrated computer vision AI model (built by the team of BleedAI) to process YouTube URLs and show Real Time processing on Website using Django Channels WebSockets , threading for running multiple instances of AI Model, jQuery for UI rendering and deployed it on Heroku server.",
  },
  {
    role: "Backend Developer",
    company: "Wapidu",
    companyLogo: "/img/icons/common/wapidu.jpg",
    date: "Sept 2021",
    desc: "Worked as a Django Developer to integrate Stripe payment gateway in wapidu.com and Created REST APIs using Django REST Framework to integrate Django Stripe backend to Vue.js Frontend and Deployed it on Azure based Docker container registry.",
  },
];

export const projects: ProjectType[] = [
  {
    name: "developer-portfolio",
    desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
    github: "https://github.com/1hanzla100/developer-portfolio",
    link: "https://developer-portfolio-1hanzla100.vercel.app/",
  },
  {
    name: "AtlasMart",
    desc: "With Atlas Mart, it’s easy to find the products with the best price and ship them straight to your door.",
    github: "https://github.com/1hanzla100/Django-React-Marketplace",
  },
  {
    name: "Technota (Forum)",
    desc: "Get hands-on experience in technical skills with Technota",
    github: "https://github.com/1hanzla100/django-react-forum",
  },
  {
    name: "Shopaza (Ecommerce)",
    desc: "Now your reach to all your favorite entertainment and luxury items is just one touch apart",
    github: "https://github.com/1hanzla100/Django-ecommerce",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "John Smith",
    feedback:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
  },
  {
    name: "John Smith",
    feedback:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Hanzla Tauqeer",
  description:
    "A passionate Full Stack Web Developer and Blockchain Developer.",
  author: "Hanzla Tauqeer",
  image: "https://avatars3.githubusercontent.com/u/59178380?v=4",
  url: "https://developer-portfolio-1hanzla100.vercel.app",
  keywords: [
    "Hanzla",
    "Hanzla Tauqeer",
    "@1hanzla100",
    "1hanzla100",
    "Portfolio",
    "Hanzla Portfolio ",
    "Hanzla Tauqeer Portfolio",
  ],
};
