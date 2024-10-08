import {SectionWrapper} from "@/components/SectionWrapper/ui/SectionWrapper"
import s from './ReportSection.module.scss'

const ReportRows = [
  'Выручка, CTR, показы и другие показатели в реальном времени.',
  'Инструменты контроля качества трафика.',
  'Ежемесячные автоматические отчёты для каждого правообладателя.'
]

export const ReportSection = () => {
  return (
    <SectionWrapper backgroundColor={'light'} backgroundImage={'/report-bg.png'} sectionClass={s.reportSection} link={'how-we-work'}>
      <div className={s.reportWrapper}>
        <h2>
          Подробные отчёты для вас и правообладателей
        </h2>
        {ReportRows.map((row) => (
          <div className={s.reportRow} key={row}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="12" fill="#FF5900"/>
              <path
                d="M7.46967 15.4698C7.17678 15.7627 7.17678 16.2376 7.46967 16.5305C7.76256 16.8233 8.23744 16.8233 8.53033 16.5305L7.46967 15.4698ZM16.75 8.00012C16.75 7.58591 16.4142 7.25012 16 7.25012H9.25C8.83579 7.25012 8.5 7.58591 8.5 8.00012C8.5 8.41434 8.83579 8.75012 9.25 8.75012H15.25V14.7501C15.25 15.1643 15.5858 15.5001 16 15.5001C16.4142 15.5001 16.75 15.1643 16.75 14.7501V8.00012ZM8.53033 16.5305L16.5303 8.53045L15.4697 7.46979L7.46967 15.4698L8.53033 16.5305Z"
                fill="white"/>
            </svg>
            <p>{row}</p>
          </div>
        ))}
        <button className={s.button}>Заказать звонок</button>
      </div>
    </SectionWrapper>
  )
}
