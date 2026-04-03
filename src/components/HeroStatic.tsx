import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { WHATSAPP_URL } from '../lib/utils'

// planet: [orbitDiameter, planetSize, color, duration, delayOffset]
const planets: [number, number, string, number, number][] = [
  [280,  8,  '#B5B5B5', 3,  0],     // Mercury
  [400,  14, '#E8C97B', 7,  -2.1],  // Venus
  [540,  16, '#4B9CD3', 10, -4.0],  // Earth
  [700,  12, '#C1440E', 18, -6.5],  // Mars
  [940,  20, '#C88B3A', 35, -15.0], // Jupiter
  [1180, 16, '#E4D191', 70, -30.0], // Saturn
]

const zodiacBranches = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥']

// Enhanced starfield — more stars, more twinkle, more breathing effect
const starField = Array.from({ length: 120 }, (_, i) => {
  const left = ((i * 13.7 + 3) % 100)
  const top = ((i * 17.3 + 7) % 100)
  const size = i % 4 === 0 ? 2.5 : i % 3 === 0 ? 2 : i % 5 === 0 ? 1.5 : 1
  const opacity = i % 4 === 0 ? 0.9 : i % 3 === 0 ? 0.5 : i % 5 === 0 ? 0.3 : 0.15
  const twinkle = i % 3 === 0 ? 'animate-twinkle-fast' : i % 4 === 0 ? 'animate-twinkle-slow' : i % 5 === 0 ? 'animate-twinkle-delayed' : 'animate-twinkle-slow'
  return { left, top, size, opacity, twinkle, id: i }
})

export default function HeroStatic() {
  const contentRef = useRef<HTMLDivElement>(null)

  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    let raf: number
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        setScrollY(window.scrollY)
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  // 5-layer parallax — each layer moves at different speed
  const starOffset = scrollY * -0.05                    // Layer 1: stars (slowest)
  const solarOffset = scrollY * -0.12                   // Layer 2: solar system
  const profileOffset = scrollY * -0.25                 // Layer 3: profile photo
  const titleOffset = scrollY * -0.35                   // Layer 4: titles
  const ctaOffset = scrollY * -0.5                      // Layer 5: CTA (fastest)
  const scrollIndicatorOffset = scrollY * -0.15

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
      {/* Layer 1: Starfield — slowest parallax */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ transform: `translateY(${starOffset}px)` }}
      >
        {starField.map(({ id, left, top, size, opacity, twinkle }) => (
          <div
            key={id}
            className={twinkle || 'animate-twinkle-slow'}
            style={{
              position: 'absolute',
              left: `${left}%`,
              top: `${top}%`,
              width: `${size}px`,
              height: `${size}px`,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.9)',
              opacity,
            }}
          />
        ))}
      </div>

      {/* Layer 2: Solar system — slow parallax */}
      <div
        className="absolute pointer-events-none"
        aria-hidden="true"
        style={{
          top: '50%',
          left: '50%',
          transform: `translate(${-50}%, ${solarOffset}px)`,
          width: 0,
          height: 0,
        }}
      >
        {/* Sun with multi-layer gold glow */}
        <div
          className="animate-sun-pulse"
          style={{
            position: 'absolute',
            width: '60px',
            height: '60px',
            background: 'radial-gradient(circle, #FFF5CC 0%, #FDB813 40%, #E8961E 100%)',
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />

        {/* 12 Zodiac ring */}
        {(() => {
          const radius = 650
          const fontSize = 28
          return zodiacBranches.map((char, i) => {
            const angle = (i * 30 - 90) * (Math.PI / 180)
            const x = Math.cos(angle) * radius
            const y = Math.sin(angle) * radius
            return (
              <div
                key={char}
                style={{
                  position: 'absolute',
                  left: x - fontSize / 2,
                  top: y - fontSize / 2,
                  fontSize,
                  lineHeight: 1,
                  color: 'rgba(201,169,110,0.5)',
                  fontFamily: '"Playfair Display", serif',
                  fontWeight: 600,
                  pointerEvents: 'none',
                }}
              >
                {char}
              </div>
            )
          })
        })()}

        {/* Zodiac ring backdrop circles */}
        <div
          style={{
            position: 'absolute',
            width: '1300px',
            height: '1300px',
            top: '-650px',
            left: '-650px',
            borderRadius: '50%',
            border: '1px solid rgba(201,169,110,0.08)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: '1260px',
            height: '1260px',
            top: '-630px',
            left: '-630px',
            borderRadius: '50%',
            border: '1px solid rgba(201,169,110,0.05)',
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
                  border: '1px solid rgba(255,255,255,0.08)',
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
                {/* Planet dot */}
                <div
                  style={{
                    position: 'absolute',
                    width: `${r}px`,
                    height: `${r}px`,
                    background: color,
                    borderRadius: '50%',
                    top: `-${halfR}px`,
                    left: `calc(50% - ${halfR}px)`,
                    boxShadow: `0 0 8px ${color}60`,
                  }}
                />
              </div>
            </div>
          )
        })}
      </div>

      {/* Content area — layers 3, 4, 5 */}
      <div
        ref={contentRef}
        className="relative z-10 flex flex-col items-center justify-center w-full"
        style={{
          minHeight: '100vh',
          willChange: 'transform',
        }}
      >
        {/* Layer 3: Profile photo — medium parallax */}
        <div
          className="mb-8 animate-fade-rise"
          style={{
            transform: `translateY(${profileOffset}px)`,
            willChange: 'transform',
          }}
        >
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

        {/* Layer 4: Titles — medium-fast parallax */}
        <div
          style={{
            transform: `translateY(${titleOffset}px)`,
            willChange: 'transform',
          }}
        >
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-wider animate-fade-rise-delay"
            style={{
              fontFamily: '"Playfair Display", serif',
              textShadow: '0 2px 40px rgba(0,0,0,0.9)',
              lineHeight: 1.2,
            }}
          >
            命由天定 運在人為
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
        </div>

        {/* Layer 5: CTA — fastest parallax */}
        <div
          className="animate-fade-rise-delay-3"
          style={{
            marginTop: '2rem',
            transform: `translateY(${ctaOffset}px)`,
            willChange: 'transform',
          }}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full px-10 py-4 text-base text-white hover:brightness-110 hover:scale-[1.03] transition-all"
            style={{
              backgroundColor: '#C9A96E',
              fontFamily: '"Playfair Display", serif',
            }}
          >
            立即預約諮詢
          </a>
        </div>
      </div>

      {/* Scroll indicator — medium parallax */}
      <button
        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-6 left-1/2 z-10 flex flex-col items-center gap-1 bg-transparent border-0 cursor-pointer"
        aria-label="Scroll down"
        style={{
          transform: `translateX(-50%) translateY(${scrollIndicatorOffset}px)`,
          willChange: 'transform',
        }}
      >
        <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '11px', letterSpacing: '0.1em', fontFamily: 'Inter, sans-serif' }}>
          向下探索
        </span>
        <ChevronDown className="animate-scroll-bounce" size={18} style={{ color: 'rgba(255,255,255,0.4)' }} />
      </button>
    </section>
  )
}
