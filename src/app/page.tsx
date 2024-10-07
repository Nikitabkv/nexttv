import {Header} from "@/components/Header/ui/Header"
import {SectionWrapper} from "@/components/SectionWrapper/ui/SectionWrapper"
import {HeroSection} from "@/sections/HeroSection/HeroSection"
import {SecondSection} from "@/sections/SecondSection/SecondSection"
import s from './page.module.scss'
import {PartnersSection} from "@/sections/PartnersSection/PartnersSection";
import {ReportSection} from "@/sections/ReportSection/ReportSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SecondSection />
      <PartnersSection />
      <ReportSection />
      <SectionWrapper backgroundColor={'dark'}>
        <Header />
      </SectionWrapper>
    </>
  );
}
