import './App.css'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import Stories from './components/Stories/Stories'
import Updates from './components/Updates/Updates'
import WhyChoose from './components/WhyChoose/WhyChoose'
import Research from './components/Research/Research'
import NewsLife from './components/NewsLife/NewsLife'
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="page">
      <Navbar />
      <main className="content">
        <HeroSection />
        <Stories />
        <Updates />
        <WhyChoose />
        <Research />
        <NewsLife />
        <Testimonials />
        <Footer />
      </main>
    </div>
  )
}

export default App
