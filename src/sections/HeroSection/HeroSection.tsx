'use client'

import {SectionWrapper} from "@/components/SectionWrapper/ui/SectionWrapper"
import s from "@/sections/HeroSection/HeroSection.module.scss"
import {Header} from "@/components/Header/ui/Header"
import {useState} from "react";

const tabs = {
  1: {
    id: 1,
    title: 'Операторам',
    text: 'Найдите идеальный баланс выручки и удовлетворённости пользователей с платформой рекламной монетизации'
  },
  2: {
    id: 2,
    title: 'ОТТ сервисам',
    text: 'Дополнительные возможности обогащения данных об аудитории и монетизации'
  }
}

export const HeroSection = () => {
  const [activeTab, setActiveTab] = useState(1)

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
            {Object.values(tabs).map((tab) => (
              <button
                key={tab.id}
                className={activeTab === tab.id ? (s.tab + ' ' + s.tabActive) : s.tab}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.title}
              </button>
            ))}
          </div>
          <div className={s.tabContent}>
            {tabs[activeTab as keyof typeof tabs].text}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
