import './Footer.scss'
import { FaFacebookF, FaTwitterSquare } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="footer">
        <a href="" className="footer__logo">itangishaka.</a>
        <ul className="footer__links">
          <li><a href="#">Home</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="footer__socials">
          <a href=""><FaFacebookF className='footer__socials__icon' /></a>
          <a href=""><BsLinkedin  className='footer__socials__icon'/></a>
          <a href=""><FaTwitterSquare className='footer__socials__icon'  /></a>
        </div>
        <div className="footer__copyright">
          <small>&copy; itangishaka. All rights reserved</small>
        </div>
    </footer>
  )
}

export default Footer