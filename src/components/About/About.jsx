
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa' 
import {FiUsers} from 'react-icons/fi' 
import {VscNewFolder} from 'react-icons/vsc' 
import './About.scss'

const About = () => {
  return (
    <section id='about' className='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>300+ Worldwide</small>
            </article>
            <article className='about__card'>
              <VscNewFolder className='about__icon'/>
              <h5>Projects</h5>
              <small>100+ Completed</small>
            </article>
          </div>
          <p>Enthusiastic Full Stack Web Developer. <br></br>
           Passionate about learning the ins and outs of Web Technologies and at the same time love to help people grow their businesses through web technologies</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About