import {SectionWrapper} from "@/components/SectionWrapper/ui/SectionWrapper"
import s from './PartnersSection.module.scss'
import Image from "next/image"

export const PartnersSection = () => {
  return (
    <SectionWrapper backgroundColor={'dark'}>
      <div className={s.partnersWrapper}>
        <h2>Наши партнёры по монетизации</h2>
        <div className={s.partnersLogos}>
          <Image src={'/partners/clickwave.png'} width={177} height={55} alt={'ClickWave'} />
          <Image src={'/partners/zyphronix.png'} width={102} height={71} alt={'ClickWave'} />
          <Image src={'/partners/NovaSphere.png'} width={192} height={61} alt={'ClickWave'} />
        </div>
      </div>
    </SectionWrapper>
  );
}
