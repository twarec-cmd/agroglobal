import { motion } from 'framer-motion'
import { Sprout, Truck, BarChart3, Shield, Sun, Users } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { SERVICES } from '../data/content'

function FadeIn({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView()
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }} className={className}>
      {children}
    </motion.div>
  )
}

const ICONS = { Sprout, Truck, BarChart3, Shield, Sun, Users }

export default function Services() {
  return (
    <section id="services" className="py-28 relative">
      <div className="divider" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--primary)]/5 blur-[150px]" />

      <div className="container relative z-10 mt-8">
        <FadeIn className="text-center mb-16">
          <div className="badge mb-6">Услуги</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Комплексные <span className="gold">решения</span>
          </h2>
          <p className="text-[var(--text-muted)] max-w-2xl mx-auto">
            От семени до полки — полный цикл технологий и услуг для современного агробизнеса
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map(({ icon, title, desc, tags }, i) => {
            const Icon = ICONS[icon]
            return (
              <FadeIn key={title} delay={i * 0.1}>
                <div className="glass p-8 h-full group cursor-default">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--accent)]/10 flex items-center justify-center mb-6 group-hover:bg-[var(--accent)]/20 group-hover:scale-110 transition-all duration-300">
                    {Icon && <Icon className="w-7 h-7 text-[var(--accent)]" />}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{title}</h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-5">{desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {tags.map(tag => (
                      <span key={tag} className="text-[10px] font-medium px-3 py-1 rounded-full bg-[var(--primary)]/30 text-[var(--text-muted)]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}