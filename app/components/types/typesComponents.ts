// Global Types

import { ReactElement } from "react";

export type NavbarTypes = {
  get_quote: string;
};

export type FooterTypes = {
  home_link: string;
  find_me_link: string;
};

export type BurgerMenuTypes = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  home_link: string;
  project_galery_link: string;
  findme_link: string;
  contact_link: string;
};

// Home Types

export type HeaderTypes = {
  title: string;
  age: string;
  citation: string;
  author: string;
  discover_the_rest: string;
};

export type AProposTypes = {
  title: string;
  text: ReactElement;
  btn: string;
};

export type PortfolioTypes = {
  text: string;
};

export type MesSkillsTypes = {
  title: string;
  autres_title: string;
};
