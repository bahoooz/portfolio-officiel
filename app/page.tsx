import APropos from "./components/HomeComponents/APropos";
import Header from "./components/HomeComponents/Header";
import Portfolio from "./components/HomeComponents/Portfolio";
import Skills from "./components/HomeComponents/Skills";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header
        title="Développeur Web à Paris"
        age="18 ans"
        citation="Notre vie est ce qu'en font nos pensées."
        author="Marc Aurèle"
        discover_the_rest="Découvrir la suite"
      />
      <APropos
        title="À propos de moi"
        text="Jeune développeur web avec 1-2 ans d’expérience initié au développement web par la formation “La Toile” de l’emlyon business school 4ème meilleure école de commerce française. Formé en autodidacte à la maison en suivant de nombreux tutoriels sur internet j’ai pu réaliser de nombreux projets personnels et également en commençant le freelancing avec Fiverr j’ai pu me faire mes premiers clients et travailler sur des projets plus concrêts."
        btn="Télécharger mon CV"
      />
      <Portfolio text="Voir tous les projets" />
      <Skills title="Mes Skills" autres_title="autres" />
    </div>
  );
}
