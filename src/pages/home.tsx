import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { BackToTop } from "@/components/ui/back-to-top";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Publications } from "@/components/sections/publications";

export default function Home() {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden font-sans selection:bg-accent selection:text-accent-foreground">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Publications />
      </main>
      
      <Footer />
      <BackToTop />
    </div>
  );
}
