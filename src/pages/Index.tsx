import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Education from "@/components/portfolio/Education";
import Experience from "@/components/portfolio/Experience";
import Contact from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Experience />
      <Contact />
    </div>
  );
};

export default Index;
