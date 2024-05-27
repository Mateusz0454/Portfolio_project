import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import { About } from './components/About/About'
import { Contact } from './components/Contact/Contact'
import { Exp } from './components/Exp/Exp'
import style from './App.module.css'

function App() {

  return (
    <main className={style.App}> 
      <Navbar />
      <Hero />
      <About />
      <Exp />
      <Contact />
    </main>
  )
}

export default App
