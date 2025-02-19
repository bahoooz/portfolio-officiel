import { Metadata } from "next";
import APropos from "../components/HomeComponents/APropos";
import Header from "../components/HomeComponents/Header";
import Portfolio from "../components/HomeComponents/Portfolio";
import Skills from "../components/HomeComponents/Skills";

export const metadata: Metadata = {
  title: "Home - Portfolio Bahoz",
  description:
    "18-year-old Parisian web developer, discover my portfolio and let's work together!",
  icons: {
    icon: "/assets/icon_website.png",
  },
};

export default function HomeEn() {
  return (
    <div className="overflow-x-hidden">
      <Header
        title="Web Developer in Paris"
        age="18 years old"
        citation="Our life is what our thoughts make it."
        author="Marc Aurèle"
        discover_the_rest="Discover the rest"
      />
      <APropos
        title="About me"
        text={
          <>
            Young web developer with{" "}
            <span className="text-lightBrown dark:text-darkYellow">
              1-2 years of experience
            </span>{" "}
            introduced to web development through the “La Toile” training at{" "}
            <span className="text-lightBrown dark:text-darkYellow">
              Emlyon business school
            </span>
            , 4th best French business school. Self-taught at home by following
            numerous tutorials on the internet, I was able to carry out numerous
            personal projects and also by starting{" "}
            <span className="text-lightBrown dark:text-darkYellow">
              freelancing with Fiverr{" "}
            </span>
            I was able to get my first clients and work on more concrete
            projects.
          </>
        }
        btn="Download my CV"
      />
      <Portfolio text="See all projects" />
      <Skills title="My Skills" autres_title="others" />
    </div>
  );
}
