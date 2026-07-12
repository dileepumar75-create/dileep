import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Journey from "@/components/Journey";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MouseGlow from "@/components/MouseGlow";
import LoadingScreen from "@/components/LoadingScreen";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <LoadingScreen />
      <MouseGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
