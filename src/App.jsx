import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Projects from './Projects'
import Contact from './Contact'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App