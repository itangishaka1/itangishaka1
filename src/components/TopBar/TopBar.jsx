import './TopBar.scss'
import { BsWhatsapp } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

const TopBar = ({ openMenu, setOpenMenu }) => {
  return (
    <div className={'topBar ' + (openMenu && 'active')}>
      <div className="topBar__wrapper container">
        <div className="topBar__left">
          <a href="#intro" className="topBar__logo">Itangishaka.</a>
          <a href="https://api.whatsapp.com/send?phone=14373459921" target="_blank" className="topBar__contact">
            <BsWhatsapp className='topBar__icon'/>
            <span>+1 (437) 345-9921</span>
          </a>
          <a href="mailto:abdullah@gmail.com" target="_blank" className="topBar__contact">
            <AiOutlineMail className='topBar__icon'/>
            <span>abdullah@gmail.com</span>
          </a>
        </div>
        <div className="topBar__right">
          <div className="topBar__hamburger" onClick={() => setOpenMenu(!openMenu)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar