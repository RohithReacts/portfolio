import AboutMe from "@/pages/aboutme";
import Avatar from "@/pages/avatars";
import Blog from "@/pages/blog";
import Connect from "@/pages/connect";
import Hero from "@/pages/hero";
import Projects from "@/pages/projects";
import Services from "@/pages/services";
import Skills from "@/pages/skills";
import TemplatesSection from "@/pages/templatessection";
import Testimonials from "@/pages/testimonials";
import Work from "@/pages/work";

export default function Page() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-smooth">
      <section className="space-y-24 py-12">
        <Hero />
        <Projects />
        <TemplatesSection />
        <Avatar />
        <AboutMe />
        <Work />
        <Services/>
        <Blog />
        <Skills/>
        <Testimonials />
        <Connect />
      </section>
    </div>
  );
}
