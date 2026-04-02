import { CheckCircle2 } from 'lucide-react'
import { WHATSAPP_URL } from '../lib/utils'

const services = [
  {
    title: '命運簡批問事',
    subtitle: '30分鐘',
    description: '以八字及奇門遁甲解析，提供清晰目前時態及家庭動向，適合感情困惑或人生抉擇，助您洞悉未來走勢。',
    price: 'HK$688',
    includes: [
      '八字及奇門遁甲解析',
      '目前時態及家庭動向',
      '感情困惑或人生抉擇',
      '未來走勢分析',
    ],
    popular: false,
  },
  {
    title: '八字一生大批',
    subtitle: '全面命盤',
    description: '詳細推算一生運程，深入分析性格六親、健康、感情、事業各方面，並規劃未來十年運程。',
    price: 'HK$1688',
    includes: [
      '推算一生運程走勢',
      '分析性格及六親緣份',
      '分析健康狀況及注意年份',
      '折解感情問題',
      '解讀事業發展',
      '詳細未來十年的運程',
    ],
    popular: true,
  },
  {
    title: '婚姻感情分析',
    subtitle: '合盤分析',
    description: '男女雙方八字合盤，深度分析感情現況及走勢，助您了解對象心態、脫單時機及婚姻配對。',
    price: 'HK$800',
    includes: [
      '男女雙方八字二人合盤',
      '心儀對象八字性格分析',
      '奇門遁甲感情現況及走勢',
      '第三者問題分析',
      '未來配偶分析',
      '脫單時機及對象緣份',
      '婚姻狀態及配偶心態',
    ],
    popular: false,
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase mb-3 font-body font-medium" style={{ color: '#C9A96E' }}>
            SERVICES
          </p>
          <h2 className="text-4xl sm:text-5xl text-foreground" style={{ fontFamily: 'Instrument Serif, serif' }}>
            命理服務
          </h2>
          <div className="w-16 h-px mx-auto mt-4" style={{ backgroundColor: '#C9A96E' }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className={`relative bg-white rounded-2xl p-8 shadow-sm flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                service.popular ? 'border-2' : 'border border-border'
              }`}
              style={service.popular ? { borderColor: '#C9A96E' } : {}}
            >
              {service.popular && (
                <span
                  className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full text-white font-body font-medium"
                  style={{ backgroundColor: '#C9A96E' }}
                >
                  最受歡迎
                </span>
              )}
              <h3 className="text-xl text-foreground mb-1" style={{ fontFamily: 'Instrument Serif, serif' }}>
                {service.title}
              </h3>
              <p className="text-xs font-body mb-3" style={{ color: '#C9A96E' }}>{service.subtitle}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow font-body">
                {service.description}
              </p>
              <div className="mb-4">
                <span className="text-4xl" style={{ fontFamily: 'Instrument Serif, serif', color: '#C9A96E' }}>
                  {service.price}
                </span>
              </div>
              <ul className="mb-6 space-y-1.5">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground font-body">
                    <CheckCircle2 size={14} style={{ color: '#C9A96E' }} className="flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center rounded-full py-2.5 text-sm border font-body font-medium transition-all hover:text-white"
                style={{ borderColor: '#C9A96E', color: '#C9A96E' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#C9A96E'; (e.currentTarget as HTMLAnchorElement).style.color = 'white' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = ''; (e.currentTarget as HTMLAnchorElement).style.color = '#C9A96E' }}
              >
                WhatsApp 預約
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-10 font-body">
          客人需提供出生年月日、時間及性別（非香港出生請提供出生地點）· 完成分析後安排通話，可提供錄音服務
        </p>
        <p className="text-center text-sm text-muted-foreground mt-2 font-body">
          💳 付款：香港 PayMe / FPS 轉數快 · 英國銀行轉賬
        </p>
      </div>
    </section>
  )
}
