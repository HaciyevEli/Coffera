import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Features from "./components/Features/Features"
import Menu from "./components/Menu/Menu"
import Choose from "./components/Choose/Choose"
import Stats from "./components/Stats/Stats"
import Gallery from "./components/Gallery/Gallery"
import Offer from "./components/Offer/Offer"
import Team from "./components/Team/Team"
import Reservation from "./components/Reservation/Reservation"
import Testimonials from "./components/Testimonials/Testimonials"
import './App.css'
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <>
     <Header/> 
     <Home/>
     <About/>
     <Features/>
     <Menu/>
     <Choose/>
     <Stats/>
     <Gallery/>
     <Offer/>
     <Team/>
     <Reservation/>
     <Testimonials/>
     <Footer/>
    </>
  )
}

export default App

