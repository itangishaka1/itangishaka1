import './MenuItem.scss'


const MenuItem = ({ href, text, setOpenMenu}) => {
  return (
        <li className='menu__item' onClick={() => setOpenMenu(false)}>
            <a  className='menu__link' href={href}>{text}</a>
        </li>
  )
}

export default MenuItem