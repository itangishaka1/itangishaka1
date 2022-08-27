import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { BsFacebook } from 'react-icons/bs'
import './HeaderSocials.scss'

const HeaderSocials = () => {
  return (
    <div className="socials">
        <a href="https://www.linkedin.com/in/itangishaka/" target='_blank'><BsLinkedin  className='socials__icon' /></a>
        <a href="https://github.com/itangishaka1" target='_blank'><FaGithub className='socials__icon' /></a>
        <a href="https://facebook" target='_blank'><BsFacebook className='socials__icon'  /></a>
    </div>
  )
}

export default HeaderSocials