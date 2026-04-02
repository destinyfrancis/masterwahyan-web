import { WHATSAPP_URL, INSTAGRAM_URL } from '../lib/utils'

const WHATSAPP_NUMBER = 'wa.me/message/3CH6O4BQWF7CO1'
const INSTAGRAM_HANDLE = 'masterwahyan'

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
  </svg>
)

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const navLinks = [
  { label: '首頁', href: '#hero' },
  { label: '服務收費', href: '#services' },
  { label: 'Bazi Master Pro App', href: '#app' },
  { label: '常見問題', href: '#faq' },
  { label: '客戶回饋', href: '#testimonials' },
]

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer style={{ backgroundColor: '#0A0D1A' }} className="text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1 — Brand */}
          <div>
            <p
              className="text-2xl text-gold"
              style={{ fontFamily: 'Instrument Serif, serif', color: '#C9A96E' }}
            >
              Master Wahyan
            </p>
            <p className="text-sm text-white/60 mt-1 font-body">Bazi Consultant</p>
            <p className="text-sm text-white/50 mt-4 leading-relaxed font-body max-w-xs">
              以傳統八字命理為基礎，結合現代 AI 技術，為您提供精準、務實的命理分析服務。
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white hover:scale-110 transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white hover:scale-110 transition-all"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <p
              className="text-sm tracking-wider mb-5 font-body font-medium"
              style={{ color: '#C9A96E' }}
            >
              快速連結
            </p>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm text-white/60 hover:text-gold transition-colors font-body"
                  style={{ cursor: 'pointer' }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3 — Contact */}
          <div>
            <p
              className="text-sm tracking-wider mb-5 font-body font-medium"
              style={{ color: '#C9A96E' }}
            >
              聯絡方式
            </p>
            <div className="flex flex-col gap-2.5 text-sm text-white/60 font-body">
              <p>WhatsApp: +{WHATSAPP_NUMBER}</p>
              <p>Instagram: @{INSTAGRAM_HANDLE}</p>
              <p>Email: info@masterwahyan.com</p>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block w-full text-center rounded-full px-6 py-3 text-sm border font-body font-medium transition-all hover:bg-gold hover:text-white"
              style={{ borderColor: '#C9A96E', color: '#C9A96E' }}
            >
              WhatsApp 立即咨詢
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-xs text-white/30 font-body">
            © 2025 Master Wahyan · masterwahyan.com · All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
