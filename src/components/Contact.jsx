import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { CONTACTS } from '../data/content'

function FadeIn({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className={className}
      style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(30px)',
        transition: `all 0.6s ${delay}s cubic-bezier(0.25, 0.46, 0.45, 0.94)` }}>
      {children}
    </div>
  )
}

const ICONS = { Phone, Mail, MapPin }

export default function Contact() {
  return (
    <section id="contacts" className="py-28 relative">
      <div className="divider" />
      <div className="container mt-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <FadeIn>
            <div className="badge mb-6">Контакты</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Начните <span className="gold">сотрудничество</span>
            </h2>
            <p className="text-[var(--text-muted)] leading-relaxed mb-10">
              Готовы обсудить ваш проект? Свяжитесь с нами — мы отвечаем в течение 24 часов.
            </p>

            <div className="space-y-6">
              {CONTACTS.map(({ icon, value, sub }) => {
                const Icon = ICONS[icon]
                return (
                  <div key={value} className="flex items-start gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center">
                      {Icon && <Icon className="w-5 h-5 text-[var(--accent)]" />}
                    </div>
                    <div>
                      <div className="font-medium">{value}</div>
                      <div className="text-sm text-[var(--text-muted)]">{sub}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <form className="glass p-8 space-y-5" onSubmit={e => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs text-[var(--text-muted)] mb-2 block">Имя</label>
                  <input type="text" placeholder="Ваше имя" className="input" />
                </div>
                <div>
                  <label className="text-xs text-[var(--text-muted)] mb-2 block">Компания</label>
                  <input type="text" placeholder="Название компании" className="input" />
                </div>
              </div>
              <div>
                <label className="text-xs text-[var(--text-muted)] mb-2 block">Email</label>
                <input type="email" placeholder="email@company.com" className="input" />
              </div>
              <div>
                <label className="text-xs text-[var(--text-muted)] mb-2 block">Сообщение</label>
                <textarea rows="4" placeholder="Расскажите о вашем проекте..." className="input" />
              </div>
              <button type="submit" className="btn-primary w-full justify-center">
                Отправить заявку <ArrowUpRight size={16} />
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}