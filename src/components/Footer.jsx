import { Sprout, Clock } from 'lucide-react'
import { FOOTER_LINKS } from '../data/content'

export default function Footer() {
  return (
    <footer className="py-16 border-t border-[var(--border)]">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--accent)] to-[var(--accent-light)] flex items-center justify-center">
                <Sprout className="w-5 h-5 text-[var(--primary)]" />
              </div>
              <span className="text-xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                Agro<span className="gold">Global</span>
              </span>
            </div>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              Инновации в агросекторе с 2010 года. Устойчивое развитие, технологии, результат.
            </p>
          </div>

          {FOOTER_LINKS.map(col => (
            <div key={col.title}>
              <h4 className="font-semibold mb-4 text-sm">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-[var(--border)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--text-muted)]">
            © 2026 AgroGlobal. Все права защищены.
          </p>
          <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
            <Clock size={12} /> <span>Алматы, GMT+6</span>
          </div>
        </div>
      </div>
    </footer>
  )
}