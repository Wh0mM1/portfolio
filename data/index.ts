import { url } from "inspector";

export const dbs = [
  "/mongo.svg",
  "/postgresql.svg",
  "/mysql.svg",
  "/firebase.svg",
];

export const langs = [
  "/lang/cpp.svg",
  "/lang/java.svg",
  "/lang/rust.svg",
  "/lang/dart.svg",
  "/lang/python.svg",
  "/js.svg",
  "/ts.svg",
  "/lang/csharp.svg",
  "/lang/html.svg",
  "/lang/matlab.svg",
];

export const skills = [
  {
    title: "Spring-Boot",
    imageSrc: "/springBoot.svg",
  },
  {
    title: "React",
    imageSrc: "/re.svg",
  },
  {
    title: "Next",
    imageSrc: "/next.svg",
  },
  {
    title: "Flutter",
    imageSrc: "/flutter.svg",
  },

  {
    title: "Docker",
    imageSrc: "/dock.svg",
  },
  {
    title: "Kubernetes",
    imageSrc: "/k8s.svg",
  },
  {
    title: "Jenkins",
    imageSrc: "/jenkins.svg",
  },
  {
    title: "AWS",
    imageSrc: "https://skillicons.dev/icons?i=aws",
  },
  {
    title: "GCP",
    imageSrc: "https://skillicons.dev/icons?i=gcp",
  },
  {
    title: "Node",
    imageSrc: "https://skillicons.dev/icons?i=nodejs",
  },

  {
    title: "Postman",
    imageSrc: "https://skillicons.dev/icons?i=postman",
  },

  {
    title: "Kafka",
    imageSrc: "https://skillicons.dev/icons?i=kafka",
  },

  {
    title: "Redis",
    imageSrc: "/redis.svg",
  },
  {
    title: "Tailwind",
    imageSrc: "/tail.svg",
  },
];

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] ",
    imgClassName: "",
    titleClassName: "",
    img: "/b1.svg",
    spareImg: "",
  },

  {
    id: 2,
    title: "Programming Languages:",
    // description:
    //   "I prioritize client collaboration, fostering open communication ",
    className: "lg:col-span-2 md:col-span-6 md:row-span-2",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    // img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 3,
    title: "Databases:",
    // description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/dbsImg.png",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Template Application",
    des: "Allows a web application to define customizable templates for organizations, enabling each organization to have a unique set of column names. Users can easily change and add new mappings for these templates through an intuitive UI. We can upload csv file in order to add user list in particular company or we can even download the data for particular company in csv format.",
    img: "/templateApp.svg",
    iconLists: [
      "/springBoot.svg",
      "/re.svg",
      "/js.svg",
      "/css.svg",
      "/mongo.svg",
      "/dock.svg",
    ],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Prosoun",
    des: "Music streaming platform which allows users to listen songs based on upvotes given to that song",
    img: "/prosoun.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/prisma.svg",
      "/postgresql.svg",
    ],
    link: "/ui.aiimg.com",
  },
  {
    id: 3,
    title: "E-commerce App",
    des: "System for managing orders, products, and payments that securely connects and communicates with each other.",
    img: "/ecom.png",
    iconLists: [
      "/springBoot.svg",
      "/dock.svg",
      "/k8s.svg",
      "/jenkins.svg",
      "/redis.svg",
      "/mysql.svg",
    ],
    link: "/ui.yoom.com",
  },

  {
    id: 4,
    title: "FarmEasy",
    des: "To make it easier for customer to connect farmer for buying products directly via mobile application.",
    img: "/farmProject.jpeg",
    iconLists: ["/re.svg", "/flutter.svg", "/nodejs.svg", "/firebase.svg"],
    link: "/ui.apple.com",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Flutter Developer Intern - VYAM",
    desc: [
      "Developed Application For Gym Users.",
      "Added features for admin, users, and vendors.",
      "Made easier for admin to intract with users and vendors.",
    ],
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 2,
    title: "Electronics Head - DJS Robocon",
    desc: [
      "Robotics team for DJSCE",
      "Led department of 8 members.",
      "Designed PCB for a robot.",
      "Implemented different applications of microcontrollers.",
    ],
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/Wh0mM1",
  },
  {
    id: 2,
    img: "/twit.svg",
    url: "https://twitter.com/Wh0mM1",
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/nihal-shaikh-4a0818206/",
  },
];
