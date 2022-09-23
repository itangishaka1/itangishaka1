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
        <h1 className="intro__left-title">
          Professional Full Stack Developer & Marketing for Startups
        </h1>
        <span className="intro__left-smallText">
          Focus on running your business, while I focus on growing it.
        </span>
        <a href="#contact" className="intro__left-btn">Contact Me</a>
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
