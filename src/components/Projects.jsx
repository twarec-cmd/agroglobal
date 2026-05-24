import { motion } from 'framer-motion'
import { Globe, MapPin } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { PROJECTS } from '../data/content'

function FadeIn({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView()
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }} className={className}>
      {children}
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 relative">
      <div className="divider" />
      <div className="container mt-8">
        <FadeIn className="text-center mb-16">
          <div className="badge mb-6">Проекты</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Наши <span className="gold">проекты</span>
          </h2>
        </FadeIn>

        <div className="grid lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.15}>
              <div className="glass overflow-hidden group cursor-default">
                <div className="aspect-[16/9] bg-gradient-to-br from-[var(--primary)]/50 to-[var(--card)] flex items-center justify-center relative overflow-hidden">
                  <Globe className="w-16 h-16 text-[var(--accent)]/30 group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 right-4">
                    <span className={`text-[10px] font-semibold px-3 py-1 rounded-full ${
                      p.status === 'Активный'
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-[var(--accent)]/20 text-[var(--accent)]'
                    }`}>
                      {p.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">{p.title}</h3>
                  <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] mb-3">
                    <MapPin size={12} /> {p.location}
                  </div>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">{p.desc}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
                    <span className="text-xs text-[var(--text-muted)]">Площадь</span>
                    <span className="text-sm font-semibold gold">{p.area}</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}