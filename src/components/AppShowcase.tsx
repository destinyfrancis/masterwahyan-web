import { useEffect, useRef, useState } from 'react'

const baziImages = [
  '/bazi-4.jpg',
  '/bazi-1.jpg',
  '/bazi-2.jpg',
  '/bazi-3.jpg',
  '/bazi-5.jpg',
]

const baziLabels = [
  '命盤排列',
  '智能擇日',
  '檔案管理',
  '換太極',
  '雙盤對比',
]

const baziFeatures = [
  'AI 智能八字排盤與解讀',
  '完整十神、格局、用神分析',
  '大運流年互動時間軸',
  '支援廣東話語音輸入',
]

const soundscribeFeatures = [
  '100% 本地處理 — 您的音訊絕不離開您的 Mac',
  '支援 52 種語言 — 粵語、普通話、英語、日語等',
  '批量處理 — 拖放多個音訊或影片檔案，一次過轉錄',
  '即時聽寫 — 透過麥克風實時語音轉文字',
  '快速預設方案 — 一鍵切換均衡、高精度、快速模式',
  'AI 潤飾 — 接通任意 AI API 進行後處理修正',
  '說話者辨別 — 自動識別多位說話者並標記發言段落',
  '多種匯出格式 — TXT、SRT、VTT、JSON 字幕',
  '雙語介面 — 自動跟隨系統語言切換中英文',
]

const soundscribeUrl = 'https://apps.apple.com/gb/app/soundscribe-ai-transcribe/id6760260471?mt=12'

const soundscribeDescHtml = `
<span>聽得明是一款專為 Mac 設計的強大語音辨認應用程式，採用 Qwen3-ASR 頂尖模型，在多項語音辨認基準測試中名列前茅，完全本地運行，音訊絕不離開您的 Mac。</span>
`.trim()


export default function AppShowcase() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const currentSlideRef = useRef(0)
  const sliderWidth = 400 // 360 + gap-6 (24px)

  // Keep ref in sync with state
  useEffect(() => {
    currentSlideRef.current = currentSlide
  }, [currentSlide])

  // Auto-scroll
  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      const next = (currentSlideRef.current + 1) % baziImages.length
      sliderRef.current?.scrollTo({ left: next * sliderWidth, behavior: 'smooth' })
    }, 3500)
    return () => clearInterval(interval)
  }, [isPaused])

  // Dot click handler
  const goToSlide = (index: number) => {
    sliderRef.current?.scrollTo({ left: index * sliderWidth, behavior: 'smooth' })
    setCurrentSlide(index)
  }

  // Perspective transforms + state sync on scroll
  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return
    let raf = 0
    const onScroll = () => {
      const scrollLeft = slider.scrollLeft
      const slideIndex = Math.round(scrollLeft / sliderWidth)
      if (slideIndex !== currentSlideRef.current) {
        setCurrentSlide(slideIndex)
        currentSlideRef.current = slideIndex
      }
      // Cancel any pending transform update, schedule a fresh one
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const centerX = scrollLeft + slider.clientWidth / 2
        const children = slider.children
        for (let i = 0; i < children.length; i++) {
          const child = children[i] as HTMLElement
          const childX = i * sliderWidth + sliderWidth / 2
          const dist = Math.abs(centerX - childX)
          const maxDist = sliderWidth * 1.5
          if (dist >= maxDist) continue // skip invisible items
          // Smooth easing: center = 1x scale, edges = 0.88x
          const progress = dist / maxDist
          const eased = 1 - (1 - progress) ** 2 // ease-in-out
          const scale = 1 - (1 - eased) * 0.12
          const rotateY = ((centerX - childX) / maxDist) * 4
          const opacity = 0.4 + eased * 0.6
          child.style.transform = `perspective(1200px) rotateY(${rotateY}deg) scale(${scale})`
          child.style.opacity = String(opacity)
          child.style.transition = 'transform 0.15s ease-out, opacity 0.15s ease-out'
        }
      })
    }
    slider.addEventListener('scroll', onScroll, { passive: true })
    // Run once on mount to set initial transform
    onScroll()
    return () => {
      slider.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section id="app" className="py-24 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        {/* App 1: Bazi Master Pro */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase mb-3 font-body font-medium" style={{ color: '#C9A96E' }}>
              MOBILE APP
            </p>
            <h2
              className="text-4xl sm:text-5xl text-foreground"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Bazi Master Pro
            </h2>
            <p
              className="text-xl mt-2"
              style={{ fontFamily: 'Playfair Display, serif', color: '#C9A96E' }}
            >
              隨身命理師 · AI 八字分析
            </p>
          </div>

          {/* Slider */}
          <div
            className="relative"
          >
            {/* Edge fade gradients */}
            <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: 'linear-gradient(90deg, hsl(220 20% 97%), transparent)' }} />
            <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent, hsl(220 20% 97%))' }} />

            <div
              ref={sliderRef}
              className="flex gap-6 overflow-x-auto scroll-smooth"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                padding: '20px 20px',
                margin: '-20px -20px',
                willChange: 'scroll-position',
              }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {baziImages.map((src, i) => (
                <div
                  key={i}
                  className="flex-shrink-0"
                  style={{ width: '360px' }}
                >
                  <div
                    className="overflow-hidden rounded-3xl"
                    style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.12)' }}
                  >
                    <img
                      src={src}
                      alt={`Bazi Master Pro — ${baziLabels[i]}`}
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="text-center text-base mt-4 font-body" style={{ fontFamily: 'Playfair Display, serif', color: '#C9A96E' }}>
                    {baziLabels[i]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center gap-2 mt-6">
            {baziImages.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className="rounded-full transition-all"
                style={{
                  width: currentSlide === i ? '24px' : '8px',
                  height: '8px',
                  backgroundColor: currentSlide === i ? '#C9A96E' : 'rgba(201,169,110,0.3)',
                }}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Features */}
          <ul className="mt-8 space-y-3 max-w-lg mx-auto">
            {baziFeatures.map((f) => (
              <li key={f} className="flex items-center gap-3 text-base text-foreground font-body">
                <span style={{ color: '#C9A96E' }} className="text-lg">✦</span>
                {f}
              </li>
            ))}
          </ul>

          {/* Coming soon */}
          <div className="text-center mt-8">
            <span
              className="inline-flex items-center rounded-full px-6 py-3 text-sm font-body font-medium"
              style={{ backgroundColor: 'rgba(201,169,110,0.15)', color: '#C9A96E' }}
            >
              上架日期待定
            </span>
          </div>
        </div>

        {/* App 2: SoundScribe */}
        <div className="pt-12">
          {/* Section divider */}
          <div className="w-24 h-px mx-auto mb-16" style={{ background: 'linear-gradient(90deg, transparent, #C9A96E, transparent)' }} />
        </div>

        <div>
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase mb-3 font-body font-medium" style={{ color: '#C9A96E' }}>
              DESKTOP APP · MAC
            </p>

            {/* Logo */}
            <img
              src="/soundscribe-logo.png"
              alt="SoundScribe Logo"
              className="mx-auto mb-6"
              style={{ width: '120px', height: '120px', borderRadius: '28px', boxShadow: '0 8px 30px rgba(0,0,0,0.15)' }}
            />

            <h2
              className="text-4xl sm:text-5xl text-foreground"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              聽得明 SoundScribe
            </h2>
            <p
              className="mt-4 text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto font-body"
              dangerouslySetInnerHTML={{ __html: soundscribeDescHtml }}
            />

            {/* Mac App Store Button */}
            <a
              href={soundscribeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-body font-medium transition-all hover:scale-[1.03]"
              style={{ backgroundColor: '#C9A96E', color: 'white' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Mac App Store 下載
            </a>
          </div>

          {/* Screenshot + Features side by side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Screenshot */}
            <div className="flex justify-center">
              <div
                className="overflow-hidden rounded-2xl"
                style={{
                  maxWidth: '520px',
                  boxShadow: '0 30px 80px rgba(0,0,0,0.15), 0 0 0 1px rgba(255,255,255,0.05)',
                }}
              >
                <img
                  src="/soundscribe-screenshot.png"
                  alt="SoundScribe 介面預覽"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Features */}
            <div className="flex flex-col justify-center">
              <h3
                className="text-2xl mb-6"
                style={{ fontFamily: 'Playfair Display, serif', color: '#C9A96E' }}
              >
                主要功能
              </h3>
              <ul className="space-y-4">
                {soundscribeFeatures.map((f, i) => {
                  const [title, ...rest] = f.split('—')
                  return (
                    <li key={f} className="flex items-start gap-3 font-body">
                      <span
                        className="mt-1.5 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs text-white font-bold"
                        style={{ backgroundColor: '#3b82f6', minWidth: '24px' }}
                      >
                        {i + 1}
                      </span>
                      <div>
                        <span className="text-foreground font-medium">{title}</span>
                        {rest.length > 0 && <span className="text-muted-foreground"> —{rest.join('—')}</span>}
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
