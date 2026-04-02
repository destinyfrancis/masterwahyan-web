import { APP_STORE_URL } from '../lib/utils'

const features = [
  'AI 智能八字排盤與解讀',
  '完整十神、格局、用神分析',
  '大運流年互動時間軸',
  '支援廣東話語音輸入',
]

// Sample bazi chart data for mockup
const baziColumns = [
  { label: '時柱', tian: '甲', di: '子' },
  { label: '日柱', tian: '戊', di: '申' },
  { label: '月柱', tian: '壬', di: '午' },
  { label: '年柱', tian: '癸', di: '卯' },
]

export default function AppShowcase() {
  return (
    <section id="app" className="py-24 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-3 font-body font-medium" style={{ color: '#C9A96E' }}>
              MOBILE APP
            </p>
            <h2
              className="text-4xl sm:text-5xl text-foreground"
              style={{ fontFamily: 'Instrument Serif, serif' }}
            >
              Bazi Master Pro
            </h2>
            <p
              className="text-xl mt-2"
              style={{ fontFamily: 'Instrument Serif, serif', color: '#C9A96E' }}
            >
              隨身命理師 · AI 八字分析
            </p>

            <p className="text-muted-foreground text-base leading-relaxed mt-6 font-body">
              Bazi Master Pro 是一款專為命理愛好者及專業師傅設計的 iOS 應用程式。
              結合傳統八字學理與先進 AI 技術，提供精準命盤排列、十神分析及大運流年解讀。
              無論是自學八字還是為客戶提供服務，都是您不可缺少的隨身工具。
            </p>

            <ul className="mt-6 space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-base text-foreground font-body">
                  <span style={{ color: '#C9A96E' }} className="text-lg">✦</span>
                  {f}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-white rounded-full px-8 py-3 text-sm font-body font-medium hover:brightness-110 hover:scale-[1.02] transition-all"
                style={{ backgroundColor: '#C9A96E' }}
              >
                App Store 下載
              </a>
              <a
                href="#faq"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center rounded-full px-8 py-3 text-sm border font-body font-medium hover:bg-gold hover:text-white hover:border-gold transition-all"
                style={{ borderColor: '#C9A96E', color: '#C9A96E' }}
              >
                了解更多功能
              </a>
            </div>
          </div>

          {/* Right — Phone Mockup */}
          <div className="flex justify-center">
            <div
              className="relative group"
              style={{
                transform: 'rotate(3deg)',
                transition: 'transform 0.4s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'rotate(0deg)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'rotate(3deg)')}
            >
              {/* Phone frame */}
              <div
                className="relative overflow-hidden shadow-2xl"
                style={{
                  width: '280px',
                  height: '580px',
                  borderRadius: '40px',
                  border: '2px solid rgba(255,255,255,0.15)',
                  background: 'linear-gradient(160deg, #0A0D1A 0%, #1A1F3A 100%)',
                  boxShadow: '0 30px 80px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.1)',
                }}
              >
                {/* Notch */}
                <div
                  className="mx-auto mt-3 rounded-full"
                  style={{ width: '80px', height: '10px', background: '#000', opacity: 0.6 }}
                />

                {/* Screen content */}
                <div className="px-5 pt-4">
                  {/* App header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-white/60 text-xs font-body">八字命盤</span>
                    <span
                      className="text-xs px-2.5 py-1 rounded-full font-body font-medium"
                      style={{ backgroundColor: '#C9A96E', color: 'white' }}
                    >
                      AI Analysis
                    </span>
                  </div>

                  {/* Bazi chart */}
                  <div
                    className="rounded-2xl p-4 mb-4"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    <p className="text-white/40 text-xs mb-3 font-body text-center tracking-wider">命盤排列</p>
                    <div className="grid grid-cols-4 gap-2">
                      {baziColumns.map((col) => (
                        <div key={col.label} className="flex flex-col items-center gap-1">
                          <div
                            className="w-full rounded-lg py-2 text-center"
                            style={{ background: 'rgba(201,169,110,0.15)', border: '1px solid rgba(201,169,110,0.25)' }}
                          >
                            <span className="text-sm font-medium" style={{ color: '#C9A96E' }}>
                              {col.tian}
                            </span>
                          </div>
                          <div
                            className="w-full rounded-lg py-2 text-center"
                            style={{ background: 'rgba(255,255,255,0.06)' }}
                          >
                            <span className="text-sm text-white/80">{col.di}</span>
                          </div>
                          <span className="text-white/30 text-xs font-body">{col.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Analysis section */}
                  <div
                    className="rounded-2xl p-4"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    <p className="text-white/40 text-xs mb-3 font-body">AI 分析摘要</p>
                    <div className="space-y-2">
                      {['日主：戊土', '格局：正官格', '用神：木火'].map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#C9A96E' }} />
                          <span className="text-white/60 text-xs font-body">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom nav bar simulation */}
                  <div className="flex justify-around mt-5 pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                    {['命盤', '大運', '流年', '設定'].map((item) => (
                      <span key={item} className="text-white/30 text-xs font-body">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
