import APropos from "./components/HomeComponents/APropos";
import Header from "./components/HomeComponents/Header";
import Portfolio from "./components/HomeComponents/Portfolio";
import Skills from "./components/HomeComponents/Skills";

export default function Home() {
  return (
    <div className="dark:bg-bgColor overflow-x-hidden">
      <Header />
      <APropos />
      <Portfolio />
      <Skills />
    </div>
  );
}
