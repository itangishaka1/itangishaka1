import { useState } from 'react'
import TopBar from './components/TopBar/TopBar'
import Menu from './components/Menu/Menu'
import Intro from './components/Intro/Intro'
import Try from './components/Try/Try'
import './App.scss'

const App = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className='App'>
      <TopBar  openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <div className="sections">
        <Intro />
        <Try />
      </div>
    </div>
  )
}

export default App
