import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  microsoft,
  wellsfargo,
  imun,
  CryptoXLandscape,
  IcoLandscape,
  TictacLandscape,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Engineer",
    icon: creator,
  },
  {
    title: "Android Developer",
    icon: web,
  },
  {
    title: "React Novice",
    icon: mobile,
  },
  {
    title: "Blockchain Enthusiast",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

// const technologies1 = [
//   {
//     name: "Kotlin",
//     icon: kotlin,
//   },
//   {
//     name: "Jetpack Compose",
//     icon: jetpackCompose,
//   },
//   {
//     name: "Android SDK",
//     icon: androidSdk,
//   },
//   {
//     name: "Coroutines",
//     icon: coroutines,
//   },
//   {
//     name: "MVVM Architecture",
//     icon: mvvm,
//   },
//   {
//     name: "Room Database",
//     icon: roomDatabase,
//   },
//   {
//     name: "Hilt (DI)",
//     icon: hilt,
//   },
//   {
//     name: "Retrofit",
//     icon: retrofit,
//   },
//   {
//     name: "Moshi",
//     icon: moshi,
//   },
//   {
//     name: "Firebase",
//     icon: firebase,
//   },
//   {
//     name: "Git",
//     icon: git,
//   },
//   {
//     name: "Figma",
//     icon: figma,
//   },
//   {
//     name: "Docker",
//     icon: docker,
//   },
// ];


const experiences = [
  {
    title: "Software Engineer",
    company_name: "Wells Fargo",
    icon: wellsfargo,
    iconBg: "#383E56",
    date: "Jul 2022 - Present",
    points: [
      "Developed Vantage Android App from scratch, utilizing Kotlin and Jetpack Compose for a seamless and intuitive UI design.",
      "Integrated APIs using Retrofit and Moshi, ensuring seamless interaction between app and backend services.",
      "Utilized Kotlin Coroutines for handling asynchronous operations, reducing lag and improving user experience.",
      "Implemented MVVM architecture, ensuring separation of concerns and making the codebase more maintainable.",
      "Utilized Room Database for local caching, ensuring data persistence and reducing network calls.",
      "Implemented Hilt for dependency injection, making the codebase more modular and testable.",
      "Utilized Firebase for push notifications, ensuring timely delivery of important updates to users.",
      "Collaborated with designers to implement UI designs in Figma, ensuring pixel-perfect implementation.",
      "Utilized Docker for containerization, ensuring consistent development and deployment environments.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Intern Analyst",
    company_name: "Wells Fargo",
    icon: wellsfargo,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Jul 2022",
    points: [
      "Developed a Python-based web application using Flask  to manage and visualize Splunk logs, improving log analysis efficiency by integrating customizable dashboards",
      "Implemented custom visualizations using Matplotlib, Plotly, and Seaborn libraries, enabling varying data representation and actionable insights for end-users.",
      "Utilized Splunk REST API for data retrieval, ensuring seamless interaction between the web application and Splunk logs.",
      "Collaborated with senior engineers to understand project requirements and follow the SDLC process, ensuring best practices were applied throughout the development cycle.",

      //"Implementing responsive design and ensuring cross-browser compatibility.",
      //"Developing and maintaining web applications using React.js and other related technologies.",
      //"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      //"Implementing responsive design and ensuring cross-browser compatibility.",
      //"Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Campus Ambassador", 
    company_name: "International MUN",
    icon: imun,
    iconBg: "#383E56",
    date: "Jun 2020 - Jul 2020",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Engineering Undergraduate & Masters Virtual Internship",
    company_name: "Microsoft",
    icon: microsoft,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Gained real insights into some of the tasks done by entry-level engineering graduates.",
      "Enhanced communication skills by working with a team of experts.",
      "Learned effective time management across large orgs based on the priority of tasks.",    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Aniket’s passion, hard work, and commitment to his craft make him a standout developer who consistently delivers outstanding results!",
    name: "Abhishek",
    designation: "Software Engineer",
    company: "Wells Fargo",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    testimonial:
      "Reliable, dedicated, and always delivering quality—definitely the kind of developer every team wants for building top-notch mobile apps!",
    name: "Sujit Singh",
    designation: "Senior Engineer",
    company: "Tekion Corp",
    image: "https://randomuser.me/api/portraits/men/39.jpg",
  },
  {
    testimonial:
      "A wizard with Jetpack Compose and Kotlin—his apps are sleek, fast, and deliver a smooth user experience every time!",
    name: "Amit Panghal",
    designation: "SDE-2",
    company: "Amazon",
    image: "https://randomuser.me/api/portraits/men/35.jpg",
  },
];

const projects = [
  {
    name: "CryptoX Tracker",
    description:
      "Android app using Jetpack Compose and Kotlin to manage and track cryptocurrency investments across platforms, wallets and decentralized exchanges.",
    tags: [
      {
        name: "kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "jetpack compose",
        color: "green-text-gradient",
      },
      {
        name: "retrofit",
        color: "pink-text-gradient",
      },
    ],
    image: CryptoXLandscape,
    source_code_link: "https://github.com/iam-aniket/CryptoX-Tracker",
  },
  {
    name: "ICO Blockchain App",
    description:
    "Developed a blockchain-based ICO platform on Ethereum using Solidity and ERC-20 smart contracts for secure token creation, distribution, and fundraising, ensuring transparency and reliability.",
    tags: [
      {
        name: "solidity",
        color: "blue-text-gradient",
      },
      {
        name: "smart contracts",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: IcoLandscape,
    source_code_link: "https://github.com/iam-aniket/Initial-Coin-Offering-Blockchain-dApp",
  },
  {
    name: "Tic Tac Toe Ghost",
    description:
      "Classic TIC TAC TOE with a twist, called Ghost Mode where the players have to remember their selection as well as opponent's selection of tile since the selection disappears after 1 second.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "xml",
        color: "green-text-gradient",
      },
      {
        name: "android",
        color: "pink-text-gradient",
      },
    ],
    image: TictacLandscape,
    source_code_link: "https://github.com/iam-aniket/TIC_TAC_TOE_Ghost",
  },
];

export { services, technologies, experiences, testimonials, projects };
