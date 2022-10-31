import './Intro.scss'
import IntroImg from '../../assets/responsive1.png'
import HeaderSocials from '../HeaderSocials/HeaderSocials'

const Intro = () => {
  return (
    <section className='intro container' id='intro'>
      <div className='intro__left'>
        <h1 className='intro__left-title'>Professional Full Stack Developer</h1>
        <span className='intro__left-smallText'>
          A website or Web App should be a solution - not a problem.
        </span>
        <a href='#contact' className='intro__left-btn'>
          Contact Me
        </a>
        <HeaderSocials />
      </div>
      <div className='intro__right'>
        <div className='intro__image-container'>
          <img src={IntroImg} alt='responsive' className='intro__img' />
        </div>
        <a href='#contact' className='intro__scroll'>
          scroll down
        </a>
      </div>
    </section>
  )
}

export default Intro
