import {Header} from "@/components/Header/ui/Header"
import {SectionWrapper} from "@/components/SectionWrapper/ui/SectionWrapper"
import s from './page.module.scss'
import {HeroSection} from "@/sections/HeroSection/HeroSection"

export default function Home() {
  return (
    <>
      <HeroSection />
      <SectionWrapper backgroundColor={'light'}>
        <Header />
      </SectionWrapper>
      <SectionWrapper backgroundColor={'dark'}>
        <Header />
      </SectionWrapper>
      <SectionWrapper backgroundColor={'light'}>
        <Header />
      </SectionWrapper>
      <SectionWrapper backgroundColor={'dark'}>
        <Header />
      </SectionWrapper>
    </>
  );
}
