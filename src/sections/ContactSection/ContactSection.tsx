import s from './ContactSection.module.scss'
import {SectionWrapper} from "@/components/SectionWrapper/ui/SectionWrapper"

export const ContactSection = () => {
  return (
    <SectionWrapper backgroundColor={'dark'}>
      <div className={s.formWrapper}>
        <h2>Заполните форму</h2>
        <form className={s.form}>
          <textarea className={s.textInput} placeholder="Напишите свой вопрос"/>
          <div className={s.rightSide}>
            <input className={s.emailInput} type="email" placeholder="Введите e-mail"/>
            <label>
              <input className={s.inputCheckbox} type="checkbox"/>
              <span>
                Я ознакомлен(а) с <a className={s.labelLink}>
                политикой конфиденциальности </a>
                и согласен(на) на обработку <a className={s.labelLink}>
                  персональных данных.
                </a>
              </span>
            </label>
            <button type="submit">Отправить</button>
          </div>
        </form>
      </div>
    </SectionWrapper>
  )
}
