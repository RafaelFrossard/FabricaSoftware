import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import About from "./components/sections/About";
import Areas from "./components/sections/Areas";
import Contact from "./components/sections/Contact";
import Home from "./components/sections/Home";
import Projects from "./components/sections/Projects";
import Team from "./components/sections/Team";

function App() {
  return (
    <div className="font-poppins">
      <Header />
      <main>
        <Home />
        <About />
        <Areas />
        <Team />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;