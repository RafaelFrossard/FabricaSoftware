import About from "./components/About";
import Areas from "./components/Areas";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Team from "./components/Team";

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
