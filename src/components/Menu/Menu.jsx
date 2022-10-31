import './Menu.scss'
import MenuItem from '../MenuItem/MenuItem'

const Menu = ({ openMenu, setOpenMenu }) => {
  return (
    <div className={'menu ' + (openMenu && "active")}>
        <ul className='menu__list'>
            <MenuItem href="#intro" text="Home"  setOpenMenu={setOpenMenu} />
            <MenuItem href="#experience" text="Experience"  setOpenMenu={setOpenMenu} />
            <MenuItem href="#portfolio" text="Portfolio"  setOpenMenu={setOpenMenu} />
            <MenuItem href="#contact" text="Contact"  setOpenMenu={setOpenMenu} />
        </ul>
    </div>
  )
}

export default Menu