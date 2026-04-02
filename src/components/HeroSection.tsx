import { Suspense } from 'react'
import { ChevronDown } from 'lucide-react'
import { WHATSAPP_URL } from '../lib/utils'
import SolarSystem from './SolarSystem'
import ErrorBoundary from './ErrorBoundary'

const SolarFallback = () => (
  <div
    className="w-full h-full flex items-center justify-center"
    style={{
      background: 'radial-gradient(ellipse at center, rgba(50,50,100,0.4) 0%, transparent 70%)',
    }}
  >
    <p className="text-white/20 text-sm">Loading solar system…</p>
  </div>
)

export default function HeroSection() {
  const handleScrollDown = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative w-full"
      style={{ backgroundColor: '#0A0D1A' }}
    >
      {/* ── DESKTOP: fullscreen canvas with overlay text ── */}
      <div className="hidden md:block" style={{ height: '100vh', position: 'relative' }}>
        {/* Canvas fills entire hero */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <ErrorBoundary fallback={<SolarFallback />}>
            <Suspense fallback={<SolarFallback />}>
              <SolarSystem />
            </Suspense>
          </ErrorBoundary>
        </div>

        {/* Text overlay — bottom center */}
        <div
          style={{
            position: 'absolute',
            bottom: '80px',
            left: 0,
            right: 0,
            zIndex: 10,
            textAlign: 'center',
            padding: '0 24px',
          }}
        >
          <HeroText />
        </div>

        {/* Scroll indicator */}
        <button
          onClick={handleScrollDown}
          style={{
            position: 'absolute',
            bottom: '24px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 10,
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
          }}
          aria-label="Scroll down"
        >
          <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '11px', letterSpacing: '0.1em', fontFamily: 'Inter, sans-serif' }}>
            向下探索
          </span>
          <ChevronDown className="animate-scroll-bounce" size={18} style={{ color: 'rgba(255,255,255,0.4)' }} />
        </button>
      </div>

      {/* ── MOBILE: canvas top half, text bottom half ── */}
      <div className="md:hidden flex flex-col" style={{ minHeight: '100vh' }}>
        {/* Solar system — 45vh */}
        <div style={{ height: '45vh', position: 'relative', flexShrink: 0 }}>
          <ErrorBoundary fallback={<SolarFallback />}>
            <Suspense fallback={<SolarFallback />}>
              <SolarSystem />
            </Suspense>
          </ErrorBoundary>
        </div>

        {/* Text content below canvas */}
        <div
          className="flex flex-col items-center text-center px-6 py-10"
          style={{ flexGrow: 1 }}
        >
          <HeroText />
        </div>
      </div>
    </section>
  )
}

function HeroText() {
  return (
    <>
      <h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-wider animate-fade-rise"
        style={{
          fontFamily: 'Instrument Serif, serif',
          textShadow: '0 2px 40px rgba(0,0,0,0.9)',
          lineHeight: 1.2,
        }}
      >
        命由天定　運在人為
      </h1>

      <p
        className="text-base sm:text-lg text-white/70 mt-4 animate-fade-rise-delay"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        Master Wahyan · Professional Bazi Consultant
      </p>

      <p
        className="text-sm mt-2 tracking-widest animate-fade-rise-delay-2"
        style={{ color: '#C9A96E', fontFamily: 'Inter, sans-serif' }}
      >
        八字命理 · 婚姻合婚 · 事業財運 · 流年分析
      </p>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 animate-fade-rise-delay-3 inline-flex items-center rounded-full px-10 py-4 text-base text-white hover:brightness-110 hover:scale-[1.03] transition-all"
        style={{
          backgroundColor: '#C9A96E',
          fontFamily: 'Instrument Serif, serif',
        }}
      >
        立即預約咨詢
      </a>
    </>
  )
}
