import Navigation from './components/Navigation'
import ServicesSection from './components/ServicesSection'
import AppShowcase from './components/AppShowcase'
import FAQSection from './components/FAQSection'
import TestimonialsSection from './components/TestimonialsSection'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import HeroStatic from './components/HeroStatic'

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroStatic />
        <ServicesSection />
        <AppShowcase />
        <FAQSection />
        <TestimonialsSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
