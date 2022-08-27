import "./CTA.scss"

import React from "react"

const CTA = ({ href, text, className }) => {
  return (
      <a
        href={href}
        className={"intro__btn intro__btn--white "+ {className}}
      >
        {text}
      </a>
    
  )
}

export default CTA
