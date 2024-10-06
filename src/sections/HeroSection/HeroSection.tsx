import {SectionWrapper} from "@/components/SectionWrapper/ui/SectionWrapper"
import s from "@/sections/HeroSection/HeroSection.module.scss"
import {Header} from "@/components/Header/ui/Header";

export const HeroSection = () => {
  return (
    <SectionWrapper backgroundColor={'dark'} backgroundImage={'/hero-bg.png'} sectionClass={s.hero}>
      <Header />
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
        <div className={s.tabsGroup}>
          <div className={s.tabs}>
            <button className={s.tab}>
              Операторам
            </button>
            <button className={s.tab}>
              ОТТ сервисам
            </button>
          </div>
          <div className={s.tabContent}>
            Найдите идеальный баланс выручки и удовлетворённости пользователей с платформой рекламной монетизации
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
