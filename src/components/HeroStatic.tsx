import { ChevronDown } from 'lucide-react'
import { WHATSAPP_URL } from '../lib/utils'

// planet: [orbitDiameter, planetSize, color, duration, delayOffset]
const planets: [number, number, string, number, number][] = [
  [130,  5,  '#B5B5B5', 3,  0],     // Mercury
  [190,  6,  '#E8C97B', 7,  -2.1],  // Venus
  [260,  6,  '#4B9CD3', 12, -4.0],  // Earth
  [340,  5,  '#C1440E', 20, -6.5],  // Mars
  [440,  10, '#C88B3A', 45, -15.0], // Jupiter
  [550,  9,  '#E4D191', 90, -30.0], // Saturn
]

export default function HeroStatic() {
  return (
    <section
      id="hero"
      className="relative w-full flex flex-col items-center justify-center text-center px-6 overflow-hidden"
      style={{
        minHeight: '100vh',
        backgroundColor: '#0A0D1A',
        backgroundImage: `radial-gradient(ellipse at 20% 50%, rgba(50,40,80,0.5) 0%, transparent 60%),
                          radial-gradient(ellipse at 80% 20%, rgba(30,50,80,0.4) 0%, transparent 50%)`,
      }}
    >
      {/* Star dots */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 10% 15%, rgba(255,255,255,0.6) 0%, transparent 100%),
            radial-gradient(1px 1px at 25% 40%, rgba(255,255,255,0.5) 0%, transparent 100%),
            radial-gradient(1px 1px at 40% 8%,  rgba(255,255,255,0.7) 0%, transparent 100%),
            radial-gradient(1px 1px at 55% 30%, rgba(255,255,255,0.4) 0%, transparent 100%),
            radial-gradient(1px 1px at 70% 12%, rgba(255,255,255,0.6) 0%, transparent 100%),
            radial-gradient(1px 1px at 85% 45%, rgba(255,255,255,0.5) 0%, transparent 100%),
            radial-gradient(1px 1px at 15% 65%, rgba(255,255,255,0.4) 0%, transparent 100%),
            radial-gradient(1px 1px at 30% 80%, rgba(255,255,255,0.6) 0%, transparent 100%),
            radial-gradient(1.5px 1.5px at 60% 70%, rgba(255,255,255,0.8) 0%, transparent 100%),
            radial-gradient(1.5px 1.5px at 90% 60%, rgba(255,255,255,0.7) 0%, transparent 100%)
          `,
        }}
      />

      {/* CSS Solar System */}
      <div
        className="absolute pointer-events-none"
        aria-hidden="true"
        style={{ top: '50%', left: '50%', width: 0, height: 0 }}
      >
        {/* Sun */}
        <div
          style={{
            position: 'absolute',
            width: '14px',
            height: '14px',
            background: '#FDB813',
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
            boxShadow: '0 0 20px rgba(253,184,19,0.8), 0 0 40px rgba(253,184,19,0.4)',
          }}
        />

        {/* Orbit rings + planets */}
        {planets.map(([d, r, color, duration, delay]) => {
          const half = d / 2
          const halfR = r / 2
          return (
            <div key={d}>
              {/* Static orbit ring */}
              <div
                style={{
                  position: 'absolute',
                  width: `${d}px`,
                  height: `${d}px`,
                  top: `-${half}px`,
                  left: `-${half}px`,
                  borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              />
              {/* Rotating planet wrapper */}
              <div
                style={{
                  position: 'absolute',
                  width: `${d}px`,
                  height: `${d}px`,
                  top: `-${half}px`,
                  left: `-${half}px`,
                  borderRadius: '50%',
                  animation: `orbit-spin ${duration}s linear infinite`,
                  animationDelay: `${delay}s`,
                  willChange: 'transform',
                }}
              >
                {/* Planet dot at the top of orbit */}
                <div
                  style={{
                    position: 'absolute',
                    width: `${r}px`,
                    height: `${r}px`,
                    background: color,
                    borderRadius: '50%',
                    top: `-${halfR}px`,
                    left: `calc(50% - ${halfR}px)`,
                    boxShadow: `0 0 6px ${color}80`,
                  }}
                />
              </div>
            </div>
          )
        })}
      </div>

      {/* Text content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Profile Image */}
        <div className="mb-8 animate-fade-rise">
          <img
            src="/profile.jpg"
            alt="Master Wahyan"
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover shadow-lg"
            style={{
              boxShadow: '0 0 30px rgba(201,169,110,0.3), inset 0 0 20px rgba(255,255,255,0.1)',
              border: '2px solid rgba(201,169,110,0.5)',
            }}
          />
        </div>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-wider animate-fade-rise-delay"
          style={{
            fontFamily: 'Instrument Serif, serif',
            textShadow: '0 2px 40px rgba(0,0,0,0.9)',
            lineHeight: 1.2,
          }}
        >
          命由天定　運在人為
        </h1>

        <p
          className="text-base sm:text-lg text-white/70 mt-4 animate-fade-rise-delay-2"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Master Wahyan · Professional Bazi Consultant
        </p>

        <p
          className="text-sm mt-2 tracking-widest animate-fade-rise-delay-3"
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
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 bg-transparent border-0 cursor-pointer"
        aria-label="Scroll down"
      >
        <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '11px', letterSpacing: '0.1em', fontFamily: 'Inter, sans-serif' }}>
          向下探索
        </span>
        <ChevronDown className="animate-scroll-bounce" size={18} style={{ color: 'rgba(255,255,255,0.4)' }} />
      </button>
    </section>
  )
}
