import { FunctionComponent } from "react";
import { IconType } from "react-icons";
export interface Service {
  Icon: IconType;
  title: string;
  about: string;
}

export interface Skill {
  Icon: IconType;
  name: string;
  level: string;
}

export interface IProject {
  id:number;
  name: string;
  description: string;
  image_path: string;
  github_url: string;
  deployed_url: string;
  category: Category[];
  key_techs: string[];
}

export type Category = "React.Js" | "Node.Js" | "HTML" | "Vanilla.Js" | "Express.Js" | "Mongo" | "React Native" | "Flutter" | ;
