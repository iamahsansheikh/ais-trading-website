import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Products from './components/Products'
import Services from './components/Services'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Gallery />
      <Products />
      <Services />
      <Team />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
