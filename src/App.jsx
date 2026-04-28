import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Hero />
        <br />
        <About />
        <br />
        <br />
        <Projects />
        <Skills />
        <Footer />
      </div>
    </>
  );
}

export default App;
