import About from "./sections/About";
import Areas from "./sections/Areas";
import Contact from "./sections/Contact";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Team from "./sections/Team";

export default function HomePage() {
  return (
    <>
      <Home />
      <About />
      <Areas />
      <Team />
      <Projects />
      <Contact />
    </>
  )
}