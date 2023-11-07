import { IconType } from 'react-icons/lib';

interface ITechnology {
  name: string;
  icon: IconType;
  color: string;
}

export interface IProject {
  id: number;
  title: string;
  field: string;
  content: string;
  technologies: ITechnology[];
  img: string;
  url: string;
}
