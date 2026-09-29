import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { About } from "@/components/sections/about";
import { Proposals } from "@/components/sections/proposals";
import { Projects } from "@/components/sections/projects";
import { News } from "@/components/sections/news";
import { Gallery } from "@/components/sections/gallery";
import { Agenda } from "@/components/sections/agenda";
import { Testimonials } from "@/components/sections/testimonials";
import { Transparency } from "@/components/sections/transparency";
import { VoiceSection } from "@/components/sections/voice-section";
import { FaqSection } from "@/components/sections/faq-section";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Proposals />
      <Projects />
      <News />
      <Gallery />
      <Agenda />
      <Testimonials />
      <Transparency />
      <VoiceSection />
      <FaqSection />
      <Contact />
    </>
  );
}
