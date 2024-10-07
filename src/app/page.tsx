import {Header} from "@/components/Header/ui/Header"
import {SectionWrapper} from "@/components/SectionWrapper/ui/SectionWrapper"
import {HeroSection} from "@/sections/HeroSection/HeroSection"
import {SecondSection} from "@/sections/SecondSection/SecondSection"
import s from './page.module.scss'
import {PartnersSection} from "@/sections/PartnersSection/PartnersSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SecondSection />
      <PartnersSection />
      <SectionWrapper backgroundColor={'light'}>
        <Header />
      </SectionWrapper>
      <SectionWrapper backgroundColor={'dark'}>
        <Header />
      </SectionWrapper>
    </>
  );
}
