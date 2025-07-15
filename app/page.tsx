import APropos from "./components/HomeComponents/APropos";
import Header from "./components/HomeComponents/Header";
import Portfolio from "./components/HomeComponents/Portfolio";
import Skills from "./components/HomeComponents/Skills";
import AvisClients from "./components/HomeComponents/AvisClients";
import { homePageMetadata } from "@/lib/metadata/homepage";

export const metadata = homePageMetadata;

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header
        title="Développeur Web à Paris"
        specialty="Full stack & design"
        citation="Notre vie est ce qu'en font nos pensées."
        author="Marc Aurèle"
        discover_the_rest="Découvrir la suite"
      />
      <APropos
        title="À propos de moi"
        text={
          <>
            Développeur web ambitieux avec{" "}
            <span className="text-darkBrown dark:text-darkYellow">
              2 ans d&apos;expérience
            </span>
            , initié au développement web par la formation &quot;La Toile&quot;
            de{" "}
            <span className="text-darkBrown dark:text-darkYellow">
              l&apos;emlyon business school
            </span>{" "}
            4ème meilleure école de commerce française. Formé en autodidacte en
            suivant de nombreux tutoriels sur internet j&apos;ai pu réaliser de
            nombreux projets personnels et également en commençant le{" "}
            <span className="text-darkBrown dark:text-darkYellow">
              freelancing avec Fiverr
            </span>{" "}
            j&apos;ai pu me faire mes premiers clients et travailler sur des
            projets plus concrêts.
          </>
        }
        btn="Télécharger mon CV"
      />
      <Portfolio text="Voir tous les projets" />
      <AvisClients title="Avis clients" text="Voir tous les avis" />
      <Skills title="Mes Skills" autres_title="autres" />
    </div>
  );
}
