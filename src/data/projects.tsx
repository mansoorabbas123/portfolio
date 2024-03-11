import { v4 as uuid } from "uuid";
import img from "@/assets/images/image.png";
import { IProject } from "@/interfaces";
import m1 from "@/assets/images/g1.jpg";
import slugify from "slugify";

export const Projects: IProject[] = [
  {
    id: uuid(),
    title: "Build a Spotify Connected App",
    startDate: "2002",
    endDate: "2020",
    image: img,
    summary:
      "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
    images: [
      {
        id: uuid(),
        img: m1,
        summary: (
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            quia facere qui asperiores ea rerum voluptatum, natus quasi saepe,
            accusantium sequi, aut mollitia inventore voluptates illum vero
            quidem beatae cum?
          </p>
        ),
      },
      {
        id: uuid(),
        img: m1,
        summary: (
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            quia facere qui asperiores ea rerum voluptatum, natus quasi saepe,
            accusantium sequi, aut mollitia inventore voluptates illum vero
            quidem beatae cum?
          </p>
        ),
      },
      {
        id: uuid(),
        img: m1,
        summary: (
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            quia facere qui asperiores ea rerum voluptatum, natus quasi saepe,
            accusantium sequi, aut mollitia inventore voluptates illum vero
            quidem beatae cum?
          </p>
        ),
      },
    ],
    tasks: [
      {
        id: uuid(),
        text: "Build, style, and ship high-quality websites, design systems",
      },
      {
        id: uuid(),
        text: "Build, style, and ship high-quality websites, design systems",
      },
      {
        id: uuid(),
        text: "Build, style, and ship high-quality websites, design systems",
      },
      {
        id: uuid(),
        text: "Build, style, and ship high-quality websites, design systems",
      },
    ],
    tags: [
      {
        id: uuid(),
        text: "JavaScript",
      },
      {
        id: uuid(),
        text: "HTML",
      },
      {
        id: uuid(),
        text: "Tailwind",
      },
      {
        id: uuid(),
        text: "React",
      },
      {
        id: uuid(),
        text: "TypeScript",
      },
      {
        id: uuid(),
        text: "NodeJs",
      },
      {
        id: uuid(),
        text: "Express",
      },
      {
        id: uuid(),
        text: "MongoDb",
      },
    ],
  },
  {
    id: uuid(),
    title: "Build a Spotify Connected App",
    startDate: "2002",
    endDate: "2020",
    image: img,
    images: [
      {
        id: uuid(),
        img: m1,
        summary: (
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            quia facere qui asperiores ea rerum voluptatum, natus quasi saepe,
            accusantium sequi, aut mollitia inventore voluptates illum vero
            quidem beatae cum?
          </p>
        ),
      },
    ],
    summary:
      "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",

    tasks: [
      {
        id: uuid(),
        text: "Build, style, and ship high-quality websites, design systems",
      },
      {
        id: uuid(),
        text: "Build, style, and ship high-quality websites, design systems",
      },
      {
        id: uuid(),
        text: "Build, style, and ship high-quality websites, design systems",
      },
      {
        id: uuid(),
        text: "Build, style, and ship high-quality websites, design systems",
      },
    ],
    tags: [
      {
        id: uuid(),
        text: "JavaScript",
      },
      {
        id: uuid(),
        text: "HTML",
      },
      {
        id: uuid(),
        text: "Tailwind",
      },
      {
        id: uuid(),
        text: "React",
      },
      {
        id: uuid(),
        text: "TypeScript",
      },
      {
        id: uuid(),
        text: "NodeJs",
      },
      {
        id: uuid(),
        text: "Express",
      },
      {
        id: uuid(),
        text: "MongoDb",
      },
    ],
  },
  {
    id: uuid(),
    title: "Build a Spotify Connected App",
    startDate: "2002",
    endDate: "2020",
    image: img,
    images: [
      {
        id: uuid(),
        img: m1,
        summary: (
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            quia facere qui asperiores ea rerum voluptatum, natus quasi saepe,
            accusantium sequi, aut mollitia inventore voluptates illum vero
            quidem beatae cum?
          </p>
        ),
      },
    ],
    summary:
      "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",

    tasks: [
      {
        id: uuid(),
        text: "Build, style, and ship high-quality websites, design systems",
      },
      {
        id: uuid(),
        text: "Build, style, and ship high-quality websites, design systems",
      },
      {
        id: uuid(),
        text: "Build, style, and ship high-quality websites, design systems",
      },
      {
        id: uuid(),
        text: "Build, style, and ship high-quality websites, design systems",
      },
    ],
    tags: [
      {
        id: uuid(),
        text: "JavaScript",
      },
      {
        id: uuid(),
        text: "HTML",
      },
      {
        id: uuid(),
        text: "Tailwind",
      },
      {
        id: uuid(),
        text: "React",
      },
      {
        id: uuid(),
        text: "TypeScript",
      },
      {
        id: uuid(),
        text: "NodeJs",
      },
      {
        id: uuid(),
        text: "Express",
      },
      {
        id: uuid(),
        text: "MongoDb",
      },
    ],
  },
];

export const getProject = (slug: any) => {
  return Projects.find((el) => slugify(el.title, { lower: true }) == slug);
};
