
import './App.css'
import Hero from './components/Hero'
import NavigationDesktop from './components/NavigationDesktop'
import 'bootstrap-icons/font/bootstrap-icons.css'

function App() {

  
  return (
    <>
      <header id="header-navigation-desktop">
        <NavigationDesktop/>
      </header>
      <main>
        <Hero/>
      </main>
      <footer>

      </footer>

    </>
  )
}

export default App
