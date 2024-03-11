import { StaticImageData } from "next/image";

export type IconProps = {
  width?: number;
  height?: number;
};

export interface ISocialLink {
  id: any;
  icon: JSX.Element;
  link: string;
}

interface ITask {
  id: any;
  text: string;
}

interface ITag {
  id: any;
  text: string;
}

export interface IImage {
  id: any;
  img: any;
  summary: JSX.Element;
}

export interface IExperience {
  id: any;
  role: string;
  company: string;
  joinDate: string;
  endDate: null | string;
  tasks: ITask[];
  tags: ITag[];
}

export interface IProject {
  id: any;
  title: string;
  startDate: string;
  endDate: string;
  summary: string;
  tasks: ITask[];
  tags: ITag[];
  image: any;
  images: IImage[];
}
