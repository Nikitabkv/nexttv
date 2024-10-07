import {SectionWrapper} from "@/components/SectionWrapper/ui/SectionWrapper"
import s from "@/sections/HeroSection/HeroSection.module.scss"
import {TabsGroup} from "@/components/TabsGroup/TabsGroup"

export const HeroSection = () => {

  return (
    <SectionWrapper backgroundColor={'dark'} backgroundImage={'/hero-bg.png'} sectionClass={s.hero}>
      <div className={s.heroText}>
        <h3>
          Монетизируйте клиентскую <br/> базу, не снижая NPS
        </h3>
        <h4>
          Найдите идеальный баланс выручки
          <br/>
          и удовлетворённости пользователей с платформой
          <br/>
          рекламной монетизации
        </h4>
      </div>
      <button className={s.heroButton}>
        Заказать звонок
      </button>
      <div className={s.heroDescription}>
        <p>
          Дополнительные источники выручки для разных компаний
        </p>
        <TabsGroup />
      </div>
    </SectionWrapper>
  )
}
