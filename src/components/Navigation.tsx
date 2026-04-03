import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { WHATSAPP_URL, INSTAGRAM_URL } from '../lib/utils'

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
  </svg>
)

const navLinks = [
  { label: '首頁', href: '#hero' },
  { label: '服務收費', href: '#services' },
  { label: 'App', href: '#app' },
  { label: '常見問題', href: '#faq' },
  { label: '客戶回饋', href: '#testimonials' },
]

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

export default function Navigation() {
  const [isHeroVisible, setIsHeroVisible] = useState(true)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('hero')
    if (!hero) return
    const observer = new IntersectionObserver(
      ([entry]) => setIsHeroVisible(entry.isIntersecting),
      { threshold: 0.1 }
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isHeroVisible
            ? 'liquid-glass text-white'
            : 'bg-white/95 backdrop-blur-md shadow-sm border-b border-border text-foreground'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex flex-col leading-tight"
          >
            <span
              className="font-display text-2xl text-gold tracking-wide"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Master Wahyan
            </span>
            <span
              className={`text-xs font-body mt-0.5 transition-colors ${
                isHeroVisible ? 'text-white/50' : 'text-muted-foreground'
              }`}
            >
              Bazi Consultant
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-body font-medium transition-colors hover:text-gold ${
                  isHeroVisible ? 'text-white' : 'text-[#2a2a3a]'
                }`}
                style={{
                  textShadow: isHeroVisible ? '0 1px 3px rgba(0,0,0,0.5)' : 'none',
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden sm:flex transition-colors hover:text-gold ${
                isHeroVisible ? 'text-white/70' : 'text-muted-foreground'
              }`}
              aria-label="Instagram"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden sm:flex transition-colors hover:text-gold ${
                isHeroVisible ? 'text-white/70' : 'text-muted-foreground'
              }`}
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="w-5 h-5" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center bg-gold text-white rounded-full px-5 py-2 text-sm font-display hover:brightness-110 hover:scale-[1.02] transition-all"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              預約諮詢
            </a>
            <button
              className={`md:hidden transition-colors ${
                isHeroVisible ? 'text-white' : 'text-foreground'
              }`}
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] bg-hero-bg/95 backdrop-blur-md flex flex-col items-center justify-center">
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-2xl font-display text-white hover:text-gold transition-colors"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-gold text-white rounded-full px-10 py-3 text-lg font-display hover:brightness-110 transition-all"
              style={{ fontFamily: 'Playfair Display, serif' }}
              onClick={() => setMobileOpen(false)}
            >
              WhatsApp 預約
            </a>
          </nav>
        </div>
      )}
    </>
  )
}
