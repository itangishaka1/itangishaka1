import { useEffect, useRef } from "react"
import { init } from "ityped"
import "./Intro.scss"
import IntroImg from "../../assets/responsive1.png"
import HeaderSocials from "../HeaderSocials/HeaderSocials"
import CTA from "../CTA/CTA"

const Intro = () => {
  const textRef = useRef()
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      strings: ["Web Developer","Frontend Developer"],
    })
  }, [])

  return (
    <section className="intro container" id="intro">
    
      <div className="intro__left">
        <h5 className="intro__hello" >Hello I am</h5>
        <h1 className="intro__names">
          <span className="intro__firstName">Abdullah</span>
          <span className="intro__lastName">Itangishaka</span>
        </h1>
        <h3 className="intro__freelance">
          Freelance  <span className="intro__jobs" ref={textRef}></span>
        </h3>
        <CTA href="#contact" text="Let's Talk" className="intro__btn--animated" />  
        <HeaderSocials />
      </div>
      <div className="intro__right">
        <div className="intro__image-container">
          <img src={IntroImg} alt="responsive" className="intro__img" />
        </div>
        <a href="#contact" className="intro__scroll">
          scroll down
        </a>
      </div>
      
    </section>
  )
}

export default Intro
