import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: '八字咨詢需要提供甚麼資料？',
    a: '您只需提供出生年、月、日及時辰（如知道的話）。越準確的出生時間，命盤分析越精準。若不確定出生時辰，可先告知，師傅會以校正方式協助推算。',
  },
  {
    q: '咨詢以甚麼方式進行？',
    a: '所有咨詢均以 WhatsApp 視像通話或語音通話形式進行，方便全球客戶。咨詢後會提供錄音及 PDF 報告供您留存。',
  },
  {
    q: '八字命理是迷信嗎？',
    a: '八字命理學是中國流傳逾千年的傳統學問，以出生時間的天干地支為基礎，分析一個人的先天稟賦與後天運勢。它不是迷信，而是一套有系統的人生分析工具。',
  },
  {
    q: '咨詢結果準確嗎？',
    a: '八字分析的準確性取決於命盤資訊的精確度及師傅的經驗。師傅擁有多年研究及實際咨詢經驗，會以客觀、務實的態度為您分析，並提供具體可行的建議。',
  },
  {
    q: '合婚分析需要兩人同時在場嗎？',
    a: '不需要。合婚分析只需提供雙方的出生日期及時辰即可，無需兩人同時在場。',
  },
  {
    q: '咨詢費用如何支付？',
    a: '接受 PayPal、銀行轉帳（英國 BACS）及 FPS（香港）付款。預約確認後提供付款詳情，建議提前支付以鎖定時段。',
  },
  {
    q: '可以代查家人的八字嗎？',
    a: '可以。您可以代為查詢家人的命盤，只需提供其出生資料即可。',
  },
  {
    q: '流年分析每年都需要做嗎？',
    a: '建議每年太歲交替（農曆新年前後）做一次流年分析，了解當年運勢走向，提前做好準備及部署。',
  },
  {
    q: '如何預約咨詢？',
    a: '直接點擊頁面的「WhatsApp 預約」按鈕，或透過 WhatsApp 聯絡師傅，告知所需服務及方便時間，師傅會盡快回覆確認。',
  },
  {
    q: '如果對分析結果有疑問，可以再提問嗎？',
    a: '可以。咨詢後如有任何疑問，可於 7 天內透過 WhatsApp 提問，師傅會為您解答。',
  },
]

function AccordionItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-border">
      <button
        className="w-full flex items-center justify-between py-5 text-left group bg-transparent cursor-pointer"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span
          className="text-base font-medium font-body transition-colors"
          style={{ color: isOpen ? '#C9A96E' : undefined }}
        >
          {q}
        </span>
        <ChevronDown
          size={18}
          className="flex-shrink-0 ml-4 transition-transform duration-300"
          style={{
            color: '#C9A96E',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </button>
      {isOpen && (
        <p className="pb-5 text-sm text-muted-foreground leading-relaxed font-body">{a}</p>
      )}
    </div>
  )
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 px-6 bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase mb-3 font-body font-medium" style={{ color: '#C9A96E' }}>
            FAQ
          </p>
          <h2 className="text-4xl sm:text-5xl text-foreground" style={{ fontFamily: 'Instrument Serif, serif' }}>
            常見問題
          </h2>
          <div className="w-16 h-px mx-auto mt-4" style={{ backgroundColor: '#C9A96E' }} />
        </div>

        <div>
          {faqs.map((item, i) => (
            <AccordionItem
              key={i}
              q={item.q}
              a={item.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
