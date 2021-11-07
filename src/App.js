import './App.scss'
import Loader from './components/loader/Loader'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Resume from './components/resume/Resume'
import Portfolio from './components/portfolio/Portfolio'
import CallToAction from './components/cta/CallToAction'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <Loader />
      <Header />
      <Hero />
      <About />
      <Resume />
      <Portfolio />
      <CallToAction />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App
