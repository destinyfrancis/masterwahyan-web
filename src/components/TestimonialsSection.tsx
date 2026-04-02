

const testimonials = [
  {
    initials: 'C',
    text: '好準好準！！好多野都講到好準，準確度高，無論係性格、咩年發生一啲事件都講得啱，唔會多廢話，問一啲 specific 問題都會答到，同埋感覺係真誠想幫人，呢點我覺得好重要。',
    service: '命盤批算',
  },
  {
    initials: 'W',
    text: '頭先多謝你！真係分析得好準確，你由我感情、細個、工作呢幾年所有嘅細節都起碼中咗九成，連我啱啱分手再拍拖都知道。你啲意見好好貼地，亦都一針見血。我定會介紹畀朋友！',
    service: '命盤批算',
  },
  {
    initials: 'S',
    text: '好多謝師傅實言相告，令我對姻緣既方向變成清晰，好過其他師傅——不但講得唔夠具體，仲不停叫人買符買水晶，簡直離譜。遇到你指點迷津，令我有所頓悟。搵你好過搵婚禮輔導😂',
    service: '感情婚姻分析',
  },
  {
    initials: 'F',
    text: 'Francis, 你真係好準好準。之前三月時，你話我要等到九月先有機會搵到工，今個月真係好突然有進展。搵到工就好啦！',
    service: '流年運程',
  },
  {
    initials: 'A',
    text: '你真係講得好岩，樣樣都比你 up 中晒。最犀利係你一早同我講九月尾會有好大衝突，同自己講到時會忍住，點知真係發生應驗咗。你批中佢性格之餘，仲講中佢以前比人帽過，真心好 shocked😂 中意你夠坦白直接！',
    service: '感情分析',
  },
  {
    initials: 'M',
    text: '人生過了一半，你竟然從我八字看到幾個發生咗嘅關鍵位，覺得好神奇。今次再傾，事情更清晰，令我更知道要點做。非常感激，謝謝你🙏',
    service: '命盤批算',
  },
  {
    initials: 'T',
    text: '你真係好準呀！今年年頭你話我公司工作嗰度會有轉變，跟住今日人事部就話要轉合約喇，好彩我都打咗個底先。有料到呀你 👍',
    service: '流年驗證',
  },
  {
    initials: 'K',
    text: '本來帶住懷疑去問下，估唔到第二句就講出我煩緊乜……比起算到個情況，我更覺得大師係心理輔導方面令我更敢去面對困難。第一次接觸奇門，估唔到咁準，感謝你。',
    service: '奇門遁甲',
  },
  {
    initials: 'L',
    text: '超詳細講解，超級耐心講好多野。好勁，講中我結婚年份，仲講得出我出年會生女👍👍👍。阿女出世後都會揾你幫手睇睇命盤😊 我都好幸運透過八字遇到好好嘅人。',
    service: '婚姻 / 生育',
  },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase mb-3 font-body font-medium" style={{ color: '#C9A96E' }}>
            TESTIMONIALS
          </p>
          <h2
            className="text-4xl sm:text-5xl text-foreground"
            style={{ fontFamily: 'Instrument Serif, serif' }}
          >
            客戶回饋
          </h2>
          <div className="w-16 h-px mx-auto mt-4" style={{ backgroundColor: '#C9A96E' }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-sm border border-border flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} style={{ color: '#C9A96E' }}>★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-muted-foreground leading-relaxed font-body flex-grow">
                {t.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-6">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-display text-base flex-shrink-0"
                  style={{ backgroundColor: '#C9A96E', fontFamily: 'Instrument Serif, serif' }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground font-body">匿名客戶</p>
                  <span
                    className="inline-block text-xs px-2.5 py-0.5 rounded-full mt-0.5 font-body"
                    style={{ backgroundColor: 'rgba(201,169,110,0.1)', color: '#C9A96E' }}
                  >
                    {t.service}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
