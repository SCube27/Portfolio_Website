import './App.css'
import AboutMe from './Components/AboutMe'
import Home from './Components/Home'
import Navigation from './Components/Navigation'
import Skills from './Components/Skills'
import Work from './Components/Work'

function App() {

  return (
    <>
      <Navigation />
      <section id="home">
        <Home />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <section id="work">
        <Work />
      </section>
    </>
  )
}

export default App
