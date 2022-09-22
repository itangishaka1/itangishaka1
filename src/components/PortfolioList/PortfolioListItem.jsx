import './PortfolioListItem.scss'
import React from 'react'

const PortfolioListItem = ({ id, title, active, setSelected }) => {
  return (
    <li
      className={active ? 'portfolioListItem active' : 'portfolioListItem'}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  )
}

export default PortfolioListItem
