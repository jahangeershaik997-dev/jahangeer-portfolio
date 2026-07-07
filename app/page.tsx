import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ImpactStrip from "@/components/ImpactStrip";
import Skills from "@/components/Skills";
import Ecosystem from "@/components/Ecosystem";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CursorWrapper from "@/components/CursorWrapper";

export default function Home() {
  return (
    <>
      <CursorWrapper />
      <Navbar />
      <Hero />
      <ImpactStrip />
      <Skills />
      <Ecosystem />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
