import { motion } from 'framer-motion'
import { Sprout, Sun, Droplets, Leaf, TrendingUp, Zap, ArrowRight, ChevronRight } from 'lucide-react'
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

const HERO_STATS = [
  { num: '15+', label: 'лет опыта' },
  { num: '50K', label: 'гектаров' },
  { num: '120+', label: 'партнёров' },
]

const DASHBOARD_ITEMS = [
  { icon: Sun, label: 'Солнечные дни', value: '285' },
  { icon: Droplets, label: 'Орошение', value: '98%' },
  { icon: Leaf, label: 'Эко-стандарт', value: 'A+' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* BG blurs */}
      <div className="absolute top-20 right-10 w-[500px] h-[500px] rounded-full bg-[var(--primary)]/10 blur-[120px]" />
      <div className="absolute bottom-20 left-10 w-[400px] h-[400px] rounded-full bg-[var(--accent)]/5 blur-[100px]" />

      <div className="container relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <FadeIn>
              <div className="badge mb-8">
                <Zap size={14} /> Лидер агроиндустрии с 2010 года
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6"
                  style={{ fontFamily: 'var(--font-display)' }}>
                Будущее <span className="gold">агробизнеса</span><br />начинается здесь
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg text-[var(--text-muted)] max-w-lg mb-10 leading-relaxed">
                Инновационные решения для сельского хозяйства: от умного земледелия до 
                глобальной логистики. Превращаем вызовы в урожай.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <a href="#services" className="btn-primary">
                  Наши решения <ArrowRight size={16} />
                </a>
                <a href="#about" className="btn-secondary">
                  Узнать больше <ChevronRight size={16} />
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex gap-8 mt-14 pt-8 border-t border-[var(--border)]">
                {HERO_STATS.map(s => (
                  <div key={s.num}>
                    <div className="text-2xl font-bold gold" style={{ fontFamily: 'var(--font-display)' }}>{s.num}</div>
                    <div className="text-xs text-[var(--text-muted)] mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Dashboard card */}
          <FadeIn delay={0.3} className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--primary)]/20 to-[var(--accent)]/10 blur-2xl" />
              <div className="relative glass p-10 space-y-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-[var(--text-muted)]">Урожайность 2026</span>
                  <span className="text-sm font-semibold text-[var(--accent)]">+34%</span>
                </div>
                <div className="h-3 bg-[var(--bg)] rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: '82%' }}
                    transition={{ duration: 2, delay: 0.8 }}
                    className="h-full rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)]" />
                </div>
                <div className="grid grid-cols-3 gap-4 mt-6">
                  {DASHBOARD_ITEMS.map(({ icon: Icon, label, value }) => (
                    <div key={label} className="glass-accent rounded-2xl p-4 text-center">
                      <Icon className="w-5 h-5 text-[var(--accent)] mx-auto mb-2" />
                      <div className="text-lg font-bold">{value}</div>
                      <div className="text-[10px] text-[var(--text-muted)]">{label}</div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-3 mt-4 glass-accent rounded-xl p-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--accent)]/20 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-5 h-5 text-[var(--accent)]" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-medium">Рост производства</div>
                    <div className="text-xs text-[var(--text-muted)]">Прогноз на Q4 подтверждён</div>
                  </div>
                  <div className="ml-auto text-sm font-bold text-green-400 shrink-0">↑ 12.4%</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}