import s from './SectionWrapper.module.scss'
import {FC, ReactNode} from "react"

interface Props {
  backgroundColor: 'light' | 'dark'
  children: ReactNode
  backgroundImage?: string
  sectionClass?: string
  link?: string
}

export const SectionWrapper:FC<Props> = ({children, backgroundColor, backgroundImage, sectionClass, link,}) => {

  return (
    <section
      id={link || ''}
      className={s.section + ' ' + s[backgroundColor] + ' ' + (sectionClass || '') }
      style={{backgroundImage: `url(${backgroundImage})`}}
    >
      <div className={s.container}>
        {children}
      </div>
    </section>
  )
}
