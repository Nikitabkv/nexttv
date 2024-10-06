import {Header} from "@/components/Header/ui/Header"
import {SectionWrapper} from "@/components/SectionWrapper/ui/SectionWrapper"
import s from './page.module.scss'

export default function Home() {
  console.log(1)
  return (
    <>
      <SectionWrapper backgroundColor={'dark'} backgroundImage={'/hero-bg.png'} sectionClass={s.hero}>
        <Header />
        <div style={{height: '600px'}}>

        </div>
      </SectionWrapper>
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
