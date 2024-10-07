import {SectionWrapper} from "@/components/SectionWrapper/ui/SectionWrapper"
import s from './PartnersSection.module.scss'
import Image from "next/image";

const images = [
  '/partners/clickwave.png',
  '/partners/zyphronix.png',
  '/partners/NovaSphere.png',
]

const ResponsiveImage = ({path}: { path: string }) => {

  return (
    <div className={s.imageContainer}>
      <Image layout="fill" className={s.image} src={path} alt={path}/>
    </div>
  )
}

export const PartnersSection = () => {

  return (
    <SectionWrapper backgroundColor={'dark'}>
      <div className={s.partnersWrapper}>
        <h2>Наши партнёры по монетизации</h2>
        <div className={s.partnersLogos}>
          {images.map((image, index) => (
            <ResponsiveImage key={index} path={image} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
