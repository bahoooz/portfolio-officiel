export type Projects = {
  [key: string]: Project;
};

export type Project = {
  title: string;
  enTitle?: string;
  link: string;
  img_primary: string;
  width_img: number;
  height_img: number;
  color_bg: string;
  description: string;
  enDescription?: string;
  technos: string[];
  website_link: string;
};
