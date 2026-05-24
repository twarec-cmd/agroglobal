import { motion } from 'framer-motion'
import { Sprout, Globe, Leaf, CheckCircle2 } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { STATS } from '../data/content'

function FadeIn({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView()
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }} className={className}>
      {children}
    </motion.div>
  )
}

const ICONS = { Sprout, Globe, Leaf, CheckCircle2 }

export default function Stats() {
  return (
    <section id="stats" className="py-28 relative">
      <div className="divider" />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary)]/5 to-transparent" />
      <div className="container relative z-10 mt-8">
        <FadeIn className="text-center mb-16">
          <div className="badge mb-6">В цифрах</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Результаты <span className="gold">говорят</span> за нас
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map(({ value, suffix, label, icon }, i) => {
            const Icon = ICONS[icon]
            return (
              <FadeIn key={label} delay={i * 0.1}>
                <div className="glass p-8 text-center group">
                  {Icon && <Icon className="w-8 h-8 text-[var(--accent)] mx-auto mb-4 group-hover:scale-110 transition-transform" />}
                  <div className="text-4xl font-bold mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                    <span className="gold">{value}</span>
                    <span className="text-lg text-[var(--text-muted)]">{suffix}</span>
                  </div>
                  <div className="text-sm text-[var(--text-muted)]">{label}</div>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}