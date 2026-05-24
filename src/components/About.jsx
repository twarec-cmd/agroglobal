import { motion } from 'framer-motion'
import { Sprout, Globe, Target, Award } from 'lucide-react'
import { useInView } from '../hooks/useInView'

function FadeIn({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView()
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }} className={className}>
      {children}
    </motion.div>
  )
}

const FEATURES = [
  { icon: Globe, title: 'Глобальный охват', desc: 'Представительство в 18 странах на 4 континентах' },
  { icon: Target, title: 'Точность решений', desc: 'IoT-мониторинг и AI-аналитика каждого гектара' },
  { icon: Award, title: 'Международные стандарты', desc: 'Сертификация ISO 22000, GlobalGAP, Organic' },
]

const NUMS = [
  { n: '18', l: 'Стран' }, { n: '500+', l: 'Проектов' },
  { n: '2.5M', l: 'Тонн/год' }, { n: '99.2%', l: 'Качество' },
]

export default function About() {
  return (
    <section id="about" className="py-28 relative">
      <div className="divider" />
      <div className="container mt-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <FadeIn>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[var(--primary)]/10 to-transparent blur-xl" />
              <div className="relative rounded-3xl overflow-hidden glass p-1">
                <div className="rounded-2xl bg-gradient-to-br from-[var(--primary)]/40 to-[var(--card)] aspect-[4/3] flex items-center justify-center">
                  <div className="text-center p-12">
                    <Sprout className="w-20 h-20 text-[var(--accent)] mx-auto mb-6"
                      style={{ animation: 'float 6s ease-in-out infinite' }} />
                    <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto">
                      {NUMS.map(s => (
                        <div key={s.n} className="glass-accent rounded-xl p-3">
                          <div className="text-xl font-bold gold">{s.n}</div>
                          <div className="text-[10px] text-[var(--text-muted)]">{s.l}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <div>
            <FadeIn><div className="badge mb-6">О компании</div></FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                Мы формируем <span className="gold">стандарты</span> агроиндустрии
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-[var(--text-muted)] leading-relaxed mb-10">
                AgroGlobal — вертикально интегрированный агрохолдинг, объединяющий производство, 
                переработку и логистику. Мы применяем технологии точного земледелия, 
                биотехнологии и устойчивые практики для создания продукции мирового уровня.
              </p>
            </FadeIn>

            <div className="space-y-5">
              {FEATURES.map(({ icon: Icon, title, desc }, i) => (
                <FadeIn key={title} delay={0.3 + i * 0.1}>
                  <div className="flex gap-5 glass-accent rounded-2xl p-5 group cursor-default">
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center group-hover:bg-[var(--accent)]/20 transition-colors">
                      <Icon className="w-6 h-6 text-[var(--accent)]" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">{title}</div>
                      <div className="text-sm text-[var(--text-muted)]">{desc}</div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}