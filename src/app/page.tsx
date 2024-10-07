import {HeroSection} from "@/sections/HeroSection/HeroSection"
import {SecondSection} from "@/sections/SecondSection/SecondSection"
import {PartnersSection} from "@/sections/PartnersSection/PartnersSection"
import {ReportSection} from "@/sections/ReportSection/ReportSection"
import {ContactSection} from "@/sections/ContactSection/ContactSection"

export default function Home() {
  return (
    <>
      <HeroSection />
      <SecondSection />
      <PartnersSection />
      <ReportSection />
      <ContactSection />
    </>
  );
}
