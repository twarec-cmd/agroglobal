import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { TESTIMONIAL } from '../data/content'

export default function Testimonial() {
  const [ref, inView] = useInView()
  return (
    <section className="py-28 relative">
      <div className="divider" />
      <div className="container mt-8">
        <motion.div ref={ref}
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}>
          <div className="glass p-10 md:p-16 max-w-4xl mx-auto text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent" />
            <Star className="w-8 h-8 text-[var(--accent)] mx-auto mb-6" />
            <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8"
              style={{ fontFamily: 'var(--font-display)' }}>
              «{TESTIMONIAL.quote}»
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-light)] flex items-center justify-center text-[var(--primary)] font-bold text-sm">
                {TESTIMONIAL.initials}
              </div>
              <div className="text-left">
                <div className="font-semibold">{TESTIMONIAL.author}</div>
                <div className="text-sm text-[var(--text-muted)]">{TESTIMONIAL.role}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}