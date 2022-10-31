import { useState } from 'react'
import TopBar from './components/TopBar/TopBar'
import Menu from './components/Menu/Menu'
import Intro from './components/Intro/Intro'
import './App.scss'
import Portfolio from './components/Portfolio/Portfolio'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'

const App = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className='App'>
      <TopBar  openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
