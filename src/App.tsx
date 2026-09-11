import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutBanner from "./components/AboutBanner";
import Services from "./components/Services";
import Team from "./components/Team";
import Portfolio from "./components/Portfolio";
import CtaAbout from "./components/CtaAbout";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-poppins">
      <Header />
      <main>
        <Hero />
        <AboutBanner />
        <Services />
        <Team />
        <Portfolio />
        <CtaAbout />
      </main>
      <Footer />
    </div>
  );
}

export default App;
