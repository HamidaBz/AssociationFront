
import './App.css'
import Actualites from './components/Actualites'
import Hero from './components/Hero'
import MainInfo from './components/MainInfo'
import NavigationDesktop from './components/NavigationDesktop'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Story from './components/Story'
import Footer from './components/Footer'

function App() {

  
  return (
    <>
      <header id="header-navigation-desktop">
        <NavigationDesktop/>
      </header>
      <main>
        <Hero/>
        <MainInfo/>
        <Actualites/>
        <Story/>
      </main>
      <footer>
          <Footer/>
      </footer>

    </>
  )
}

export default App
