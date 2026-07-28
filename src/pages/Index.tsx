import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Achievements from "@/components/Achievements";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import TerminalWhoami from "@/components/TerminalWhoami";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <CustomCursor />
      <ScrollProgress />
      <Header />
      <Hero />
      <Achievements />
      <Projects />
      <About />
      <Skills />
      <Experience />
      <TerminalWhoami />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
