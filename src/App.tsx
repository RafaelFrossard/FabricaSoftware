import Header from "./components/Header";
import Hero from "./components/Home";
import AboutBanner from "./components/About";
import Services from "./components/Areas";
import Team from "./components/Team";
import Portfolio from "./components/Projects";
import CtaAbout from "./components/Contact";
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
