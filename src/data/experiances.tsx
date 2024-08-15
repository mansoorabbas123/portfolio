import { IExperience } from "@/interfaces";
import { v4 as uuid } from "uuid";

export const Experiences: IExperience[] = [
  {
    id: uuid(),
    role: "MERN Stack Developer",
    company: "Iplex Pvt. Ltd",
    joinDate: "2022",
    endDate: "Now",
    tasks: [
      {
        id: uuid(),
        text: "Extend functionality of a child care app by integrating analytics, secure role based authentication mechanism (jwt) and profile sharing using mail service.",
      },
      {
        id: uuid(),
        text: "Fixed bugs in five years old legacy Saas based web application without impacting the underlying business logic.",
      },
      {
        id: uuid(),
        text: "Integrated features e.g  order estimation, technician tracking, ticket board for tech team, conference video call in Saas based web application.",
      },
      {
        id: uuid(),
        text: "Designed and implemented a comprehensive MERN stack expense management system for a hostel from inception to delivery. Collaborated with the team to ensure efficient data flow, modular design, and timely completion without compromising quality.",
      },
      {
        id: uuid(),
        text: "Researched and implemented optimal payment methods for subscription services in a project context.",
      },
      {
        id: uuid(),
        text: "Worked on the development of an asset management application for Unreal Engine, integrating JSON generation and storage on AWS S3. Engineered MongoDB integration for scalable data storage and management.",
      },
      {
        id: uuid(),
        text: "Developed scalable backend architecture using Nest.js. Integrated API endpoints for seamless communication with external services.",
      },
    ],
    tags: [
      {
        id: uuid(),
        text: "JavaScript",
      },
      {
        id: uuid(),
        text: "React JS",
      },
      {
        id: uuid(),
        text: "Next JS",
      },
      {
        id: uuid(),
        text: "TypesSCript",
      },
      {
        id: uuid(),
        text: "Tailwind CSS",
      },
      {
        id: uuid(),
        text: "Mantine UI",
      },
      {
        id: uuid(),
        text: "Nest JS",
      },
      {
        id: uuid(),
        text: "MongoDb",
      },
      {
        id: uuid(),
        text: "MySql",
      },
      {
        id: uuid(),
        text: "AWS S3",
      },
    ],
  },
  {
    id: uuid(),
    role: "React Developer",
    company: "InfinityBits",
    joinDate: "2021",
    endDate: "2022",
    tasks: [
      {
        id: uuid(),
        text: "Spearheaded the development of a comprehensive E-commerce Web Application, managing both customer-facing and administrative functionalities from scratch to deployment.",
      },
      {
        id: uuid(),
        text: "Build, style, and ship high-quality websites, design systems",
      },
      {
        id: uuid(),
        text: "Leveraged advanced technologies including React.js, React Router v6, and Redux.js with thunk middleware to craft dynamic user interfaces and ensure efficient state management, enhancing the application's performance and scalability.",
      },
      {
        id: uuid(),
        text: "Successfully integrated Stripe payment gateway for secure and seamless transaction processing, contributing to a smooth user experience and robust financial management",
      },
      {
        id: uuid(),
        text: "Implemented Tailwind CSS to achieve visually appealing and responsive design, showcasing a commitment to delivering high-quality user experiences.",
      },
      {
        id: uuid(),
        text: "Demonstrated proficiency in React hook form for optimized form handling, and adeptly utilized various React npm packages to extend functionality, showcasing a dedication to continuous learning and skill development.",
      },
      {
        id: uuid(),
        text: "Demonstrated adeptness in coordinating and implementing complex functionalities to ensure a seamless user experience across various panels.",
      },
      {
        id: uuid(),
        text: "Successfully integrated PayPal subscriptions, showcasing proficiency in third-party service integration and payment gateway functionality.",
      },
    ],
    tags: [
      {
        id: uuid(),
        text: "JavaScript",
      },
      {
        id: uuid(),
        text: "React JS",
      },
      {
        id: uuid(),
        text: "Material UI",
      },
      {
        id: uuid(),
        text: "Node JS",
      },
      {
        id: uuid(),
        text: "Express.js",
      },
      {
        id: uuid(),
        text: "Express JS",
      },
      {
        id: uuid(),
        text: "MySql",
      },
    ],
  },
];
