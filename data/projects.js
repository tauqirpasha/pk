const projects = [
  {
    name: "Residential 5bhk",
    description:
      "A 5 bhk residential property located in potmarket,Hyderabad.The total built-up area of the property is 1400sqft.",
    pic: "/ulinks.jpeg",
    tech: ["Autocad", "Sketchup", "V-ray","and","Photoshop"],
    links: [
      {
        label: "Website",
        icon: "link",
        url: "https://drive.google.com/file/d/1uDZJxsRswFNHubb42TIngvkpwpKwZxOJ/view?usp=sharing",
      },
    ],
  },
  {
    name: "Residential 5bhk",
    description:
      "A 5 bhk residential property located in Ghatkesar.The total built-up area of the property is 2300sqft.",
    pic: "/utap.jpg",
    tech: ["Autocad", "Sketchup", "V-ray","and","Photoshop"],
    links: [
      {
        label: "Website",
        icon: "link",
        url: "https://drive.google.com/file/d/1PJvAs8hzgvViVH0P5psvfNp-PBiz9-EL/view?usp=sharing",
      },
    ],
  },
  {
    name: "Residential 4bhk",
    description:
      "A 5 bhk residential property located in Sindhi colony,Hyderabad.The total built-up area of the property is 3500sqft.",
    pic: "/postureai.jpg",
tech: ["Autocad", "Sketchup", "V-ray","and","Photoshop"],
    links: [
      {
        label: "Website",
        icon: "link",
        url: "https://drive.google.com/file/d/1JNl7p_n8AxMupsygKRoySvmqrqsJBeoX/view?usp=sharing",
      },
    ],
  },
  {
    name: "Residential 2bhk",
    description:
      "A 2 bhk residential property located in Sangareddy.The total built-up area of the property is 960sqft.",
    pic: "/2bhk.jpg",
tech: ["Autocad", "Sketchup", "V-ray","and","Photoshop"],
    links: [
      {
        label: "Website",
        icon: "link",
        url: "https://drive.google.com/file/d/1Y8ZkbtQlPz9FrAROqwcyLZ8U2s1_PmLO/view?usp=sharing",
      },
    ],
  },
  {
    name: "Library",
    description:
      "A 2 floor designed for architectural library.The total built-up area of the property is 8600sqft.",
    pic: "/lib.jpg",
tech: ["Autocad", "Sketchup", "V-ray","and","Photoshop"],
    links: [
      {
        label: "Website",
        icon: "link",
        url: "https://drive.google.com/file/d/1EXSsN-ImRwSv0_iqMomlFavc4FOfaJ77/view?usp=sharing",
      },
    ],
  },
];
/*
export const extraProjects = [
  {
    name: "SQL Automarker",
    type: "Research",
    description:
      "Microservices architecture enabling SQL automarking with admin panel",
    tech: ["React", "Node.js", "MongoDB", "Docker"],
    links: [
      {
        label: "Project",
        icon: "link",
        url: "https://www.michaelliut.ca/projects.html",
      },
    ],
  },
  {
    name: "ResumeWords",
    type: "Personal",
    description:
      "A tool that identifies keywords in job postings using ML that will improve your chances of getting a job.",
    tech: ["React", "TypeScript", "Docker"],
    links: [
      {
        label: "Website",
        icon: "link",
        url: "https://resume-words.com/",
      },
      {
        label: "Github",
        icon: "github",
        url: "https://github.com/ShahmeerShahid/ResumeWords",
      },
    ],
  },
  {
    name: "AnonBot",
    type: "Personal",
    description: "Discord bot for anonymous messaging, with 2100 messages sent",
    tech: ["Node.js"],
    links: [
      {
        label: "Github",
        icon: "github",
        url: "https://github.com/white-van/WVAnonBot",
      },
    ],
  },
  {
    name: "Citrade",
    type: "Work",
    description:
      "Citrade is a proof-of-concept for a retail investment brokerage, equipped with an easy-to-use UI and detailed analytics.",
    tech: ["React", "AWS"],
    links: [
      {
        label: "Github",
        icon: "github",
        url: "https://github.com/jcserv/citrade-frontend",
      },
      {
        label: "Website",
        icon: "link",
        url: "https://main.d2mbmzkt6yj28g.amplifyapp.com/",
      },
    ],
  },
  {
    name: "UTM CSSC Website",
    type: "Work",
    description:
      "The CSSC Website is an open space for UTM CS students to ask questions, use academic tools, and get connected within the CS community.",
    tech: ["Vue"],
    links: [
      {
        label: "Github",
        icon: "github",
        url: "https://github.com/utm-cssc/website",
      },
      {
        label: "Website",
        icon: "link",
        url: "https://cssc.utm.utoronto.ca/",
      },
    ],
  },
  {
    name: "CollabCloud",
    type: "School",
    description:
      "Social networking platform allowing users to find collaborators for software projects.",
    tech: ["React", "Node.js", "PostgreSQL"],
    links: [
      {
        label: "Github",
        icon: "github",
        url: "https://github.com/collabcloud/project-collabcloud",
      },
      {
        label: "Demo",
        icon: "youtube",
        url: "https://youtu.be/bPAOhb8r5Co",
      },
    ],
  },
  {
    name: "freeflo.io",
    type: "Hackathon",
    description:
      "Full stack web application enabling collaborative & open source journalism",
    tech: ["React", "Redux", "Next.js"],
    links: [
      {
        label: "Github",
        icon: "github",
        url: "https://github.com/white-van/freeflo.io",
      },
      {
        label: "Demo",
        icon: "youtube",
        url: "https://www.youtube.com/watch?v=pXDF2kgQGtk",
      },
    ],
  },
  {
    name: "Portfolio V1",
    type: "Personal",
    description: "My old personal portfolio, deployed with Heroku",
    tech: ["React", "Express", "MongoDB"],
    links: [
      {
        label: "Github",
        icon: "github",
        url: "https://github.com/jcserv/portfoliov1",
      },
      {
        label: "Website",
        icon: "link",
        url: "https://infinite-inlet-11529.herokuapp.com/",
      },
    ],
  },
  {
    name: "HarMoney",
    type: "Hackathon",
    description: "Mobile application enabling users to split transactions",
    tech: ["React Native", "Node.js"],
    links: [
      {
        label: "Github",
        icon: "github",
        url: "https://github.com/matthuynh/harmoney",
      },
      {
        label: "Demo",
        icon: "youtube",
        url: "https://youtu.be/s13y0c__6u4",
      },
      {
        label: "Devpost",
        icon: "devpost",
        url: "https://devpost.com/software/harmoney-ci42yp",
      },
    ],
  },
  {
    name: "InsurApp",
    type: "Hackathon",
    description: "Micro insurance mobile app using image recognition",
    tech: ["Android Studio", "Flask", "AWS"],
    links: [
      {
        label: "Github",
        icon: "github",
        url: "https://github.com/jcserv/InsurApp",
      },
    ],
  },
  {
    name: "VapeSafe",
    type: "Hackathon",
    description:
      "Mobile + hardware solution allowing users to quit vaping, won 3rd Place",
    tech: ["Android Studio", "Arduino"],
    links: [
      {
        label: "Github",
        icon: "github",
        url: "https://github.com/leviaviv28/VapeSafe-EngHack2019",
      },
      {
        label: "Devpost",
        icon: "devpost",
        url: "https://devpost.com/software/vapesafe/",
      },
    ],
  },
  {
    name: "ETH-Aion Atomic Swap",
    type: "Hackathon",
    description:
      "Atomic swap protocol for ETH & Aion cryptocurrencies, earning Top 6",
    tech: ["Java"],
    links: [
      {
        label: "Github",
        icon: "github",
        url: "https://github.com/jcserv/AtomicSwap",
      },
    ],
  },
];
*/
export default projects;
