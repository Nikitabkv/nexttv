'use client'
import s from "@/sections/HeroSection/HeroSection.module.scss"
import {useState} from "react"

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

export const TabsGroup = () => {
  const [activeTab, setActiveTab] = useState(1)

  return (
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
  )
}
