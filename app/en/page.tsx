import { Metadata } from "next";
import APropos from "../components/HomeComponents/APropos";
import Header from "../components/HomeComponents/Header";
import Portfolio from "../components/HomeComponents/Portfolio";
import Skills from "../components/HomeComponents/Skills";
import AvisClients from "../components/HomeComponents/AvisClients";

export const metadata: Metadata = {
  title: "Home - Portfolio Bahoz",
  description:
    "19-year-old Parisian web developer, discover my portfolio and let's work together!",
  icons: {
    icon: "/assets/icon_website.png",
  },
};

export default function HomeEn() {
  return (
    <div className="overflow-x-hidden">
      <Header
        title="Web Developer in Paris"
        specialty="Full stack & design"
        citation="Our life is what our thoughts make it."
        author="Marc Aurèle"
        discover_the_rest="Discover the rest"
      />
      <APropos
        title="About me"
        text={
          <>
            Ambitious web developer with{" "}
            <span className="text-lightBrown dark:text-darkYellow">
              2 years of experience
            </span>,{" "}
            introduced to web development through the &quot;La Toile&quot; training at{" "}
            <span className="text-lightBrown dark:text-darkYellow">
              Emlyon business school
            </span>{" "}
            4th best French business school. Self-taught by following numerous tutorials on the internet, I was able to
            carry out numerous personal projects and also by starting{" "}
            <span className="text-lightBrown dark:text-darkYellow">
              freelancing with Fiverr
            </span>{" "}
            I was able to get my first clients and work on more concrete
            projects.
          </>
        }
        btn="Download my CV"
      />
      <Portfolio text="See all projects" />
      <AvisClients title="Customer reviews" text="See all reviews" />
      <Skills title="My Skills" autres_title="others" />
    </div>
  );
}
